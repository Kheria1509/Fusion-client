import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box, Grid, Anchor } from "@mantine/core";
import { Eye, Info } from "phosphor-react";
import "./ApplicationView.css"; // Import the CSS file

// Dummy data for applications
const applicationsData = [
  {
    title: "Title of Patent Application",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    tokenNumber: "Token number",
    applicationNumber: "Application Number",
    attorney: "Name of Attorney",
    borderColor: "orange",
  },
  {
    title: "Title of Patent Application",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    tokenNumber: "Token number",
    applicationNumber: "Application Number",
    attorney: "Name of Attorney",
    borderColor: "lightblue",
  },
  {
    title: "Title of Patent Application",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    tokenNumber: "Token number",
    applicationNumber: "Application Number",
    attorney: "Name of Attorney",
    borderColor: "lightgreen",
  },
  {
    title: "Title of Patent Application",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    tokenNumber: "Token number",
    applicationNumber: "Application Number",
    attorney: "Name of Attorney",
    borderColor: "lightgreen",
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
};

// Main ViewApplicationsPage component
function ViewApplicationsPage() {
  return (
    <Box>
      {/* Header */}
      <Text className="header-text">View Applications</Text>

      {/* Application cards */}
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
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default ViewApplicationsPage;
