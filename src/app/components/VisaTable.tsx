import React from 'react';
import ApplyVisa from './ApplyVisa';

type Props = {
  className: string;
  title: String;
  show: (value: boolean) => void;
  visaList: boolean;
  visaListLoader:(value: boolean) => void;
  apiData: any;
  onSelectClick: (entryData: any) => void;// Add a new prop for API data
};

const VisaTable: React.FC<Props> = ({ className, title, show, visaList,visaListLoader, apiData,onSelectClick }) => {
  const handleSelectClick = (entryData) => {
    // Pass the selected entry data to the parent component
    onSelectClick(entryData);
  };
  return (
    <div style={{ backgroundColor: '#fff' }} className='w-full'>
      <ApplyVisa visaListLoader={visaListLoader} visaList={visaList} show={show} onApiDataReceived={function (data: any): void {
        throw new Error('Function not implemented.');
      }} />
      {/* Visa card 1 */}
      {/* ... Rest of your component remains the same */}
      {apiData.map((entry: any, index: number) => (

      <div className='card-body'>
        <div className='w-full m-7' style={{
          borderRadius: 20, borderColor: '#f5f5f5',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{ backgroundColor: '#0095E8', width: '100%', height: 50, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingLeft: 20, alignItems: 'center', display: 'flex' }}>
            <h2 style={{ color: 'white' }}>
              {entry.description}
            </h2>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15, marginTop: 10 }}>
            <div style={{ width: '70%' }} className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-gray-500 align-middle gs-0 gy-4'>
                <thead style={{ backgroundColor: '#f7f7f7' }}>
                  <tr className='fw-bold text-dark'>
                    <th style={{ paddingLeft: 10 }} className='min-w-140px'>Entry</th>
                    <th className='min-w-120px'>Validity</th>
                    <th className='min-w-120px'>Processing Time</th>
                    <th className='min-w-120px'>Price</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  <tr>

                    <td style={{ paddingLeft: 10 }}>
                      {/* Date */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        {entry.entryType}
                      </a>
                    </td>
                    <td>
                      {/* Location 1 */}
                      <a href='#' className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        {entry.day}
                      </a>
                    </td>
                   
                    <td>
                      {/* Status */}
                      <span className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        4 Business days
                      </span>
                    </td>

                    <td>
                      {/* Status */}
                      <span className='text-dark fw-medium text-hover-primary d-block fs-30'>
                        {(entry.receipt['Visa Fees']?entry.receipt['Visa Fees']:0)+(entry.receipt['Service Fees']?entry.receipt['Service Fees']:0)}
                      </span>
                    </td>
                    <td>
                      {/* Action Buttons */}

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='d-flex justify-content-end' style={{ width: 110, height: 45, margin: 20 }}>
              <button type='submit' style={{ width: '100%', height: '100%' }} onClick={() => handleSelectClick(entry)} className='btn btn-primary'>
                Select
              </button>
            </div>
          </div>
        </div>
        {/* end::Table container */}
      </div>
      ))}
    </div>
  );
};

export { VisaTable };
