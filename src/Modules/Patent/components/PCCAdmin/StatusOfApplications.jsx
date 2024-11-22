import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Box, Button, Card, Text, Title, Center } from "@mantine/core";
import { Eye } from "@phosphor-icons/react";
import { StatusOfApplicationData } from "./StatusOfApplicationsData";
import SampleAppDetails from "./PCCAStatusView";
import "./StatusOfApplications.css";

// Card Component for Individual Application Status
function StatusOfApplicationCard({
  title,
  applicant,
  date,
  status,
  applicationNumber,
  onView,
}) {
  return (
    <Card className="status-card">
      <Text className="card-title">{title}</Text>
      <Text className="card-description">
        Application by: {applicant} <br />
        Status: {status.toLowerCase()} <br />
        Date Submitted: {date} <br />
        Application No.: {applicationNumber}
      </Text>
      <Button
        variant="filled"
        color="blue"
        leftIcon={<Eye size={16} />}
        onClick={() => onView(applicationNumber)}
        className="view-button"
      >
        View Details
      </Button>
    </Card>
  );
}

// Add PropTypes validation for StatusOfApplicationCard
StatusOfApplicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  applicant: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  onView: PropTypes.func.isRequired,
};

function StatusOfApplications() {
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleViewClick = (applicationNumber) => {
    setSelectedApplication(applicationNumber);
  };

  const handleBackClick = () => {
    setSelectedApplication(null);
  };

  return (
    <Box className="status-container">
      {!selectedApplication ? (
        // List view of applications
        <>
          <Center className="status-header">
            {/* <PaperPlaneTilt
              size={32}
              color="#1d4ed8"
              style={{ marginRight: 10 }}
            /> */}
            <Title order={2} className="status-title">
              Status of Applications
            </Title>
          </Center>
          <Text size="md" color="dimmed" className="description">
            Below is the list of recent patent applications with their current
            status. Click on "View Details" for more information on each
            application.
          </Text>
          <Box className="status-cards-container">
            {StatusOfApplicationData.map((application, index) => (
              <StatusOfApplicationCard
                key={index}
                title={application.title}
                applicant={application.applicant}
                date={application.date}
                status={application.status}
                applicationNumber={application.applicationNumber}
                onView={handleViewClick}
              />
            ))}
          </Box>
        </>
      ) : (
        // Detailed view of selected application
        <Box className="detail-view-container">
          <Button
            variant="filled"
            color="blue"
            onClick={handleBackClick}
            className="back-button"
          >
            Back to Applications List
          </Button>
          <SampleAppDetails applicationNumber={selectedApplication} />
        </Box>
      )}
    </Box>
  );
}

export default StatusOfApplications;
