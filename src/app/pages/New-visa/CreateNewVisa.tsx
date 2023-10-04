import React, { useState } from 'react';
import { Vertical } from '../../modules/wizards/components/Vertical';
import 'react-datepicker/dist/react-datepicker.css';
import SelectCountry from '../../components/VisaCountrySelect';
import { VisaTable } from '../../components/VisaTable';
import ApplyVisa from '../../components/ApplyVisa';

function NewVisaWrapper() {
  const [visaForm, showVisaForm] = useState(false);
  const [visaList, setVisaList] = useState(false); // Initialize as false
  const [apiData, setApiData] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleApiDataReceived = (data) => {
    // Handle the API data as needed
    setApiData(data);

    // Extract visaList from the API response and set it
    if (data && data.visaList) {
      setVisaList(data.visaList);
    }

    setVisaList(true); // Show the VisaTable component
  };

  const handleSelectClick = (selectedEntryData) => {
    setSelectedEntry(selectedEntryData);

    showVisaForm(true); // Set VisaForm visibility to true when the "Select" field is clicked
  };
  return (
    <div>
      {visaForm ? (
        <Vertical selectedEntry={selectedEntry}/>
      ) : (
        <>
          {visaList ? (
            <VisaTable
              className=''
              title={'VISA'}
              show={(value) => setVisaList(value)}
              visaList={visaList}
              apiData={apiData} // Pass the API data to VisaTable
              onSelectClick={handleSelectClick}
            />
          ) : (
            <ApplyVisa
              show={(value) => setVisaList(value)}
              visaList={visaList}
              onApiDataReceived={handleApiDataReceived}
            />
          )}
        </>
      )}
    </div>
  );
}

export default NewVisaWrapper;
