import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../helpers/axiosInstance';
import Cookies from 'js-cookie'

function ProcessedWrapper() {
  const [visaStatsData, setVisaStatsData] = useState([]);
  const user_id = Cookies.get('user_id');

  useEffect(() => {
    // Define a function to make the POST request
    const fetchData = async () => {
      try {
        const postData = {
          super_admin_id:'6507f4b97c2c4102d5024e01'          // Your POST data goes here
        };
        // Make a POST request to your API endpoint
        axiosInstance.post('/backend/super_admin/fetch_visa', postData)
          .then((response) => {
            console.log(response.data)
            const filteredData = response.data.data.filter(item => item.visa_status === 'Processed');
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
      <ProcessedTable className='' title={'Visa Processed'} data={visaStatsData}/>
    </div>
  )
}

export default ProcessedWrapper