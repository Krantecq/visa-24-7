import { useEffect, useState, useRef, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import TravelerForm from './TravelerForm'
import Cookies from 'js-cookie'
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../../../helpers/axiosInstance'
import { CheckCircleOutline, CircleOutlined } from '@mui/icons-material'
import Loader from '../../../components/Loader'
import { Box, Step, StepLabel, Stepper, Theme, Typography, } from '@mui/material'

interface VerticalProps {
  selectedEntry: any
  show: (value: boolean) => void
  visaList: boolean
  visaListLoader: (value: boolean) => void
  showfinalSubmitLoader: (value: boolean) => void
}

const Vertical: React.FC<VerticalProps> = ({
  selectedEntry,
  showfinalSubmitLoader,
  visaList,
  visaListLoader,
  show,
}) => {
  const handleTravelerDataChange = (data, travelerIndex) => {
    setTravelerForms((prevForms) => {
      const updatedData = [...prevForms]
      updatedData[travelerIndex] = data
      console.log(updatedData)
      return updatedData
    })
  }
  const [applicantForms, setApplicantForms] = useState<any[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  // const [travelerForms, setTravelerForms] = useState([<TravelerForm key={0} onDataChange={handleTravelerDataChange} />]);
  const navigate = useNavigate()

  const [travelerForms, setTravelerForms] = useState<any[]>([
    {},
  ])
  const [isFixed, setIsFixed] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset
    setIsFixed(scrollY >= 180) 
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    fetchwallet();
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const fetchwallet = async () => {
    try {
      const user_id = Cookies.get('user_id');
      const postData = {
        id: user_id
      }
      const response = await axiosInstance.post("/backend/fetch_single_merchant_user", postData);
      console.log("response issss----->", response)
      if (response.status == 203) {
        toast.error("Please Logout And Login Again", {
          position: 'top-center'
        });
      }
      setCurrentWallet(response.data.data.wallet_balance);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };
  const markup_percentage = localStorage.getItem('markup_percentage') ?? '1';

  const additionalFees =
    ((selectedEntry.receipt['Visa Fees']
      ? selectedEntry.receipt['Visa Fees']
      : 0) * ((parseFloat(markup_percentage) ? (1 + (parseFloat(markup_percentage) / 100)) : 1))) +
    (selectedEntry.receipt['Service Fees']
      ? selectedEntry.receipt['Service Fees']
      : 0)
  const totalAmount = travelerForms.length * additionalFees

  const addTravelerForm = () => {
    setTravelerForms((prevForms) => [...prevForms, {}])
  }

  const [currentWallet, setCurrentWallet] = useState('');
  function formatDateWithTimezoneToYMD(dateString) {
    const date = new Date(dateString)
    if (!isNaN(date.getTime())) {
      const year = date.getUTCFullYear()
      const month = String(date.getUTCMonth() + 1).padStart(2, '0')
      const day = String(date.getUTCDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }
    return null 
  }
  const formatDate1 = (dateString) => {
    const date = new Date(dateString)
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
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  }


  const handleReviewAndSave = async () => {
    setLoading(true)
    try {
      for (const travelerForm of travelerForms) {
        const postData = {
          country_code: selectedEntry.country_code,
          entry_process: selectedEntry.value,
          nationality_code: selectedEntry.nationality_code,
          first_name: travelerForm.firstName,
          last_name: travelerForm.lastName,
          birth_place: travelerForm.birthPlace,
          birthday_date: formatDateWithTimezoneToYMD(travelerForm.birthDetail),
          nationality: selectedEntry.nationality_code,
          passport_number: travelerForm.passportNumber,
          passport_issue_date: formatDateWithTimezoneToYMD(travelerForm.passportIssueDate),
          passport_expiry_date: formatDateWithTimezoneToYMD(travelerForm.passPortExpiryDate),
          gender: travelerForm.gender,
          marital_status: travelerForm.maritalStatus,
          application_arrival_date: formatDateWithTimezoneToYMD(
            selectedEntry.application_arrival_date
          ),
          application_departure_date: formatDateWithTimezoneToYMD(
            selectedEntry.application_departure_date
          ),
          application_destination: selectedEntry.country_code,
          fathers_name: travelerForm.fatherName,
          passport_front: travelerForm.passFrontPhoto,
          passport_back: travelerForm.passBackPhoto,
          pan_card: travelerForm.panPhoto,
          photo: travelerForm.travelerPhoto,
          visa_amount:
            Math.ceil(selectedEntry.receipt['Visa Fees'] ? selectedEntry.receipt['Visa Fees'] : 0) +
            (selectedEntry.receipt['Service Fees'] ? selectedEntry.receipt['Service Fees'] : 0),
          markup_visa_amount:
            Math.ceil((selectedEntry.receipt['Visa Fees'] ? selectedEntry.receipt['Visa Fees'] : 0) * ((parseFloat(markup_percentage) ? (1 + (parseFloat(markup_percentage) / 100)) : 1))) +
            (selectedEntry.receipt['Service Fees'] ? selectedEntry.receipt['Service Fees'] : 0),
          visa_description: selectedEntry.description,
        }

        axiosInstance
          .post('/backend/create_user_application', postData)
          .then((response) => {
            const user_id = Cookies.get('user_id')

            const data = {
              merchant_id: user_id,
              application_id: response.data.data,
            }
            axiosInstance
              .patch('/backend/add_applicant', data)
              .then((response) => {
                axiosInstance
                  .post('/backend/merchant/apply_visa', data)
                  .then((response) => {
                    console.log(response.data.data)
                    if (response.status == 200) {
                      toast.success(response.data.msg, {
                        position: 'top-center',
                      })
                    } else {
                      console.log(response.data)
                      toast.error(response.data.msg, {
                        position: 'top-center',
                      })
                    }
                    setLoading(false)
                    navigate('/merchant/dashboard')
                  })
                  .catch((error) => {
                    console.error('Error fetching Atlys data:', error)
                    setLoading(false)
                    toast.error(error, {
                      position: 'top-center',
                    })
                  })
              })
              .catch((error) => {
                console.error('Error fetching Atlys data:', error)
                setLoading(false)
              })
          })
          .catch((error) => {
            console.error('Error fetching Atlys data:', error)
            setLoading(false)
            toast.error(error, {
              position: 'top-center',
            })
          })
      }
    } catch (error) {
      console.error('Error while making API calls:', error)
    }
  }

  const handleDeleteForm = (index) => {
    setTravelerForms((prevForms) => {
      const updatedData = [...prevForms]
      updatedData.splice(index, 1)
      return updatedData
    })
  }

  const stepsContent = [
    {
      title: 'Auto-validation upon submission',
      description:
        'Visa 24/7 performs automated validation after submission. We will let you know if there are any problems with the application.',
    },
    {
      title: 'Visa processed within 30 seconds',
      description: 'Visa 24/7 automatically processes your visa.',
    },
    {
      title: 'Non-refundable after you pay',
      description: 'If canceled after payment, you will not be refunded.',
    },
  ];

  const tabTextStyle = {
    color: '#000',
    cursor: 'pointer',
    padding: '8px',
    fontSize: 16,
    fontWeight: 'bold',
  }

  return (
    <div style={{ backgroundColor: '#fff' }} className='w-full'>
      <Toaster />
      <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
        <div
          style={{
            width: '20%',
            padding: '16px',
            paddingLeft: '10px',
            position: isFixed ? 'fixed' : 'static',
            height: '100%',
            overflowY: 'auto',
            paddingTop: 20,
            top: isFixed ? 80 : 'auto',
          }}
        >
          {travelerForms.map((_, index) => (
            <>
              <div onClick={() => { }} style={{ ...tabTextStyle }}>
                <CheckCircleOutline style={{ color: '#327113', marginRight: 8 }} />
                Traveller {index + 1}
              </div>
              <div style={{ marginLeft: 20 }}>
                <div onClick={() => { }} style={{ ...tabTextStyle }}>
                  <CheckCircleOutline style={{ color: '#327113', marginRight: 10 }} />
                  Passport
                </div>
                <div onClick={() => { }} style={{ ...tabTextStyle }}>
                  <CheckCircleOutline style={{ color: '#327113', marginRight: 10 }} />
                  Passport Back
                </div>
                <div onClick={() => { }} style={{ ...tabTextStyle }}>
                  <CheckCircleOutline style={{ color: '#327113', marginRight: 10 }} />
                  Indian PAN Card
                </div>
                <div onClick={() => { }} style={{ ...tabTextStyle }}>
                  <CheckCircleOutline style={{ color: '#327113', marginRight: 10 }} />
                  Traveller Photo
                </div>
              </div>
            </>
          ))}
          <div onClick={() => { }} style={{ ...tabTextStyle }}>
            <CheckCircleOutline style={{ color: '#327113', marginRight: 10 }} />
            Review
          </div>
          <div onClick={() => { }} style={{ ...tabTextStyle, color: '#696969' }}>
            <CircleOutlined style={{ color: '#327113', marginRight: 10 }} />
            Submit
          </div>
        </div>
        <div style={{ width: '80%', paddingBottom: "5%", marginLeft: isFixed ? '20%' : '0%' }}>
  {travelerForms.map((_, index) => (
    <div key={index}>
      <TravelerForm
        ind={index}
        onDataChange={(newData) => handleTravelerDataChange(newData, index)}
      />
      {travelerForms.length > 1 && index !== 0 && (
        <button
          onClick={() => handleDeleteForm(index)}
          style={{
            color: '#ffffff',
            padding: "7px 10px",
            border: "none",
            backgroundColor: "red",
            width: "100px",
            borderRadius: "5px",
            marginLeft: "20px",
            marginTop: "20px",
            fontSize: "16px"
          }}>
          Delete
        </button>
      )}
    </div>
  ))}
  <div className='d-flex my-10' style={{ justifyContent: 'flex-end', display: 'flex' }}>
    <div
      onClick={addTravelerForm}
      style={{
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        border: '1px solid',
        borderColor: '#696969',
        borderRadius: 10,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        cursor: 'pointer',
      }}>
      <h6
        className='fs-4'
        style={{ color: '#327113', paddingTop: 5, fontSize: 10 }}>
        + Add Another Traveller
      </h6>
    </div>
  </div>


          <div className='d-flex'>
            <div
              className='py-10 px-20'
              style={{
                borderRadius: 15,
                borderColor: '#696969',
                boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.1)',
                marginLeft: 10,
                backgroundColor: 'white',
                width: '60%',
              }}
            >
              <div>
                <h2>Visa Information</h2>
                <p style={{ paddingTop: 5, lineHeight: 2, paddingBottom: 5 }}>
                  {selectedEntry.country_code} - {selectedEntry.description}
                  <br />
                  Travelers: {travelerForms.length}
                  <br />
                  Travel Dates: {formatDate1(selectedEntry.application_arrival_date)} -{' '}
                  {formatDate1(selectedEntry.application_departure_date)}
                </p>
              </div>
              <hr />

              <div style={{ paddingTop: 10, paddingBottom: 1 }}>
                <h2>Expected Visa Approval</h2>
                <p>10/12/23, if submitted now!</p>
              </div>
              <hr />
              <div>
                <h2 style={{ paddingTop: 10, paddingBottom: 1 }}>Application Details</h2>
                <br />
                <Stepper orientation="vertical" >
                  {stepsContent.map((step, index) => (
                    <Step key={index}>
                      <StepLabel >
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                          <Typography variant="h6">{step.title}</Typography>
                          <Typography >
                            {step.description}
                          </Typography>
                        </Box>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </div>
            <div
              className='py-5 px-5'
              style={{
                borderRadius: 10,
                borderColor: '#f5f5f5',
                boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.1)',
                marginLeft: '10%',
                backgroundColor: 'white',
                height: 340,
                marginBottom: 20,
                width: '25%',
              }}
            >
              <h2 style={{ fontSize: 20, marginBottom: 20 }}>Price Details</h2>
              <div
                style={{
                  padding: 20,
                  backgroundColor: 'rgb(50 113 19 / 22%)',
                  borderRadius: 10,
                  paddingTop: 30,
                }}
              >
                {travelerForms.map((traveler, index) => (
                  <div
                    key={index}
                    className='d-flex'
                    style={{ justifyContent: 'space-between', width: '100%' }}
                  >
                    <h5>Traveler {index + 1}:</h5>
                    <h5>
                      {((selectedEntry.receipt['Visa Fees']
                        ? selectedEntry.receipt['Visa Fees']
                        : 0) * ((parseFloat(markup_percentage) ? (1 + (parseFloat(markup_percentage) / 100)) : 1))) +
                        (selectedEntry.receipt['Service Fees']
                          ? selectedEntry.receipt['Service Fees']
                          : 0)}
                      /-
                    </h5>
                  </div>
                ))}

                <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
                  <h5>Total: </h5>
                  <h5>{totalAmount}/-</h5>
                </div>
                <hr />
                <div className='d-flex' style={{ justifyContent: 'space-between', width: '100%' }}>
                  <p>Current Wallet Balance</p>
                  <p>{currentWallet}/-</p>
                </div>
              </div>
              <div
                onClick={handleReviewAndSave}
                className='mb-10 mt-10'
                style={{
                  height: 40,
                  width: 190,
                  marginBottom: 20,
                  border: '1px solid',
                  marginLeft: 20,
                  borderColor: '#696969',
                  borderRadius: 25,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#327113',
                  cursor: 'pointer',
                }}
              >
                <h6 className='fs-4' style={{ color: 'white', paddingTop: 7 }}>
                  Review and Save
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className='loader-overlay'>
          <Loader loading={loading} />
        </div>
      )}
    </div>
  )
}

export { Vertical }