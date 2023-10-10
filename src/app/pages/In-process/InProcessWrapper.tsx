import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';

function InProcessWrapper() {
  const [visaStatsData, setVisaStatsData] = useState([]);

  useEffect(() => {
    // Define a function to make the POST request
    const fetchData = async () => {
      try {
  
        // Make a POST request to your API endpoint
        axiosInstance.get('/backend/super_admin/fetch_all_visa')
          .then((response) => {
            console.log(response.data)
            const filteredData = response.data.data.filter(item => item.visa_status === 'Applied');
            setVisaStatsData(filteredData);
          })
          .catch((error) => {
            console.error('Error fetching Atlys data:', error);
          });

        
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <ProcessedTable className='' title={'Visa In-Process'} data={visaStatsData}/>
    </div>
  )
}

export default InProcessWrapper