/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../_metronic/helpers'

type Props = {
  className: string,
  title: String,
  show: (value: boolean) => void;
}

const data = [
  {
    name: 'Ana Simmons',
    avatarUrl: '/media/avatars/300-14.jpg',
    date: '01/09/2023',
    location1: 'India',
    location2: 'UAE',
    status: 'In-process',
  },
  {
    name: 'Ana Simmons',
    avatarUrl: '/media/avatars/300-14.jpg',
    date: '01/09/2023',
    location1: 'India',
    location2: 'UAE',
    status: 'In-process',
  },
  {
    name: 'Ana Simmons',
    avatarUrl: '/media/avatars/300-14.jpg',
    date: '01/09/2023',
    location1: 'India',
    location2: 'UAE',
    status: 'In-process',
  },
  {
    name: 'Ana Simmons',
    avatarUrl: '/media/avatars/300-14.jpg',
    date: '01/09/2023',
    location1: 'India',
    location2: 'UAE',
    status: 'In-process',
  },
  {
    name: 'Ana Simmons',
    avatarUrl: '/media/avatars/300-14.jpg',
    date: '01/09/2023',
    location1: 'India',
    location2: 'UAE',
    status: 'In-process',
  },
]

const VisaTable: React.FC<Props> = ({className,title,show}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-center flex-row'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
        </h3>
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
                
                <th className='min-w-150px'>Visa</th>
                <th className='min-w-140px'>Entry</th>
                <th className='min-w-120px'>Validity</th>
                <th className='min-w-100px'>Duration</th>
                <th className='min-w-120px'>Processing Time</th>
                <th className='min-w-120px'>Price</th>
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
                      
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.name}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    {/* Date */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      Single
                    </a>
                  </td>
                  <td>
                    {/* Location 1 */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      15 days
                    </a>
                  </td>
                  <td>
                    {/* Location 2 */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      15 days
                    </a>
                  </td>
                  <td>
                    {/* Status */}
                    <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      4 Business days
                    </span>
                  </td>
                  
                  <td>
                    {/* Status */}
                    <span className='text-dark fw-bold text-hover-primary d-block fs-6'>
                    ₹ 3000/-
                    </span>
                  </td>
                  <td>
                    {/* Action Buttons */}
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <button type='submit' onClick={()=>show(true)} className='btn btn-primary'>
                    Select
                </button>
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

export {VisaTable}
