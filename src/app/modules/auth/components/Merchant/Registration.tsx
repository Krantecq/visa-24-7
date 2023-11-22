/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef,ChangeEvent } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { getUserByToken, register } from '../../core/_requests'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { PasswordMeterComponent } from '../../../../../_metronic/assets/ts/components'
import { useAuth } from '../../core/Auth'
import axiosInstance from '../../../../helpers/axiosInstance'
import { toast } from 'react-toastify'
import axios from 'axios'
import Cookies from 'js-cookie'; 

const validationSchema = Yup.object().shape({
  merchant_name: Yup.string().required('Name is required'),
  merchant_company_name: Yup.string().required('Company name is required'),
  merchant_email_id: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  merchant_phone_number: Yup.string().required('Contact Number is required'),
  merchant_gst_no: Yup.string().required('GST No. is required'),
  merchant_pan_no: Yup.string().required('PAN No. is required'),
  merchant_address_one_line: Yup.string().required('Address is required'),
  merchant_address_second_line: Yup.string().required('Address is required'),
  merchant_state: Yup.string().required('State is required'),
  merchant_zip_code: Yup.string().required('Zip Code is required'),
  wallet_balance: Yup.number()
    .typeError('Wallet balance must be a number')
    .required('Wallet balance is required')
    .min(0, 'Wallet balance must be greater than or equal to 0'),
});


