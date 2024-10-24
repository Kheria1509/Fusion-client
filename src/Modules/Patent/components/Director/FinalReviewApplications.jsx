// FinalReviewApplications.jsx
import React from "react";
import { Card, Text, Button, Box } from "@mantine/core";
import DirectorNavbar from "./DirectorNavbar"; // Import the Director Navbar

function FinalReviewApplications() {
  // Dummy data for final review applications
  const finalReviewData = [
    {
      title: "Patent Application in Final Review",
      applicant: "Emma Watson",
      applicationNumber: "234567",
      attorney: "Lisa Monroe",
    },
  ];

  return (
    <Box style={{ padding: "24px" }}>
      {/* Page title and Applications for Final Review */}
      <Text className="page-title">Applications for Final Review</Text>

      {/* Include the Director Navbar for navigation */}
      <DirectorNavbar />
      <Box className="notifications-container">
        {finalReviewData.map((application, index) => (
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

export default FinalReviewApplications;
