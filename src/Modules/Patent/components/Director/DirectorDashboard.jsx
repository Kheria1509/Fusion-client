import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import {
  Grid,
  Box,
  Text,
  Divider,
  Button,
  Container,
  Progress,
} from "@mantine/core";
import {
  ClipboardText,
  CheckCircle,
  ArrowCircleDown,
} from "@phosphor-icons/react";
import "../../style/Director/DirectorDashboard.css";

function DirectorDashboard({ setActiveTab }) {
  const downloadsData = [
    {
      id: 1,
      title: "Director Guidelines for Application Review",
      link: "/path/to/director-guidelines.pdf",
    },
    {
      id: 2,
      title: "Policy Document for Patent Filing",
      link: "/path/to/policy-document.pdf",
    },
  ];

  return (
    <Box>
      {/* Page Title */}
      <Text className="title-dashboard">Director Dashboard</Text>

      {/* Introduction Section */}
      <Container className="content-container">
        <Text mt="sm" mb="lg" className="feature-text">
          Welcome to the Director Dashboard. Here, you can manage and monitor
          the review process for patent applications. Access resources and track
          workflow progress to ensure smooth operation.
        </Text>

        {/* Application Workflow */}
        <Container className="workflow-container">
          <Text className="section-title" align="center" mb="lg">
            Application Workflow
          </Text>
          <Box
            className="status-progress-container"
            style={{ position: "relative" }}
          >
            <Progress
              size="xl"
              radius="lg"
              sections={[
                { value: 33.3, color: "blue" },
                { value: 33.3, color: "#b3cde0" },
                { value: 33.4, color: "#003366" },
              ]}
              mt="md"
            />
            {/* Labels Below Bar */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              {["Pending Review", "Reviewed", "Final Decision"].map(
                (label, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#1a202c",
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    {label}
                  </Text>
                ),
              )}
            </Box>
          </Box>
        </Container>
      </Container>

      {/* Downloads Section */}
      <Container
        mt="lg"
        className="downloads-container"
        style={{ marginLeft: "32px", marginRight: "64px" }}
      >
        <Text className="section-title">Download Resources</Text>
        <table className="downloads-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Document Title</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {downloadsData.map((download, index) => (
              <tr key={download.id}>
                <td>{index + 1}</td>
                <td>{download.title}</td>
                <td>
                  <Button
                    component="a"
                    href={download.link}
                    target="_blank"
                    className="download-button-table"
                  >
                    <ArrowCircleDown size={16} style={{ marginRight: "8px" }} />
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      {/* Dashboard Sections */}
      <Grid mt="xl" className="dashboard-grid">
        {/* Submitted Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-cards">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> New Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              View all applications forwarded by PCC Admin for your review.
            </Text>
            <Button
              variant="outline"
              fullWidth
              mt="md"
              onClick={() => setActiveTab("1")}
              className="button-one"
            >
              View Submitted Applications
            </Button>
          </Box>
        </Grid.Col>

        {/* Reviewed Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-cards">
            <Text className="dashboard-card-title">
              <CheckCircle size={20} className="icon" /> Reviewed Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Access applications that have been reviewed.
            </Text>
            <Button
              variant="outline"
              fullWidth
              mt="md"
              onClick={() => setActiveTab("2")}
              className="button-one"
            >
              View Reviewed Applications
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

// PropTypes validation
DirectorDashboard.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default DirectorDashboard;
