import React, {useState} from 'react'

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

  const handleChange = (event) => {
    const {name, value, type, files} = event.target
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // For file inputs, store the selected file
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleContinue = (event) => {
    event.preventDefault()
    setFormData({
      ...formData,
      showAadharPANFields: true,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
    console.log(formData)
  }
  const handleBack = (event) => {
    event.preventDefault()
  setformChange(false)
  }
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
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter Password'
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

                <button type='submit' className='btn btn-primary mt-3' onClick={()=>setformChange(true)}>
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
