import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box } from "@mantine/core";
import { Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { FeedbackDataAttorney, FeedbackDataDirector } from "./FeedbackData";
import "./FeedbackViewer.css";

function FeedbackCard({
  title,
  date,
  time,
  tokenNumber,
  applicationNumber,
  feedback,
  onViewDetails,
}) {
  return (
    <Card className="fv-application-card">
      <Text className="fv-card-header">{title}</Text>
      <Text className="fv-card-details">{`${date} | ${time}`}</Text>
      <Text className="fv-card-details">Token No.: {tokenNumber}</Text>
      <Text className="fv-card-details">
        Application No.: {applicationNumber}
      </Text>
      <Text className="fv-card-details">Reviewer: {feedback}</Text>

      <Button
        variant="filled"
        color="blue"
        leftIcon={<Info size={16} />}
        onClick={onViewDetails}
        className="fv-button"
      >
        View Details
      </Button>
    </Card>
  );
}

FeedbackCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

function FeedbackViewer() {
  const navigate = useNavigate();

  const handleViewDetails = (application) => {
    navigate(`/patent/feedback/details/${application.applicationNumber}`, {
      state: { application },
    });
  };

  return (
    <Box className="fv-main-app-container">
      <Text className="fv-header-text">Feedback from Attorney</Text>
      <Box className="fv-app-container">
        {FeedbackDataAttorney.map((application, index) => (
          <FeedbackCard
            key={index}
            title={application.title}
            date={application.date}
            time={application.time}
            tokenNumber={application.tokenNumber}
            applicationNumber={application.applicationNumber}
            feedback={application.feedback}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>

      <Text className="fv-header-text">Feedback from Director</Text>
      <Box className="fv-app-container">
        {FeedbackDataDirector.map((application, index) => (
          <FeedbackCard
            key={index}
            title={application.title}
            date={application.date}
            time={application.time}
            tokenNumber={application.tokenNumber}
            applicationNumber={application.applicationNumber}
            feedback={application.feedback}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default FeedbackViewer;
