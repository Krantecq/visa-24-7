import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { IssueApiTable } from '../../components/IssueApiTable';
import { ICreateAccount,inits } from '../../modules/wizards/components/CreateAccountWizardHelper';
import { Formik,Form,Field,ErrorMessage } from 'formik';

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
    const [loading,setLoading] = useState(false);
  const [initValues] = useState<ICreateAccount>(inits)

  
    useEffect(() => {
      // Define a function to make the POST request
      const fetchData = async () => {
        setLoading(true);
        try {
          const postData = {
            // Your POST data goes here
          };
          // Make a POST request to your API endpoint
          axiosInstance.post('/backend/fetch_merchant_user', postData)
            .then((response) => {
              console.log(response.data)
              setMemberStatsData(response.data.data);
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
      <div className='w-full' style={{backgroundColor:'#fff'}}>
      
      <div className='px-10 py-10'>
              
              <Formik initialValues={initValues} onSubmit={() => { }}>
                {() => (
                  <Form className='py-10 px-9' noValidate id='kt_create_account_form'>
                    <div className='fv-row mb-10 w-100'>

                <label className='form-label fs-4'>All Countries</label>
                <Field
                  as='select'
                  name='fromCountry'
                  className='form-select form-select-lg form-select-solid border border-2  border-secondary rounded-4 mt-2'
                  style={{ background: '#fff' }}
                >
                  <option value=''>All Countries</option>
                  
                </Field>
                <div className='text-danger mt-2'>
                  <ErrorMessage name='businessType' />
                </div>
              </div>
                    <div className='fv-row mb-10'>
                      <label className='d-flex align-items-center form-label'>
                        <span className='required'>All Country percentage</span>
                      </label>

                      <Field
                        style={{ ...inputStyle, width: '450px' }}
                        readOnly
                        name='fatherName'
                        className='form-control form-control-lg form-control-solid'
                      />
                      <div className='text-danger mt-2'>
                        <ErrorMessage name='fatherName' />
                      </div>
                    </div>
                    
                    <div className='fv-row mb-10'>
                      <label className='d-flex align-items-center form-label'>
                        <span className='required'>Merchant percentage</span>
                      </label>

                      <Field
                        style={{ ...inputStyle, width: '450px' }}
                        readOnly
                        name='fatherName'
                        className='form-control form-control-lg form-control-solid'
                      />
                      <div className='text-danger mt-2'>
                        <ErrorMessage name='fatherName' />
                      </div>
                    </div>

                    <div className='d-flex justify-content-center mt-10'>
                      <button
                        type='submit'
                        className='btn btn-primary'
                        onClick={() => { }}
                        style={{ backgroundColor: '#332789', width: 180 }}
                      >
                        Save
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