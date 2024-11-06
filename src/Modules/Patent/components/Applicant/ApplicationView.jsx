import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Text, Box, Grid, Modal } from "@mantine/core";
import { Eye, Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./ApplicationView.css";

// Dummy data for applications with additional fields
const applicationsData = [
  {
    title: "Wireless Communication System for IoT Devices",
    date: "12/09/2024",
    time: "14:30:45",
    tokenNumber: "TKN001234",
    applicationNumber: "APP001234",
    attorney: "EFG001234",
    applicant: "Tech Innovations Ltd.",
    filingDate: "10/09/2024",
    patentType: "Utility",
    revenueShareholders: ["John Doe", "Jane Smith"],
    country: "USA",
    status: "Pending",
    abstract:
      "An innovative system that enables efficient IoT communication across various devices.",
    inventorNames: ["Dr. Alice Johnson", "Dr. Bob Williams"],
    patentOffice: "USPTO",
    priorityDate: "01/09/2024",
    examiner: "Samuel Lee",
    IPCClassifications: ["H04W 72/04", "H04L 12/10"],
    borderColor: "orange",
  },
  {
    title: "Renewable Energy Storage System",
    date: "08/09/2024",
    time: "13:20:30",
    tokenNumber: "TKN001245",
    applicationNumber: "APP001245",
    attorney: "XYZ12121234",
    applicant: "GreenTech Solutions",
    filingDate: "06/09/2024",
    patentType: "Design",
    revenueShareholders: ["Michael Brown", "Emily Davis"],
    country: "Canada",
    status: "Approved",
    abstract:
      "A system to store renewable energy with higher efficiency and lower costs.",
    inventorNames: ["Dr. Carol White", "Dr. David Green"],
    patentOffice: "Canadian Intellectual Property Office",
    priorityDate: "02/09/2024",
    examiner: "Alex Kim",
    IPCClassifications: ["F03G 7/08", "H01M 10/48"],
    borderColor: "mediumseagreen",
  },
  // Additional applications can be added here
];

// Component for individual application card
function ApplicationCard({
  title,
  date,
  time,
  tokenNumber,
  applicationNumber,
  attorney,
  borderColor,
  onViewDetails,
  onViewSubmittedForm,
}) {
  return (
    <Box className="main-box">
      <Card
        className="application-card"
        style={{ borderLeft: `6px solid ${borderColor}` }}
      >
        <Text className="card-header">{title}</Text>
        <Text className="card-details">{`${date} | ${time}`}</Text>
        <Text className="card-details">Token No.: {tokenNumber}</Text>
        <Text className="card-details">
          Application No.: {applicationNumber}
        </Text>
        <Text className="card-details">Assigned Attorney: {attorney}</Text>
        <Box className="button-container">
          <Button
            variant="outline"
            leftIcon={<Eye size={16} />}
            className="button"
            onClick={onViewSubmittedForm}
          >
            View Submitted Form
          </Button>
          <Button
            variant="outline"
            leftIcon={<Info size={16} />}
            className="button"
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

// PropTypes validation for ApplicationCard
ApplicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  attorney: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  onViewDetails: PropTypes.func.isRequired,
  onViewSubmittedForm: PropTypes.func.isRequired,
};

// Component for displaying detailed application information
function ApplicationDetailsCard({ application, onClose }) {
  return (
    <Modal opened={!!application} onClose={onClose} title="Application Details">
      <Card shadow="sm" p="lg" className="application-details-card">
        <Text size="xl" weight={500} mb="md">
          {application.title}
        </Text>
        <Text>Application Number: {application.applicationNumber}</Text>
        <Text>Token Number: {application.tokenNumber}</Text>
        <Text>Date of Submission: {application.date}</Text>
        <Text>Time of Submission: {application.time}</Text>
        <Text>Applicant: {application.applicant}</Text>
        <Text>Filing Date: {application.filingDate}</Text>
        <Text>Patent Type: {application.patentType}</Text>
        <Text>Country: {application.country}</Text>
        <Text>Status: {application.status}</Text>
        <Text>Abstract: {application.abstract}</Text>
        <Text>Assigned Attorney: {application.attorney}</Text>
        <Text>Inventor(s): {application.inventorNames.join(", ")}</Text>
        <Text>
          Revenue Shareholders: {application.revenueShareholders.join(", ")}
        </Text>
        <Text>Patent Office: {application.patentOffice}</Text>
        <Text>Priority Date: {application.priorityDate}</Text>
        <Text>Examiner: {application.examiner}</Text>
        <Text>
          IPC Classifications: {application.IPCClassifications.join(", ")}
        </Text>
      </Card>
    </Modal>
  );
}

// PropTypes validation for ApplicationDetailsCard
ApplicationDetailsCard.propTypes = {
  application: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    tokenNumber: PropTypes.string.isRequired,
    applicationNumber: PropTypes.string.isRequired,
    attorney: PropTypes.string.isRequired,
    applicant: PropTypes.string.isRequired,
    filingDate: PropTypes.string.isRequired,
    patentType: PropTypes.string.isRequired,
    revenueShareholders: PropTypes.arrayOf(PropTypes.string).isRequired,
    country: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    inventorNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    patentOffice: PropTypes.string.isRequired,
    priorityDate: PropTypes.string.isRequired,
    examiner: PropTypes.string.isRequired,
    IPCClassifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

// Main ViewApplicationsPage component
function ApplicationView() {
  const navigate = useNavigate();
  const [selectedApplication, setSelectedApplication] = useState(null);

  // Function to handle "View Details" click
  const handleViewDetails = (application) => {
    navigate(`/patent/applicant/applications/status-view`, {
      state: { application },
    });
  };

  // Function to handle "View Submitted Form" click
  const handleViewSubmittedForm = (application) => {
    setSelectedApplication(application);
  };

  return (
    <Box>
      <Text className="header-text">View Applications</Text>
      <Grid className="app-container">
        {applicationsData.map((application, index) => (
          <Grid.Col span={6} key={index}>
            <ApplicationCard
              title={application.title}
              date={application.date}
              time={application.time}
              tokenNumber={application.tokenNumber}
              applicationNumber={application.applicationNumber}
              attorney={application.attorney}
              borderColor={application.borderColor}
              onViewDetails={() => handleViewDetails(application)}
              onViewSubmittedForm={() => handleViewSubmittedForm(application)}
            />
          </Grid.Col>
        ))}
      </Grid>

      {/* Display the ApplicationDetailsCard modal if an application is selected */}
      {selectedApplication && (
        <ApplicationDetailsCard
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
        />
      )}
    </Box>
  );
}

export default ApplicationView;
