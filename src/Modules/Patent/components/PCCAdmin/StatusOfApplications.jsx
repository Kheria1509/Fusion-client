// StatusOfApplications.jsx

import React, { useState } from "react";
import { Box, Button, Card, Text, Title } from "@mantine/core";
import { StatusOfApplicationData } from "./StatusOfApplicationsData";
import { Eye } from "phosphor-react";
import "./StatusOfApplications.css";
import SampleAppDetails from "./PCCAStatusView"; // Import the detailed view component

function StatusOfApplicationCard({ title, applicant, date, status, applicationNumber, borderColor, onView }) {
  return (
    <Card className="status-card" style={{ borderLeft: `6px solid ${borderColor}` }}>
      <Text className="card-title">{title}</Text>
      <Text className="card-description">
        Application by : {applicant} <br/>
        Status: {status.toLowerCase()} <br/>
        Date Submitted: {date} <br/>
        Application No.: {applicationNumber}
      </Text>
      <Button
        variant="light"
        leftIcon={<Eye size={16} />}
        onClick={() => onView(applicationNumber)} // Pass applicationNumber to onView
        className="view-button"
      >
        View Details
      </Button>
    </Card>
  );
}

function StatusOfApplications() {
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleViewClick = (applicationNumber) => {
    setSelectedApplication(applicationNumber); // Set the selected application number
  };

  const handleBackClick = () => {
    setSelectedApplication(null); // Go back to the list view
  };

  return (
    <Box className="status-container">
      {!selectedApplication ? (
        // Show list of applications if no application is selected
        <>
          <Title order={2} className="status-title">Status of Applications</Title>
          <Text size="md" color="dimmed" className="description">
            Below is the list of recent patent applications with their current status. Click on "View Details" for more information on each application.
          </Text>
          <Box className="status-cards-container">
            {StatusOfApplicationData.map((application, index) => (
              <StatusOfApplicationCard
                key={index}
                {...application}
                onView={handleViewClick}
              />
            ))}
          </Box>
        </>
      ) : (
        // Show detailed view if an application is selected
        <Box className="detail-view-container">
          <Button variant="outline" onClick={handleBackClick}>
            Back to Applications List
          </Button>
          <SampleAppDetails /> {/* Display detailed view component */}
        </Box>
      )}
    </Box>
  );
}

export default StatusOfApplications;
