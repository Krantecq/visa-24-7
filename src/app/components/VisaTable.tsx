/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon, toAbsoluteUrl } from '../../_metronic/helpers'
import { ApplyVisa } from './ApplyVisa';

type Props = {
  className: string,
  title: String,
  show: (value: boolean) => void;
  visaList : boolean;
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

const VisaTable: React.FC<Props> = ({ className, title, show,visaList }) => {
  return (
    <div style={{backgroundColor:'#fff'}} className='w-full'>
      <ApplyVisa visaList={visaList} show={show} />
      {/* Visa card 1 */}
      <div className='card-body'>
        <div className='w-full m-7' style={{
          borderRadius: 20, borderColor: '#f5f5f5',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{ backgroundColor: '#0095E8', width: '100%', height: 50, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingLeft: 20,alignItems:'center',display:'flex' }}>
            <h2 style={{ color: 'white' }}>
              Indian 1 year E-Visa
            </h2>
          </div>
          <h3 style={{ color: '#000', margin: 10,marginLeft:15, }}>
            Guaranteed visa on 10th Oct
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15, marginTop: 10 }}>
            <div style={{ width: '70%' }} className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-gray-500 align-middle gs-0 gy-4'>
                <thead style={{ backgroundColor: '#f7f7f7' }}>
                  <tr className='fw-bold text-dark'>
                    <th style={{paddingLeft:10}} className='min-w-140px'>Entry</th>
                    <th className='min-w-120px'>Validity</th>
                    <th className='min-w-100px'>Duration</th>
                    <th className='min-w-120px'>Processing Time</th>
                    <th className='min-w-120px'>Price</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  <tr>

                    <td style={{paddingLeft:10}}>
                      {/* Date */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        Single
                      </a>
                    </td>
                    <td>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        15 days
                      </a>
                    </td>
                    <td>
                      {/* Location 2 */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        15 days
                      </a>
                    </td>
                    <td>
                      {/* Status */}
                      <span className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        4 Business days
                      </span>
                    </td>

                    <td>
                      {/* Status */}
                      <span className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        ₹ 3000/-
                      </span>
                    </td>
                    <td>
                      {/* Action Buttons */}

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='d-flex justify-content-end' style={{ width: 110, height: 45, margin: 20 }}>
              <button type='submit' style={{ width: '100%', height: '100%' }} onClick={() => show(true)} className='btn btn-primary'>
                Select
              </button>
            </div>
          </div>
        </div>
        {/* end::Table container */}
      </div>
      {/* Visa card 2 */}
      <div className='card-body'>
        <div className='w-full m-7' style={{
          borderRadius: 20, borderColor: '#f5f5f5',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{ backgroundColor: '#0095E8', width: '100%', height: 50, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingLeft: 20,alignItems:'center',display:'flex' }}>
            <h2 style={{ color: 'white' }}>
              Indian 1 year E-Visa
            </h2>
          </div>
          <h3 style={{ color: '#000', margin: 10,marginLeft:15, }}>
            Guaranteed visa on 10th Oct
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15, marginTop: 10 }}>
            <div style={{ width: '70%' }} className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-gray-500 align-middle gs-0 gy-4'>
                <thead style={{ backgroundColor: '#f7f7f7' }}>
                  <tr className='fw-bold text-dark'>
                    <th style={{paddingLeft:10}} className='min-w-140px'>Entry</th>
                    <th className='min-w-120px'>Validity</th>
                    <th className='min-w-100px'>Duration</th>
                    <th className='min-w-120px'>Processing Time</th>
                    <th className='min-w-120px'>Price</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  <tr>

                    <td style={{paddingLeft:10}}>
                      {/* Date */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        Single
                      </a>
                    </td>
                    <td>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        15 days
                      </a>
                    </td>
                    <td>
                      {/* Location 2 */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        15 days
                      </a>
                    </td>
                    <td>
                      {/* Status */}
                      <span className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        4 Business days
                      </span>
                    </td>

                    <td>
                      {/* Status */}
                      <span className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        ₹ 3000/-
                      </span>
                    </td>
                    <td>
                      {/* Action Buttons */}

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='d-flex justify-content-end' style={{ width: 110, height: 45, margin: 20 }}>
              <button type='submit' style={{ width: '100%', height: '100%' }} onClick={() => show(true)} className='btn btn-primary'>
                Select
              </button>
            </div>
          </div>
        </div>
        {/* end::Table container */}
      </div>
      
    </div>
  )
}

export { VisaTable }
