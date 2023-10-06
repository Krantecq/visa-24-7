import { useEffect, useState,useRef, ChangeEvent } from 'react';
import { KTIcon } from '../../../../_metronic/helpers';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Form, Formik, FormikValues } from 'formik';
import { ICreateAccount, inits } from './CreateAccountWizardHelper';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Delete';
interface VerticalProps {
  selectedEntry: any; // Define the type for selectedEntry

  showfinalSubmitLoader: (value: boolean) => void;
}


const Vertical: React.FC<VerticalProps> = ({ selectedEntry, showfinalSubmitLoader }) => {
  const [initValues] = useState<ICreateAccount>(inits);
  const [currentStep, setCurrentStep] = useState(0);
  const [formDataStep1, setFormDataStep1] = useState<any>(null);
  const [formDataStep2, setFormDataStep2] = useState<any>(null);
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState('') // State variable to hold the image URL
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
          setImageURL(e.target.result as string);
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

  return (
    <div className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'>
      <div style={{width:'60%',marginTop:70}}  >
        {imageURL ? (
          <div   style={{ border: '4px dotted gray', width: "80%", height: 250, borderRadius: '10px', marginTop: '5%', justifyContent:'center',textAlign:'center', }}>
            <div style={{justifyContent: 'flex-end'}}>
            <label>Pancard Image</label>
            <ClearIcon />
            </div>
            <img
              src={imageURL}
              alt='Uploaded Image'
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
        )
          :

          <div  style={{ border: '4px dotted gray', width: "80%", height: 250, borderRadius: '10px', marginTop: '5%', justifyContent:'center',textAlign:'center',paddingTop:40 }}>
            <h4 className='mx-10 mt-10'>
              PAN Card Photo
            </h4>
            <button type='button' onClick={handleImageUpload} className='btn btn-lg btn-primary me-3 mt-7' style={{ justifyContent: 'flex-end' }}>
              <span className='indicator-label'>
                Select Files
              </span>
            </button>
            <p className='text-bold pt-5 fs-9' style={{color:'#555555'}}>
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

      <div className='d-flex flex-row-fluid flex-center bg-body rounded'>

        <Formik initialValues={initValues} onSubmit={nextStep}>
          {() => (
            <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
              {currentStep === 0 && <Step1 setFormDataStep1={setFormDataStep1} />}
              {currentStep === 1 && <Step2 data={formDataStep1} prevStep={prevStep} showfinalSubmitLoader={showfinalSubmitLoader} data1={selectedEntry} />}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Vertical };
