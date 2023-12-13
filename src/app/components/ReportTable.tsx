import React, { CSSProperties, useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import Papa from 'papaparse';
import moment from 'moment'
import { toast } from 'react-toastify'
import axiosInstance from '../helpers/axiosInstance'
import img from '../../_metronic/assets/card/report3.jpg'

type Props = {
  className: string
  title: String,
  data: any[];
  loading: Boolean
}

const ReportTable: React.FC<Props> = ({ className, title, data, loading }) => {
  const [searchVisible, setSearchVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [issueDate, setIssueDate] = useState<string | undefined>('');
  const [expiryDate, setExpiryDate] = useState<string | undefined>('');
  const [filteredData, setFilteredData] = useState(data as any[]);
  const [datePickerDisabled, setDatePickerDisabled] = useState(true);
  const [downloadCSVDisabled, setDownloadCSVDisabled] = useState(true);
  const [remainingBalance, setRemainingBalance] = useState("");

  const handleDatePickerChange = (value: any) => {
    if (value && value.length === 2) {
      const startDate = value[0]?.isValid() ? value[0].format('YYYY-MM-DD') : '';
      const endDate = value[1]?.isValid() ? value[1].format('YYYY-MM-DD') : '';
      const filtered = (data as any[]).filter((item) => {
        const transactionDate = item.created_at.split(' ')[0];
        return transactionDate >= startDate && transactionDate <= endDate;
      });
      setIssueDate(startDate);
      setExpiryDate(endDate);
      setFilteredData(filtered);
      console.log('Filtered Data:', filtered);
      setDatePickerDisabled(false);
    } else {
      setFilteredData(data as any[]);
      setDatePickerDisabled(true);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.post('/backend/fetch_transaction_by_merchant', {
        merchant_email_id: searchTerm,
      });
      if (response.status === 200) {
        const searchData = response.data.data || [];
        const searchDataa = response.data || [];
        console.log('ye hai bidu',response.data.data)
        setFilteredData(searchData);
        setRemainingBalance(response.data.remaining_balance); // Set remaining balance
        // console.log('yo hoya', searchDataa)
        setSearchVisible(false); // Hide search after successful search
        setVisible(true); // Show the table
        setDatePickerDisabled(false);
        setDownloadCSVDisabled(false);
      } else {
        console.error('Error fetching data:', response.data);
      }
    } catch (error) {
      console.error('API error:', error);
    }
  };

  const handleCancel = () => {
    setSearchVisible(true);
    setVisible(false);
    setSearchTerm('');
    setDatePickerDisabled(true);
    setDownloadCSVDisabled(true);
  };

  useEffect(() => {
    setDatePickerDisabled(true);
    setDownloadCSVDisabled(true);
  }, []);

  useEffect(() => {
    setFilteredData(data as any[]);
    setDatePickerDisabled(false);
  }, [data]);

  const handleDownloadCSVReportTable = () => {
    const csvData = convertToCSV(filteredData);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wallet_report.csv';

    a.click();
    URL.revokeObjectURL(url);
  };

  function convertToCSV(data: any) {
    const csv = Papa.unparse(data);
    return csv;
  }
  
  const getFilteredData = () => {
    if (filter === 'waitingForApproval') {
      return data.filter((item) => item.status === 'In-processed')
    } if (filter === 'history') {
      return data.filter((item) => item.status != 'In-processed')
    }else {
      return data
    }
  }

  const handleFilterClick = (filterType) => {
    setFilter(filterType)
  }

  return (
    <div style={{ boxShadow: 'none' }} className={`card ${className}`}>
    {/* begin::Header */}
    <div className='card-header border-0 pt-5'>
      <h3 style={{ marginLeft: '10px' }} className='card-title align-items-center flex-row'>
        <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
      </h3>
      {visible && (
        <>
          <div className='fv-row' style={{ position: 'relative', right: '0%' }}>
            <DatePicker.RangePicker
              style={{
                backgroundClip: '#fff',
                width: 400,
                marginTop: 11,
                border: '1px solid #808080',
                borderRadius: 10,
                padding: 10,
              }}
              onChange={handleDatePickerChange}
              disabled={datePickerDisabled}
            />
          </div>
          <div style={{ gap: '10px', padding: '10px 0px' }} className='dropdown d-flex g-3'>
            <button
              style={{
                fontWeight: '600',
                right: '0%',
                padding: '12px 5px',
                backgroundColor: 'transparent',
                color: 'black',
                borderRadius: '10px',
                border: '1px solid #327113',
                zIndex: 1,
                width: '135px',
              }}
              onClick={handleDownloadCSVReportTable}
              disabled={downloadCSVDisabled}
            >
              Download CSV
            </button>
          </div>
        </>
      )}
    </div>
    {/* end::Header */}
    {/* begin::Body */}
    {/* shuru */}

      {searchVisible && (
        <div style={{ gap: '10px', display: 'flex', flexDirection:"column" , marginTop:"40px" , justifyContent:"center", alignItems:"center", height:"50vh" }}>
          <img style={{height:"700px", width:"700px", borderRadius:"20px"}} src={img} alt="" />
          <div style={{display:"flex", gap:"20px"}} >
            <input
              type='text'
              placeholder={`Enter Merchant's email...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '8px 15px',
                fontSize:"14px",
                border: '1px solid #808080',
                borderRadius: '10px',
                width: '350px',
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                fontWeight: '500',
                backgroundColor: '#327113',
                color: 'white',
                padding:"5px 20px",
                fontSize:"16px",
                borderRadius: '10px',
                border: '1px solid #327113',
                zIndex: 1,
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}
    {/* khtm */}
    {visible && (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-between"}} > 
            <h1 style={{marginTop:"40px", fontSize:"18px", fontWeight:"500"}} >Remaining Balance : <span style={{fontSize:"18px", color:"#327113", fontWeight:"600", marginLeft:"10px"}}>₹{remainingBalance}</span></h1>
            <button
              onClick={handleCancel}
              style={{
                fontWeight: '600',
                backgroundColor: '#d9534f',
                color: 'white',
                width:"250px",
                marginTop:"20px",
                padding:"10px 15px",
                borderRadius: '10px',
                border: '1px solid #d9534f',
                zIndex: 1,
                cursor: 'pointer',
              }}
            >
              Search for another
            </button>
            
          </div>
      <table className='table align-middle gs-10 mt-5'>
        {/* begin::Table head */}
        <thead>
          <tr style={{ background: '#f2f2f2', color: '#000', border: '1px solid #000' }} className='fw-bold'>
            <th className='min-w-100px'>Date/Time</th>
            <th className='min-w-100px'>Particular</th>
            <th className='min-w-100px'>Status</th>
            <th className='min-w-100px'>Credit</th>
            <th className='min-w-100px'>Debit</th>
            <th className='min-w-100px'>Wallet</th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid #cccccc' }}>
          {filteredData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className='text-start'>
                <a href='#' className='text-dark text-hover-primary mb-1 fs-6 '>
                  {item && moment(item.created_at).format('DD MMM YYYY hh:mm a')}
                </a>
              </td>
                    <td className='text-start'>
                      <span className='text-dark d-block fs-6'>
                        {item && item.category}
                      </span>
                    </td>
                    <td className='text-start'>
                      <span className='text-dark fw-semibold d-block fs-6'>
                        {item && item.status}
                      </span>
                    </td>
                    <td className='text-start'>
                      {item && item.type === 'Credit' ? (
                        <span className='text-dark d-block fs-6'>₹ {item.wallet_balance}/-</span>
                      ) : "-"}
                    </td>
                    <td className='text-start'>
                      {item && item.type === 'Debit' ? (
                        <span className='text-dark d-block fs-6'>₹ {item.wallet_balance}/-</span>
                      ) : "-"}
                    </td>
                    <td className='text-start'>
                      <span className='text-dark d-block fs-6'>
                        {item && item.remaining_balance}
                      </span>
                    </td>
                  </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};


export { ReportTable }
