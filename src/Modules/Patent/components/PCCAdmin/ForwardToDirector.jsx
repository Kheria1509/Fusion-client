import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box } from "@mantine/core";
import { Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import {
  ForwardToDirectorData,
  ForwardedToDirectorData,
} from "./ForwardToDirectorData";
import "./ForwardToDirector.css";

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
      style={{ borderLeft: `8px solid ${borderColor}` }}
    >
      <Text className="card-header">{title}</Text>
      <Text className="f-card-details">{`${date} | ${time}`}</Text>
      <Text className="f-card-details">Token No.: {tokenNumber}</Text>
      <Text className="f-card-details">Application No.: {applicationNumber}</Text>
      <Text className="f-card-details">Assigned Attorney: {attorney}</Text>
      <Button
        variant="outline"
        leftIcon={<Info size={16} />}
        onClick={onViewDetails}
        className="f-button"
      >
        View Details
      </Button>
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
            {...application}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>

      <Text className="f-header-text">Applications Forwarded to Director</Text>
      <Box className="f-app-container">
        {ForwardedToDirectorData.map((application, index) => (
          <ForwardToDirectorCard
            key={index}
            {...application}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ForwardToDirector;
