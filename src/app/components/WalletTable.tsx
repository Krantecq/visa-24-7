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

const WalletTable: React.FC<Props> = ({ className, title, data }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleApproveClick = async (item) => {
    const response = await axiosInstance.post('/backend/approve_transaction', {
      wallet_id:item._id,
      merchant_id: item.merchant_id
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

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVisibilityClick = () => {
    // setSelectedItem(item);
    setVisible(true);
  };
  const handleCloseClick = () => {
    setSelectedItem(null); // Set the selected item
    setVisible(false);
  };
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

                <th className='min-w-150px'>Email Id</th>
                <th className='min-w-140px'>Transaction Id</th>
                <th className='min-w-120px'>Amount</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data.map((row, index) => (

                <tr>
                  <td>
                    {/* Avatar and Name */}
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        {/* <img src={row.photo} alt='' /> */}
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {row.merchant_email_id}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    {/* Date */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      {row.upi_ref_id}
                    </a>
                  </td>
                  <td>
                    {/* Location 1 */}
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      {row.wallet_balance}
                    </a>
                  </td>

                  <td>
                    {/* Action Buttons */}
                    <div className='d-flex align-items-center justify-content-end flex-shrink-0'>

                      <VisibilityIcon className='mx-5 cursor-pointer' onClick={() => handleVisibilityClick()} />

                      <DeleteOutline onClick={() => {
                        handleClickOpen()
                        // const confirmed = window.confirm('Are you sure you want to delete this item?');
                        // if (confirmed) {
                        // Laxit write here for delete api 
                        // }
                      }} className='mx-5 cursor-pointer' />
                      <button className='btn btn-primary align-self-center' onClick={()=>handleApproveClick(row)}>Approve</button>
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
      {visible &&
        <div className='loader-overlay' style={{ ...overlayStyle, ...(visible && activeOverlayStyle), }}>
          <div style={contentStyle}>
            <div onClick={() => handleCloseClick()} style={{ backgroundColor: '#d3d3d3', padding: 10, position: 'absolute', right: 230, borderRadius: 20, cursor: 'pointer' }}>
              <CloseOutlined />
            </div>
            <WalletFormView viewApplication={selectedItem} />
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

export { WalletTable }
