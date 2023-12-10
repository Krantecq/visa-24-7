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
import axiosInstance from '../helpers/axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { FcFullTrash } from "react-icons/fc";
import Cookies from 'js-cookie'
import { FcInfo } from "react-icons/fc";
import { MdRefresh } from "react-icons/md";

type Props = {
  className: string
  title: String,
  data: any[];
  loading:Boolean
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



const ProcessedTable: React.FC<Props> = ({ className, title, data,loading }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [issueVisaLoader, setissueVisaLoader] = useState(false);
  const [deleteSelectedItem, setDeleteSelectedItem] = useState(null);
  
  const [open, setOpen] = React.useState(false);

  const handleApproveClick = async () => {
    try {
      if(deleteSelectedItem){
        const selectedEntry = deleteSelectedItem as { _id: string }; 
      if(deleteSelectedItem == null){
        toast.error('Selected entry is null', {
          position: 'top-center',
        });
      }
      const response = await axiosInstance.post('/backend/delete_application', {
        application_id: selectedEntry._id,
      });

      if (response.status === 200) {
        toast.success(response.data.msg, {
          position: 'top-center',
        });

        window.location.reload();
        // Handle any additional actions after a successful API call
      } else {
        console.log(response.data);
        toast.error(response.data.msg, {
          position: 'top-center',
        });
      }
    }
    } catch (error) {
      console.error('API error:', error);
    }
  };

  const handleClickOpen = (item) => {
    setDeleteSelectedItem(item)
    setOpen(!open);
  };

  const handleClose = () => {
    setDeleteSelectedItem(null)
    setOpen(false);
  };

  const handleVisibilityClick = (item) => {
    setSelectedItem(item); // Set the selected item
    setVisible(true);
  };
  const handleCloseClick = () => {
    setSelectedItem(null); // Set the selected item
    setVisible(false);
  };

  const handleDownloadClick = async (item) => {
    const response = await axiosInstance.post('/backend/download_visa', {
      application_id: item._id
    })

    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      // navigate('/merchant/apply-visa')
    } else {
      console.log(response.data)
      toast.error(response.data.msg.error, {
        position: 'top-center',
      })
    }
  };
  const navigate = useNavigate();

  const handleIssueVisaClick = async (item) => {
    setissueVisaLoader(true);
    const response = await axiosInstance.post('/backend/apply_visa', {
      application_id: item._id
    })

    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      window.location.reload();
      navigate('/superadmin/processed')
      setissueVisaLoader(false);
    } else {
      console.log(response.data)
      toast.error(response.data.msg, {
        position: 'top-center',
      })
      setissueVisaLoader(false);
    }
  };

  return (
    <div style={{boxShadow:"none"}} className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 style={{marginLeft:"10px"}} className='card-title align-items-center flex-row'>
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
        <h1 style={{position:"absolute", top:"35px", right:"5%", fontSize:"18px"}} >
          Atlys wallet balance - 
          <button className='btn btn-success' style={{backgroundColor:"#327113", padding:"5px 10px", marginTop:"-5px", marginLeft:"5px"}} >
            ₹ 2 /-
          </button>
          <a title='Refresh' href='#'>
            <MdRefresh style={{color:"#327113", marginLeft:"12px", fontSize:"20px", marginTop:"-4px"}}/>
          </a>
        </h1>
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
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead >
                <tr style={{ background: '#f2f2f2', color: '#000', border:"1px solid #000"}} className='fw-bold'>

                  <th className='min-w-80px text-center'>Name</th>
                  <th className='min-w-80px text-center'>Phone</th>
                  <th className='min-w-80px text-center'>Email</th>
                  <th className='min-w-80px text-center'>From</th>
                  <th className='min-w-80px text-center'>To</th>
                  <th className='min-w-80px text-center'>Date</th>
                  <th className='min-w-80px text-center'>Status</th>
                  <th className='min-w-80px text-center'>Amount</th>
                  <th className='min-w-100px text-center'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody style={{border:"1px solid #cccccc"}} >
                {data.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td style={{paddingLeft:"15px"}}  className='text-center'>
                      {/* Avatar and Name */}
                      <div className='d-flex align-items-center'>
                        {/* <div className='symbol symbol-45px me-5'>
                          <img src={row.photo} alt='' />
                        </div> */}
                        <div className='d-flex justify-content-start flex-column'>
                          <a href='#' className='text-dark text-hover-primary fs-6'>
                            {row.first_name}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark text-hover-primary d-block fs-6'>
                        phone
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark text-hover-primary d-block fs-6'>
                        email
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Date */}
                      <a href='#' className='text-dark text-hover-primary d-block fs-6'>
                      {row.nationality}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark text-hover-primary d-block fs-6'>
                        {row.application_destination}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Location 1 */}
                      <a href='#' className='text-dark text-hover-primary d-block fs-6'>
                        {row.application_departure_date}
                      </a>
                    </td>
                    <td className='text-center'>
                      {/* Status */}
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        {row.visa_status}
                      </span>
                    </td>
                    <td className='text-center'>
                      {/* Location 2 */}
                      <a href='#' className='text-dark text-hover-primary d-block fs-6'>
                        ₹ {row.visa_amount}
                      </a>
                    </td>


                    <td style={{paddingRight:"15px"}}   className='text-center'>
                      {/* Action Buttons */}
                      <div className='d-flex align-items-center justify-content-around flex-shrink-0'>

                      <FcInfo style={{fontSize:"20px"}} className='mx-2 cursor-pointer' onClick={() => handleVisibilityClick(row)} />
                      <FcFullTrash 
                        style={{fontSize:"20px"}}
                        onClick={() => 
                        handleClickOpen(row)
                        // const confirmed = window.confirm('Are you sure you want to delete this item?');
                        // if (confirmed) {
                        // Laxit write here for delete api 
                        // }
                      } />
                      {row.visa_status === 'Applied' && (
                        // Render the "Approve" button only when the merchant is not approved
                        <button className='btn btn-success align-self-center'>Check Status</button>
                      )}
                      {row.visa_status === 'Waiting' && (
                        // Render the "Approve" button only when the merchant is not approved
                        <button style={{backgroundColor:"#327113", padding:"5px 10px", border:"none", color:"#fff", borderRadius:"5px", fontSize:"12px"}} className='' onClick={() => handleIssueVisaClick(row)}>Issue Visa</button>
                      )}
                      {row.visa_status === 'Processed' && (
                        <button className='btn btn-success align-self-center' onClick={() => handleDownloadClick(row)}>Download</button>

                          // Render the "Approve" button only when the merchant is not approved
                        )}
                      </div>
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
      {issueVisaLoader &&
        <Loader loading={issueVisaLoader} />
      }
      {visible &&
        <div className='loader-overlay' style={{ ...overlayStyle, ...(visible && activeOverlayStyle), }}>
          <div style={contentStyle}>
            <div onClick={() => handleCloseClick()} style={{ backgroundColor: '#d3d3d3', padding: 10, position: 'absolute', right: "193px", borderRadius: 20, cursor: 'pointer', top: '83px' }}>
              <CloseOutlined />
            </div>
            <ApplicationFormView viewApplication={selectedItem} />
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
            <Button onClick={handleApproveClick}>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export { ProcessedTable }
