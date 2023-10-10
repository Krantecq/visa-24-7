import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { WalletTable } from '../../components/WalletTable';

function WalletWrapper() {
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    // Define a function to make the POST request
    const fetchData = async () => {
      try {
        
        // Make a POST request to your API endpoint
        axiosInstance.get('/backend/fetch_wallet_transaction')
          .then((response) => {
            console.log(response.data)
            setWalletData(response.data.data);
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
      <WalletTable className='' title={'Wallet'} data={walletData}/>
    </div>
  )
}

export default WalletWrapper;
