import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { IssueApiTable } from '../../components/IssueApiTable';
import { ICreateAccount, inits } from '../../modules/wizards/components/CreateAccountWizardHelper';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const inputStyle = {
  border: '1.5px solid #d3d3d3', // Border width and color
  borderRadius: '15px', // Border radius
  padding: '10px',
  paddingLeft: '20px', // Padding
  width: '90%', // 100% width
  boxSizing: 'border-box', // Include padding and border in the width calculation
}

function ApiSettingWrapper() {
  const [memberStatsData, setMemberStatsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [initValues] = useState<ICreateAccount>(inits)

  const [formData, setFormData] = useState({
    api_percentage: '',
    merchant_percantage: '',
    panel_api_percantage: '',
  })

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value })
  }

  const handleSave = async () => {
    setLoading(true);
  
    try {
    const response = await axiosInstance.post('/backend/settings', formData)
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
  } catch (error) {
    console.error('API error:', error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    // Define a function to make the POST request
    const fetchData = async () => {
      setLoading(true);
      try {

        // Make a POST request to your API endpoint
        axiosInstance.get('/backend/fetch_setting')
          .then((response) => {
            console.log(response.data)
            const responseData = response.data.data;

            // Update the formData state with the fetched data
            setFormData({
              api_percentage: responseData.api_percentage || '', // Use default value if the response data is missing
              merchant_percantage: responseData.merchant_percantage || '',
              panel_api_percantage: responseData.panel_api_percantage || '',
            });
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching Atlys data:', error);
            setLoading(false);
          });


      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures this effect runs once on mount
  return (
    <div>
      <Toaster />
      <div className='w-full' style={{ backgroundColor: '#fff', marginTop:"-100px" }}>

        <div className='px-10 py-10'>

          <Formik initialValues={initValues} onSubmit={() => { }}>
            {() => (
              <Form className='py-10 w-100 d-flex flex-row flex-wrap' noValidate id='kt_create_account_form'>
                <div className='w-100 d-flex flex-column mx-auto mb-10'>

                  <label className='form-label fs-4'>All Countries</label>
                  <Field
                    as='select'
                    name='fromCountry'
                    className='form-select form-select-lg form-select-solid border border-2  border-secondary rounded-4 mt-2'
                    style={{ background: '#fff', width:"40%" }}
                  >
                    <option value=''>All Countries</option>

                  </Field>
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='businessType' />
                  </div>
                </div>
                <div className='w-100 d-flex flex-column mx-auto mb-10'>
                  <label className='d-flex align-items-center form-label'>
                    <span className='required'>B2C percentage</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, width:"40%" }}
                    onChange={(e) => handleFieldChange('api_percentage', e.target.value)}
                    value={formData.api_percentage}
                    name='api_percentage'
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='api_percentage' />
                  </div>
                </div>

                <div className='w-100 d-flex flex-column mx-auto mb-10'>
                  <label className='d-flex align-items-center form-label'>
                    <span className='required'>Merchant percentage</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, width:"40%" }}
                    onChange={(e) => handleFieldChange('merchant_percantage', e.target.value)}
                    name='merchant_percantage'
                    value={formData.merchant_percantage}
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='merchant_percantage' />
                  </div>
                </div>

                <div className='w-100 d-flex flex-column mx-auto mb-10'>
                  <label className='d-flex align-items-center form-label'>
                    <span className='required'>Partner percentage</span>
                  </label>

                  <Field
                    style={{ ...inputStyle, width:"40%" }}
                    onChange={(e) => handleFieldChange('panel_api_percantage', e.target.value)}
                    name='panel_api_percantage'
                    value={formData.panel_api_percantage}
                    className='form-control form-control-lg form-control-solid'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='panel_api_percantage' />
                  </div>
                </div>

                <div className='d-flex justify-content-center mt-10'>
                  <button
                    type='submit'
                    className='btn btn-success'
                    onClick={handleSave}
                    style={{ backgroundColor: '#327113', width: 180, marginLeft:"150px" }}
                  >
                    {!loading && <h6 className='fs-2' style={{ color: 'white', paddingTop: 7 }}>Save</h6>}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'flex', alignItems: 'center', color:"#fff" }}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  )
}

export default ApiSettingWrapper;