import { useState } from "react";
import { VisaDetailCard } from "../../../components/VisaDetailCard";

const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState("All"); // Initialize active tab state

  // Function to handle tab clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Define inline styles for the active tab text
  const activeTabTextStyle = {
    color: '#fff', // Text color for the active tab
    cursor: 'pointer',
    fontSize: 18,
  };

  // Define inline styles for the active tab border
  const activeTabBorderStyle = { // Add a bottom border for the active tab
    padding: 7,
    paddingLeft: 8,
    marginTop:5,
    borderRadius: 7,
    backgroundColor: '#007bff', // Add some padding to the active tab
  };

  // Define inline styles for the inactive tab text
  const tabTextStyle = {
    color: '#000', // Text color for the inactive tab
    cursor: 'pointer',
    fontSize: 18,
  };

  // Define inline styles for the inactive tab border
  const tabBorderStyle = { // Add a transparent bottom border for inactive tabs
    padding: '8px',
    marginTop:5,
     // Add some padding to the inactive tabs
  };

  return (
    <div style={{ display: 'flex', width: '100%', marginTop: -35 }}>
      {/* Sidebar */}
      <div
        style={{
          width: '20%',
          backgroundColor: '#fafafa',
          padding: '16px',
          position: 'fixed',
          height: '100%',
          overflowY: 'auto',
          paddingTop:50
        }}
      >
        <h2 className="py-7" style={{ padding: 8 }}>
          VISA
        </h2>
        <div
          onClick={() => handleTabClick("All")}
          style={activeTab === "All" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          All
        </div>
        <div
          onClick={() => handleTabClick("Processed")}
          style={activeTab === "Processed" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          Processed
        </div>
        <div
          onClick={() => handleTabClick("In-Process")}
          style={activeTab === "In-Process" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          In-Process
        </div>
        <div
          onClick={() => handleTabClick("Waiting for Approval")}
          style={activeTab === "Waiting for Approval" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          Waiting for Approval
        </div>
        <div
          onClick={() => handleTabClick("Rejected")}
          style={activeTab === "Rejected" ? { ...activeTabTextStyle, ...activeTabBorderStyle } : { ...tabTextStyle, ...tabBorderStyle }}
        >
          Rejected
        </div>
      </div>

      {/* Right-side content */}
      <div style={{ marginLeft: '20%', width: '80%', overflowY: 'auto', padding: '16px' }}>
        <VisaDetailCard />
        <VisaDetailCard />
        <VisaDetailCard />
        <VisaDetailCard />
        <VisaDetailCard />

      </div>
    </div>
  );
};

export default MerchantDashboard;
