import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Text, Divider, Button } from "@mantine/core";
import { ClipboardText, CheckCircle } from "@phosphor-icons/react";
import "./DirectorDashboard.css";

function DirectorDashboard({ setActiveTab }) {
  return (
    <Box className="dashboard-container">
      {/* Page Title */}
      <Text className="titledashdash">Director Dashboard</Text>

      {/* Dashboard Sections */}
      <Grid mt="md" className="dashboard-grid">
        {/* Pending Reviews */}
        {/* <Grid.Col span={6}>
          <Box className="dashboard-card pending-reviews">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> Pending Reviews
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              View applications awaiting your final assessment.
            </Text>
            <Button fullWidth mt="md" size="xs">
              View Pending Reviews
            </Button>
          </Box>
        </Grid.Col> */}

        {/* Reviewed Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-card reviewed-applications">
            <Text className="dashboard-card-title">
              <CheckCircle size={20} className="icon" /> Reviewed Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Access applications that have already been reviewed.
            </Text>
            <Button
              fullWidth
              variant="outline"
              mt="md"
              fontSize="16px"
              onClick={() => setActiveTab("2")}
              className="buttonone"
            >
              View Reviewed Applications
            </Button>
          </Box>
        </Grid.Col>

        {/* Active Applications */}
        {/* <Grid.Col span={6}>
          <Box className="dashboard-card active-applications">
            <Text className="dashboard-card-title">
              <Hourglass size={20} className="icon" /> Active Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Monitor currently active applications.
            </Text>
            <Button fullWidth mt="md" size="xs">
              View Active Applications
            </Button>
          </Box>
        </Grid.Col> */}

        {/* Notifications */}
        {/* <Grid.Col span={6}>
          <Box className="dashboard-card notifications">
            <Text className="dashboard-card-title">
              <Bell size={20} className="icon" /> Notifications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Stay updated with the latest alerts and updates.
            </Text>
            <Button fullWidth mt="md" size="xs">
              View Notifications
            </Button>
          </Box>
        </Grid.Col> */}

        {/* New Section for Submitted Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-card submitted-applications">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> Submitted
              Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              View applications that have been submitted by PCC Admin.
            </Text>
            <Button
              variant="outline"
              fullWidth
              mt="md"
              onClick={() => setActiveTab("1")}
              className="buttonone"
            >
              View Submitted Applications
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

// Prop validation
DirectorDashboard.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default DirectorDashboard;
