/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import axios from 'axios'
// Define a prop for Step1
interface Step1Props {
  setFormDataStep1: (data: any) => void; // Callback prop to set data in Vertical
}

const Step1: FC<Step1Props> = ({ setFormDataStep1 }) => {
  const formik = useFormikContext<any>();
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState<any>({
    first_name: '',
    last_name: '',
    birth_place: '',
    birth_detail: '',
    gender: '',
    marital_status: '',
    father_name: '',
    panUri: '',
    photoUri: ','
  });

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post('http://localhost:5003/backend/upload_image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const imageUri = response.data.data;
        setFormData((prevData) => ({
          ...prevData,
          panUri: imageUri,
        }));
        console.log(imageUri)
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post('http://localhost:5003/backend/upload_image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const imageUri = response.data.data;
        setFormData((prevData) => ({
          ...prevData,
          photoUri: imageUri,
        }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  // Function to save data to the form and set formDataStep1
  const handleNext = () => {
    const updatedFormData = {
      first_name: formik.values.first_name,
      last_name: formik.values.last_name,
      birth_place: formik.values.birth_place,
      birth_detail: formik.values.birth_detail,
      gender: formik.values.gender,
      marital_status: formik.values.marital_status,
      father_name: formik.values.accountName,
      panUri: formData.panUri,
      photoUri: formData.photoUri
      // Add other fields here...
    };
    // Collect data from the form fields
    console.log(formData)


    // Set formDataStep1
    setFormDataStep1(updatedFormData);

    // Move to the next step
    formik.submitForm();
  };
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Personal Details</h2>

      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>First Name</label>

        <Field name='first_name' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='first_name' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Last Name</span>
        </label>

        <Field
          name='last_name'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='last_name' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Birth Place</span>
        </label>

        <Field
          name='birth_place'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='birth_place' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Birth Detail</span>
        </label>

        <Field
          name='birth_detail'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='birth_details' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Gender</label>

        <Field
          as='select'
          name='gender'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='1'>Male</option>
          <option value='1'>Female</option>
          <option value='2'>Others</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='gender' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Marital Status</label>

        <Field
          as='select'
          name='marital_status'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='1'>Yes</option>
          <option value='1'>No</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='marital_status' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Father Name</span>
        </label>

        <Field
          name='accountName'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='aadharBack' className='form-label'>
          Upload Pancard
        </label>
        <input
          type='file'
          className='form-control'
          id='pancard'
          name='pancard'
          accept='image/*'
          onChange={handleImageUpload}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='aadharBack' className='form-label'>
          Upload Traveller Photo
        </label>
        <input
          type='file'
          className='form-control'
          id='photo'
          name='photo'
          accept='image/*'
          onChange={handlePhotoUpload}
          required
        />
      </div>
      <div className='d-flex flex-stack pt-10'>
        <div>
          <button
            type='button'
            className='btn btn-lg btn-primary me-3'
            onClick={handleNext}
            style={{ justifyContent: 'flex-end' }}
          >
            <span className='indicator-label'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { Step1 }
