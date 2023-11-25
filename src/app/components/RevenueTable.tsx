/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { CSSProperties, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../_metronic/helpers'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { CloseOutlined, DeleteOutline } from '@mui/icons-material'
import ApplicationFormView from './ApplicationFormView'
import ConfirmationModal from './ConfirmationModal'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WalletFormView from './WalletFormView'
import { toast } from 'react-toastify'
import axiosInstance from '../helpers/axiosInstance'
import Papa from 'papaparse';
import { Tooltip } from 'react-bootstrap';

type Props = {
  className: string
  title: String,
  data: any[];
  loading: Boolean
}
const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s, visibility 0.3s',
};

const activeOverlayStyle: CSSProperties = {
  opacity: 1,
  visibility: 'visible',
};
const contentStyle: CSSProperties = {
  backgroundColor: '#fff', // Background color for highlighting
  padding: '10px', // Adjust padding as needed
  borderRadius: '5px', // Rounded corners for the highlight
  // textAlign:'center',
  width: '70%',
  height: '70%',
  overflowY: 'auto'
};
function convertToCSV(data) {
  const csv = Papa.unparse(data);
  return csv;
}




const RevenueTable: React.FC<Props> = ({ className, title, data, loading }) => {
  const formatDate1 = (dateString) => {
    // Create a Date object from the input date string
    const date = new Date(dateString)

    // Get the month name as a three-letter abbreviation (e.g., "Oct")
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const month = monthNames[date.getMonth()]

    // Get the day and year
    const day = date.getDate()
    const year = date.getFullYear()

    // Format the date string
    return `${month} ${day}, ${year}`
  }

  // const [currentPage, setCurrentPage] = useState(1);
  // const entriesPerPage = 5;

  // const indexOfLastEntry = currentPage * entriesPerPage;
  // const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  // const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  // const paginate = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteSelectedItem, setDeleteSelectedItem] = useState(null);

  const [filter, setFilter] = useState('all')

  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((row: Record<string, string>) =>
  Object.values(row).some(
    (value) =>
      value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
);
  const handleDownloadCSVRevenueTable = () => {
    const csvData = convertToCSV(data);

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revenue_table.csv';
  
    a.click();
    URL.revokeObjectURL(url);
  }


  
  const handleFilterClick = (filterType) => {
    setFilter(filterType)
  }
  return (
    <div style={{boxShadow:"none"}} className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 style={{marginLeft:"10px"}} className='card-title align-items-center flex-row'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
        </h3>
        
        <div className=' d-flex gap-4 flex-row p-4 dropdown mx-5'>
        <button
        style={{

          fontWeight: '600',
          right: '6%',
          padding: '5px 18px',
          backgroundColor: 'transparent',
          color: 'black',
          borderRadius: '10px',
          border: '1px solid #327113',
          zIndex: 1,
          width:"150px"
        }}
        onClick={handleDownloadCSVRevenueTable}
      >
        Download CSV
      </button>

          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchTerm}
            style={{
              border: '1.5px solid #d3d3d3',
              borderRadius: '10px', 
              padding: '10px',
              paddingLeft: '20px',
              width: '70%',
              boxSizing: 'border-box',
              }}
            />

        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div style={{borderRadius:"10px", border:"1px solid #327113"}} className='table-responsive'>
          {/* begin::Table */}
          {loading ?
            <div style={{ height: 300, overflowX: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <span className='indicator-progress' style={{ display: 'block' }}>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            </div>
            :
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead style={{ background: '#327113', color: "#fff" }}>
                <tr className='fw-bold'>
                  <th style={{paddingLeft:"5%"}}  className='min-w-80px text-start'>Date</th>
                  <th className='min-w-80px text-center'>Id/Name</th>
                  <th className='min-w-80px text-center'>Merchant ID</th>
                  <th className='min-w-80px text-center'>Provider</th>
                  
                  {/* <th className='min-w-80px text-center'>Visa Cost</th> */}
                  <th className='min-w-80px text-center'>Paid</th>
                  <th className='min-w-80px text-center'>Recieved</th>
                  <th className='min-w-80px text-center'>Margin</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
              {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td className='text-center'>
                      {/* Avatar and Name */}
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-45px me-5'>
                          {/* <img src={row.photo} alt='' /> */}
                        </div>
                        <div className='d-flex justify-content-center flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {formatDate1(row.transaction_time)}
                            
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className='text-center'>
                      {/* Date */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.application_no}{/* Application Number */}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6' 
                          title={`${row.name} 
${row.id}`}>
                        {row.name}
                      </a>
                    </td>

                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        Atlys{/* Margin */}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.paid}{/* Time of Transaction */}
                      </a>
                    </td>
                    
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.receive}{/* Time of Transaction */}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.revenue}{/* Time of Transaction */}
                      </a>
                    </td>
                  </tr>
                ))}

              </tbody>
              {/* end::Table body */}
            </table>
          }
          {/* end::Table */}
          {/* Pagination */}
          {/* <div className='pagination'>
            {[...Array(Math.ceil(data.length / entriesPerPage))].map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div> */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
      
    </div>
  )
}

export { RevenueTable }