export function Registration() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const [panPhotoUrl, setPanPhotoUrl] = useState('');
  const [photo, setPhoto] = useState('');
  const photoFileInputRef = useRef<HTMLInputElement | null>(null)
  const panFileInputRef = useRef<HTMLInputElement | null>(null)
  const [formData, setFormData] = useState({
    merchant_name: '',
    merchant_company_name: '',
    merchant_email_id: '',
    merchant_phone_number: '',
    merchant_profile_photo: '',
    merchant_gst_no: '',
    merchant_pan_no: '',
    merchant_country: '',
    merchant_state: '',
    merchant_zip_code: '',
    merchant_address_one_line: '',
    merchant_address_second_line: '',
    merchant_pan_photo: '',
    wallet_balance: '0'
  })

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
    // 
    try {
      
      axiosInstance.post('/backend/register_merchant_user', formData)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setLoading(false);
            toast.success(response.data.msg, {
              position: "top-center", // Center the toast notification
            });
            // Cookies.set('isLoggedIn', 'true', { expires: 15 });
            // Cookies.set('user_id', response.data.user_id,{ expires: 15 });
            // Cookies.set('user_type', 'merchant',{ expires: 15 });

            setTimeout(() => {
              window.location.href = '/merchant/login'                
            }, 400);
          } else {
            setLoading(false);
            toast.error(response.data.msg,{
              position:'top-center'
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
    },
  });
  const handleFileSelectBack = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = async (e) => {
        // Update the state variable with the image data (base64-encoded)
        if (e.target) {
          setPanPhotoUrl(e.target.result as string)
          try {
            // Assuming handleFileUpload is an asynchronous function that returns a promise
            const imageLink = await handleFileUpload(file)
            console.log(imageLink)

            // Update the form data with the image link
            setFormData({ ...formData, merchant_pan_photo: imageLink })
          } catch (error) {
            console.error('Error uploading image:', error)
          }
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({ ...formData, merchant_country: selectedCountry });
  }
  
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Make a POST request to your server to upload the file
      const response = await axiosInstance.post('/backend/upload_image/upload', formData, {
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

  const handleSaveClick = async () => {
    setLoading(true);
    const response = await axiosInstance.post('/backend/register_merchant_user', formData)
    if (response.status === 200) {
      setLoading(false);
      toast.success(response.data.msg, {
        position: "top-center", // Center the toast notification
      });
      // Cookies.set('isLoggedIn', 'true', { expires: 15 });
      // Cookies.set('user_id', response.data.user_id,{ expires: 15 });
      // Cookies.set('user_type', 'merchant',{ expires: 15 });

      setTimeout(() => {
        window.location.href = '/merchant/login'                
      }, 400);
    } else {
      setLoading(false);
      toast.error(response.data.msg,{
        position:'top-center'
      });
    }
  }
  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        if (e.target) {
          setPhoto(e.target.result as string)

          try {
            // Assuming handleFileUpload is an asynchronous function that returns a promise
            const imageLink = await handleFileUpload(file)
            setFormData({ ...formData, merchant_profile_photo: imageLink })

            // Update the form data with the image link
          } catch (error) {
            console.error('Error uploading image:', error)
          }
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  }
  
  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <div style={{  maxHeight: '100vh', flex: 1 }}>
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
        {/* end::Title */}

        {/* <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div> */}
      </div>
      {/* end::Heading */}


      {/* begin::Form group Firstname */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Name</label>
        <input
          placeholder='First name'
          type='text'
          value={formData.merchant_name}
          onChange={(e) => handleFieldChange('merchant_name', e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
      </div>
      {/* end::Form group */}
      <div className='fv-row mb-5'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>Company name</label>
        <input
          placeholder='Company name'
          type='text'
          value={formData.merchant_company_name}
          onChange={(e) => handleFieldChange('merchant_company_name', e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
        {/* end::Form group */}
      </div>

      {/* begin::Form group Email */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
        <input
          placeholder='Email'
          type='email'
          autoComplete='off'
          value={formData.merchant_email_id}
          onChange={(e) => handleFieldChange('merchant_email_id', e.target.value)}
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
      </div>
      {/* end::Form group */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Contact Number</label>
        <input
          placeholder='Contact Number'
          type='email'
          autoComplete='off'
          value={formData.merchant_phone_number}
          onChange={(e) => handleFieldChange('merchant_phone_number', e.target.value)}
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
      </div>

      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>GST No.</label>
        <input
          placeholder='GST No.'
          type='email'
          value={formData.merchant_gst_no}
          onChange={(e) => handleFieldChange('merchant_gst_no', e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
      </div>
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>PAN No.</label>
        <input
          placeholder='PAN No.'
          type='email'
          value={formData.merchant_pan_no}
          onChange={(e) => handleFieldChange('merchant_pan_no', e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
      </div>
      <div className='fv-row mb-5'>
      <label className='form-label fw-bolder text-dark fs-6'>Country</label>
      <select
    value={formData.merchant_country}
    onChange={(e) => handleFieldChange('merchant_country', e.target.value)}
    autoComplete='off'
    className={clsx(
      'form-control bg-transparent',  
    )}
  >
        <option value='' disabled hidden>Country...</option>
        <option value='AF'>Afghanistan</option>
        <option value='AX'>Aland Islands</option>
        <option value='AL'>Albania</option>
        <option value='DZ'>Algeria</option>
        <option value='AS'>American Samoa</option>
        <option value='AD'>Andorra</option>
        <option value='AO'>Angola</option>
        <option value='AI'>Anguilla</option>
        <option value='AQ'>Antarctica</option>
        <option value='AG'>Antigua and Barbuda</option>
        <option value='AR'>Argentina</option>
        <option value='AM'>Armenia</option>
        <option value='AW'>Aruba</option>
        <option value='AU'>Australia</option>
        <option value='AT'>Austria</option>
        <option value='AZ'>Azerbaijan</option>
        <option value='BS'>Bahamas</option>
        <option value='BH'>Bahrain</option>
        <option value='BD'>Bangladesh</option>
        <option value='BB'>Barbados</option>
        <option value='BY'>Belarus</option>
        <option value='BE'>Belgium</option>
        <option value='BZ'>Belize</option>
        <option value='BJ'>Benin</option>
        <option value='BM'>Bermuda</option>
        <option value='BT'>Bhutan</option>
        <option value='BO'>Bolivia, Plurinational State of</option>
        <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
        <option value='BA'>Bosnia and Herzegovina</option>
        <option value='BW'>Botswana</option>
        <option value='BV'>Bouvet Island</option>
        <option value='BR'>Brazil</option>
        <option value='IO'>British Indian Ocean Territory</option>
        <option value='BN'>Brunei Darussalam</option>
        <option value='BG'>Bulgaria</option>
        <option value='BF'>Burkina Faso</option>
        <option value='BI'>Burundi</option>
        <option value='KH'>Cambodia</option>
        <option value='CM'>Cameroon</option>
        <option value='CA'>Canada</option>
        <option value='CV'>Cape Verde</option>
        <option value='KY'>Cayman Islands</option>
        <option value='CF'>Central African Republic</option>
        <option value='TD'>Chad</option>
        <option value='CL'>Chile</option>
        <option value='CN'>China</option>
        <option value='CX'>Christmas Island</option>
        <option value='CC'>Cocos (Keeling) Islands</option>
        <option value='CO'>Colombia</option>
        <option value='KM'>Comoros</option>
        <option value='CG'>Congo</option>
        <option value='CD'>Congo, the Democratic Republic of the</option>
        <option value='CK'>Cook Islands</option>
        <option value='CR'>Costa Rica</option>
        <option value='CI'>Côte d'Ivoire</option>
        <option value='HR'>Croatia</option>
        <option value='CU'>Cuba</option>
        <option value='CW'>Curaçao</option>
        <option value='CY'>Cyprus</option>
        <option value='CZ'>Czech Republic</option>
        <option value='DK'>Denmark</option>
        <option value='DJ'>Djibouti</option>
        <option value='DM'>Dominica</option>
        <option value='DO'>Dominican Republic</option>
        <option value='EC'>Ecuador</option>
        <option value='EG'>Egypt</option>
        <option value='SV'>El Salvador</option>
        <option value='GQ'>Equatorial Guinea</option>
        <option value='ER'>Eritrea</option>
        <option value='EE'>Estonia</option>
        <option value='ET'>Ethiopia</option>
        <option value='FK'>Falkland Islands (Malvinas)</option>
        <option value='FO'>Faroe Islands</option>
        <option value='FJ'>Fiji</option>
        <option value='FI'>Finland</option>
        <option value='FR'>France</option>
        <option value='GF'>French Guiana</option>
        <option value='PF'>French Polynesia</option>
        <option value='TF'>French Southern Territories</option>
        <option value='GA'>Gabon</option>
        <option value='GM'>Gambia</option>
        <option value='GE'>Georgia</option>
        <option value='DE'>Germany</option>
        <option value='GH'>Ghana</option>
        <option value='GI'>Gibraltar</option>
        <option value='GR'>Greece</option>
        <option value='GL'>Greenland</option>
        <option value='GD'>Grenada</option>
        <option value='GP'>Guadeloupe</option>
        <option value='GU'>Guam</option>
        <option value='GT'>Guatemala</option>
        <option value='GG'>Guernsey</option>
        <option value='GN'>Guinea</option>
        <option value='GW'>Guinea-Bissau</option>
        <option value='GY'>Guyana</option>
        <option value='HT'>Haiti</option>
        <option value='HM'>Heard Island and McDonald Islands</option>
        <option value='VA'>Holy See (Vatican City State)</option>
        <option value='HN'>Honduras</option>
        <option value='HK'>Hong Kong</option>
        <option value='HU'>Hungary</option>
        <option value='IS'>Iceland</option>
        <option value='IN'>India</option>
        <option value='ID'>Indonesia</option>
        <option value='IR'>Iran, Islamic Republic of</option>
        <option value='IQ'>Iraq</option>
        <option value='IE'>Ireland</option>
        <option value='IM'>Isle of Man</option>
        <option value='IL'>Israel</option>
        <option value='IT'>Italy</option>
        <option value='JM'>Jamaica</option>
        <option value='JP'>Japan</option>
        <option value='JE'>Jersey</option>
        <option value='JO'>Jordan</option>
        <option value='KZ'>Kazakhstan</option>
        <option value='KE'>Kenya</option>
        <option value='KI'>Kiribati</option>
        <option value='KP'>Korea, Democratic People's Republic of</option>
        <option value='KW'>Kuwait</option>
        <option value='KG'>Kyrgyzstan</option>
        <option value='LA'>Lao People's Democratic Republic</option>
        <option value='LV'>Latvia</option>
        <option value='LB'>Lebanon</option>
        <option value='LS'>Lesotho</option>
        <option value='LR'>Liberia</option>
        <option value='LY'>Libya</option>
        <option value='LI'>Liechtenstein</option>
        <option value='LT'>Lithuania</option>
        <option value='LU'>Luxembourg</option>
        <option value='MO'>Macao</option>
        <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
        <option value='MG'>Madagascar</option>
        <option value='MW'>Malawi</option>
        <option value='MY'>Malaysia</option>
        <option value='MV'>Maldives</option>
        <option value='ML'>Mali</option>
        <option value='MT'>Malta</option>
        <option value='MH'>Marshall Islands</option>
        <option value='MQ'>Martinique</option>
        <option value='MR'>Mauritania</option>
        <option value='MU'>Mauritius</option>
        <option value='YT'>Mayotte</option>
        <option value='MX'>Mexico</option>
        <option value='FM'>Micronesia, Federated States of</option>
        <option value='MD'>Moldova, Republic of</option>
        <option value='MC'>Monaco</option>
        <option value='MN'>Mongolia</option>
        <option value='ME'>Montenegro</option>
        <option value='MS'>Montserrat</option>
        <option value='MA'>Morocco</option>
        <option value='MZ'>Mozambique</option>
        <option value='MM'>Myanmar</option>
        <option value='NA'>Namibia</option>
        <option value='NR'>Nauru</option>
        <option value='NP'>Nepal</option>
        <option value='NL'>Netherlands</option>
        <option value='NC'>New Caledonia</option>
        <option value='NZ'>New Zealand</option>
        <option value='NI'>Nicaragua</option>
        <option value='NE'>Niger</option>
        <option value='NG'>Nigeria</option>
        <option value='NU'>Niue</option>
        <option value='NF'>Norfolk Island</option>
        <option value='MP'>Northern Mariana Islands</option>
        <option value='NO'>Norway</option>
        <option value='OM'>Oman</option>
        <option value='PK'>Pakistan</option>
        <option value='PW'>Palau</option>
        <option value='PS'>Palestinian Territory, Occupied</option>
        <option value='PA'>Panama</option>
        <option value='PG'>Papua New Guinea</option>
        <option value='PY'>Paraguay</option>
        <option value='PE'>Peru</option>
        <option value='PH'>Philippines</option>
        <option value='PN'>Pitcairn</option>
        <option value='PL'>Poland</option>
        <option value='PT'>Portugal</option>
        <option value='PR'>Puerto Rico</option>
        <option value='QA'>Qatar</option>
        <option value='RE'>Réunion</option>
        <option value='RO'>Romania</option>
        <option value='RU'>Russian Federation</option>
        <option value='RW'>Rwanda</option>
        <option value='BL'>Saint Barthélemy</option>
        <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
        <option value='KN'>Saint Kitts and Nevis</option>
        <option value='LC'>Saint Lucia</option>
        <option value='MF'>Saint Martin (French part)</option>
        <option value='PM'>Saint Pierre and Miquelon</option>
        <option value='VC'>Saint Vincent and the Grenadines</option>
        <option value='WS'>Samoa</option>
        <option value='SM'>San Marino</option>
        <option value='ST'>Sao Tome and Principe</option>
        <option value='SA'>Saudi Arabia</option>
        <option value='SN'>Senegal</option>
        <option value='RS'>Serbia</option>
        <option value='SC'>Seychelles</option>
        <option value='SL'>Sierra Leone</option>
        <option value='SG'>Singapore</option>
        <option value='SX'>Sint Maarten (Dutch part)</option>
        <option value='SK'>Slovakia</option>
        <option value='SI'>Slovenia</option>
        <option value='SB'>Solomon Islands</option>
        <option value='SO'>Somalia</option>
        <option value='ZA'>South Africa</option>
        <option value='GS'>South Georgia and the South Sandwich Islands</option>
        <option value='KR'>South Korea</option>
        <option value='SS'>South Sudan</option>
        <option value='ES'>Spain</option>
        <option value='LK'>Sri Lanka</option>
        <option value='SD'>Sudan</option>
        <option value='SR'>Suriname</option>
        <option value='SJ'>Svalbard and Jan Mayen</option>
        <option value='SZ'>Swaziland</option>
        <option value='SE'>Sweden</option>
        <option value='CH'>Switzerland</option>
        <option value='SY'>Syrian Arab Republic</option>
        <option value='TW'>Taiwan, Province of China</option>
        <option value='TJ'>Tajikistan</option>
        <option value='TZ'>Tanzania, United Republic of</option>
        <option value='TH'>Thailand</option>
        <option value='TL'>Timor-Leste</option>
        <option value='TG'>Togo</option>
        <option value='TK'>Tokelau</option>
        <option value='TO'>Tonga</option>
        <option value='TT'>Trinidad and Tobago</option>
        <option value='TN'>Tunisia</option>
        <option value='TR'>Turkey</option>
        <option value='TM'>Turkmenistan</option>
        <option value='TC'>Turks and Caicos Islands</option>
        <option value='TV'>Tuvalu</option>
        <option value='UG'>Uganda</option>
        <option value='UA'>Ukraine</option>
        <option value='AE'>United Arab Emirates</option>
        <option value='GB'>United Kingdom</option>
        <option value='US'>United States</option>
        <option value='UY'>Uruguay</option>
        <option value='UZ'>Uzbekistan</option>
        <option value='VU'>Vanuatu</option>
        <option value='VE'>Venezuela, Bolivarian Republic of</option>
        <option value='VN'>Vietnam</option>
        <option value='VI'>Virgin Islands</option>
        <option value='WF'>Wallis and Futuna</option>
        <option value='EH'>Western Sahara</option>
        <option value='YE'>Yemen</option>
        <option value='ZM'>Zambia</option>
        <option value='ZW'>Zimbabwe</option>
      </select>
      </div>
      <div className='fv-row mb-5'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>Address first line</label>
        <input
          placeholder='Address first line'
          type='text'
          autoComplete='off'
          value={formData.merchant_address_one_line}
          onChange={(e) => handleFieldChange('merchant_address_one_line', e.target.value)}
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
        {/* end::Form group */}
      </div>
      <div className='fv-row mb-5'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>Address second line</label>
        <input
          placeholder='Address second line'
          type='text'
          autoComplete='off'
          value={formData.merchant_address_second_line}
          onChange={(e) => handleFieldChange('merchant_address_second_line', e.target.value)}
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
        {/* end::Form group */}
      </div>
      <div className='fv-row mb-5'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>State</label>
        <input
          placeholder='State'
          type='text'
          value={formData.merchant_state}
          onChange={(e) => handleFieldChange('merchant_state', e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
        {/* end::Form group */}
      </div>
      <div className='fv-row mb-5'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>Zip Code</label>
        <input
          placeholder='Zip Code'
          type='text'
          value={formData.merchant_zip_code}
          onChange={(e) => handleFieldChange('merchant_zip_code', e.target.value)}
          autoComplete='off'
          className={clsx(
            'form-control bg-transparent',  
          )}
        />
        {/* end::Form group */}
      </div>
      
    

      <div className='mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>
          Upload Profile Photo
        </label>
        <input
          type='file'
          ref={photoFileInputRef}
          className='form-control'
          id='aadharFront'
          name='photo'
          accept='image/*'
          onChange={handleFileSelect}
          required
        />
      </div>

      <div className='mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>
          Upload Pan card Photo
        </label>
        <input
          type='file'
          ref={panFileInputRef}
          className='form-control'
          id='panPhotoUrl'
          name='panPhotoUrl'
          accept='image/*'
          onChange={handleFileSelectBack}
          required
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      {/* <div className='fv-row mb-5'>
        <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
          />
          <span>
            I Accept the{' '}
            <a
              href='https://keenthemes.com/metronic/?page=faq'
              target='_blank'
              className='ms-1 link-primary'
            >
              Terms
            </a>
            .
          </span>
        </label>
      </div> */}
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-success w-100 mb-5'
          // disabled={formik.isSubmitting}
          onClick={() => handleSaveClick()}
        >
          {!loading && <span className='indicator-label'>Submit</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/merchant/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
            style={{background:"#000", color:"#fff"}}
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
    </div>
  )
}
