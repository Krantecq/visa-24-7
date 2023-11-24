import { ProcessedTable } from '../../components/ProcessedTable'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { RevenueTable } from '../../components/RevenueTable';

function RevenueWrapper() {
  const [revenueData, setRevenueData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        
        axiosInstance.get('/backend/super_admin/revenue')
          .then((response) => {
            console.log(response.data)
            setRevenueData(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching Atlys data:', error);
            setLoading(false);
          });

        
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <RevenueTable className='' title={'Revenue'} data={revenueData} loading={loading}/>
    </div>
  )
}

export default RevenueWrapper;