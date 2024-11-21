/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card, Text, Box, Grid } from "@mantine/core";
import { Info } from "phosphor-react";
import PropTypes from "prop-types";
import "./SubmittedApplications.css";

// Component for individual application card
function SubmittedApplicationCard({
  title,
  date,
  tokenNumber,
  applicationNumber,
  attorney,
  onViewDetails,
}) {
  return (
    <Card className="submitted-application-card">
      <Text className="card-header">{title}</Text>
      <Text className="card-details">{`Date: ${date}`}</Text>
      <Text className="card-details">Token No.: {tokenNumber}</Text>
      <Text className="card-details">Application No.: {applicationNumber}</Text>
      <Text className="card-details">Assigned Attorney: {attorney}</Text>
      <Box className="button-container">
        <Button
          variant="outline"
          leftIcon={<Info size={16} />}
          mt="md"
          // size="xs"
          className="view-det-button"
          onClick={onViewDetails}
          fullWidth
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
}

// PropTypes validation for SubmittedApplicationCard
SubmittedApplicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  attorney: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

// Main component
function SubmittedApplications({ setActiveTab }) {
  const handleViewDetails = () => {
    setActiveTab("1.1");
  };

  // Data for Submitted Applications
  const SubmittedApplicationsData = [
    {
      title: "Patent Application 1",
      date: "2024-11-15",
      tokenNumber: "T12345",
      applicationNumber: "A12345",
      attorney: "John Doe",
      borderColor: "mediumseagreen",
    },
    {
      title: "Patent Application 2",
      date: "2024-11-16",
      tokenNumber: "T12346",
      applicationNumber: "A12346",
      attorney: "Jane Smith",
      borderColor: "tomato",
    },
    {
      title: "Patent Application 3",
      date: "2024-11-17",
      tokenNumber: "T12347",
      applicationNumber: "A12347",
      attorney: "Jonny",
      borderColor: "steelblue",
    },
  ];

  return (
    <Box
      className="submitted-applications-container"
      style={{ padding: "24px" }}
    >
      <Text className="submitted-header-text">
        Applications Submitted by PCC Admin
      </Text>
      <Grid gutter="24px">
        {SubmittedApplicationsData.map((application, index) => (
          <Grid.Col span={6} key={index}>
            <SubmittedApplicationCard
              title={application.title}
              date={application.date}
              tokenNumber={application.tokenNumber}
              applicationNumber={application.applicationNumber}
              attorney={application.attorney}
              borderColor={application.borderColor}
              onViewDetails={() => handleViewDetails(application)}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default SubmittedApplications;
