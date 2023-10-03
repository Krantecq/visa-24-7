import React, {FC, useState} from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ICreateAccount, inits} from '../modules/wizards/components/CreateAccountWizardHelper'
import RoomIcon from '@mui/icons-material/Room';
import FlightIcon from '@mui/icons-material/Flight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ApplyVisa: FC = () => {
  const [issueDate, setIssueDate] = useState(null)
  const [expiryDate, setExpiryDate] = useState(null)
  const [initValues] = useState<ICreateAccount>(inits)

  const onSubmit = () => {}

  return (
    <Formik validationSchema={null} initialValues={initValues} onSubmit={onSubmit}>
      <Form className='py-20 w-100 px-9' noValidate id='kt_create_account_form'>
        <div className='d-flex flex-row justify-content-between'>
       
          <div className='fv-row mb-10 w-100'>
          <RoomIcon style={{marginRight:'3px'}}/>

            <label className='form-label'>From</label>
            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid border border-1  border-secondary rounded-4'
              style={{background:'#fff'}}
            >
              <option></option>
              <option value='1'>India</option>
              <option value='1'>China</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
          <div className='fv-row mb-10 w-100' style={{marginLeft:'5%'}}>
            <FlightIcon style={{marginRight:'3px'}}/>
            <label className='form-label '>To</label>

            <Field
              as='select'
              name='businessType'
              className='form-select form-select-lg form-select-solid border border-1  border-secondary rounded-4'
              style={{background:'#fff'}}

            >
              <option></option>
              <option value='1'>korea</option>
              <option value='1'>usa</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
       

          <div className='fv-row mb-10 w-100' style={{marginLeft:'5%',marginRight:"3%"}}>
            <label className='d-flex align-items-center form-label'>
            <CalendarMonthIcon style={{marginRight:'3px'}}/>
              <span className=''>From</span>
            </label>

            <DatePicker
              name='issueDate'
              selected={issueDate}
              onChange={(date) => setIssueDate(date)}
              className=' form-control form-control-lg form-control-solid border border-1  border-secondary rounded-4'
              dateFormat='MM/dd/yyyy'
              placeholderText='Select Date'
              style={{ backgroundColor: '#fff' }}

            />

            <div className='text-danger mt-2'>
              <ErrorMessage name='issueDate' />
            </div>
          </div>
          <div className='fv-row mb-10 w-100'>
            <label className='d-flex align-items-center form-label'>
            <CalendarMonthIcon style={{marginRight:'3px'}}/>
              <span className=''>To</span>
            </label>

            <DatePicker
              name='expiryDate'
              selected={expiryDate}
              onChange={(date) => setExpiryDate(date)}
              className='form-control bg-light form-control-lg form-control-solid border border-1  border-secondary rounded-4 my-custom-datepicker'
              dateFormat='MM/dd/yyyy'
              placeholderText='Select Date'

            />

            <div className='text-danger mt-2'>
              <ErrorMessage name='expiryDate' />
            </div>
          </div>
          </div>
      
      </Form>
    </Formik>
  )
}

export {ApplyVisa}
