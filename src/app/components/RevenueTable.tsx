import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import Papa from 'papaparse';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type Props = {
  className: string;
  title: string;
  data: any[];
  loading: boolean;
};

function convertToCSV(data: any) {
  const csv = Papa.unparse(data);
  return csv;
}

const RevenueTable: React.FC<Props> = ({ className, title, data, loading }) => {
  console.log(data);
  const formatDate1 = (dateString: string) => {
    const date = new Date(dateString);

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
    ];
    const month = monthNames[date.getMonth()];

    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteSelectedItem, setDeleteSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [issueDate, setIssueDate] = useState<string | undefined>('');
  const [expiryDate, setExpiryDate] = useState<string | undefined>('');
  const [filteredData, setFilteredData] = useState(data as any[]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = (data as any[]).filter((item) =>
      Object.entries(item).some(
        ([key, value]) =>
          value && (value as any).toString().toLowerCase().includes(term)
      )
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(data as any[]);
  }, [data]);

  const handleDownloadCSVRevenueTable = () => {
    const csvData = convertToCSV(filteredData);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revenue_table.csv';

    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ boxShadow: 'none' }} className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 style={{ marginLeft: '10px' }} className='card-title align-items-center flex-row'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
        </h3>
        <div className='fv-row w-25' style={{ position: 'relative', right: '4%' }}>
          <DatePicker.RangePicker
            style={{
              backgroundClip: '#fff',
              width: 400,
              marginTop: 11,
              border: '2px solid #e5e5e5',
              borderRadius: 10,
              padding: 10,
            }}
            onChange={(value) => {
              if (value && value.length === 2) {
                const startDate = value[0]?.isValid() ? value[0].format('YYYY-MM-DD') : '';
                const endDate = value[1]?.isValid() ? value[1].format('YYYY-MM-DD') : '';
                const filtered = (data as any[]).filter((item) => {
                  const transactionDate = item.transaction_time.split(' ')[0];
                  return transactionDate >= startDate && transactionDate <= endDate;
                });
                setIssueDate(startDate);
                setExpiryDate(endDate);
                setFilteredData(filtered);
              }
            }}
          />
        </div>
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
              width: '150px',
            }}
            onClick={handleDownloadCSVRevenueTable}
          >
            Download CSV
          </button>

          <input
            type='text'
            placeholder='Search...'
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
        <div style={{ borderRadius: '10px', border: '1px solid #327113' }} className='table-responsive'>
          {/* begin::Table */}
          {loading ? (
            <div
              style={{
                height: 300,
                overflowX: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <span className='indicator-progress' style={{ display: 'block' }}>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            </div>
          ) : (
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead style={{ background: '#327113', color: '#fff' }}>
                <tr className='fw-bold'>
                  <th style={{ paddingLeft: '4%' }} className='min-w-80px text-start'>
                    Date
                  </th>
                  <th className='min-w-80px text-center'>Application No.</th>
                  <th className='min-w-80px text-center'>Merchant ID</th>
                  <th className='min-w-80px text-center'>Provider</th>
                  <th className='min-w-80px text-center'>Paid</th>
                  <th className='min-w-80px text-center'>Received</th>
                  <th style={{ paddingRight: '10px' }} className='min-w-80px text-center'>
                    Margin
                  </th>
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
                        <div className='symbol symbol-45px me-5'>{/* <img src={row.photo} alt='' /> */}</div>
                        <div className='d-flex justify-content-center flex-column'>
                          <a className='text-dark fw-bold text-hover-primary fs-6'>
                            {formatDate1(row.transaction_time)}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className='text-center'>
                      {/* Date */}
                      <a className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.application_no}
                      </a>
                    </td>
                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip id={`tooltip-${index}`}
                      >{`Name - ${row.name} 
                      `}</Tooltip>}

                    >
                      <td className='text-center'>
                        {/* Location 1 */}
                        <a
                          className='text-dark fw-bold text-hover-primary d-block fs-6'
                        >
                          {row.id}
                        </a>
                      </td>
                    </OverlayTrigger>

                    <td className='text-center'>
                      {/* Location 1 */}
                      <a className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        Atlys{/* Margin */}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.paid}
                      </a>
                    </td>

                    <td className='text-center'>
                      {/* Location 1 */}
                      <a className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.receive}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {row.revenue}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* end::Table body */}
            </table>
          )}
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { RevenueTable };
