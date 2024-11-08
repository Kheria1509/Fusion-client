import React from "react";
import { Box, Button, Card, Text, Title } from "@mantine/core";
import { StatusOfApplicationData } from "./StatusOfApplicationsData";
import { Eye } from "phosphor-react";
import "./StatusOfApplications.css";

function StatusOfApplicationCard({ title, applicant, date, status, applicationNumber, borderColor, onView }) {
  return (
    <Card className="status-card" style={{ borderLeft: `6px solid ${borderColor}` }}>
      <Text className="card-title">{title}</Text>
      <Text className="card-description">
        Application by {applicant} is currently {status.toLowerCase()}. Click "View" for more details.
      </Text>
      <Text className="card-detail">Date Submitted: {date}</Text>
      <Text className="card-detail">Application No.: {applicationNumber}</Text>
      <Button
        variant="light"
        leftIcon={<Eye size={16} />}
        onClick={onView}
        className="view-button"
      >
        View Details
      </Button>
    </Card>
  );
}

function StatusOfApplications() {
  const handleViewClick = (applicationNumber) => {
    alert(`Viewing application: ${applicationNumber}`);
  };

  return (
    <Box className="status-container">
      <Title order={2} className="status-title">Status of Applications</Title>
      <Text size="md" color="dimmed" className="description">
        Below is the list of recent patent applications with their current status. Click on "View Details" for more information on each application.
      </Text>
      <Box className="status-cards-container">
        {StatusOfApplicationData.map((application, index) => (
          <StatusOfApplicationCard
            key={index}
            {...application}
            onView={() => handleViewClick(application.applicationNumber)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default StatusOfApplications;
