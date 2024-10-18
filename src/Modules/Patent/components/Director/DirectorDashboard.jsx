import React from "react";
import { Card, Text, Box, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./DirectorDashboard.css";

function DirectorDashboard() {
  return (
    <Box style={{ padding: "24px" }}>
      <Text className="page-title">Director Dashboard</Text>
      <Box className="dashboard-container">
        <Card className="dashboard-card">
          <Text className="dashboard-card-title">Recent Applications</Text>
          <Button component={Link} to="/director/recent" variant="outline">
            View Recent Applications
          </Button>
        </Card>
        <Card className="dashboard-card">
          <Text className="dashboard-card-title">
            Applications for Final Review
          </Text>
          <Button component={Link} to="/director/final-review" variant="outline">
            View Final Review Applications
          </Button>
        </Card>
        <Card className="dashboard-card">
          <Text className="dashboard-card-title">Reviewed Applications</Text>
          <Button component={Link} to="/director/reviewed" variant="outline">
            View Reviewed Applications
          </Button>
        </Card>
        <Card className="dashboard-card">
          <Text className="dashboard-card-title">Active Applications</Text>
          <Button component={Link} to="/director/active" variant="outline">
            View Active Applications
          </Button>
        </Card>
      </Box>
    </Box>
  );
}

export default DirectorDashboard;
