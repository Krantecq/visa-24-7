/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon, toAbsoluteUrl } from '../../_metronic/helpers'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { CloseOutlined, DeleteOutline } from '@mui/icons-material'

type Props = {
  className: string
  title: String,
  data: any[];
}



const ProcessedTable: React.FC<Props> = ({ className, title, data }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-center flex-row'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
          <span className='fs-6 text-gray-400 fw-bold'>{title == 'VISA' && '30 days'}</span>
        </h3>
        {title == 'VISA' && (
          <div className='d-flex flex-wrap my-2'>
            <div className='me-4'>
              <select
                name='status'
                data-control='select2'
                data-hide-search='true'
                className='form-select form-select-sm form-select-white w-125px'
                defaultValue='30 Days'
              >
                <option value='30 Days'>30 Days</option>
                <option value='Approved'>In Progress</option>
                <option value='Declined'>To Do</option>
                <option value='In Progress'>Completed</option>
              </select>
            </div>
          </div>
        )}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>

                <th className='min-w-150px'>Customers</th>
                <th className='min-w-140px'>Application Arrival Date</th>
                <th className='min-w-120px'>Application Departure Date</th>
                <th className='min-w-100px'>Visa Amount</th>
                <th className='min-w-100px'>Visa Status</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>
                    {/* Avatar and Name */}
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={row.photo} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.first_name}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    {/* Date */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      {row.application_arrival_date}
                    </a>
                  </td>
                  <td>
                    {/* Location 1 */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      {row.application_departure_date}
                    </a>
                  </td>
                  <td>
                    {/* Location 2 */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      {row.visa_amount}
                    </a>
                  </td>
                  <td>
                    {/* Status */}
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      {row.visa_status}
                    </span>
                  </td>
                  <td>
                    {/* Action Buttons */}
                    <div className='d-flex align-items-center flex-shrink-0'>

                      <VisibilityIcon className='mx-5 cursor-pointer' />

                      <DeleteOutline onClick={() => {
                        const confirmed = window.confirm('Are you sure you want to delete this item?');
                        if (confirmed) {
                          // Laxit write here for delete api 
                        }
                      }} className='mx-5 cursor-pointer' />
                      <button className='btn btn-primary align-self-center'>Approv</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { ProcessedTable }
