import React from "react";
import {
  Box,
  Button,
  ScrollArea,
  Table,
  Title,
  Text,
  Paper,
} from "@mantine/core";
import {
  Eye,
  Info,
  PaperPlane,
  NewspaperClipping,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import {
  NewApplicationData,
  ReviewedApplicationsData,
} from "./ReviewApplicationData";
import "./ReviewApplication.css";

function ReviewedApplicationCard({
  title,
  date,
  time,
  tokenNumber,
  applicationNumber,
  attorney,
  onViewDetails,
}) {
  return (
    <Paper shadow="xs" radius="md" className="r-application-card">
      <Text className="card-header">{title}</Text>
      <Text className="r-card-details">{`${date} | ${time}`}</Text>
      <Text className="r-card-details">Token No.: {tokenNumber}</Text>
      <Text className="r-card-details">
        Application No.: {applicationNumber}
      </Text>
      <Text className="r-card-details">Assigned Attorney: {attorney}</Text>
      <Button
        variant="filled"
        color="blue"
        leftIcon={<Info size={16} />}
        onClick={onViewDetails}
        className="r-button"
      >
        View Details
      </Button>
    </Paper>
  );
}

// Add PropTypes validation for ReviewedApplicationCard
ReviewedApplicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  attorney: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

function ReviewedApplications() {
  const navigate = useNavigate();

  const handleViewDetails = (application) => {
    navigate(`/patent/pccAdmin/application/view-details`, {
      state: { application },
    });
  };

  return (
    <Box className="r-main-app-container">
      <Box className="r-app-container">
        {ReviewedApplicationsData.map((application, index) => (
          <ReviewedApplicationCard
            key={index}
            title={application.title} // Explicitly passing each prop
            date={application.date}
            time={application.time}
            tokenNumber={application.tokenNumber}
            applicationNumber={application.applicationNumber}
            attorney={application.attorney}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>
    </Box>
  );
}

function ReviewApplication() {
  const navigate = useNavigate();
  const columnNames = [
    "Patent Title",
    "Submitted By",
    "Designation",
    "Department",
    "Date - Time",
    "View",
  ];

  const rows = NewApplicationData.map((item, index) => (
    <tr key={index} className="tableRow">
      <td>{item["Patent Title"]}</td>
      <td>{item["Submitted By"]}</td>
      <td>{item.Designation}</td>
      <td>{item.Department}</td>
      <td>{item["Date - Time"]}</td>
      <td>
        <Button
          variant="filled" // Changed from "fullfilled" to "filled"
          color="blue"
          size="xs"
          onClick={() =>
            navigate(`/patent/pccAdmin/application/view-details`, {
              state: { application: item },
            })
          }
          className="viewButton"
        >
          <Eye size={16} /> <span>View</span>
        </Button>
      </td>
    </tr>
  ));

  return (
    <Box>
      {/* Title for New Applications Section */}
      <Title order={2} className="title">
        <PaperPlane size={20} /> New Applications
      </Title>
      <Box className="outerContainer">
        <Box className="content">
          <Text size="md" color="dimmed" className="description">
            The following is a list of new patent applications that require
            review. Please examine the details and click on the "View" button to
            see more information.
          </Text>
        </Box>
        <ScrollArea>
          <Table highlightOnHover striped withBorder className="styledTable">
            <thead className="fusionTableHeader">
              <tr>
                {columnNames.map((columnName, index) => (
                  <th key={index}>{columnName}</th>
                ))}
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Box>

      {/* Title for Applications Under Review Section */}
      <Title order={2} className="title">
        <NewspaperClipping size={20} /> Applications Under Review
      </Title>
      <Box className="outerContainer">
        <Box className="content">
          <Text size="md" color="dimmed" className="description">
            The following is a list of patent applications under review. Please
            examine the details and click on the "Review" button to see more
            information.
          </Text>
        </Box>
        <ReviewedApplications />
      </Box>
    </Box>
  );
}

export default ReviewApplication;
