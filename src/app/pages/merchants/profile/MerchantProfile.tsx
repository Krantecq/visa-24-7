import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CardIcon from "@mui/icons-material/CreditCard";
import WalletIcon from "@mui/icons-material/Wallet";
import BankIcon from "@mui/icons-material/AccountBalance";
import Uploadicon from "@mui/icons-material/CloudUpload";
import UpiIcon from "@mui/icons-material/TapAndPlay";
import ClearIcon from '@mui/icons-material/Delete';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { ICreateAccount, inits } from "../../../modules/wizards/components/CreateAccountWizardHelper";
import axiosInstance from "../../../helpers/axiosInstance";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'
import RoomIcon from '@mui/icons-material/Room'
function MerchantProfile() {
    const [activeTab, setActiveTab] = useState("Profile");
    const [formData, setFormData] = useState({
        upi_ref_id: '',
        receipt: '',
        amount: ''
    });

    const [formData2, setFormData2] = useState({
        merchant_phone_number: '',
        merchant_email_id: 'xyz@gmail.com',
        merchant_gst_no: '',
        merchant_pan_no: '',

    });

    const user_id = Cookies.get('user_id');

    const handleFieldChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };


    const [activeWalletTab, setActiveWalletTab] = useState("Bank Transfer (0% Fee)");
    const [initValues] = useState<ICreateAccount>(inits);
    const [recieptImage, setReceiptImage] = useState('');

    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    const handleWalletTabClick = (tabName: string) => {
        setActiveWalletTab(tabName);
    };

    useEffect(() => {
        // Fetch profile data when the component mounts
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const user_id = Cookies.get('user_id');
            const postData = {
                id: user_id
            }
            const response = await axiosInstance.post("/backend/fetch_single_merchant_user", postData);

            if (response.status == 203) {
                toast.error("Please Logout And Login Again", {
                    position: 'top-center'
                });
            }
            // Assuming the response contains the profile data, update the state with the data
            setFormData2(response.data.data[0]);
            console.log("profile response", response)
        } catch (error) {
            console.error("Error fetching profile data:", error);
            // Handle error (e.g., show an error message)
        }
    };

    const inputStyle = {
        border: '2px solid #d3d3d3',    // Border width and color
        borderRadius: '25px',         // Border radius
        padding: '10px',
        paddingLeft: '20px',             // Padding
        width: 280,               // 100% width
        boxSizing: 'border-box',
        backgroundColor: 'white'     // Include padding and border in the width calculation
    }


    const profileContent = (
        <div className='w-full mt-5 mx-10 px-10' style={{

            backgroundColor: '#fff',
            justifyContent: 'space-between',
            borderRadius: 10,
            borderColor: '#d3d3d3',
            border: '1px solid #d3d3d3',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
            width: "95%",
            overflow: 'hidden'

        }}>
            <h2 className="py-10">
                Agency Information
            </h2>
            <hr />
            <Formik initialValues={formData2} onSubmit={() => { }}>
                {() => (
                    <Form className='py-10 px-9' noValidate id='kt_create_account_form'>
                        <div>
                            <div className='d-flex'>
                                <div className='fv-row mb-10'>
                                    <RoomIcon style={{ marginRight: '3px', marginLeft: 10 }} />

                                    <label className='form-label' style={{ fontWeight: 'bold' }}>Country</label>
                                    <Field
                                        as='select'
                                        name='fromCountry'
                                        className='form-select '
                                        style={inputStyle}
                                    >
                                        <option value=''>Select a Country...</option>
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

                                    </Field>
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessType' />
                                    </div>
                                </div>
                                <div className='fv-row mb-10 mx-10'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
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
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span >Contact Number</span>
                                    </label>

                                    <Field
                                        style={inputStyle}
                                        name='merchant_phone_number'
                                        value={formData2.merchant_phone_number}
                                        className='form-control form-control-lg form-control-solid'
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessDescriptor' />
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <div className='fv-row mb-10'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span className='required'>GST Number</span>
                                    </label>

                                    <Field
                                        style={{ ...inputStyle, width: '450px' }}
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
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span className='required'>PAN Card</span>
                                    </label>

                                    <Field style={{ ...inputStyle, width: '450px' }}
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
                            <hr />

                            <div className='d-flex'>
                                <div className='fv-row mb-5'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span >Address Line 1</span>
                                    </label>

                                    <Field
                                        style={{ ...inputStyle, width: 700 }}

                                        name='businessDescriptor'
                                        className='form-control form-control-lg form-control-solid '
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessDescriptor' />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='fv-row mb-10'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span >Address Line 2</span>
                                    </label>

                                    <Field
                                        style={{ ...inputStyle, width: 700 }}

                                        name='businessDescriptor'
                                        className='form-control form-control-lg form-control-solid '
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessDescriptor' />
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <div className='fv-row mb-10'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span >City</span>
                                    </label>

                                    <Field
                                        style={{ ...inputStyle, }}
                                        name='businessDescriptor'
                                        className='form-control form-control-lg form-control-solid'
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessDescriptor' />
                                    </div>
                                </div>
                                <div className='fv-row mb-10 mx-10'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span >State</span>
                                    </label>

                                    <Field style={{ ...inputStyle, }}
                                        name='businessDescriptor'
                                        className='form-control form-control-lg form-control-solid'
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessDescriptor' />
                                    </div>
                                </div>
                                <div className='fv-row mb-10'>
                                    <label className='d-flex align-items-center form-label mx-5' style={{ fontWeight: 'bold' }}>
                                        <span>Zip Code</span>
                                    </label>

                                    <Field style={{ ...inputStyle, }}
                                        name='businessDescriptor'
                                        className='form-control form-control-lg form-control-solid'
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='businessDescriptor' />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="submit" className='btn btn-primary'>
                                    Save
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );

    const bankContent = (
        <div>
            <Formik initialValues={initValues} onSubmit={() => { }}>
                {() => (
                    <Form className='py-10' style={{ justifyContent: 'center', marginLeft: 150, width: '75%' }} noValidate id='kt_create_account_form'>

                        <div className='d-flex'>
                            <div className='fv-row mb-2'>
                                <Field
                                    style={{
                                        ...inputStyle, width: 700,
                                        border: '1px solid #d3d3d3', borderRadius: 10
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
                                        ...inputStyle, width: 700,
                                        border: '1px solid #d3d3d3', borderRadius: 10
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
                                        ...inputStyle, width: 700,
                                        border: '1px solid #d3d3d3', borderRadius: 10
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
                                Add Atlys as a beneficiary and pay via NEFT/RTGS/IMPS online or at a bank branch. We will process the payment and add the amount to your wallet.
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
                    <Form className='py-10' style={{ justifyContent: 'center', marginLeft: 150, width: '75%' }} noValidate id='kt_create_account_form'>

                        <div className='d-flex'>
                            <div className='fv-row mb-5'>
                                <Field
                                    style={{
                                        ...inputStyle, width: 700,
                                        border: '1px solid #d3d3d3', borderRadius: 10
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
                                Add the VPA to preferred UPI app and make a payment. We will process the payment and add the amount to your wallet.
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
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
    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async (e) => {
                // Update the state variable with the image data (base64-encoded)
                if (e.target) {
                    setReceiptImage(e.target.result as string);
                    try {
                        // Assuming handleFileUpload is an asynchronous function that returns a promise
                        const imageLink = await handleFileUpload(file);

                        // Update the form data with the image link
                        setFormData({ ...formData, receipt: imageLink });
                    } catch (error) {
                        console.error('Error uploading image:', error);
                    }
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
    const handleSaveClick = async () => {

        setLoading(true);
        const postBody = {
            upi_ref_id: formData.upi_ref_id,
            merchant_id: user_id,
            receipt: formData.receipt,
            amount: formData.amount
        }
        const response = await axiosInstance.post('/backend/upload_receipt', postBody);

        if (response.status == 200) {
            toast.success(response.data.msg, {
                position: "top-center", // Center the toast notification
            });
            setLoading(false);
        } else {
            console.log(response.data)
            toast.error(response.data.msg, {
                position: 'top-center'
            });
            setLoading(false);
        }

        // Call the API when the "Save" button is clicked
    };
    const uploadReciept = (

        <div className='d-flex ' style={{ width: '100%' }}>
            <div style={{ width: '40%', marginTop: 50, marginBottom: 30 }}  >
                <h6>
                    Receipt
                </h6>
                {recieptImage ? (
                    <div style={{ border: '4px dotted gray', width: "100%", height: 250, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', marginTop: 20 }}>
                        <div onClick={() => setReceiptImage('')} style={{ justifyContent: 'flex-end', position: 'absolute', backgroundColor: 'white', padding: 7, borderRadius: 50, cursor: 'pointer' }}>
                            <ClearIcon style={{ color: 'red' }} />
                        </div>
                        <img
                            src={recieptImage}
                            alt='Uploaded Image'
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    </div>
                )
                    :

                    <div style={{ border: '4px dotted gray', width: "100%", height: 250, borderRadius: '10px', justifyContent: 'center', textAlign: 'center', paddingTop: 40, marginTop: 20 }}>
                        <h4 className='mx-10 mt-10'>
                            Receipt Photo
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
            <div className='d-flex flex-row-fluid flex-center bg-body rounded mt-10' style={{ width: '70%', backgroundColor: 'blue' }}>
                <Formik initialValues={initValues} onSubmit={() => { }}>
                    {() => (
                        <Form className='py-20 px-9' noValidate id='kt_create_account_form'>
                            <div>
                                <div className='fv-row mb-10'>
                                    <label className='form-label required'>Transaction ID</label>
                                    <Field name='upi_ref_id'
                                        style={{ ...inputStyle, width: '450px' }} className='form-control form-control-lg form-control-solid' onChange={(e) => handleFieldChange('upi_ref_id', e.target.value)} />
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
                                        className='form-control form-control-lg form-control-solid' onChange={(e) => handleFieldChange('amount', e.target.value)}
                                    />
                                    <div className='text-danger mt-2'>
                                        <ErrorMessage name='amount' />
                                    </div>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <button type="submit" style={{ width: 200 }} className='btn btn-primary' onClick={handleSaveClick}>
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
        { label: "Bank Transfer (0% Fee)", content: bankContent, icon: <BankIcon style={{ width: 25, height: 25 }} /> },
        { label: "UPI (0% Fee)", icon: <UpiIcon style={{ width: 25, height: 25 }} />, content: upiContent },
        { label: "Upload Receipt", icon: <Uploadicon style={{ width: 25, height: 25 }} />, content: uploadReciept },
    ];

    const activeWalletTabContent = walletTabs.find((tab) => tab.label === activeWalletTab)?.content;

    const loadWalletContent = (
        <div className='w-full mt-5 mx-10 px-10' style={{

            backgroundColor: '#fff',
            justifyContent: 'space-between',
            borderRadius: 10,
            borderColor: '#d3d3d3',
            border: '1px solid #d3d3d3',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
            width: "95%",
            overflow: 'hidden'

        }}>
            <h2 className="pt-10">
                Load Wallet
            </h2>
            <hr />
            <div className="d-flex" style={{ justifyContent: 'space-around', }}>
                {walletTabs.map((tab) => (
                    <div
                        key={tab.label}
                        style={{
                            padding: "10px 0",
                            marginTop: 20,
                            display: 'flex',
                            cursor: "pointer",
                            alignItems: 'center',
                            borderBottom: activeWalletTab === tab.label ? "2px solid #007bff" : " 1px solid #333",
                            fontWeight: activeWalletTab === tab.label ? "bold" : "normal",
                            color: activeWalletTab === tab.label ? "#007bff" : "#333",

                        }}
                        onClick={() => handleWalletTabClick(tab.label)}
                    >
                        <div style={{ marginRight: 15 }}>
                            {tab.icon}
                        </div>
                        <h3 style={{
                            color: activeWalletTab === tab.label ? "#007bff" : "#333",
                        }}>
                            {tab.label}
                        </h3>
                    </div>
                ))}
            </div>

            <div>
                {activeWalletTabContent}
            </div>
        </div>
    );
    const apiContent = (
        <div className='w-full mt-5 mx-10 px-10' style={{

            backgroundColor: '#fff',
            justifyContent: 'space-between',
            borderRadius: 10,
            borderColor: '#d3d3d3',
            border: '1px solid #d3d3d3',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
            width: "95%",
            overflow: 'hidden'

        }}>
            <h2 className="pt-10">
                API Key
            </h2>
            <hr />

            <Formik initialValues={initValues} onSubmit={() => { }}>
                {() => (
                    <Form className='py-10' style={{ justifyContent: 'center', marginLeft: 150, width: '75%' }} noValidate id='kt_create_account_form'>

                        <div className='d-flex'>
                            <div className='fv-row mb-5'>
                                <Field
                                    style={{
                                        ...inputStyle, width: 700,
                                        border: '1px solid #d3d3d3', borderRadius: 10
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
                                You don't have API Key, Go to Load wallet tab, do the payment and Upload the receipt
                            </p>

                            <div className='d-flex justify-content-center'>
                                <button onClick={() => setActiveTab('Load Wallet')} style={{ width: 200 }} className='btn btn-primary'>
                                    Go to Wallet
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );

    const tabs = [
        { label: "Profile", content: profileContent, icon: <PersonIcon style={{ width: 25, height: 25 }} /> },
        { label: "Load Wallet", icon: <WalletIcon style={{ width: 25, height: 25 }} />, content: loadWalletContent },
        { label: "API", icon: <CardIcon style={{ width: 25, height: 25 }} />, content: apiContent },

    ];


    // Find the active tab's content
    const activeTabContent = tabs.find((tab) => tab.label === activeTab)?.content;

    return (
        <div style={{ backgroundColor: 'white', width: '100%', height: '100%', marginTop: -30, paddingTop: 20 }}>
            <div className="d-flex" style={{ alignItems: 'center' }}>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' width={110} height={110} />
                <div className="px-10">
                    <h1 style={{ fontSize: 30 }}>
                        ROYAL TRAVELS
                    </h1>
                    <h5 style={{ fontSize: 20 }}>
                        {formData2.merchant_email_id}
                    </h5>
                </div>
            </div>
            {/* Left Side */}
            <div className="d-flex">
                <div className="my-10" style={{ width: '20%', padding: "20px" }}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.label}
                            style={{
                                padding: "10px 0",
                                marginTop: 20,
                                display: 'flex',
                                cursor: "pointer",
                                alignItems: 'center',
                                borderBottom: "1px solid #ccc",
                                fontWeight: activeTab === tab.label ? "bold" : "normal",
                                color: activeTab === tab.label ? "#007bff" : "#333",
                            }}
                            onClick={() => handleTabClick(tab.label)}
                        >
                            <div style={{ marginRight: 15 }}>
                                {tab.icon}
                            </div>
                            <h3 style={{
                                color: activeTab === tab.label ? "#007bff" : "#333",
                            }}>
                                {tab.label}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Right Side */}
                <div className="my-10" style={{ width: '80%' }}>
                    <div >
                        {activeTabContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MerchantProfile;
