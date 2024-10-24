import React from "react";
import { Card, Text, Button, Box, Grid } from "@mantine/core";
import DirectorNavbar from "./DirectorNavbar"; // Import the Director Navbar
import CustomBreadcrumbs from "../../../../components/Breadcrumbs"; // Assuming you have breadcrumbs
import "./DirectorComponents.css"; // Import your CSS file
import "./DirectorNavbar.css";

function RecentApplications() {
  // Dummy data for recent applications
  const recentApplicationsData = [
    {
      title: "Recent Patent Application",
      applicant: "ABC",
      applicationNumber: "123456",
      attorney: "Jane Smith",
      borderColor: "orange",
    },
    {
      title: "Another Recent Patent",
      applicant: "ABC",
      applicationNumber: "789012",
      attorney: "David Johnson",
      borderColor: "lightblue",
    },
    {
      title: "Third Recent Patent",
      applicant: "ABC",
      applicationNumber: "345678",
      attorney: "Tom Brown",
      borderColor: "lightgreen",
    },
    {
      title: "Fourth Recent Patent",
      applicant: "ABC",
      applicationNumber: "901234",
      attorney: "Sarah Lee",
      borderColor: "red",
    },
    {
      title: "Fifth Recent Patent",
      applicant: "Chris Black",
      applicationNumber: "567890",
      attorney: "Laura White",
      borderColor: "lightpurple",
    },
    {
      title: "Sixth Recent Patent",
      applicant: "Anna Blue",
      applicationNumber: "234567",
      attorney: "Paul Brown",
      borderColor: "teal",
    },
  ];

  return (
    <Box style={{ padding: "24px" }}>
      {/* Breadcrumb navigation */}
      <CustomBreadcrumbs />

      {/* Page title and recent applications list */}
      <Text className="page-title">Recent Applications</Text>

      {/* Include the Director Navbar for navigation */}
      <DirectorNavbar />

      <Box className="applications-container">
        <Grid>
          {recentApplicationsData.map((application, index) => (
            <Grid.Col span={6} key={index}>
              <Card
                className="application-card"
                style={{ borderLeft: `6px solid ${application.borderColor}` }}
              >
                <Text className="notification-title">{application.title}</Text>
                <Text>{`Applicant: ${application.applicant} | Application Number: ${application.applicationNumber}`}</Text>
                <Text>{`Assigned Attorney: ${application.attorney}`}</Text>
                <Button variant="outline" className="view-button">
                  View Details
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RecentApplications;
