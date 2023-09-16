/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../_metronic/helpers'
import { Link } from 'react-router-dom'

type Props = {
  className: string
  data: any[];
}

const MemberStatsTable: React.FC<Props> = ({className,data}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Member Statistics</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>3 New Member</span>
        </h3>
        <div>
        <button className='btn btn-warning align-self-center mx-3'>Waiting For Approval</button>
        <Link to={'/add-new-merchant'}>
        <button className='btn btn-primary align-self-center'>Add new Merchant</button>
        </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_6_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-2 gy-3'>
                {/* begin::Table head */}
                <thead className='px-2' style={{background: '#F9F9F9'}}>
                  <tr className='fw-bold text-muted'>
                    <th className='min-w-150px'>Agent</th>
                    <th className='min-w-150px'>Wallet Balance</th>
                    <th className='min-w-150px'>No. Of Visa</th>
                    <th className='min-w-150px text-start'>Company</th>
                    <th className='min-w-150px text-end'>Joining Date</th>
                    <th className='min-w-150px text-end'>API KEY</th>
                    <th className='min-w-150px text-end'>Action</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className='d-flex flex-row align-items-center symbol symbol-50px me-2'>
                          <span className='symbol-label'>
                            <img
                              src={item.merchant_profile_photo}
                              alt={item.merchant_profile_photo}
                              className='h-75 align-self-end'
                            />
                          </span>
                          <a
                            href='#'
                            className='text-dark fw-bold text-hover-primary mb-1 fs-6'
                            style={{ whiteSpace: 'nowrap', paddingLeft: '5px', paddingTop: '5px' }}
                          >
                            {item.merchant_name}
                          </a>
                        </div>
                      </td>
                      <td className='text-start'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6 '>
                          {item.wallet_balance}
                        </a>
                      </td>
                      <td className='text-start'>
                        <span className='text-dark fw-bold d-block fs-5'>{item.numberOfVisa}</span>
                      </td>
                      <td className='text-start'>
                        <span className='text-dark fw-bold d-block fs-5'>{item.company}</span>
                        <span className='text-muted fw-semibold d-block fs-7 '>{item.merchant_company_name}</span>
                      </td>
                      <td className='text-end'>
                        <span className='text-muted fw-semibold d-block fs-7'>{item.created_at}</span>
                      </td>
                      <td className='text-end'>
                        <span className='text-muted fw-semibold d-block fs-7'>{item.merchant_api_key}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_6_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/018-girl-9.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-semibold d-block'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$1,200,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-warning fs-7 fw-bold'>+52%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-semibold d-block'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$3,400,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-success fs-7 fw-bold'>-34%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block'>Successful Fellas</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$200,500</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-primary fs-7 fw-bold'>+28%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_6_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                  <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-120px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/047-girl-25.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-semibold d-block'>HTML, CSS Coding</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$1,200,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-danger fs-7 fw-bold'>+52%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-semibold d-block'>UI/UX Designer</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$3,400,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-success fs-7 fw-bold'>-34%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/043-boy-18.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Kevin Leonard
                      </a>
                      <span className='text-muted fw-semibold d-block'>Art Director</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$35,600,000</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-info fs-7 fw-bold'>+230%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-50px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                            className='h-75 align-self-end'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block'>Successful Fellas</span>
                    </td>
                    <td>
                      <span className='text-muted fw-semibold d-block fs-7'>Paid</span>
                      <span className='text-dark fw-bold d-block fs-5'>$200,500</span>
                    </td>
                    <td className='text-end'>
                      <span className='text-primary fs-7 fw-bold'>+28%</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MemberStatsTable}
