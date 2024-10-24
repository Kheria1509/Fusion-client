import { Grid, Title, Box, Text, Divider, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { ClipboardText, FilePlus, Archive, Bell } from "@phosphor-icons/react"; // Import icons
import "./ApplicantDashboard.css";

function ApplicantDashboard({ setActiveTab }) {
  return (
    <Box>
      {/* Page Title */}
      <Title order={2} mt="md" mb="lg" align="left">
        Applicant Dashboard
      </Title>

      {/* Dashboard Sections */}
      <Grid mt="md">
        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <FilePlus size={20} className="icon" /> Submit New Application
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Begin the process of filing a new patent application with our guided form.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("1")}
            >
              Start Application
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> View Applications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Monitor the progress and status of all your submitted patent applications.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("2")}
            >
              View Status
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <Archive size={20} className="icon" /> Saved Drafts
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Continue working on applications you have saved as drafts.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("3")}
            >
              Resume Draft
            </Button>
          </Box>
        </Grid.Col>

        <Grid.Col span={6}>
          <Box className="dashboard-card half-width">
            <Text className="dashboard-card-title">
              <Bell size={20} className="icon" /> Notifications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" mt="sm">
              Stay updated with the latest notifications regarding your patent applications.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("4")}
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
