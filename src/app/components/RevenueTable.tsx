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

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteSelectedItem, setDeleteSelectedItem] = useState(null);

  const [filter, setFilter] = useState('all')

  const [open, setOpen] = React.useState(false);
  


  
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
        <div className='dropdown mx-5'>
        <button
        style={{
          position: 'absolute',
          top: '20%',
          fontWeight: '600',
          right: '6%',
          padding: '10px 18px',
          backgroundColor: 'transparent',
          color: 'black',
          borderRadius: '10px',
          border: '1px solid #327113',
          zIndex: 1,
          width:"150px"
        }}
      >
        Download CSV
      </button>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div style={{borderRadius:"30px", border:"1px solid #327113"}} className='table-responsive'>
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

                  <th style={{paddingLeft:"5%"}} className='min-w-100px text-start'>Name</th>
                  <th className='min-w-150px text-center'>Application No.</th>
                  <th className='min-w-150px text-center'>Transaction Time</th>
                  <th className='min-w-150px text-center'>Customer Type</th>
                  <th className='min-w-150px text-center'>Admin Margin</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {data.map((row, index) => (

                  <tr>
                    <td className='text-center'>
                      {/* Avatar and Name */}
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-45px me-5'>
                          {/* <img src={row.photo} alt='' /> */}
                        </div>
                        <div className='d-flex justify-content-center flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                            {row.name}{/* Name */}
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
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {formatDate1(row.transaction_time)}{/* Customer Type */}
                      </a>
                    </td>

                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.customer_type}{/* Margin */}
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
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
      
    </div>
  )
}

export { RevenueTable }
