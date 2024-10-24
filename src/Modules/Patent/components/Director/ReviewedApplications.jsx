// ReviewedApplications.jsx
import React from "react";
import { Card, Text, Button, Box } from "@mantine/core";
import "./DirectorNavbar.css";
import DirectorNavbar from "./DirectorNavbar";
import CustomBreadcrumbs from "../../../../components/Breadcrumbs"; // Assuming you have breadcrumbs

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
      <CustomBreadcrumbs />
      <Text className="page-title">Reviewed Applications</Text>
      {/* Include the Director Navbar for navigation */}
      <DirectorNavbar />
      <Box className="notifications-container">
        {reviewedApplicationsData.map((application, index) => (
          <Card key={index} className="notification-card">
            <Text className="notification-title">{application.title}</Text>
            <Text>{`Applicant: ${application.applicant} | Application Number: ${application.applicationNumber}`}</Text>
            <Text>{`Assigned Attorney: ${application.attorney}`}</Text>
            <Button variant="outline" className="view-button">
              View Details
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ReviewedApplications;
