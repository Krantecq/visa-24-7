import React, { useState, useEffect } from 'react';
import { MemberStatsTable } from '../../components/MemberStatsTable'
import axios from 'axios';

function MerchantWrapper() {
  // Define the initial state for memberStatsData
  const [memberStatsData, setMemberStatsData] = useState([]);

  useEffect(() => {
    // Define a function to make the POST request
    const fetchData = async () => {
      try {
        const postData = {
          // Your POST data goes here
        };
        // Make a POST request to your API endpoint
        axios.post('http://localhost:5003/backend/fetch_merchant_user', postData)
          .then((response) => {
            console.log(response.data)
            setMemberStatsData(response.data.data);
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
      <MemberStatsTable className='' data={memberStatsData} />
    </div>
  );
}

export default MerchantWrapper