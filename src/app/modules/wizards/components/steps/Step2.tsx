import React, {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step2: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Passport Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Passport Number</label>

        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Passport Issue Date</span>
        </label>

        <Field
          name='businessDescriptor'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessDescriptor' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Passport Expiry Date</span>
        </label>

        <Field
          name='businessDescriptor'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessDescriptor' />
        </div>
      </div>

      <div className='mb-3'>
        <label htmlFor='aadharBack' className='form-label'>
          Upload Passport Front Photo
        </label>
        <input
          type='file'
          className='form-control'
          id='aadharBack'
          name='aadharBack'
          accept='image/*'
          // onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='aadharBack' className='form-label'>
          Upload Passport Back Photo
        </label>
        <input
          type='file'
          className='form-control'
          id='aadharBack'
          name='aadharBack'
          accept='image/*'
          // onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export {Step2}
