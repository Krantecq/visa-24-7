import { useEffect, useState, useRef, ChangeEvent } from 'react';
import { KTIcon } from '../../../../_metronic/helpers';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { ICreateAccount, inits } from './CreateAccountWizardHelper';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Delete';
function TravelerForm(){
const [initValues] = useState<ICreateAccount>(inits);
  const passportFrontFileInputRef = useRef<HTMLInputElement | null>(null);
  const passportBackFileInputRef = useRef<HTMLInputElement | null>(null);
  const photoFileInputRef = useRef<HTMLInputElement | null>(null);
  const [passportFrontImageURL, setPassportFrontImageURL] = useState('')
  const [passportBackImageURL, setPassportBackImageURL] = useState('')
  const [photo, setPhoto] = useState('');

  
const inputStyle = {
    border: '1.5px solid #d3d3d3',    // Border width and color
    borderRadius: '15px',         // Border radius
    padding: '10px',
    paddingLeft: '20px',             // Padding
    width: '90%',               // 100% width
    boxSizing: 'border-box',     // Include padding and border in the width calculation
  }
      // Function to handle file selection
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update the state variable with the image data (base64-encoded)
        if (e.target) {
          setPassportFrontImageURL(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload = () => {
    // Trigger the hidden file input
    if (passportFrontFileInputRef.current) {
      passportFrontFileInputRef.current.click();
    }
  };
  const handleFileSelectBack = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Update the state variable with the image data (base64-encoded)
        if (e.target) {
          setPassportBackImageURL(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };
  const handleImageUploadBack = () => {
    // Trigger the hidden file input
    if (passportBackFileInputRef.current) {
      passportBackFileInputRef.current.click();
    }
  };

  const handlePhotoSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Update the state variable with the image data (base64-encoded)
        if (e.target) {
          setPhoto(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };
  const handlePhotoUpload = () => {
    // Trigger the hidden file input
    if (photoFileInputRef.current) {
      photoFileInputRef.current.click();
    }
  };


  return(
    <div className='py-10 px-20' style={{
        borderRadius: 20, borderColor: '#f5f5f5',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        marginLeft: 10,
        marginTop:10,
        backgroundColor: 'white'
      }}>

        <h2>Traveller 1 </h2>
        <hr />
        <br />
        <h3>
          Upload Traveler's Front Passport Page
        </h3>
        <p>
          United Arab Emirates requires a scan of the traveler's passport. Upload a clear passport image and Atlys will scan and enter all the details directly from the file.
        </p>
        <div className='d-flex ' style={{ width: '100%' }}>
          <div style={{ width: '40%', marginTop: 70 }}  >
            <h6>
              Passport Front Page Image
            </h6>
            {passportFrontImageURL ? (
              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', marginTop: 20 }}>
                <div onClick={() => setPassportFrontImageURL('')} style={{ justifyContent: 'flex-end', position: 'absolute', backgroundColor: 'white', padding: 7, borderRadius: 50, cursor: 'pointer' }}>
                  <ClearIcon style={{ color: 'red' }} />
                </div>
                <img
                  src={passportFrontImageURL}
                  alt='Uploaded Image'
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            )
              :

              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', paddingTop: 40, marginTop: 20 }}>
                <h4 className='mx-10 mt-10'>
                  Passport Front Photo
                </h4>
                <button type='button' onClick={handleImageUpload} className='btn btn-lg btn-primary me-3 mt-7' style={{ justifyContent: 'flex-end' }}>
                  <span className='indicator-label'>
                    Select Files
                  </span>
                </button>
                <p className='text-bold pt-5 fs-9' style={{ color: '#555555' }}>
                  Supports JPEG, JPG, PDF, PNG.
                </p>
                <input
                  type='file'
                  ref={passportFrontFileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handleFileSelect}
                />
              </div>
            }
          </div>

          <div className='d-flex flex-row-fluid flex-center bg-body rounded' style={{ width: '70%', backgroundColor: 'blue' }}>
            <Formik initialValues={initValues} onSubmit={()=>{}}>
              {() => (
                <Form className='py-20 px-9' noValidate id='kt_create_account_form'>
                  <div>
                    <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                      <div className='fv-row mb-10'>
                        <label className='form-label required'>First Name</label>

                        <Field name='businessName' style={inputStyle} className='form-control form-control-lg form-control-solid' />
                        <div className='text-danger mt-2'>
                          <ErrorMessage name='businessName' />
                        </div>
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center form-label'>
                          <span className='required'>Last Name</span>
                        </label>

                        <Field
                          style={inputStyle}
                          name='businessDescriptor'
                          className='form-control form-control-lg form-control-solid'
                        />
                        <div className='text-danger mt-2'>
                          <ErrorMessage name='businessDescriptor' />
                        </div>
                      </div>
                    </div>

                    <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center form-label'>
                          <span className='required'>Birth Place</span>
                        </label>

                        <Field
                          style={inputStyle}
                          name='businessDescriptor'
                          className='form-control form-control-lg form-control-solid'
                        />
                        <div className='text-danger mt-2'>
                          <ErrorMessage name='businessDescriptor' />
                        </div>
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center form-label'>
                          <span className='required'>Birth Detail</span>
                        </label>

                        <Field
                          style={inputStyle}
                          name='businessDescriptor'
                          className='form-control form-control-lg form-control-solid'
                        />
                        <div className='text-danger mt-2'>
                          <ErrorMessage name='businessDescriptor' />
                        </div>
                      </div>
                    </div>

                    <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                      <div className='fv-row mb-10'>
                        <label className='form-label required'>Gender</label>

                        <Field
                          as='select'
                          name='businessType'
                          style={{ width: 215 }}
                          className='form-select form-select-lg form-select-solid'
                        >
                          <option></option>
                          <option value='1'>Male</option>
                          <option value='1'>Female</option>
                          <option value='2'>Others</option>
                        </Field>
                        <div className='text-danger mt-2'>
                          <ErrorMessage name='businessType' />
                        </div>
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='form-label required'>Marital Status</label>

                        <Field
                          as='select'
                          style={{ width: 215 }}
                          name='businessType'
                          className='form-select form-select-lg form-select-solid'
                        >
                          <option></option>
                          <option value='1'>Yes</option>
                          <option value='1'>No</option>
                        </Field>
                        <div className='text-danger mt-2'>
                          <ErrorMessage name='businessType' />
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

        </div>

        <h3>
          Upload Traveler's Back Passport Page
        </h3>
        <p>United Arab Emirates requires a scan of the back page of the traveler's passport. Upload a clear passport image and Atlys will scan and enter all the details directly from the file.
        </p>
        <div className='d-flex ' style={{ width: '100%' }}>
          <div style={{ width: '40%', marginTop: 10 }}  >
            <h6>
              Passport Back Page Image
            </h6>
            {passportBackImageURL ? (
              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', marginTop: 20 }}>
                <div onClick={() => setPassportBackImageURL('')} style={{ justifyContent: 'flex-end', position: 'absolute', backgroundColor: 'white', padding: 7, borderRadius: 50, cursor: 'pointer' }}>
                  <ClearIcon style={{ color: 'red' }} />
                </div>
                <img
                  src={passportBackImageURL}
                  alt='Uploaded Image'
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            )
              :

              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', paddingTop: 40, marginTop: 20 }}>
                <h4 className='mx-10 mt-10'>
                  Passport Back Photo
                </h4>
                <button type='button' onClick={handleImageUploadBack} className='btn btn-lg btn-primary me-3 mt-7' style={{ justifyContent: 'flex-end' }}>
                  <span className='indicator-label'>
                    Select Files
                  </span>
                </button>
                <p className='text-bold pt-5 fs-9' style={{ color: '#555555' }}>
                  Supports JPEG, JPG, PDF, PNG.
                </p>
                <input
                  type='file'
                  ref={passportBackFileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handleFileSelectBack}
                />
              </div>
            }
          </div>

          <div className='d-flex flex-row-fluid flex-center bg-body rounded' style={{ width: '70%', backgroundColor: 'blue' }}>
            <Formik initialValues={initValues} onSubmit={()=>{}}>
              {() => (
                <Form className='py-20 px-9' noValidate id='kt_create_account_form'>

                  <div className='fv-row mb-10'>
                    <label className='d-flex align-items-center form-label'>
                      <span className='required'>Father's Name</span>
                    </label>

                    <Field
                      style={{ ...inputStyle, width: '450px' }}
                      name='businessDescriptor'
                      className='form-control form-control-lg form-control-solid'
                    />
                    <div className='text-danger mt-2'>
                      <ErrorMessage name='businessDescriptor' />
                    </div>
                  </div>

                  <div className='fv-row mb-10'>
                    <label className='d-flex align-items-center form-label'>
                      <span className='required'>Mother's Name</span>
                    </label>

                    <Field
                      style={{ ...inputStyle, width: '450px' }}
                      name='businessDescriptor'
                      className='form-control form-control-lg form-control-solid'
                    />
                    <div className='text-danger mt-2'>
                      <ErrorMessage name='businessDescriptor' />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

        </div>

        <h3 className='mt-20'>
          Upload PAN Card Photo
        </h3>
        <p>
          The destination country requires a passport-sized photo of the traveler. The photo should have a solid light-colored background, like a white wall or door, and be taken in a well lit room. The traveler should have a neutral facial expression and not be wearing any headgear or glasses.
        </p>
        <div className='d-flex ' style={{ width: '100%' }}>
          <div style={{ width: '40%', marginTop: 20, }}  >
            <h6>
              Pan Card Photo
            </h6>
            {photo ? (
              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', marginTop: 20 }}>
                <div onClick={() => setPassportFrontImageURL('')} style={{ justifyContent: 'flex-end', position: 'absolute', backgroundColor: 'white', padding: 7, borderRadius: 50, cursor: 'pointer' }}>
                  <ClearIcon style={{ color: 'red' }} />
                </div>
                <img
                  src={photo}
                  alt='Uploaded Image'
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            )
              :
              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', paddingTop: 40, marginTop: 20 }}>
                <h4 className='mx-10 mt-10'>
                  PAN Card Photo
                </h4>
                <button type='button' onClick={handlePhotoUpload} className='btn btn-lg btn-primary me-3 mt-7' style={{ justifyContent: 'flex-end' }}>
                  <span className='indicator-label'>
                    Select Files
                  </span>
                </button>
                <p className='text-bold pt-5 fs-9' style={{ color: '#555555' }}>
                  Supports JPEG, JPG, PDF, PNG.
                </p>
                <input
                  type='file'
                  // ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handlePhotoSelect}
                />
              </div>
            }
          </div>
          <div style={{ marginLeft: 50 }}>
            <Formik initialValues={initValues} onSubmit={()=>{}}>
              {() => (
                <Form className='py-20 px-9' noValidate id='kt_create_account_form'>

                  <div className='fv-row mb-10'>
                    <label className='d-flex align-items-center form-label'>
                      <span className='required'>PAN Number</span>
                    </label>

                    <Field
                      style={{ ...inputStyle, width: '450px' }}
                      name='businessDescriptor'
                      className='form-control form-control-lg form-control-solid'
                    />
                    <div className='text-danger mt-2'>
                      <ErrorMessage name='businessDescriptor' />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <h3 className='mt-20'>
          Upload Traveler Photo
        </h3>
        <p>
          The destination country requires a passport-sized photo of the traveler. The photo should have a solid light-colored background, like a white wall or door, and be taken in a well lit room. The traveler should have a neutral facial expression and not be wearing any headgear or glasses.
        </p>
        <div className='d-flex ' style={{ width: '100%' }}>
          <div style={{ width: '40%', marginTop: 20 }}  >
            <h6>
              Photo
            </h6>
            {photo ? (
              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', marginTop: 20 }}>
                <div onClick={() => setPassportFrontImageURL('')} style={{ justifyContent: 'flex-end', position: 'absolute', backgroundColor: 'white', padding: 7, borderRadius: 50, cursor: 'pointer' }}>
                  <ClearIcon style={{ color: 'red' }} />
                </div>
                <img
                  src={photo}
                  alt='Uploaded Image'
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            )
              :
              <div style={{ border: '4px dotted gray', width: "100%", height: 300, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', paddingTop: 40, marginTop: 20 }}>
                <h4 className='mx-10 mt-10'>
                  Traveller Photo
                </h4>
                <button type='button' onClick={handlePhotoUpload} className='btn btn-lg btn-primary me-3 mt-7' style={{ justifyContent: 'flex-end' }}>
                  <span className='indicator-label'>
                    Select Files
                  </span>
                </button>
                <p className='text-bold pt-5 fs-9' style={{ color: '#555555' }}>
                  Supports JPEG, JPG, PDF, PNG.
                </p>
                <input
                  type='file'
                  ref={photoFileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handlePhotoSelect}
                />
              </div>
            }
          </div>
        </div>
      </div>
  )
}

export default TravelerForm