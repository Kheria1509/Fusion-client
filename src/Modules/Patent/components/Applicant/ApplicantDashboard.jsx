import { Grid, Box, Text, Divider, Button } from "@mantine/core";
import { ClipboardText, FilePlus, Archive, Bell } from "@phosphor-icons/react";
import "./ApplicantDashboard.css";

// eslint-disable-next-line react/prop-types
function ApplicantDashboard({ setActiveTab }) {
  return (
    <Box>
      {/* Page Title */}
      <Text className="title">Applicant Dashboard </Text>

      {/* Dashboard Sections */}
      <Grid mt="md" className="dashboard-grid">
        {/* Submit New Application */}
        <Grid.Col span={6}>
          <Box className="dashboard-card">
            <Text className="dashboard-card-title">
              <FilePlus size={20} className="icon" /> Submit New Application
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Begin the process of filing a new patent application with our
              guided form.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("1")}
              className="submit-button"
            >
              Start Application
            </Button>
          </Box>
        </Grid.Col>

        {/* View Applications */}
        <Grid.Col span={6}>
          <Box className="dashboard-card">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> View Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Monitor the progress and status of all your submitted patent
              applications.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("2")}
              className="submit-button"
            >
              View Applications
            </Button>
          </Box>
        </Grid.Col>

        {/* Saved Drafts */}
        <Grid.Col span={6}>
          <Box className="dashboard-card">
            <Text className="dashboard-card-title">
              <Archive size={20} className="icon" /> Saved Drafts
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Continue working on applications you have saved as drafts.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("3")}
              className="draft-button"
            >
              Resume Draft
            </Button>
          </Box>
        </Grid.Col>

        {/* Notifications */}
        <Grid.Col span={6}>
          <Box className="dashboard-card">
            <Text className="dashboard-card-title">
              <Bell size={20} className="icon" /> Notifications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Stay updated with the latest notifications regarding your patent
              applications.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("4")}
              className="notify-button"
            >
              View Notifications
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default ApplicantDashboard;
