import React, { useState, useEffect } from "react";
import { Progress, Text, Group, Box } from "@mantine/core";
import { FileText } from "phosphor-react";
import PropTypes from "prop-types";
import "./PCCAStatus.css";

// Simulate fetching status from the backend
const fetchApplicationStatus = async () => {
  return "Attorney Assignment";
};

// Patent Progress Bar Component
function PatentProgressBar({ currentStatus }) {
  const progressMapping = {
    "Patent Application Submission": 1,
    "PCC Admin Review": 2,
    "Director Initial Review": 3,
    "Attorney Assignment": 4,
    "Patentability Check": 5,
    "Final Approval by Director": 6,
    "Final Contract Completion": 7,
  };

  const currentStep = progressMapping[currentStatus] || 1;

  return (
    <Box className="progress-bar-container">
      <Progress
        sections={[
          { value: 15, color: currentStep >= 1 ? "green" : "gray" },
          { value: 12, color: currentStep >= 2 ? "green" : "gray" },
          { value: 12, color: currentStep >= 3 ? "green" : "gray" },
          { value: 12, color: currentStep >= 4 ? "green" : "gray" },
          { value: 12, color: currentStep >= 5 ? "green" : "gray" },
          { value: 12, color: currentStep >= 6 ? "green" : "gray" },
          { value: 12, color: currentStep >= 7 ? "green" : "gray" },
        ]}
        size={12}
        radius="lg"
        animate
      />
      <Group position="apart" mt="md">
        {[
          "Submission",
          "Admin Review",
          "Initial Review",
          "Assignment",
          "Check",
          "Approval",
          "Completion",
        ].map((step, index) => (
          <Text key={index} className="progress-label">
            {step}
          </Text>
        ))}
      </Group>
    </Box>
  );
}

// Add PropTypes validation for PatentProgressBar
PatentProgressBar.propTypes = {
  currentStatus: PropTypes.string.isRequired,
};

// Main Patent Application Component
function PatentApplication({
  title,
  date,
  applicationNumber,
  tokenNumber,
  attorneyName,
  phoneNumber,
  email,
  inventors,
  statusImage,
}) {
  const [currentStatus, setCurrentStatus] = useState(
    "Patent Application Submission",
  );

  useEffect(() => {
    const getStatus = async () => {
      const status = await fetchApplicationStatus();
      setCurrentStatus(status);
    };
    getStatus();
  }, []);

  return (
    <div className="mainbox">
      <div className="header-section">
        <FileText size={32} color="#4a90e2" />
        <h1>{title}</h1>
        {/* <Text size="sm" className="date-text">
          Date - {date}
        </Text> */}
      </div>

      <div className="details-section">
        <div style={{ marginBottom: "20px" }}>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Attorney Name:</strong> {attorneyName}
          </p>
          <p>
            <strong>Phone No.:</strong> {phoneNumber}
          </p>
          <p>
            <strong>Email ID:</strong> {email}
          </p>
          <p>
            <strong>Application No.:</strong> {applicationNumber}
          </p>
          <p>
            <strong>Token No.:</strong> {tokenNumber}
          </p>
        </div>
      </div>

      <div className="inventors-section">
        <h3>Details of All Inventors</h3>
        <table className="inventors-table">
          <thead>
            <tr>
              <th>Inventor's Name</th>
              <th>Email ID</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {inventors.map((inventor, index) => (
              <tr key={index}>
                <td>{inventor.names}</td>
                <td>{inventor.email}</td>
                <td>{inventor.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="status-section">
        <Text weight={600}>Status of Application: {currentStatus}</Text>
        {statusImage && (
          <img src={statusImage} alt="Status" className="status-image" />
        )}
      </div>

      <div className="progress-section">
        <h3>Application Progress</h3>
        <PatentProgressBar currentStatus={currentStatus} />
      </div>
    </div>
  );
}

// PropTypes and DefaultProps
PatentApplication.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  applicationNumber: PropTypes.string.isRequired,
  tokenNumber: PropTypes.string.isRequired,
  attorneyName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  inventors: PropTypes.arrayOf(
    PropTypes.shape({
      names: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ).isRequired,
  statusImage: PropTypes.string,
};

PatentApplication.defaultProps = {
  attorneyName: "N/A",
  phoneNumber: "N/A",
  email: "N/A",
  statusImage: null,
};

// Sample Component for Displaying Patent Application Details
function SampleAppDetails() {
  const inventors = [
    {
      names: "Ashish Kumar Bhoi",
      email: "ashish@gmail.com",
      phone: "123-456-7890",
    },
    {
      names: "Shreyas Katkar",
      email: "shreyas@gmail.com",
      phone: "987-654-3210",
    },
    { names: "Aman Kheria", email: "kheria@gmail.com", phone: "555-123-4567" },
  ];

  return (
    <PatentApplication
      title="Wireless Communication System for IoT Devices"
      date="12/09/2024"
      applicationNumber="APP001234"
      tokenNumber="TKN001234"
      attorneyName="Janmesh Dwivedi"
      phoneNumber="555-987-6543"
      email="attorney@example.com"
      inventors={inventors}
    />
  );
}

export default SampleAppDetails;
