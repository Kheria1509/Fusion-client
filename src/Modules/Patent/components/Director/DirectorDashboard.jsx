import React from "react";
import { Grid, Box, Text, Divider, Button } from "@mantine/core";
import { Archive, ClipboardText, FilePlus, Bell } from "@phosphor-icons/react"; // Replace icons accordingly
import "./DirectorDashboard.css";

function DirectorDashboard({ setActiveTab }) {
  return (
    <Box>
      {/* Page Title */}
      <Text order={2} mt="md" mb="lg" align="left" className="dashboard-title">
        Director Dashboard
      </Text>

      {/* Dashboard Sections */}
      <Grid mt="md">
        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <FilePlus size={20} className="icon" /> Recent Applications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              View applications that have been recently submitted.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("1")} // Switch to Recent Applications tab
            >
              View Recent Applications
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> Applications for Final Review
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Review applications that are pending final assessment.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("2")} // Switch to Final Review tab
            >
              View Final Review Applications
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <Archive size={20} className="icon" /> Reviewed Applications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Check the applications that have already been reviewed.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("3")} // Switch to Reviewed Applications tab
            >
              View Reviewed Applications
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <Bell size={20} className="icon" /> Active Applications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Monitor the currently active applications.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("4")} // Switch to Active Applications tab
            >
              View Active Applications
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default DirectorDashboard;
