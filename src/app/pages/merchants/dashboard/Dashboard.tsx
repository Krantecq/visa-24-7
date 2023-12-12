import { useEffect, useState } from "react";
import { VisaDetailCard } from "../../../components/VisaDetailCard";
import axiosInstance from "../../../helpers/axiosInstance";
import Cookies from 'js-cookie';
import { MerchantAnaltytics } from "../../../components/MerchantAnalytics";
import { TfiStatsUp } from "react-icons/tfi";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { GoStopwatch } from "react-icons/go";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { GiAirplaneDeparture } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';

const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState("Analytics"); // Initialize active tab state
  const [visaData, setVisaData] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch data from the API based on the activeTab
    fetchData();
    fetchDashboardData(); // Call the fetchData function when activeTab changes
  }, [activeTab]);

  // Function to handle tab clicks
  const handleTabClick = async (tabName) => {
    setActiveTab(tabName);

    if (tabName === 'ApplyVisa') {
      setLoading(true); // Show loading state or spinner until the data is fetched
      try {
        // Fetch data here
        await fetchData();
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, e.g., setLoading(false) to stop loading state
      }
      setLoading(false); // Stop loading state after data is fetched
    }
  };

  const fetchData = async () => {
    try {
      const merchant_id = Cookies.get('user_id');
      let postBody = {
        merchant_id: merchant_id
      }
      let data;

      let response = await axiosInstance.post("/backend/merchant/fetch_visa", postBody);
      if (response.status == 200) {
        if (activeTab === "Processed") {
          data = response.data.data.filter(item => item.visa_status === 'Processed');
        } else if (activeTab === "In-Process") {
          data = response.data.data.filter(item => item.visa_status === 'Applied');
        } else if (activeTab === "All") {
          data = response.data.data
        } else if (activeTab === "Not Issued") {
          data = response.data.data.filter(item => item.visa_status === 'Not Issued');
        } else if (activeTab === "Rejected") {
          data = response.data.data.filter(item => item.visa_status === 'Rejected');
        } else if (activeTab === "Waiting") {
          data = response.data.data.filter(item => item.visa_status === 'Waiting');
        }
        if (activeTab != "Analytics") {
          setVisaData(data); // Set the fetched data in the state
        }
        if (activeTab === 'ApplyVisa') {
          navigate('/merchant/apply-visa');
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDashboardData = async () => {
    try {
      const merchant_id = Cookies.get('user_id');
      let postBody = {
        merchant_id: merchant_id
      }
      let response = await axiosInstance.post("/backend/merchant_dashboard", postBody);
      if (response.status == 200) {
        setDashboardData(response.data.data); // Set the fetched data in the state
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Define inline styles for the active tab text
  const activeTabTextStyle = {
    color: '#000', // Text color for the active tab
    cursor: 'pointer',
    backgroundColor:"#E2FDD5",
    fontSize: 16,
    fontWeight: 600,
    border: "none",
    paddingBottom: "20px",
    padding: '10px 0',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  };

  // Define inline styles for the active tab border
  const activeTabBorderStyle = { // Add a bottom border for the active tab
    padding: 7,
    paddingLeft: 8,
    marginTop: 5,
    borderRadius:20,
    fontWeight:"500",
    color: '#327113', // Add some padding to the active tab
  };

  // Define inline styles for the inactive tab text
  const tabTextStyle = {
    color: '#959595', // Text color for the inactive tab
    cursor: 'pointer',
    fontSize: 16,
    paddingBottom: "25px",
    padding: '10px 0',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize:"20px",
    marginRight:"10px",
    marginLeft:"10px",
  };

  // Define inline styles for the inactive tab border
  const tabBorderStyle = { // Add a transparent bottom border for inactive tabs
    padding: '8px',
    marginTop: 5,
    // Add some padding to the inactive tabs
  };

  return (
    <div style={{ display: 'flex', width: '100%', marginTop: -70, backgroundColor: '#fff' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '19%',
          backgroundColor: '#f8f8f8',
          padding: '16px',
          position: 'fixed',
          height: '100%',
          overflowY: 'auto',
          paddingTop: 50,
          left:0
        }}
      >

        <div
          onClick={() => handleTabClick("Analytics")}
          style={activeTab === "Analytics" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <TfiStatsUp style={iconStyle}/>Analytics
        </div>
        <h5 className="py-7" style={{ padding: 8 }}>
          VISA
        </h5>
        <div
          onClick={() => handleTabClick("All")}
          style={activeTab === "All" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <MdOutlineAlignHorizontalLeft style={iconStyle}/>All
        </div>
        <div
          onClick={() => handleTabClick("Processed")}
          style={activeTab === "Processed" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <IoMdDoneAll style={iconStyle}/>Processed
        </div>
        <div
          onClick={() => handleTabClick("In-Process")}
          style={activeTab === "In-Process" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <IoSettingsOutline style={iconStyle}/>In-Process
        </div>

        <div
          onClick={() => handleTabClick("Waiting")}
          style={activeTab === "Waiting" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <GoStopwatch style={iconStyle}/>Waiting for Approval
        </div>
        <div
          onClick={() => handleTabClick("Not Issued")}
          style={activeTab === "Not Issued" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <MdOutlineDoNotDisturb style={iconStyle}/>Not Issued
        </div>
        <div
          onClick={() => handleTabClick("Rejected")}
          style={activeTab === "Rejected" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <RxCross1 style={iconStyle}/>Rejected
        </div>
        <div
          onClick={() => handleTabClick("ApplyVisa")}
          style={activeTab === "ApplyVisa" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          <GiAirplaneDeparture style={iconStyle} />Apply Visa
        </div>
      </div>

      <div style={{ marginLeft: '20%', width: '80%', overflowY: 'auto', padding: '16px' }}>
        {activeTab === "Analytics" ?
          <div>
            <MerchantAnaltytics dashboardData={dashboardData} />
          </div>
          :
          <>
            <Loader loading={loading} />
            {!loading && (
              <VisaDetailCard visaData={visaData} />
            )}
          </>
        }
      </div>
    </div>
  );
};

export default MerchantDashboard;