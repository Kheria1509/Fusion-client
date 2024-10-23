import React from "react";
import { Grid, Title, Box, Text, Divider } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "./DirectorDashboard.css";

function DirectorDashboard() {
  return (
    <Box>
      {/* Page Title */}
      <Title order={2} mt="md">
        Director Dashboard
      </Title>

      {/* Dashboard Sections */}
      <Grid mt="md">
        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/director/recent"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">Recent Applications</Text>
              <Divider mt="xs" />
              <Text size="md">
                View applications that have been recently submitted.
              </Text>
            </NavLink>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/director/final-review"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">
                Applications for Final Review
              </Text>
              <Divider mt="xs" />
              <Text size="md">
                Review applications that are pending final assessment.
              </Text>
            </NavLink>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/director/reviewed"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">
                Reviewed Applications
              </Text>
              <Divider mt="xs" />
              <Text size="md">
                Check the applications that have already been reviewed.
              </Text>
            </NavLink>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/director/active"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">Active Applications</Text>
              <Divider mt="xs" />
              <Text size="md">Monitor the currently active applications.</Text>
            </NavLink>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default DirectorDashboard;
