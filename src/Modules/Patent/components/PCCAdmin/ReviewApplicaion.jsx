import React from "react";
import { Box, Button, ScrollArea, Table, Title, Text, Card } from "@mantine/core";
import { Eye, Info, List } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { NewApplicationData, ReviewedApplicationsData } from "./ReviewApplicationData";
import "./ReviewApplication.css";

function ReviewedApplicationCard({ title, date, time, tokenNumber, applicationNumber, attorney, borderColor, onViewDetails,}) {
  return (
    <Card className="r-application-card" style={{ borderLeft: `8px solid ${borderColor}` }}>
      <Text className="card-header">{title}</Text>
      <Text className="r-card-details">{`${date} | ${time}`}</Text>
      <Text className="r-card-details">Token No.: {tokenNumber}</Text>
      <Text className="r-card-details">Application No.: {applicationNumber}</Text>
      <Text className="r-card-details">Assigned Attorney: {attorney}</Text>
      <Button variant="outline" leftIcon={<Info size={16} />} onClick={onViewDetails} className="r-button">
        View Details
      </Button>
    </Card>
  );
}

function ReviewedApplications() {
  const navigate = useNavigate();

  const handleViewDetails = (application) => {
    navigate(`/patent/reviewed/details/${application.applicationNumber}`, {
      state: { application },
    });
  };

  return (
    <Box className="r-main-app-container">
      <Box className="r-app-container">
        {ReviewedApplicationsData.map((application, index) => (
          <ReviewedApplicationCard
            key={index}
            {...application}
            onViewDetails={() => handleViewDetails(application)}
          />
        ))}
      </Box>
    </Box>
  );
}

function ReviewApplication() {
  const columnNames = ["Patent Title", "Submitted By", "Designation", "Department", "Date - Time", "View"];

  const rows = NewApplicationData.map((item, index) => (
    <tr key={index} className="tableRow">
      <td>{item["Patent Title"]}</td>
      <td>{item["Submitted By"]}</td>
      <td>{item.Designation}</td>
      <td>{item.Department}</td>
      <td>{item["Date - Time"]}</td>
      <td>
        <Button
          variant="subtle"
          color="indigo"
          size="xs"
          onClick={() => alert(`Viewing ${item["Patent Title"]}`)}
          className="viewButton"
        >
          <Eye size={16} /> <span>View</span>
        </Button>
      </td>
    </tr>
  ));

  return (
    <Box>
      <Title order={2} className="title"><List size={20} /> New Applications</Title>
      <Box className="outerContainer">
        <Box className="content">
          <Text size="md" color="dimmed" className="description">
            The following is a list of new patent applications that require review. Please examine the details and click on the "View" button to see more information.
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

      <Title order={2} className="title"> <List size={20} /> Applications Under Review</Title>
      <Box className="outerContainer">
        <Box className="content">
          <Text size="md" color="dimmed" className="description">
            The following is a list of patent applications under review. Please examine the details and click on the "Review" button to see more information.
          </Text>
        </Box>
        <ReviewedApplications />
      </Box>
    </Box>
  );
}

export default ReviewApplication;
