import React from "react";
import { Grid, Box, Text, Divider, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Clock, Eye, List, Briefcase, ArrowRight } from "@phosphor-icons/react";
import "./PCCAdminDashboard.css"; // You might want to create a separate CSS for PCCAdminDashboard

function PCCAdminDashboard() {
  return (
    <Box>
      {/* Page Title */}
      <Text className="title">PCC Admin Dashboard</Text>

      {/* Dashboard Sections */}
      <Grid mt="md" className="dashboard-grid">
        {/* Review Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-card review-applications">
            <Text className="dashboard-card-title">
              <Eye size={20} className="icon" /> Review Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Review and provide feedback on applications.
            </Text>
            <Button
              component={Link}
              to="/patent/pccAdmin/feedbackView"
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="review-button"
            >
              Review Applications
            </Button>
          </Box>
        </Grid.Col>

        {/* Status of Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-card status-applications">
            <Text className="dashboard-card-title">
              <List size={20} className="icon" /> Status of Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Track the current status of all applications.
            </Text>
            <Button
              component={Link}
              to="/status-applications"
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="status-button"
            >
              View Status
            </Button>
          </Box>
        </Grid.Col>

        {/* Manage Attorney Details */}
        <Grid.Col span={6}>
          <Box className="dashboard-card manage-attorney">
            <Text className="dashboard-card-title">
              <Briefcase size={20} className="icon" /> Manage Attorney Details
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Manage and update attorney information.
            </Text>
            <Button
              component={Link}
              to="/patent/pccAdmin/manageAttorney"
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="manage-attorney-button"
            >
              Manage Attorney
            </Button>
          </Box>
        </Grid.Col>

        {/* Forward to Director */}
        <Grid.Col span={6}>
          <Box className="dashboard-card forward-director">
            <Text className="dashboard-card-title">
              <ArrowRight size={20} className="icon" /> Forward to Director
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Send applications forward for final review.
            </Text>
            <Button
              component={Link}
              to="/patent/pccAdmin/forwardRedirect"
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="forward-button"
            >
              Forward
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default PCCAdminDashboard;
