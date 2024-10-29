import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box, Grid } from "@mantine/core";
import { Eye, Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./ApplicationView.css";

// Dummy data for applications
const applicationsData = [
  {
    title: "Wireless Communication System for IoT Devices",
    date: "12/09/2024",
    time: "14:30:45",
    tokenNumber: "TKN001234",
    applicationNumber: "APP001234",
    attorney: "John Doe",
    borderColor: "orange",
  },
  {
    title: "Renewable Energy Storage System",
    date: "08/09/2024",
    time: "13:20:30",
    tokenNumber: "TKN001245",
    applicationNumber: "APP001245",
    attorney: "Sarah Adams",
    borderColor: "mediumseagreen",
  },
  {
    title: "AI-Powered Financial Fraud Detection",
    date: "05/09/2024",
    time: "11:15:50",
    tokenNumber: "TKN001246",
    applicationNumber: "APP001246",
    attorney: "Mark Johnson",
    borderColor: "tomato",
  },
  {
    title: "Advanced Cybersecurity Threat Intelligence",
    date: "03/09/2024",
    time: "09:40:10",
    tokenNumber: "TKN001247",
    applicationNumber: "APP001247",
    attorney: "Linda Perez",
    borderColor: "steelblue",
  },
];

// Component for individual application card
function ApplicationCard({
  title,
  date,
  time,
  tokenNumber,
  applicationNumber,
  attorney,
  borderColor,
  onViewDetails,
}) {
  return (
    <Card
      className="application-card"
      style={{ borderLeft: `6px solid ${borderColor}` }}
    >
      <Text className="card-header">{title}</Text>
      <Text className="card-details">{`${date} | ${time}`}</Text>
      <Text className="card-details">Token No.: {tokenNumber}</Text>
      <Text className="card-details">Application No.: {applicationNumber}</Text>
      <Text className="card-details">Assigned Attorney: {attorney}</Text>
      <Box className="button-container">
        <Button
          variant="outline"
          leftIcon={<Eye size={16} />}
          className="button"
        >
          View Submitted Form
        </Button>
        <Button
          variant="outline"
          leftIcon={<Info size={16} />}
          className="button"
          onClick={onViewDetails} // Attach onClick handler
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
}

// PropTypes validation for ApplicationCard
ApplicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  attorney: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired, // Add prop type for onViewDetails
};

// Main ViewApplicationsPage component
function ApplicationView() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "View Details" click
  const handleViewDetails = (application) => {
    // Redirect to the specified path with application-specific details
    navigate(`/patent/applicant/applications/status-view`, {
      state: { application },
    });
  };

  return (
    <Box>
      <Text className="header-text">View Applications</Text>
      <Grid className="application-container">
        {applicationsData.map((application, index) => (
          <Grid.Col span={6} key={index}>
            <ApplicationCard
              title={application.title}
              date={application.date}
              time={application.time}
              tokenNumber={application.tokenNumber}
              applicationNumber={application.applicationNumber}
              attorney={application.attorney}
              borderColor={application.borderColor}
              onViewDetails={() => handleViewDetails(application)} // Pass application data to handler
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default ApplicationView;
