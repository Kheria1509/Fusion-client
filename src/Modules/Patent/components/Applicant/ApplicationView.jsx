import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box, Grid, Anchor } from "@mantine/core";
import { Eye, Info } from "phosphor-react";
import { Link } from "react-router-dom";
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
    borderColor: "purple",
  },
  {
    title: "Title of Patent Application",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    tokenNumber: "Token number",
    applicationNumber: "Application Number",
    attorney: "Name of Attorney",
    borderColor: "blue",
  },
  {
    title: "Title of Patent Application",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    tokenNumber: "Token number",
    applicationNumber: "Application Number",
    attorney: "Name of Attorney",
    borderColor: "green",
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
      className={`application-card border-${borderColor}`}
      padding="lg"
      mb="lg"
    >
      <Text weight={600} size="lg" className="card-header">
        {title}
      </Text>
      <Text
        size="sm"
        color="dimmed"
        className="card-details"
      >{`${date} | ${time}`}</Text>
      <Text size="sm" className="card-details">
        Token No.: {tokenNumber}
      </Text>
      <Text size="sm" className="card-details">
        Application No.: {applicationNumber}
      </Text>
      <Text size="sm" className="card-details">
        Assigned Attorney: {attorney}
      </Text>
      <Box mt="md" display="flex" justifyContent="space-between">
        <Button
          variant="outline"
          leftIcon={<Eye size={16} />}
          className="button-blue"
        >
          View Submitted Form
        </Button>
        <Button
          variant="outline"
          leftIcon={<Info size={16} />}
          className="button-blue"
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
    <div style={{ padding: "24px" }}>
      {/* Breadcrumb navigation */}
      <Text className="breadcrumb">
        Home &gt; Patent Management &gt; Applicant
      </Text>

      {/* Header */}
      <Text className="header">View Applications</Text>

      {/* Tab options */}
      <Box className="tab-container">
        <Anchor component={Link} to="/applicant_dashboard" underline={false}>
          <Text size="sm">Submit New Application</Text>
        </Anchor>
        <Text size="sm" className="active">
          View Applications
        </Text>
        <Anchor component={Link} to="/saveddraftspage" underline={false}>
          <Text size="sm">Saved Drafts</Text>
        </Anchor>
        <Anchor component={Link} to="/notifications" underline={false}>
          <Text size="sm">Notifications</Text>
        </Anchor>
      </Box>

      {/* Application cards */}
      <Grid>
        {applicationsData.map((application, index) => (
          <Grid.Col span={4} key={index}>
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
    </div>
  );
}

export default ViewApplicationsPage;
