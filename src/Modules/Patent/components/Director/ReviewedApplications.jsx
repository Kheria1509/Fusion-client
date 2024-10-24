// ReviewedApplications.jsx
import React from "react";
import { Card, Text, Button, Box } from "@mantine/core";

function ReviewedApplications() {
  // Dummy data for reviewed applications
  const reviewedApplicationsData = [
    {
      title: "Reviewed Patent Application",
      applicant: "Michael Scott",
      applicationNumber: "345678",
      attorney: "Jim Halpert",
    },
  ];

  return (
    <Box style={{ padding: "24px" }}>
      <Text className="page-title">Reviewed Applications</Text>
      <Box className="notifications-container">
        {reviewedApplicationsData.map((application, index) => (
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

export default ReviewedApplications;
