import { useEffect, useState } from 'react';
import { KTIcon } from '../../../../_metronic/helpers';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Form, Formik, FormikValues } from 'formik';
import { ICreateAccount, inits } from './CreateAccountWizardHelper';
import { useNavigate } from 'react-router-dom';
interface VerticalProps {
  selectedEntry: any; // Define the type for selectedEntry
}


const Vertical:React.FC<VerticalProps> = ({selectedEntry}) => {
  const [initValues] = useState<ICreateAccount>(inits);
  const [currentStep, setCurrentStep] = useState(0);
  const [formDataStep1, setFormDataStep1] = useState<any>(null);
  const [formDataStep2, setFormDataStep2] = useState<any>(null);
  const navigate = useNavigate();

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

  return (
    <div className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'>
      <div className=' d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9' style={{ height: '370px' }}>
        {/* begin::Wrapper*/}
        <div className='card-body px-6 px-lg-10 px-xxl-15 py-20' style={{ position: 'fixed' }}>
          {/* begin::Nav*/}
          <div className='stepper-nav'>
            {/* Step 1 */}
            <div className={`stepper-item ${currentStep === 0 ? 'current' : ''}`} data-kt-stepper-element='nav'>
              {/* ... Content for Step 1 ... */}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Personal Info</h3>

                  <div className='stepper-desc fw-semibold'>Setup Your Account Details</div>
                </div>
                {/* end::Label*/}
              </div>
            </div>

            {/* Step 2 */}
            <div className={`stepper-item ${currentStep === 1 ? 'current' : ''}`} data-kt-stepper-element='nav'>
              {/* ... Content for Step 2 ... */}
              <div className='stepper-wrapper' style={{ marginTop: 50 }}>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Passport Details</h3>
                  <div className='stepper-desc fw-semibold'>Setup Your Account Settings</div>
                </div>
                {/* end::Label*/}
              </div>
            </div>
          </div>
          {/* end::Nav */}
        </div>
        {/* end::Wrapper */}
      </div>

      {/* begin::Aside*/}
      <div className='d-flex flex-row-fluid flex-center bg-body rounded'>

        <Formik initialValues={initValues} onSubmit={nextStep}>
          {() => (
            <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
              {currentStep === 0 && <Step1 setFormDataStep1={setFormDataStep1}/>}
              {currentStep === 1 && <Step2 data={formDataStep1} data1={selectedEntry}/>}

              <div className='d-flex flex-stack pt-10'>
                {currentStep > 0 && (
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                    // data-kt-stepper-action='previous'
                    >
                      <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                      Back
                    </button>
                  </div>
                )}

                <div>
                  <button type='submit' className='btn btn-lg btn-primary me-3' style={{ justifyContent: 'flex-end' }}>
                    <span className='indicator-label'>
                      {currentStep >1 ? 'Continue' : 'Submit'}
                      <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Vertical };
