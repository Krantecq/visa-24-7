import React, { useState, CSSProperties } from 'react';
import { KTIcon, toAbsoluteUrl } from '../../_metronic/helpers';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MerchantView from './MerchantView';
import { CloseOutlined, DeleteOutline } from '@mui/icons-material';
import axiosInstance from '../helpers/axiosInstance';
import toast, { Toaster } from 'react-hot-toast';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import moment from 'moment';
import { FcInfo } from 'react-icons/fc';
import { FcFullTrash } from 'react-icons/fc';
import Pagination from 'react-bootstrap/Pagination';

type Props = {
  className: string;
  data: any[];
  loading: boolean;
};


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
}

const activeOverlayStyle: CSSProperties = {
  opacity: 1,
  visibility: 'visible',
}
const contentStyle: CSSProperties = {
  backgroundColor: '#fff', 
  padding: '10px',
  borderRadius: '5px',
  width: '70%',
  height: '70%',
  overflowY: 'auto',
}

const itemsPerPage = 10; // Adjust as needed

const calculateTotalPages = (filteredData: any[]) => {
  const totalItems = filteredData.length;
  return Math.ceil(totalItems / itemsPerPage);
};

const MemberStatsTable: React.FC<Props> = ({ className, data, loading }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const getFilteredData = () => {
    // Your existing filter logic
    if (filter === 'waitingForApproval') {
      return data.filter((item) => item.merchant_approved === false);
    } else {
      return data; // Show all items by default
    }
  };

  const filteredData = getFilteredData();

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const handleFilterClick = (filterType) => {
    setFilter(filterType)
  }
  const handleClickOpen = (item) => {
    setOpen(!open)
    setId(item._id)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleVisibilityClick = (item) => {
    setSelectedItem(item) // Set the selected item
    setVisible(true)
  }

  const handleApproveClick = async (item) => {
    const response = await axiosInstance.post('/backend/super_admin/approve_merchant', {
      merchant_id: item._id,
    })

    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      window.location.reload();
      // navigate('/merchant/apply-visa')
    } else {
      console.log(response.data)
      toast.error(response.data.msg, {
        position: 'top-center',
      })
    }
  }

  const handleDeleteClick = async () => {
    const response = await axiosInstance.post('/backend/delete_merchant_user', {
      merchant_id: id,
    })

    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      handleClose()
      window.location.reload()
    } else {
      console.log(response.data)
      toast.error(response.data.msg, {
        position: 'top-center',
      })
    }
  }

  const handleCloseClick = () => {
    setSelectedItem(null)
    setVisible(false)
  }

  return (
    <div style={{backgroundColor: '#fff'}} className='w-full'>
    <Toaster />
      <div style={{boxShadow:"none"}} className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 style={{marginLeft:"10px"}} className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Retailer Statistics</span>
            <span style={{
              marginLeft:"-100px"
            }} className='text-muted mt-1 fw-semibold fs-7'>{data.length} Member</span>
          </h3>
          <div className='d-flex flex-row'>
            <div className='dropdown mx-5'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Filter
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#' onClick={() => handleFilterClick('all')}>
                    All
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => handleFilterClick('waitingForApproval')}
                  >
                    Waiting For Approval
                  </a>
                </li>
              </ul>
            </div>
            <Link to={'/superadmin/add-new-merchant'}>
              <button style={{backgroundColor:"#327113"}} className='btn btn-success align-self-center'>Add new Retailer</button>
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
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </div>
                ) : (
                  <table className='table align-middle gs-2 gy-3'>
                    {/* begin::Table head */}
                    <thead style={{ background: '#f2f2f2', color: '#000', border:"1px solid #000"}}>
                      <tr className='fw-bold'>
                        <th className='min-w-100px text-center'>
                          Agent
                        </th>
                        <th className='min-w-100px text-center'>Email</th>
                        <th className='min-w-100px text-center'>Contact</th>
                        <th className='min-w-100px text-center'>State</th>
                        <th className='min-w-100px text-center'>Company</th>
                        <th className='min-w-80px text-center'>Visas</th>
                        <th className='min-w-100px text-center'>Wallet</th>
                        <th  className='min-w-100px text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody style={{border:"1px solid #cccccc"}} >
                    {paginatedData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                          <td style={{paddingLeft:"1%"}} className='text-center'>
                            <div className='d-flex flex-row align-items-center symbol symbol-50px me-2'>
                              <a
                                href='#'
                                className='text-dark fw-bold text-hover-primary mb-1 fs-6'
                                style={{
                                  whiteSpace: 'nowrap',
                                  paddingLeft: '0px',
                                  paddingTop: '5px',
                                }}
                              >
                                {item.merchant_name}
                              </a>
                            </div>
                          </td>
                          <td className='text-start'>
                            <span className='text-dark text-hover-primary mb-1 fs-6'>
                              {item.merchant_email_id}
                            </span>
                          </td>
                          <td className='text-center'>
                            <span className='text-dark fw-bold d-block fs-5'>{item.company}</span>
                            <span className='text-dark fw-semibold d-block fs-6 '>
                              {item.merchant_phone_number}
                            </span>
                          </td>
                          <td className='text-start'>
                            <span className='text-dark  d-block fs-6'>
                              {item.merchant_state}
                            </span>
                          </td>
                          <td className='text-start'>
                            <span className='text-dark fw-bold d-block fs-5'>{item.company}</span>
                            <span className='text-dark fw-semibold d-block fs-6 '>
                              {item.merchant_company_name}
                            </span>
                          </td>
                          <td className='text-center'>
                            <span className='text-dark  d-block fs-5'>
                              {item.merchant_applicants.length}
                            </span>
                          </td>
                          <td className='text-start'>
                            <a href='#' className='text-dark text-hover-primary mb-1 fs-6 '>
                              ₹ {new Intl.NumberFormat('en-IN').format(Number(item.wallet_balance))}
                            </a>
                          </td>
                          <td className='text-start'>
                            <div style={{marginLeft:"20%"}} className='d-flex justify-content-start align-items-center'>
                              <FcInfo
                                style={{fontSize:"20px"}}
                                onClick={() => handleVisibilityClick(item)}
                                className='mx-1 cursor-pointer'
                              />

                              <FcFullTrash
                              style={{fontSize:"20px"}}
                                onClick={() => {
                                  handleClickOpen(item)
                                  // const confirmed = window.confirm('Are you sure you want to delete this item?');
                                  // if (confirmed) {
                                  // Laxit write here for delete api
                                  // }
                                }}
                                className='mx-1 cursor-pointer'
                              />

                              {item.merchant_approved === false && (
                                // Render the "Approve" button only when the merchant is not approved
                                <button
                                  style={{
                                    backgroundColor: '#327113',
                                    color: '#fff',
                                    border: 'none',
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    cursor: 'pointer',
                                    marginLeft: "4%"

                                  }}
                                  onClick={() => handleApproveClick(item)}
                                >
                                  Approve
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* end::Table body */}
                  </table>
                )}
                {calculateTotalPages(filteredData) > 1 && (
                  <Pagination>
                    {Array.from({ length: calculateTotalPages(filteredData) }).map((_, index) => (
                      <Pagination.Item
                        key={index}
                        active={index + 1 === activePage}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}
                  </Pagination>
                )}
              </div>
              {/* end::Table */}
            </div>
            {/* end::Tap pane */}

            {/* end::Tap pane */}
          </div>
        </div>

        {/* end::Body */}
      </div>
      {visible && (
        <div
          className='loader-overlay'
          style={{...overlayStyle, ...(visible && activeOverlayStyle)}}
        >
          <div style={contentStyle}>
            <div
              onClick={() => handleCloseClick()}
              style={{ backgroundColor: '#d3d3d3', padding:"9px", position:"absolute", top:"15%", left:"84.5%", transform:"translate(-35%, -40%)", borderRadius: 20, cursor: 'pointer' }}
            >
              <CloseOutlined />
            </div>
            <MerchantView viewApplication={selectedItem} />
          </div>
        </div>
      )}
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby='draggable-dialog-title'>
          <DialogTitle style={{cursor: 'move', color: 'red'}} id='draggable-dialog-title'>
            Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to delete this item?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={() => handleDeleteClick()}>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export {MemberStatsTable}
