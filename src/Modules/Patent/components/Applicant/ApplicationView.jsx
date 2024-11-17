import React from "react";
import { Button, Card, Text, Box, Grid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "./ApplicationView.css";

// Component for individual application card
function ApplicationCard({
  title,
  date,
  tokenNumber,
  applicationNumber,
  attorney,
  onViewApplication,
}) {
  return (
    <Box className="main-box">
      <Card className="application-card" style={{ borderLeft: "6px solid #4caf50" }}>
        <Text className="app-card-header">{title}</Text>
        <Text className="app-card-details">{`Date: ${date}`}</Text>
        <Text className="app-card-details">Token No.: {tokenNumber}</Text>
        <Text className="app-card-details">Application No.: {applicationNumber}</Text>
        <Text className="app-card-details">Assigned Attorney: {attorney}</Text>
        <Box className="button-container">
          <Button
            variant="outline"
            className="viewApplicationButton"
            onClick={onViewApplication}
          >
            View Application
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

// Main ApplicationView component
function ApplicationView() {
  const navigate = useNavigate();

  // AI-based Disease Detection in Crops data
  const applicationData = {
    title: "AI-Based Disease Detection in Crops",
    date: "15/11/2024",
    tokenNumber: "TKN123456",
    applicationNumber: "APP987654",
    attorney: "EFG987654",
  };

  // Handle View Application click
  const handleViewApplication = () => {
    navigate("/patent/applicant/applications/submitted"); // Redirect to IPFilingForm page
  };

  return (
    <Box style={{ width: "95%" }}>
      <Text className="app-header-texts">View Application</Text>
      <Grid className="app-container">
        <Grid.Col span={12}>
          <ApplicationCard
            title={applicationData.title}
            date={applicationData.date}
            tokenNumber={applicationData.tokenNumber}
            applicationNumber={applicationData.applicationNumber}
            attorney={applicationData.attorney}
            onViewApplication={handleViewApplication}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default ApplicationView;
