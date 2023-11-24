import React, { useState, useRef, ChangeEvent, useEffect, CSSProperties } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import CardIcon from '@mui/icons-material/CreditCard'
import WalletIcon from '@mui/icons-material/Wallet'
import BankIcon from '@mui/icons-material/AccountBalance'
import Uploadicon from '@mui/icons-material/CloudUpload'
import UpiIcon from '@mui/icons-material/TapAndPlay'
import ClearIcon from '@mui/icons-material/Delete'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import { ICreateAccount, inits } from '../../../modules/wizards/components/CreateAccountWizardHelper'
import axiosInstance from '../../../helpers/axiosInstance'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import RoomIcon from '@mui/icons-material/Room'
import { useNavigate } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CloseOutlined } from '@mui/icons-material'
import Papa from 'papaparse';
import moment from 'moment'
import 'react-range-slider-input/dist/style.css';
import { Slider } from 'antd'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { DatePicker } from 'antd'
import {HeaderWrapper} from '../../../../_metronic/layout/components/header/HeaderWrapper';
import { Button } from 'react-bootstrap';


interface Transaction {
  created_at: string;
  wallet_balance: number;
  category: string;
  type: string;
  status: string;
}

interface Revenue {
  name: string;
  revenue: number;
  transaction_time: string;
  application_no: string;
}
function MerchantProfile() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [formData, setFormData] = useState({
    upi_ref_id: '',
    receipt: '',
    amount: '',
  })

  const [issueDate, setIssueDate] = useState<string | undefined>('');
  const [expiryDate, setExpiryDate] = useState<string | undefined>('');

  const formatDate1 = (dateString) => {
    // Create a Date object from the input date string
    const date = new Date(dateString)

    // Get the month name as a three-letter abbreviation (e.g., "Oct")
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
    ]
    const month = monthNames[date.getMonth()]

    // Get the day and year
    const day = date.getDate()
    const year = date.getFullYear()

    // Format the date string
    return `${month} ${day}, ${year}`
  }
  const [formData2, setFormData2] = useState({
    merchant_phone_number: '',
    merchant_email_id: '',
    merchant_gst_no: '',
    merchant_pan_no: '',
    merchant_country: '',
    merchant_address_one_line: '',
    merchant_address_second_line: '',
    merchant_state: '',
    merchant_zip_code: '',
    merchant_name: '',
    merchant_id: '',
    merchant_profile_photo: '',
    issued_api: [],
    commission: [0, 50]
  })

  const user_id = Cookies.get('user_id')

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value })
  }

  const [activeWalletTab, setActiveWalletTab] = useState('Bank Transfer (0% Fee)')
  const [initValues] = useState<ICreateAccount>(inits)
  const [recieptImage, setReceiptImage] = useState('')
  const [receiptShow, setReceiptshow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  const [revenue, setRevenue] = useState<Revenue[]>([]);

  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [commission, setCommission] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleWalletTabClick = (tabName: string) => {
    setActiveWalletTab(tabName)
  }

  const handleProfileFieldChange = (fieldName, value) => {
    setFormData2({ ...formData2, [fieldName]: value })
  }

  const filterTransactions = (startDate: string, endDate: string) => {
    const filtered = transaction.filter((item: Transaction) => {
      const transactionDate = moment(item.created_at);
      return transactionDate.isBetween(startDate, endDate, null, '[]');
    });
    setTransaction(filtered);
  };
  useEffect(() => {
    // Fetch profile data when the component mounts
    fetchProfileData()
    fetchTransactionData()
    fetchCommission()
    fetchRevenueData()
  }, [])

  useEffect(() => {
    if (issueDate && expiryDate) {
      filterTransactions(issueDate, expiryDate);
    }
  }, [issueDate, expiryDate]);

  const fetchCommission = async () => {
    try {
      const markup_percentage = localStorage.getItem('markup_percentage') ?? '1';
      const markup_percentageAsNumber = parseFloat(markup_percentage); // Convert the string to a number

      const response = await axiosInstance.get('/backend/fetch_setting')
      if (response.status == 203) {
        toast.error('Please Logout And Login Again', {
          position: 'top-center',
        })
      }

      setUpperLimit(parseFloat(response.data.data.merchant_percantage))

      setCommission(markup_percentageAsNumber)
    } catch (error) {
      console.error('Error fetching profile data:', error)
      // Handle error (e.g., show an error message)
    }
  }
  const fetchProfileData = async () => {
    try {
      const user_id = Cookies.get('user_id')
      const postData = {
        id: user_id,
      }
      const response = await axiosInstance.post('/backend/fetch_single_merchant_user', postData)

      if (response.status == 203) {
        toast.error('Please Logout And Login Again', {
          position: 'top-center',
        })
      }
      // Assuming the response contains the profile data, update the state with the data
      setFormData2(response.data.data)
      console.log('profile response', response)
    } catch (error) {
      console.error('Error fetching profile data:', error)
      // Handle error (e.g., show an error message)
    }
  }

  const fetchTransactionData = async () => {
    try {
      const user_id = Cookies.get('user_id')
      const postData = {
        merchant_id: user_id,
      }
      const response = await axiosInstance.post('/backend/fetch_merchant_transaction', postData)

      if (response.status == 203) {
        toast.error('Please Logout And Login Again', {
          position: 'top-center',
        })
      }
      // Assuming the response contains the profile data, update the state with the data
      setTransaction(response.data.data)
      console.log('transaction response', response.data)
    } catch (error) {
      console.error('Error fetching profile data:', error)
      // Handle error (e.g., show an error message)
    }
  }
  const fetchRevenueData = async () => {
    try {
      const user_id = Cookies.get('user_id')
      const postData = {
        merchant_id: user_id,
      }
      const response = await axiosInstance.post('/backend/merchant/revenue', postData)

      if (response.status == 203) {
        toast.error('Please Logout And Login Again', {
          position: 'top-center',
        })
      }
      // Assuming the response contains the profile data, update the state with the data
      setRevenue(response.data.data)
      console.log('Revenue response', response.data)
    } catch (error) {
      console.error('Error fetching profile data:', error)
      // Handle error (e.g., show an error message)
    }
  }

  const saveCommission = async () => {
    setLoading(true);
    const user_id = Cookies.get('user_id')

    const response = await axiosInstance.patch('/backend/set_markup_percentage', {
      merchant_id: user_id,
      markup_percentage: commission.toString()
    })
    console.log(response.data.data)
    if (response.status == 203) {
      toast.error(response.data.msg, {
        position: 'top-center',
      })
      setLoading(false);
    } else {
      localStorage.removeItem('markup_percentage');
      localStorage.setItem('markup_percentage', commission.toString());

      toast.success(response.data.msg, {
        position: 'top-center',
      })
      setLoading(false);
    }
  }

  const handleSave = async () => {
    setLoading(true);
    const user_id = Cookies.get('user_id')
    setFormData2({ ...formData2, ['merchant_id']: user_id })

    const response = await axiosInstance.patch('/backend/update_merchant_user', formData2)
    console.log(response.data.data)
    if (response.status == 203) {
      toast.error(response.data.msg, {
        position: 'top-center',
      })
      setLoading(false);
    } else {
      toast.success(response.data.msg, {
        position: 'top-center',
      })
      setLoading(false);
    }
  }

  const inputStyle = {
    border: '2px solid #d3d3d3', // Border width and color
    borderRadius: '15px', // Border radius
    padding: '10px',
    paddingLeft: '20px', // Padding
    width: 280, // 100% width
    boxSizing: 'border-box',
    backgroundColor: 'white', // Include padding and border in the width calculation
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

  const profileContent = (
    <div
      className='w-full mt-5 mx-10 px-10'
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#f5f5f5',
        border: '1px solid #d3d3d3',
        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.1)',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <h2 className='py-10'>Agency Information</h2>
      <hr />
      <Formik initialValues={formData2} onSubmit={() => { }}>
        {() => (
          <Form className='py-10 px-9' noValidate id='kt_create_account_form'>
            <div>
              <div className='d-flex'>
                <div className='fv-row mb-10'>
                  <label className='form-label mx-1' style={{ fontWeight: 'bold' }}>
                    Name
                  </label>
                  <Field
                    style={inputStyle}
                    name='merchant_name'
                    onChange={(e) => handleProfileFieldChange('merchant_name', e.target.value)}
                    value={formData2?.merchant_name}
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_name' />
                  </div>
                </div>
                <div className='fv-row mb-10 mx-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span className='required'>Email</span>
                  </label>

                  <Field
                    style={inputStyle}
                    name='businessDescriptor'
                    value={formData2?.merchant_email_id}
                    readOnly
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='businessDescriptor' />
                  </div>
                </div>
              </div>

              <div className='d-flex'>
                <div className='fv-row mb-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span>Contact Number</span>
                  </label>

                  <Field
                    style={inputStyle}
                    name='merchant_phone_number'
                    value={formData2.merchant_phone_number}
                    onChange={(e) =>
                      handleProfileFieldChange('merchant_phone_number', e.target.value)
                    }
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_phone_number' />
                  </div>
                </div>
              </div>

              <div className='d-flex'>
                <div className='fv-row mb-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span className='required'>GST Number</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, }}
                    value={formData2.merchant_gst_no}
                    readOnly
                    name='businessDescriptor'
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='businessDescriptor' />
                  </div>
                </div>
                <div className='fv-row mb-10 mx-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span className='required'>PAN Card</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, width: '285px' }}
                    name='businessDescriptor'
                    value={formData2.merchant_pan_no}
                    readOnly
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='businessDescriptor' />
                  </div>
                </div>
              </div>
              <hr style={{marginBottom:"6%", marginTop:"2%"}} />

              <div className='d-flex'>
                <div className='fv-row mb-5'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span>Address Line 1</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, width: "590px" }}
                    value={formData2?.merchant_address_one_line}
                    name='merchant_address_one_line'
                    onChange={(e) =>
                      handleProfileFieldChange('merchant_address_one_line', e.target.value)
                    }
                    className='form-control form-control-lg form-control-solid '
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_address_one_line' />
                  </div>
                </div>
              </div>
              <div className='d-flex'>
                <div className='fv-row mb-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span>Address Line 2</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, width: "590px" }}
                    value={formData2.merchant_address_second_line}
                    name='merchant_address_second_line'
                    onChange={(e) =>
                      handleProfileFieldChange('merchant_address_second_line', e.target.value)
                    }
                    className='form-control form-control-lg form-control-solid '
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_address_second_line' />
                  </div>
                </div>
              </div>

              <div className='d-flex'>
                <div className='fv-row mb-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span>Country</span>
                  </label>

                  <Field
                    style={{ ...inputStyle }}
                    name='merchant_country'
                    value={formData2.merchant_country}
                    onChange={(e) => handleProfileFieldChange('merchant_country', e.target.value)}
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_country' />
                  </div>
                </div>
                <div className='fv-row mb-10 mx-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span>State</span>
                  </label>

                  <Field
                    style={{ ...inputStyle }}
                    name='merchant_state'
                    value={formData2.merchant_state}
                    onChange={(e) => handleProfileFieldChange('merchant_state', e.target.value)}
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_state' />
                  </div>
                </div>
                <div className='fv-row mb-10'>
                  <label
                    className='d-flex align-items-center form-label mx-1'
                    style={{ fontWeight: 'bold' }}
                  >
                    <span>Zip Code</span>
                  </label>

                  <Field
                    style={{ ...inputStyle }}
                    name='merchant_zip_code'
                    value={formData2.merchant_zip_code}
                    onChange={(e) => handleProfileFieldChange('merchant_zip_code', e.target.value)}
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_zip_code' />
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <button
                  type='submit'
                  className='btn btn-success'
                  onClick={handleSave}
                  style={{ backgroundColor: '#327113' }}
                >
                  {!loading && <span className='indicator-label'>Save</span>}
                  {loading && (
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )

  const bankContent = (
    <div>
      <Formik initialValues={initValues} onSubmit={() => { }}>
        {() => (
          <Form
            className='py-10'
            style={{ justifyContent: 'center', marginLeft: 150, width: '75%' }}
            noValidate
            id='kt_create_account_form'
          >
            <div className='d-flex'>
              <div className='fv-row mb-2'>
                <Field
                  style={{
                    ...inputStyle,
                    width: "590px",
                  }}
                  readOnly
                  name='businessDescriptor'
                  className='form-control form-control-lg form-control-solid '
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='businessDescriptor' />
                </div>
              </div>
            </div>
            <div className='d-flex'>
              <div className='fv-row mb-2'>
                <Field
                  style={{
                    ...inputStyle,
                    width: "590px",
                  }}
                  readOnly
                  name='businessDescriptor'
                  className='form-control form-control-lg form-control-solid '
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='businessDescriptor' />
                </div>
              </div>
            </div>

            <div className='d-flex'>
              <div className='fv-row mb-5'>
                <Field
                  style={{
                    ...inputStyle,
                    width: "590px",
                  }}
                  readOnly
                  name='businessDescriptor'
                  className='form-control form-control-lg form-control-solid '
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='businessDescriptor' />
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 18 }}>
                Add Visa 24/7 as a beneficiary and pay via NEFT/RTGS/IMPS online or at a bank branch. We
                will process the payment and add the amount to your wallet.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )

  const upiContent = (
    <div>
      <Formik initialValues={initValues} onSubmit={() => { }}>
        {() => (
          <Form
            className='py-10'
            style={{ justifyContent: 'center', marginLeft: 150, width: '75%' }}
            noValidate
            id='kt_create_account_form'
          >
            <div className='d-flex'>
              <div className='fv-row mb-5'>
                <Field
                  style={{
                    ...inputStyle,
                    width: "590px",
                    border: '1px solid #d3d3d3',
                    borderRadius: 10,
                  }}
                  readOnly
                  name='businessDescriptor'
                  className='form-control form-control-lg form-control-solid '
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='businessDescriptor' />
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 18 }}>
                Add the VPA to preferred UPI app and make a payment. We will process the payment and
                add the amount to your wallet.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      // Make a POST request to your server to upload the file
      const response = await axiosInstance.post('/backend/upload_image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      // Assuming your server responds with the file URL
      const fileUrl = response.data.data
      return fileUrl // Return the file URL
    } catch (error) {
      console.error('Error uploading file:', error)
      return '' // Return an empty string in case of an error
    }
  }
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = async (e) => {
        // Update the state variable with the image data (base64-encoded)
        if (e.target) {
          setReceiptImage(e.target.result as string)
          try {
            // Assuming handleFileUpload is an asynchronous function that returns a promise
            const imageLink = await handleFileUpload(file)

            // Update the form data with the image link
            setFormData({ ...formData, receipt: imageLink })
          } catch (error) {
            console.error('Error uploading image:', error)
          }
        }
      }

      reader.readAsDataURL(file)
    }
  }
  const handleImageUpload = () => {
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const navigate = useNavigate()
  const handleSaveClick = async () => {
    setLoading(true)
    const postBody = {
      upi_ref_id: formData.upi_ref_id,
      merchant_id: user_id,
      receipt: formData.receipt,
      amount: formData.amount,
      type: 'Credit',
      category: 'Wallet Balance',
    }
    const response = await axiosInstance.post('/backend/upload_receipt', postBody)
    console.log('receipt response---->', response)
    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      setLoading(false)
    } else {
      console.log(response.data)
      toast.error(response.data.msg, {
        position: 'top-center',
      })
      setLoading(false)
    }

    // Call the API when the "Save" button is clicked
  }
  const uploadReciept = (
    <div className='d-flex ' style={{ width: '100%' }}>
      <div style={{ width: '40%', marginTop: 50, marginBottom: 30 }}>
        <h6>Receipt</h6>
        {recieptImage ? (
          <div
            style={{
              border: '4px dotted gray',
              width: '100%',
              height: 250,
              borderRadius: '10px',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            <div
              onClick={() => setReceiptImage('')}
              style={{
                justifyContent: 'flex-end',
                position: 'absolute',
                backgroundColor: 'white',
                padding: 7,
                borderRadius: 50,
                cursor: 'pointer',
              }}
            >
              <ClearIcon style={{ color: 'red' }} />
            </div>
            <img
              src={recieptImage}
              alt='Uploaded Image'
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        ) : (
          <div
            style={{
              border: '4px dotted gray',
              width: '100%',
              height: 250,
              borderRadius: '10px',
              justifyContent: 'center',
              textAlign: 'center',
              paddingTop: 40,
              marginTop: 20,
            }}
          >
            <h4 className='mx-10 mt-10'>Receipt Photo</h4>
            <button
              type='button'
              onClick={handleImageUpload}
              className='btn btn-lg btn-success me-3 mt-3'
              style={{ justifyContent: 'flex-end', backgroundColor: '#327113' }}
            >
              <span className='indicator-label'>Select Files</span>
            </button>
            <p className='text-bold pt-5 fs-9' style={{ color: '#555555' }}>
              Supports JPEG, JPG, PNG.
            </p>
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept='.jpeg, .jpg, .pdf, .png'
              onChange={handleFileSelect}
            />
          </div>
        )}
      </div>
      <div
        className='d-flex flex-row-fluid flex-center bg-body rounded mt-10'
        style={{ width: '70%', backgroundColor: 'blue' }}
      >
        <Formik initialValues={initValues} onSubmit={() => { }}>
          {() => (
            <Form className='py-20 px-9' noValidate id='kt_create_account_form'>
              <div>
                <div className='fv-row mb-10'>
                  <label className='form-label required'>Transaction ID</label>
                  <Field
                    name='upi_ref_id'
                    style={{ ...inputStyle, width: '450px' }}
                    className='form-control form-control-lg form-control-solid'
                    onChange={(e) => handleFieldChange('upi_ref_id', e.target.value)}
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='upi_ref_id' />
                  </div>
                </div>

                <div className='fv-row mb-10'>
                  <label className='d-flex align-items-center form-label'>
                    <span className='required'>Amount</span>
                  </label>
                  <Field
                    style={{ ...inputStyle, width: '450px' }}
                    name='amount'
                    className='form-control form-control-lg form-control-solid'
                    onChange={(e) => handleFieldChange('amount', e.target.value)}
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='amount' />
                  </div>
                </div>
                {/* <FormGroup>
                  <FormControlLabel control={<Switch />} label="Issue for Api" />
                </FormGroup> */}

                <div className='pt-5 d-flex justify-content-center'>
                  <button
                    type='submit'
                    style={{ width: 200, backgroundColor: '#327113' }}
                    className='btn btn-success'
                    onClick={handleSaveClick}
                  >
                    {!loading && <span className='indicator-label'>Save</span>}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'block' }}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
  const handleIssueApiClick = async () => {
    setLoading(true)
    const postBody = {
      upi_ref_id: formData.upi_ref_id,
      merchant_id: user_id,
      receipt: formData.receipt,
      amount: formData.amount,
      type: 'Credit',
      category: 'API',
    }
    const response = await axiosInstance.post('/backend/upload_api_receipt', postBody)
    console.log('receipt response---->', response)
    if (response.status == 200) {
      toast.success(response.data.msg, {
        position: 'top-center', // Center the toast notification
      })
      setLoading(false)
    } else {
      console.log(response.data)
      toast.error(response.data.msg, {
        position: 'top-center',
      })
      setLoading(false)
    }

    // Call the API when the "Save" button is clicked
  }

  const uploadIssueApiReciept = (
    <div className='d-flex ' style={{ width: '100%' }}>
      <div style={{ width: '40%', marginTop: 50, marginBottom: 30, marginLeft:"10%" }}>
        <h6>Receipt</h6>
        {recieptImage ? (
          <div
            style={{
              border: '4px dotted gray',
              width: '100%',
              height: 250,
              borderRadius: '10px',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            <div
              onClick={() => setReceiptImage('')}
              style={{
                justifyContent: 'flex-end',
                position: 'absolute',
                backgroundColor: 'white',
                padding: 7,
                borderRadius: 50,
                cursor: 'pointer',
              }}
            >
              <ClearIcon style={{ color: 'red' }} />
            </div>
            <img
              src={recieptImage}
              alt='Uploaded Image'
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        ) : (
          <div
            style={{
              border: '4px dotted gray',
              width: '100%',
              height: 250,
              borderRadius: '10px',
              justifyContent: 'center',
              textAlign: 'center',
              paddingTop: 40,
              marginTop: 20,
            }}
          >
            <h4 className='mx-10 mt-10'>Receipt Photo</h4>
            <button
              type='button'
              onClick={handleImageUpload}
              className='btn btn-lg btn-success me-3 mt-3'
              style={{ justifyContent: 'flex-end', backgroundColor: '#327113' }}
            >
              <span className='indicator-label'>Select Files</span>
            </button>
            <p className='text-bold pt-5 fs-9' style={{ color: '#555555' }}>
              Supports JPEG, JPG, PNG.
            </p>
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept='.jpeg, .jpg, .pdf, .png'
              onChange={handleFileSelect}
            />
          </div>
        )}
      </div>
      <div
        className='d-flex flex-row-fluid flex-center bg-body rounded mt-10'
        style={{ width: '70%', backgroundColor: 'blue' }}
      >
        <Formik initialValues={initValues} onSubmit={() => { }}>
          {() => (
            <Form className='py-20 px-9' noValidate id='kt_create_account_form'>
              <div>
                <div className='fv-row mb-10'>
                  <label className='form-label required'>Transaction ID</label>
                  <Field
                    name='upi_ref_id'
                    style={{ ...inputStyle, width: '450px' }}
                    className='form-control form-control-lg form-control-solid'
                    onChange={(e) => handleFieldChange('upi_ref_id', e.target.value)}
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='upi_ref_id' />
                  </div>
                </div>

                <div className='fv-row mb-10'>
                  <label className='d-flex align-items-center form-label'>
                    <span className='required'>Amount</span>
                  </label>
                  <Field
                    style={{ ...inputStyle, width: '450px' }}
                    name='amount'
                    className='form-control form-control-lg form-control-solid'
                    onChange={(e) => handleFieldChange('amount', e.target.value)}
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='amount' />
                  </div>
                </div>
                {/* <FormGroup>
                  <FormControlLabel control={<Switch />} label="Issue for Api" />
                </FormGroup> */}

                <div className='pt-5 d-flex justify-content-center'>
                  <button
                    type='submit'
                    style={{ width: 200, backgroundColor: '#327113' }}
                    className='btn btn-success'
                    onClick={handleIssueApiClick}
                  >
                    {!loading && <span className='indicator-label'>Save</span>}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'block' }}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )

  const walletTabs = [
    {
      label: 'Bank Transfer (0% Fee)',
      content: bankContent,
      icon: <BankIcon style={{ width: 25, height: 25 }} />,
    },
    { label: 'UPI (0% Fee)', icon: <UpiIcon style={{ width: 25, height: 25 }} />, content: upiContent },
    {
      label: 'Upload Receipt',
      icon: <Uploadicon style={{ width: 25, height: 25 }} />,
      content: uploadReciept,
    },
  ]

  const activeWalletTabContent = walletTabs.find((tab) => tab.label === activeWalletTab)?.content

  const loadWalletContent = (
    <div
      className='w-full mt-5 mx-10 px-10'
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#d3d3d3',
        border: '1px solid #d3d3d3',
        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <h2 className='pt-10'>Load Wallet</h2>
      <hr />
      <div className='d-flex' style={{ justifyContent: 'space-around' }}>
        {walletTabs.map((tab) => (
          <div
            key={tab.label}
            style={{
              padding: '10px 0',
              marginTop: 20,
              display: 'flex',
              cursor: 'pointer',
              alignItems: 'center',
              borderBottom: activeWalletTab === tab.label ? '2px solid #327113' : ' 1px solid #333',
              fontWeight: activeWalletTab === tab.label ? 'bold' : 'normal',
              color: activeWalletTab === tab.label ? '#327113' : '#333',
            }}
            onClick={() => handleWalletTabClick(tab.label)}
          >
            <div style={{ marginRight: 15 }}>{tab.icon}</div>
            <h3
              style={{
                color: activeWalletTab === tab.label ? '#327113' : '#333',
              }}
            >
              {tab.label}
            </h3>
          </div>
        ))}
      </div>

      <div>{activeWalletTabContent}</div>
    </div>
  )
  function convertToCSV(data) {
    const csv = Papa.unparse(data);
    return csv;
  }

  function handleDownloadCSV() {
    const csvData = convertToCSV(transaction);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
  const transactionContent = (
    <div
      className='w-full mt-5 mx-10 pt-5'
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#d3d3d3',
        border: '1px solid #d3d3d3',
        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <div className='d-flex align-items-center px-10'>
        <div className='d-flex align-items-center' style={{ flex: 1 }}>
          <h2 className='' >Visa 247 Wallet</h2>

        </div>

        <div className='fv-row w-50' style={{position:"relative", right:"4%"}}>
          
          <DatePicker.RangePicker
            style={{ backgroundClip: '#fff', width: 400, marginTop: 8, border: '2px solid #e5e5e5', borderRadius: 10, padding: 10 }}
            onChange={(value) => {
              if (value && value.length === 2) {
                var x = value[0]?.format('YYYY-MM-DD');
                var y = value[1]?.format('YYYY-MM-DD');
                setIssueDate(x);
                setExpiryDate(y);
              }
            }} />
        </div>

        <div
          className='px-5 py-2'
          style={{
            border: '2px solid #d3d3d3',
            borderRadius: 20,
            alignItems: 'center',
            display: 'flex',
            marginLeft: 'auto',
            backgroundColor: '#fff',
            cursor: 'pointer'
          }}
          onClick={handleDownloadCSV}
        >
          <h6 className='fs-4' style={{ marginTop: 5 }}>
            Download CSV
          </h6>
        </div>
      </div>

      <table className='table align-middle gs-10 mt-10'>
        {/* begin::Table head */}
        <thead className='px-5' style={{ background: '#327113', color: '#fff' }}>
          <tr className='fw-bold'>
            <th className='min-w-150px'>Date/Time</th>
            <th className='min-w-150px'>Amount</th>
            <th className='min-w-150px'>Category</th>
            <th className='min-w-150px'>Type</th>
            <th className='min-w-150px'>Status</th>
          </tr>
        </thead>
        {/* end::Table head */}
        {/* begin::Table body */}
        <tbody>
          {transaction.map((item, index) => (

            <tr key={index}>
              <td className='text-start'>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6 '>
                  {item && moment((item as any).created_at).format('DD MMM YYYY hh:mm a')}
                </a>
              </td>
              <td className='text-start'>
                <span className='text-dark fw-bold d-block fs-6'>
                  {item && (item as { wallet_balance: number }).wallet_balance}/-
                </span>
              </td>
              <td className='text-start'>
                <span className='text-dark fw-bold d-block fs-6'>
                  {item && (item as { category: String }).category}
                </span>
              </td>
              <td className='text-start'>
                <span className='text-dark fw-bold d-block fs-6'>
                  {item && (item as { type: string }).type}
                </span>

              </td>
              <td className='text-start'>
                <span className='text-dark fw-semibold d-block fs-6'>
                  {item && (item as { status: string }).status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>
        {/* end::Table body */}
      </table>
    </div>
  )


  function handleDownloadCSVRevenue() {
    // Convert revenue data to CSV
    const revenueCSVData = convertToCSV(revenue);

    // Create a Blob and generate a download link
    const blob = new Blob([revenueCSVData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revenue.csv';

    // Simulate a click on the download link
    a.click();

    // Release the Object URL
    URL.revokeObjectURL(url);
}
  const revenueContent = (
    <div
      className='w-full mt-5 mx-10 pt-5'
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#d3d3d3',
        border: '1px solid #d3d3d3',
        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <div className='d-flex align-items-center px-10'>
        <div className='d-flex align-items-center' style={{ flex: 1 }}>
          <h2 className='' >Revenue</h2>

        </div>

        <div className='fv-row w-50' style={{position:"relative", right:"4%"}}>
          
        </div>

        <div
          className='px-5 py-1'
          style={{
            border: '1px solid #327113',
            borderRadius: 10,
            alignItems: 'center',
            display: 'flex',
            marginLeft: 'auto',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={handleDownloadCSVRevenue}
        >
          <h6 className='fs-4' style={{ marginTop: 5 }}>
            Download CSV
          </h6>
        </div>
      </div>

      <table className='table align-middle gs-10 mt-10'>
        {/* begin::Table head */}
        <thead className='px-5' style={{ background: '#327113', color: '#fff' }}>
          <tr className='fw-bold'>
            <th className='min-w-150px'>Name</th>
            <th className='min-w-150px'>Transaction time</th>
            <th className='min-w-150px'>Application No.</th>
            <th className='text-center min-w-150px'>Merchant Margin</th>
            {/* <th className='text-center min-w-150px'>Invoice</th> */}
          </tr>
        </thead>
        {/* end::Table head */}
        {/* begin::Table body */}
        <tbody>
          {revenue.map((item, index) => (

            <tr>
              <td className='text-start'>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6 '>
                  {item.name}
                </a>
              </td>
              <td className='text-start'>
                <span className='text-dark fw-bold d-block fs-6'>
                  {formatDate1(item.transaction_time)}
                </span>
              </td>
              <td className='text-start'>
                <span className='text-dark fw-bold d-block fs-6'>
                  {item.application_no}
                </span>
              </td>
              <td className='text-center'>
                <span className='text-dark fw-bold d-block fs-6'>
                  {item.revenue}
                </span>

              </td>
              {/* <td className='text-center'>
                <span className='text-dark fw-semibold d-block fs-6'>
                <button
                  style={{
                    background: '#327113',
                    color: '#fff',
                    border: 'none',
                    borderRadius:"50%",
                    padding:"2px 6px"
                  }}
                >
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{marginBottom:"2px"}}
                >
                  
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                </button>
                </span>
              </td> */}
            </tr>
           ))} 

        </tbody>
        {/* end::Table body */}
      </table>
    </div>
  )

    const user_type = Cookies.get('user_type');
    const role = formData2.issued_api.length > 0 ? "Partner" : "Retailer";
    (
      <>
        {user_type === "merchant" && (
          <HeaderWrapper role={role} />
        )}
      </>
    )
  

  const isuueAPIContent = (
    <div
      className='w-full mt-5 mx-10 pt-5'
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#d3d3d3',
        border: '1px solid #d3d3d3',
        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <div className='d-flex align-items-center px-10'>
        <div className='d-flex align-items-center' style={{ flex: 1 }}>
          <h2 className='' >API</h2>
        </div>
      </div>
      <hr />
      <div>

        <Formik initialValues={initValues} onSubmit={() => { }}>
          {() => (
            <Form className='py-10 px-9' noValidate id='kt_create_account_form'>
              <div>
                  {formData2.issued_api.length > 0 ? (
                  <div className='fv-row mb-10'>
                    <label className='d-flex align-items-center form-label'>
                      <span className='required mx-5'>API Key</span>
                    </label>
                    <Field
                      as='textarea'
                      rows={3}
                      style={{ ...inputStyle, width: '550px' }}
                      name='amount'
                      value={formData2.issued_api[0]}
                      className='form-control form-control-lg form-control-solid'
                    />
                    <div className='text-danger mt-2'>
                      <ErrorMessage name='amount' />
                    </div>
                  </div>
                ) : (
                  <div className='pt-5 d-flex justify-content-center'>
                    <button
                      type='submit'
                      style={{ width: 200, backgroundColor: '#327113' }}
                      className='btn btn-success'
                      onClick={() => { setReceiptshow(true) }}
                    >
                      {!loading && <span className='indicator-label'>Issue API</span>}
                      {loading && (
                        <span className='indicator-progress' style={{ display: 'block' }}>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
                    </button>
                  </div>
                )}
                {receiptShow &&

                  <div className='loader-overlay' style={{ ...overlayStyle, ...(receiptShow && activeOverlayStyle), }}>
                    <div style={contentStyle}>

                      <div onClick={() => setReceiptshow(false)} style={{ backgroundColor: '#d3d3d3', padding: "9px", position: "absolute", top: "15%", left: "84.5%", transform: "translate(-35%, -40%)", borderRadius: 20, cursor: 'pointer' }}>
                        <CloseOutlined />
                      </div>
                      {uploadIssueApiReciept}
                    </div>
                  </div>
                }
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )

  const commissionContent = (
    <div
      className='w-full mt-5 mx-10 pt-5'
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderColor: '#d3d3d3',
        border: '1px solid #d3d3d3',
        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <div className='d-flex align-items-center px-10'>
        <div className='d-flex align-items-center' style={{ flex: 1 }}>
          <h2 className='' >Merchant Commission</h2>
        </div>
      </div>
      <hr />
      <div>

        <Formik initialValues={initValues} onSubmit={() => { }}>
          {() => (
            <Form className='py-10 px-9' noValidate id='kt_create_account_form'>
              <div>
                <div className='fv-row mb-10'>
                  <label className='d-flex align-items-center form-label'>
                    <span className='required mx-5'>Commisionss</span>
                  </label>

                  <div className='d-flex'>
                    <div className='fv-row mb-2'>
                      <Field
                        style={{
                          ...inputStyle,
                          width: 500,
                        }}
                        value={commission}
                        readOnly
                        placeholder='Commission'
                        name='commission'
                        className='form-control form-control-lg form-control-solid '
                      />
                      <div className='text-danger mt-2'>
                        <ErrorMessage name='businessDescriptor' />
                      </div>

                    </div>

                  </div>

                  <div className='text-danger mt-2'>
                    <ErrorMessage name='amount' />
                  </div>
                </div>
                <div style={{ width: 300 }}>
                  <Slider
                    min={0}
                    max={upperLimit} // Maximum value for the slider
                    step={0.1} // Step size for the slider
                    onChange={(e) => setCommission(e)}
                    railStyle={{
                      height: 5, // Adjust the line stroke width by changing the height
                      backgroundColor: 'lightgray', // Customize the rail color
                    }}
                    trackStyle={{
                      backgroundColor: 'blue', // Customize the track color
                    }}
                    handleStyle={{
                      borderColor: 'blue', // Customize the handle border color
                      backgroundColor: 'white', // Customize the handle background color
                    }}
                  />
                </div>
                <div className='pt-5 d-flex justify-content-center'>
                  <button
                    type='submit'
                    style={{ width: 200, backgroundColor: '#327113' }}
                    className='btn btn-success'
                    onClick={() => saveCommission()}
                  >
                    {!loading && <span className='indicator-label'>Set Commission</span>}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'block' }}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )

  const tabs = [
    {
      label: 'Profile',
      content: profileContent,
      icon: <PersonIcon style={{ width: 25, height: 25 }} />,
    },
    {
      label: 'Load Wallet',
      icon: <WalletIcon style={{ width: 25, height: 25 }} />,
      content: loadWalletContent,
    },
    { label: 'Transactions', icon: <CardIcon style={{ width: 25, height: 25 }} />, content: transactionContent },
    { label: 'Revenue', icon: <CardIcon style={{ width: 25, height: 25 }} />, content: revenueContent },
    { label: 'Commisions', icon: <WalletIcon style={{ width: 25, height: 25 }} />, content: commissionContent },
    ...(formData2.issued_api.length > 0
      ? [
          {
            label: 'API',
            icon: <CardIcon style={{ width: 25, height: 25 }} />,
            content: isuueAPIContent,
          },
        ]
      : []),
  ];

  // Find the active tab's content
  const activeTabContent = tabs.find((tab) => tab.label === activeTab)?.content

  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        marginTop: -30,
        paddingTop: 20,
      }}
    >
      <div className='d-flex' style={{ alignItems: 'center', paddingLeft:"1%" }}>
        <img style={{borderRadius:"50%"}} src={formData2.merchant_profile_photo} alt='Profile photo' width={70} height={70} />
        <div className='px-10'>
          <h1 style={{ fontSize: 20 }}>Welcome {formData2.merchant_name}</h1>
          <h5 style={{ fontSize: 15 }}>{formData2.merchant_email_id}</h5>
        </div>
      </div>
      {/* Left Side */}
      <div className='d-flex'>
        <div className='' style={{ width: '20%', padding: '20px' }}>
          {tabs.map((tab) => (
            <div
              key={tab.label}
              style={{
                padding: '10px 0',
                marginTop: 20,
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
                fontWeight: activeTab === tab.label ? 'bold' : 'normal',
                color: activeTab === tab.label ? '#327113' : '#333',
              }}
              onClick={() => handleTabClick(tab.label)}
            >
              <div style={{ marginRight: 15 }}>{tab.icon}</div>
              <h3
                style={{
                  color: activeTab === tab.label ? '#327113' : '#333',
                }}
              >
                {tab.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className='my-10' style={{ width: '80%' }}>
          <div>{activeTabContent}</div>
        </div>
      </div>
    </div>
  )
}

export default MerchantProfile