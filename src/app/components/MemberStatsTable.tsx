/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, CSSProperties } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../_metronic/helpers'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import MerchantView from './MerchantView'
import { CloseOutlined, DeleteOutline } from '@mui/icons-material'
import axiosInstance from '../helpers/axiosInstance'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


type Props = {
  className: string
  data: any[];
  loading: boolean
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


const MemberStatsTable: React.FC<Props> = ({ className, data, loading }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVisibilityClick = (item) => {
    setSelectedItem(item); // Set the selected item
    setVisible(true);
  };

  const handleApproveClick = async (item) => {
    const response = await axiosInstance.post('/backend/super_admin/approve_merchant', {
      merchant_id: item._id
    })

    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      // navigate('/merchant/apply-visa')
    } else {
      console.log(response.data)
      toast.error(response.data.msg, {
        position: 'top-center',
      })
    }
  };

  const handleCloseClick = () => {
    setSelectedItem(null); // Set the selected item
    setVisible(false);
  };
  return (
    <div style={{ backgroundColor: '#fff' }} className='w-full'>
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Merchant Statistics</span>
            <span className='text-muted mt-1 fw-semibold fs-7'>{data.length} Member</span>
          </h3>
          <div className='d-flex flex-row'>
            <div className="dropdown mx-5">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All</a></li>
                <li><a className="dropdown-item" href="#">Waiting For Approval</a></li>
              </ul>
            </div>
            {/* <button className='btn btn-primary align-self-center'>All</button>
            <button className='btn btn-warning align-self-center mx-3'>Waiting For Approval</button> */}
            <Link to={'/superadmin/add-new-merchant'}>
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
                {loading ?
                  <div style={{ height: 300, overflowX: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </div>
                  :
                  <table className='table align-middle gs-2 gy-3'>
                    {/* begin::Table head */}
                    <thead className='px-2' style={{ background: '#F9F9F9' }}>
                      <tr className='fw-bold text-muted'>
                        <th className='min-w-150px'>Agent</th>
                        <th className='min-w-120px'>Wallet Balance</th>
                        <th className='min-w-100px'>No. Of Visa</th>
                        <th className='min-w-100px text-start'>Company</th>
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
                            <span className='text-dark fw-bold d-block fs-5'>{item.merchant_applicants.length}</span>
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
                          <td >
                            <div className='d-flex align-items-center flex-shrink-0'>
                              <VisibilityIcon onClick={() => handleVisibilityClick(item)} className='mx-5 cursor-pointer' />

                              <DeleteOutline onClick={() => {
                                handleClickOpen()
                                // const confirmed = window.confirm('Are you sure you want to delete this item?');
                                // if (confirmed) {
                                // Laxit write here for delete api 
                                // }
                              }} className='mx-5 cursor-pointer' />
                              {item.merchant_approved === false && (
                                // Render the "Approve" button only when the merchant is not approved
                                <button className='btn btn-primary align-self-center' onClick={() => handleApproveClick(item)}>Approve</button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* end::Table body */}
                  </table>
                }
              </div>
              {/* end::Table */}
            </div>
            {/* end::Tap pane */}

            {/* end::Tap pane */}
          </div>
        </div>

        {/* end::Body */}
      </div>
      {visible &&
        <div className='loader-overlay' style={{ ...overlayStyle, ...(visible && activeOverlayStyle), }}>
          <div style={contentStyle}>

            <div onClick={() => handleCloseClick()} style={{ backgroundColor: '#d3d3d3', padding: 10, position: 'absolute', right: 230, borderRadius: 20, cursor: 'pointer' }}>
              <CloseOutlined />
            </div>
            <MerchantView viewApplication={selectedItem} />
          </div>
        </div>
      }
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move', color: 'red' }} id="draggable-dialog-title">
            Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose}>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export { MemberStatsTable }
