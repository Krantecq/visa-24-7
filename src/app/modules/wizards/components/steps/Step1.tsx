/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Personal Details</h2>

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
        <label className='form-label required'>First Name</label>

        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Last Name</span>
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
          <span className='required'>Birth Place</span>
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
          <span className='required'>Birth Detail</span>
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
        <label className='form-label required'>Gender</label>

        <Field
          as='select'
          name='businessType'
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
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Father Name</span>
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
          Upload Pancard
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

export {Step1}
