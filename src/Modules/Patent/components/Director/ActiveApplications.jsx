// ActiveApplications.jsx
import React from "react";
import { Card, Text, Button, Box } from "@mantine/core";

function ActiveApplications() {
  // Static data for active applications
  const activeApplicationsData = [
    {
      title: "Active Patent Application",
      applicant: "Dwight Schrute",
      applicationNumber: "456789",
      attorney: "Pam Beesly",
    },
  ];

  return (
    <Box style={{ padding: "24px" }}>
      <Text className="page-title">Active Applications</Text>
      <Box className="notifications-container">
        {activeApplicationsData.map((application, index) => (
          <Card key={index} className="notification-card">
            <Text className="notification-title">{application.title}</Text>
            <Text>{`Applicant: ${application.applicant} | Application Number: ${application.applicationNumber}`}</Text>
            <Text>{`Assigned Attorney: ${application.attorney}`}</Text>
            <Button variant="outline">View Details</Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ActiveApplications;
