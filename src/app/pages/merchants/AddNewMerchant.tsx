import React, { useState } from 'react'
import axios from 'axios';

function AddNewMerchant() {

  const [formChange, setformChange] = useState(false)
  const [formData, setFormData] = useState({
    gstIn: '',
    email: '',
    password: '',
    companyName: '',
    fullName: '',
    contactNo: '',
    showAadharPANFields: false, // To track whether to show Aadhar and PAN fields
    aadharNo: '',
    aadharFront: null,
    aadharBack: null,
    panNo: '',
    panPhoto: null,
  })

  const [aadharFrontUrl, setAadharFrontUrl] = useState('');
  const [aadharBackUrl, setAadharBackUrl] = useState('');
  const [panPhotoUrl, setPanPhotoUrl] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // State to track success


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });

      if (name === 'aadharFront') {
        setAadharFrontUrl('');
      } else if (name === 'aadharBack') {
        setAadharBackUrl('');
      } else if (name === 'panPhoto') {
        setPanPhotoUrl('');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      if (name === 'aadharFrontUrl') {
        setAadharFrontUrl(value);
      } else if (name === 'aadharBackUrl') {
        setAadharBackUrl(value);
      } else if (name === 'panPhotoUrl') {
        setPanPhotoUrl(value);
      }

    }
  };

  const handleContinue = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      showAadharPANFields: true,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    const aadharFrontUrl = await handleFileUpload(formData.aadharFront);
    const aadharBackUrl = await handleFileUpload(formData.aadharBack);
    const panPhotoUrl = await handleFileUpload(formData.panPhoto);

    // Now, you have the URLs in aadharFrontUrl, aadharBackUrl, and panPhotoUrl
    // You can use them as needed, e.g., send them to your server or display them
    console.log('Aadhar Front URL:', aadharFrontUrl);
    console.log('Aadhar Back URL:', aadharBackUrl);
    console.log('PAN Photo URL:', panPhotoUrl);

    const postData = {
      merchant_name: formData.fullName,
      merchant_company_name: formData.companyName,
      merchant_email_id: formData.email,
      merchant_phone_number: '9999999999', // Static value
      merchant_profile_photo: '', // Static value
      merchant_gst_no: formData.gstIn,
      merchant_aadhar_no: formData.aadharNo,
      merchant_pan_no: formData.panNo,
      merchant_aadhar_front_photo: aadharFrontUrl,
      merchant_aadhar_back_photo: aadharBackUrl,
      merchant_pan_photo: panPhotoUrl,
    };


    const response = await axios.post('http://localhost:5003/backend/create_merchant_user', postData);

    if (response?.status === 200) {
      setIsSuccess(true);
    } else if (response?.status === 203) {
      setIsSuccess(false); // Reset to false if not successful
    }
    // Assuming your server responds with the file URL
    console.log(response)
  };
  const handleBack = (event) => {
    event.preventDefault()
    setformChange(false)
  }
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Make a POST request to your server to upload the file
      const response = await axios.post('http://localhost:5003/backend/upload_image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Assuming your server responds with the file URL
      const fileUrl = response.data.data;
      return fileUrl; // Return the file URL
    } catch (error) {
      console.error('Error uploading file:', error);
      return ''; // Return an empty string in case of an error
    }
  };




  return (
    <div>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title d-flex align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Add New Merchant</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>3 New Member</span>
        </h3>
      </div>

      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <h1 className='text-center mb-5'>Onboard New Merchants</h1>
          <div className='col-md-6'>
            {!formChange ? (
              <form>
                <div className='mb-3'>
                  <label htmlFor='gstIn' className='form-label'>
                    GST IN (Optional)
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='gstIn'
                    name='gstIn'
                    value={formData.gstIn}
                    onChange={handleChange}
                    placeholder='Enter GST IN'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter Email'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='companyName' className='form-label'>
                    Company Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='companyName'
                    name='companyName'
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder='Enter Company Name'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='fullName' className='form-label'>
                    Merchant Full Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Enter Merchant Full Name'
                    required
                  />
                </div>

                <button type='submit' className='btn btn-primary mt-3' onClick={() => setformChange(true)}>
                  Continue
                </button>
              </form>
            ) : (
              <form>
                <>
                  <div className='mb-3'>
                    <label htmlFor='aadharNo' className='form-label'>
                      Enter Aadhaar No.
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='aadharNo'
                      name='aadharNo'
                      value={formData.aadharNo}
                      onChange={handleChange}
                      placeholder='Enter Aadhaar No.'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='aadharFront' className='form-label'>
                      Upload Aadhaar Front
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      id='aadharFront'
                      name='aadharFront'
                      accept='image/*'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='aadharBack' className='form-label'>
                      Upload Aadhaar Back
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      id='aadharBack'
                      name='aadharBack'
                      accept='image/*'
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='panNo' className='form-label'>
                      Enter PAN No.
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='panNo'
                      name='panNo'
                      value={formData.panNo}
                      onChange={handleChange}
                      placeholder='Enter PAN No.'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='panPhoto' className='form-label'>
                      Upload PAN Photo
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      id='panPhoto'
                      name='panPhoto'
                      accept='image/*'
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
                <button type='button' className='btn btn-primary' onClick={handleBack}>
                  Back
                </button>
                <button type='submit' className='btn btn-success mx-3' onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewMerchant
