import { Stack, Title, Grid, Box, Text, Divider } from "@mantine/core";
import { NavLink } from "react-router-dom";
import CustomBreadcrumbs from "../../../../components/Breadcrumbs";
import "./ApplicantDashboard.css"; // Import CSS file

function ApplicantDashboard() {
  return (
    <Stack>
      {/* Breadcrumbs */}
      <CustomBreadcrumbs />

      {/* Page Title */}
      <Title order={2} mt="md">
        Applicant Dashboard
      </Title>

      {/* Dashboard Sections */}
      <Grid gutter="lg" mt="md">
        <Grid.Col span={12}>
          {/* Submit New Application */}
          <NavLink
            to="/submitnewapplication"
            className="dashboard-link"
            activeClassName="active-link"
          >
            <Box className="dashboard-box">
              <Text size="lg" weight={500}>
                Submit New Application
              </Text>
              <Divider mt="xs" />
              <Text size="sm">Start a new patent application form.</Text>
            </Box>
          </NavLink>
        </Grid.Col>

        <Grid.Col span={12}>
          {/* View Applications */}
          <NavLink
            to="/viewapplicationspage"
            className="dashboard-link"
            activeClassName="active-link"
          >
            <Box className="dashboard-box">
              <Text size="lg" weight={500}>
                View Applications
              </Text>
              <Divider mt="xs" />
              <Text size="sm" color="dimmed">
                Check the status of your patent applications.
              </Text>
            </Box>
          </NavLink>
        </Grid.Col>

        <Grid.Col span={12}>
          {/* Saved Drafts */}
          <NavLink
            to="/saveddraftspage"
            className="dashboard-link"
            activeClassName="active-link"
          >
            <Box className="dashboard-box">
              <Text size="lg" weight={500}>
                Saved Drafts
              </Text>
              <Divider mt="xs" />
              <Text size="sm" color="dimmed">
                Resume drafting your saved applications.
              </Text>
            </Box>
          </NavLink>
        </Grid.Col>

        <Grid.Col span={12}>
          {/* Notifications */}
          <NavLink
            to="/notifications"
            className="dashboard-link"
            activeClassName="active-link"
          >
            <Box className="dashboard-box">
              <Text size="lg" weight={500}>
                Notifications
              </Text>
              <Divider mt="xs" />
              <Text size="sm" color="dimmed">
                View your patent-related notifications.
              </Text>
            </Box>
          </NavLink>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default ApplicantDashboard;
