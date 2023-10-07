import { useEffect, useState, useRef, ChangeEvent } from 'react';
import { KTIcon } from '../../../../_metronic/helpers';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { ICreateAccount, inits } from './CreateAccountWizardHelper';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Delete';
import MerchantApplyVisa from '../../../components/MerchantApplyVisa';
interface VerticalProps {
  selectedEntry: any; // Define the type for selectedEntry

  show: (value: boolean) => void;
  visaList: boolean;
  visaListLoader: (value: boolean) => void;
  showfinalSubmitLoader: (value: boolean) => void;
}


const inputStyle = {
  border: '1.5px solid #d3d3d3',    // Border width and color
  borderRadius: '15px',         // Border radius
  padding: '10px',
  paddingLeft: '20px',             // Padding
  width: '90%',               // 100% width
  boxSizing: 'border-box',     // Include padding and border in the width calculation
}
const Vertical: React.FC<VerticalProps> = ({ selectedEntry, showfinalSubmitLoader, visaList, visaListLoader, show }) => {
  const [initValues] = useState<ICreateAccount>(inits);
  const [currentStep, setCurrentStep] = useState(0);
  const [formDataStep1, setFormDataStep1] = useState<any>(null);
  const [formDataStep2, setFormDataStep2] = useState<any>(null);
  const navigate = useNavigate();

  const [passportFrontImageURL, setPassportFrontImageURL] = useState('')
  const [passportBackImageURL, setPassportBackImageURL] = useState('')
  const [photo, setPhoto] = useState('')
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep == 0) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/dashboard');

    }
  };
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
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div style={{ backgroundColor: '#fff' }} className='w-full'>
      <MerchantApplyVisa visaListLoader={visaListLoader} visaList={visaList} show={show} onApiDataReceived={function (data: any): void {
        throw new Error('Function not implemented.');
      }} />
      <div className='py-10 px-20' style={{
        borderRadius: 20, borderColor: '#f5f5f5',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        marginLeft: 10,
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
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handleFileSelect}
                />
              </div>
            }
          </div>

          <div className='d-flex flex-row-fluid flex-center bg-body rounded' style={{ width: '70%', backgroundColor: 'blue' }}>
            <Formik initialValues={initValues} onSubmit={nextStep}>
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
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handleFileSelectBack}
                />
              </div>
            }
          </div>

          <div className='d-flex flex-row-fluid flex-center bg-body rounded' style={{ width: '70%', backgroundColor: 'blue' }}>
            <Formik initialValues={initValues} onSubmit={nextStep}>
              {() => (
                <Form className='py-20 px-9' noValidate id='kt_create_account_form'>

                  <div className='fv-row mb-10'>
                    <label className='d-flex align-items-center form-label'>
                      <span className='required'>Father's Name</span>
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
                      <span className='required'>Mother's Name</span>
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
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept='.jpeg, .jpg, .pdf, .png'
                  onChange={handlePhotoSelect}
                />
              </div>
            }
          </div>

        </div>
      </div>
      <div className='d-flex mt-10' style={{ justifyContent: 'flex-end', display: 'flex' }}>

        <div className="mb-10 mx-5" style={{ height: 40, paddingLeft: 15, paddingRight: 15, border: "1px solid", borderColor: '#696969', borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
          <h6 className="fs-4" style={{ color: '#007bff' }}>
            + Add Another Traveler
          </h6>
        </div>

        <div className="mb-10 mx-5" style={{ height: 40, width: 190, border: "1px solid", borderColor: '#696969', borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#007bff' }}>
          <h6 className="fs-4" style={{ color: 'white' }}>
            Review and Save
          </h6>
        </div>
      </div>
      <div className='d-flex'>
        <div className='py-10 px-20' style={{
          borderRadius: 20, borderColor: '#f5f5f5',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          marginLeft: 10,
          backgroundColor: 'white'
        }}>
          <div>
            <h2>
              Visa Information
            </h2>
            <p>
              United Arab Emirates - UAE 30 Days Single Entry E-Visa
              Travelers: 1
              Travel Dates: Oct 7, 2023 - Nov 15, 2023
            </p>
          </div>
          <hr />

          <div>
            <h2>
              Expected Visa Approval
            </h2>
            <p>
              10/12/23, if submitted now!
            </p>
          </div>
          <hr />
          <div>
            <h2>Application Details</h2>
            <br />

            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li >
                <h3>
                  ✓
                  Auto-validation upon submission
                </h3>

                Atlys performs automated validation after submission. We will let you know if there are any problems with the application.
              </li>
              <li >
                <h3>
                  ✓ Visa processed within 30 seconds
                </h3>

                Atlys automatically processes your visa.
              </li>
              <li >
                <h3>
                  ✓
                  Non-refundable after you pay
                </h3>

                If canceled after payment, you will not be refunded.
              </li>
            </ul>
          </div>
        </div>
        <div className='py-10 px-20' style={{
          borderRadius: 10, borderColor: '#f5f5f5',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
          marginLeft: 70,
          backgroundColor: 'white',
          height: 260,
          width:300

        }}>
          <h2>Price Details</h2>
          <h6>
            Traveler 1 : {'           '}6500/-
          </h6>
          <hr />
          <h6>
            Total : {'           '}6500/-
          </h6>

          <div className="mb-10 mt-20" style={{ height: 40, width: 190, border: "1px solid", borderColor: '#696969', borderRadius: 20, alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#007bff' }}>
            <h6 className="fs-4" style={{ color: 'white' }}>
              Review and Save
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Vertical };
