import React from "react";
import { Button, Card, Text, Box, Divider, Anchor } from "@mantine/core";
import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import "./ApplicantDashboard.css"; // Import the CSS file

function SubmitNewApplication() {
  return (
    <Box padding="xl">
      {/* Breadcrumb navigation */}
      <Text className="breadcrumb">
        Home &gt; Patent Management &gt; Applicant
      </Text>

      {/* Header */}
      <Text className="header">Submit New Patent Application</Text>

      {/* Tab options (implemented with react-router navigation links) */}
      <Box className="tab-container">
        <Anchor component={Link} to="/viewapplicationspage" underline={false}>
          View Applications
        </Anchor>
        <Anchor component={Link} to="/saveddraftspage" underline={false}>
          Saved Drafts
        </Anchor>
        <Anchor component={Link} to="/notifications" underline={false}>
          Notifications
        </Anchor>
      </Box>

      {/* Card containing form link */}
      <Card className="card-container">
        <Text className="card-header">Intellectual Property Filing Form</Text>
        <Divider className="card-divider" />
        <Button
          rightIcon={<ArrowRight size={16} />}
          variant="filled"
          className="card-button"
        >
          Submit New Patent Application
        </Button>
      </Card>
    </Box>
  );
}

export default SubmitNewApplication;
