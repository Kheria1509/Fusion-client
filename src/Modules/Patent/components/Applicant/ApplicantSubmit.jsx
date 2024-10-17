import React from "react";
import { Button, Card, Text, Box, Divider, Anchor } from "@mantine/core";
import { Info } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import CustomBreadcrumbs from "../../../../components/Breadcrumbs"; // Updated import
import "./ApplicantSubmit.css"; // Import the CSS file

function SubmitNewApplication() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the click and navigate to /applicationform
  const handleSubmit = () => {
    navigate("/applicationform"); // Navigate to the form route
  };

  return (
    <Box style={{ padding: "24px" }}>
      {/* Breadcrumb navigation */}
      <CustomBreadcrumbs />
      {/* Replaced breadcrumb text with CustomBreadcrumbs */}
      {/* Header */}
      <Text className="header">Submit New Patent Application</Text>
      {/* Tab options (implemented with react-router navigation links) */}
      <Box className="tab-container">
        <Text size="sm" className="active">
          Submit New Application
        </Text>
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
          variant="outline"
          leftIcon={<Info size={16} />}
          className="button"
          onClick={handleSubmit} // Trigger navigation on button click
        >
          Submit New Patent Application
        </Button>
      </Card>
    </Box>
  );
}

export default SubmitNewApplication;
