import React from "react";
import { Button, Card, Text, Box, Divider } from "@mantine/core";
import { Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./ApplicantDashboard.css";

function SubmitNewApplication() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/patent/applicationform");
  };

  return (
    <Box className="submit-application-container">
      <Text className="header">Submit New Patent Application</Text>
      <Card className="dashboard-card">
        <Text className="dashboard-card-title">
          Intellectual Property Filing Form
        </Text>
        <Divider className="card-divider" />
        <Button
          variant="outline"
          leftIcon={<Info size={16} />}
          className="button"
          onClick={handleSubmit}
        >
          Submit New Patent Application
        </Button>
      </Card>
    </Box>
  );
}

export default SubmitNewApplication;
