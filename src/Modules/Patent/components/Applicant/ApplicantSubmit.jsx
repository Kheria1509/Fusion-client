import React from "react";
import { Button, Card, Text, Box, Divider } from "@mantine/core";
import { Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./ApplicantSubmit.css";
function SubmitNewApplication() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/patent/applicant/applications/submit/new");
  };
  return (
    <Box>
      <Text className="header-texts">New Patent Application</Text>
      <Card className="card">
        <Text className="card-title">Intellectual Property Filing Form</Text>
        <Text className="card-details">
          Complete this form to initiate a new patent filing. Please ensure all
          necessary details are accurate before submission. This form will help
          streamline your application process and ensure compliance with
          institutional guidelines.
        </Text>
        <Divider className="card-line" />
        <Button
          variant="outline"
          leftIcon={<Info size={16} />}
          className="submit-button"
          onClick={handleSubmit}
        >
          Submit New Patent Application
        </Button>
      </Card>
    </Box>
  );
}
export default SubmitNewApplication;