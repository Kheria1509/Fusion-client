import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box } from "@mantine/core";
import { Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import {
  ForwardToDirectorData,
  ForwardedToDirectorData,
} from "./ForwardToDirectorData";
import "./ForwardTODirector.css";

function ForwardToDirectorCard({
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
      className="f-application-card"
      style={{ borderLeftColor: borderColor }}
    >
      <div className="card-content">
        {/* Title */}
        <Text className="card-header">{title}</Text>

        {/* Date and Time */}
        <Text className="f-card-details">{`${date} | ${time}`}</Text>

        {/* Application and Token Info */}
        <div className="card-info">
          <Text className="f-card-details">
            Application No.: {applicationNumber}
          </Text>
          <Text className="f-card-details">Token No.: {tokenNumber}</Text>
        </div>

        {/* Attorney Information */}
        <Text className="f-card-details">Assigned Attorney: {attorney}</Text>

        {/* View Details Button */}
        <Button
          variant="filled"
          color="blue"
          leftIcon={<Info size={16} />}
          onClick={onViewDetails}
          className="f-button"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}

ForwardToDirectorCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  attorney: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

function ForwardToDirector() {
  const navigate = useNavigate();

  const handleViewDetails = (application) => {
    navigate(`/patent/ppccAdmin/details/${application.applicationNumber}`, {
      state: { application },
    });
  };

  return (
    <Box className="f-main-app-container">
      <Text className="f-header-text">Applications to Forward to Director</Text>
      <Box className="f-app-container">
        {ForwardToDirectorData.map((application, index) => (
          <ForwardToDirectorCard
            key={index}
            title={application.title}
            date={application.date}
            time={application.time}
            tokenNumber={application.tokenNumber}
            applicationNumber={application.applicationNumber}
            attorney={application.attorney}
            borderColor={application.borderColor}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>

      {/* Section for applications that have already been forwarded */}
      <Box className="f-app-container">
        {ForwardedToDirectorData.map((application, index) => (
          <ForwardToDirectorCard
            key={index}
            title={application.title}
            date={application.date}
            time={application.time}
            tokenNumber={application.tokenNumber}
            applicationNumber={application.applicationNumber}
            attorney={application.attorney}
            borderColor={application.borderColor}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ForwardToDirector;
