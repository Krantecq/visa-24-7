import { useEffect, useState, useRef, ChangeEvent } from 'react';
import { KTIcon } from '../../../../_metronic/helpers';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { ICreateAccount, inits } from './CreateAccountWizardHelper';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Delete';
import MerchantApplyVisa from '../../../components/MerchantApplyVisa';
import TravelerForm from './TravelerForm';
interface VerticalProps {
  selectedEntry: any; // Define the type for selectedEntry

  show: (value: boolean) => void;
  visaList: boolean;
  visaListLoader: (value: boolean) => void;
  showfinalSubmitLoader: (value: boolean) => void;
}


const inputStyle = {
  border: '1.5px solid #d3d3d3',    // Border width and color
  borderRadius: '15px',         // Border radius
  padding: '10px',
  paddingLeft: '20px',             // Padding
  width: '90%',               // 100% width
  boxSizing: 'border-box',     // Include padding and border in the width calculation
}
const Vertical: React.FC<VerticalProps> = ({ selectedEntry, showfinalSubmitLoader, visaList, visaListLoader, show }) => {
  const [applicantForms, setApplicantForms] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  console.log(selectedEntry)

  return (
    <div style={{ backgroundColor: '#fff' }} className='w-full'>
      <MerchantApplyVisa visaListLoader={visaListLoader} visaList={visaList} show={show} onApiDataReceived={function (data: any): void {
        throw new Error('Function not implemented.');
      }} />

      <TravelerForm />
      <div className='d-flex mt-10' style={{ justifyContent: 'flex-end', display: 'flex' }}>

        <div className="mb-10 mx-5" style={{ height: 40, paddingLeft: 15, paddingRight: 15, border: "1px solid", borderColor: '#696969', borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
          <h6 className="fs-4" style={{ color: '#007bff' }}>
            + Add Another Traveler
          </h6>
        </div>

        <div className="mb-10 mx-5" style={{ height: 40, width: 190, border: "1px solid", borderColor: '#696969', borderRadius: 10, alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#007bff' }}>
          <h6 className="fs-4" style={{ color: 'white' }}>
            Review and Save
          </h6>
        </div>
      </div>
      <div className='d-flex'>
        <div className='py-10 px-20' style={{
          borderRadius: 15, borderColor: '#696969',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
          marginLeft: 10,
          backgroundColor: 'white',
          width:'60%'
        }}>
          <div>
            <h2 style={{ fontSize: 35 }}>
              Visa Information
            </h2>
            <p style={{ fontSize: 17, paddingTop: 10, lineHeight: 2, paddingBottom: 10 }}>
              United Arab Emirates - UAE 30 Days Single Entry E-Visa
              <br />
              Travelers: 1
              <br />
              Travel Dates: Oct 7, 2023 - Nov 15, 2023
            </p>
          </div>
          <hr />

          <div>
            <h2 style={{ fontSize: 35, marginTop: 20 }}>
              Expected Visa Approval
            </h2>
            <h6 style={{ paddingTop: 5, paddingBlock: 10 }}>
              10/12/23, if submitted now!
            </h6>
          </div>
          <hr />
          <div>
            <h2 style={{ fontSize: 35, marginTop: 20 }}>
              Know Before You Pay</h2>
            <br />

            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li style={{ padding: 10 }} >
                <h3>
                  ✓
                  Auto-validation upon submission
                </h3>
                <p style={{ fontSize: 15, marginLeft: 15 }}>
                  Atlys performs automated validation after submission. We will let you know if there are any problems with the application.
                </p>
              </li>
              <li style={{ padding: 10 }} >

                <h3>
                  ✓ Visa processed within 30 seconds
                </h3>

                <p style={{ fontSize: 15, marginLeft: 15 }}>
                  Atlys automatically processes your visa.
                </p>
              </li>
              <li style={{ padding: 10 }} >

                <h3>
                  ✓
                  Non-refundable after you pay
                </h3>

                <p style={{ fontSize: 15, marginLeft: 15 }}>
                  If canceled after payment, you will not be refunded.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='py-10 px-10' style={{
          borderRadius: 10, borderColor: '#f5f5f5',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
          marginLeft: '10%',
          backgroundColor: 'white',
          height: 350,
          width: "25%"

        }}>
          <h2 style={{fontSize:30}}>Price Details</h2>
          <br />
          <div style={{padding:10,backgroundColor:'rgba(0, 123, 255, 0.15)',borderRadius:10,paddingTop:20}}>
          <div className='d-flex' style={{justifyContent:'space-between',width:'100%'}}>
          <h5>Traveler 1: </h5>
            <h5>6500/-</h5>
          </div>
          <hr />
          
          <div className='d-flex' style={{justifyContent:'space-between',width:'100%'}}>
            <h5>Total: </h5>
            <h5>500/-</h5>
          </div>
          <hr />
          <div className='d-flex' style={{justifyContent:'space-between',width:'100%'}}>
            <p>Current Wallet Balance</p>
            <p>200/-</p>
          </div>
          </div>
          <div className="mb-10 mt-10 mx-10" style={{ height: 40, width: 190, border: "1px solid", borderColor: '#696969', borderRadius: 20, alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#007bff' }}>
            <h6 className="fs-4" style={{ color: 'white' }}>
              Review and Save
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Vertical };
