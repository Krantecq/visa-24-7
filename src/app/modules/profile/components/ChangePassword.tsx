import { useState } from "react";
import axiosInstance from "../../../helpers/axiosInstance";
import Cookies from 'js-cookie';

export function ChangePassword() {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const handleInputChange = (field, value) => {
    setPasswordData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const onSubmit = (values: any) => {
    console.log(values)
    const super_admin_id = Cookies.get('user_id');

    const postData = {
      super_admin_email: super_admin_id,
      new_password: passwordData.newPassword,
      old_password: passwordData.oldPassword,
    }
    axiosInstance.post('/backend/change_password/super_admin', postData)
      .then((response) => {
        console.log(response)

      })
      .catch((error) => {
        console.error('Error fetching Atlys data:', error);
      });

  };
  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <div id='kt_account_profile_details' className='collapse show'>
          <form noValidate className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Old Password</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-6 fv-row'>
                      <input
                        style={{
                          border: '2px solid #d3d3d3',
                          borderRadius: '25px',
                          padding: '10px',
                          paddingLeft: '20px',
                          width: 280,
                          boxSizing: 'border-box',
                          backgroundColor: 'white'
                        }}
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='Enter Old Password'
                        onChange={(e) => handleInputChange('oldPassword', e.target.value)}
                      />

                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>New Password</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    style={{
                      border: '2px solid #d3d3d3',
                      borderRadius: '25px',
                      padding: '10px',
                      paddingLeft: '20px',
                      width: 280,
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Enter New Password'
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                  />

                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Confirm New Password</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    style={{
                      border: '2px solid #d3d3d3',
                      borderRadius: '25px',
                      padding: '10px',
                      paddingLeft: '20px',
                      width: 280,
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Enter New Password'
                    onChange={(e) => handleInputChange('confirmNewPassword', e.target.value)}
                  />

                </div>
              </div>
            </div>

            <div className='card-footer d-flex justify-content-end py-6 px-9'>
              <button type='submit' className='btn btn-success' onClick={onSubmit}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}