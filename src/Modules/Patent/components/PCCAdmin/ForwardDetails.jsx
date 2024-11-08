// ForwardDetails.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Text, Box } from "@mantine/core";
import PropTypes from "prop-types";
import "./ForwardDetails.css";

function ForwardDetails() {
  const location = useLocation();
  const { application } = location.state || {};

  if (!application) return <Text>No Application Data Available</Text>;

  return (
    <Card className="details-card">
      <Text className="details-header">{application.title}</Text>
      <Text className="details-item">Date: {application.date}</Text>
      <Text className="details-item">Time: {application.time}</Text>
      <Text className="details-item">Token Number: {application.tokenNumber}</Text>
      <Text className="details-item">Application Number: {application.applicationNumber}</Text>
      <Text className="details-item">Assigned Attorney: {application.attorney}</Text>
    </Card>
  );
}

ForwardDetails.propTypes = {
  application: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    tokenNumber: PropTypes.string.isRequired,
    applicationNumber: PropTypes.string.isRequired,
    attorney: PropTypes.string.isRequired,
  }),
};

export default ForwardDetails;
