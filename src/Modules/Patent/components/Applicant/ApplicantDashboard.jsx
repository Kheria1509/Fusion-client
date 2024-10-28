import { Grid, Title, Box, Text, Divider } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "./ApplicantDashboard.css"; // Import CSS file

function ApplicantDashboard() {
  return (
    <Box>
      {/* Page Title */}
      <Title order={2} mt="md">
        Applicant Dashboard
      </Title>

      {/* Dashboard Sections */}
      <Grid mt="md">
        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink

              to="/patent/applicant/applications/submit"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">
                Submit New Application
              </Text>
              <Divider mt="xs" />
              <Text size="md">Start a new patent application form.</Text>
            </NavLink>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/patent/applicant/applications"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">View Applications</Text>
              <Divider mt="xs" />
              <Text size="md">
                Check the status of your patent applications.
              </Text>
            </NavLink>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/patent/applicant/drafts"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">Saved Drafts</Text>
              <Divider mt="xs" />
              <Text size="md">Resume drafting your saved applications.</Text>
            </NavLink>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} sm={6} md={3}>
          <Box className="dashboard-card">
            <NavLink
              to="/patent/applicant/notifications"
              className="dashboard-link"
              activeclassname="active-link"
            >
              <Text className="dashboard-card-title">Notifications</Text>
              <Divider mt="xs" />
              <Text size="md">View your patent-related notifications.</Text>
            </NavLink>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default ApplicantDashboard;
=======
import { Grid, Title, Box, Text, Divider, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { ClipboardText, FilePlus, Archive, Bell } from "@phosphor-icons/react";
import "./ApplicantDashboard.css";

function ApplicantDashboard({ setActiveTab }) {
  return (
    <Box>
      {/* Page Title */}
      <Title order={2} mt="md" mb="lg" align="left" className="dashboard-title">
        Applicant Dashboard
      </Title>

      {/* Dashboard Sections */}
      <Grid mt="md" className="dashboard-grid">
        {/* Submit New Application */}
        <Grid.Col span={6}>
          <Box className="dashboard-card submit-application">
            <Text className="dashboard-card-title">
              <FilePlus size={20} className="icon" /> Submit New Application
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Begin the process of filing a new patent application with our guided form.
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
          <Box className="dashboard-card view-application">
            <Text className="dashboard-card-title">
              <ClipboardText size={20} className="icon" /> View Applications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Monitor the progress and status of all your submitted patent applications.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              onClick={() => setActiveTab("2")}
              className="view-button"
            >
              View Status
            </Button>
          </Box>
        </Grid.Col>

        {/* Saved Drafts */}
        <Grid.Col span={6}>
          <Box className="dashboard-card saved-drafts">
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
          <Box className="dashboard-card notifications">
            <Text className="dashboard-card-title">
              <Bell size={20} className="icon" /> Notifications
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Stay updated with the latest notifications regarding your patent applications.
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
