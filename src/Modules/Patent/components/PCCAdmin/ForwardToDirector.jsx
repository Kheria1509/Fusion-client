import React from "react";
import { Card, Text, Button, Container, Flex, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";

function ForwardToDirector() {
  const applications = [
    {
      id: 1,
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      color: "blue",
    },
    {
      id: 2,
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      color: "green",
    },
    {
      id: 3,
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      color: "purple",
    },
    {
      id: 4,
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      color: "red",
    },
    {
      id: 5,
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      color: "yellow",
    },
    {
      id: 6,
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      color: "orange",
    },
  ];

  return (
    <Flex style={{ height: "100vh", overflow: "hidden" }}>
      {/* Sidebar
      <Box
        sx={{
          width: isSidebarCollapsed ? 80 : 200,
          transition: "width 0.3s",
          backgroundColor: "#f4f4f4",
          borderRight: "1px solid #ccc",
        }}
      >
        <SidebarContent
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </Box> */}

      {/* Main Content */}
      <Flex
        direction="column"
        sx={{ flexGrow: 1, padding: 20, overflow: "hidden" }}
      >
        {/* Header
        <Header
          opened={isSidebarCollapsed}
          toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          sx={{ marginBottom: "-20px" }}
        /> */}

        {/* Breadcrumbs */}
        <Group mb="md" sx={{ marginTop: "20px" }}>
          <Text fw="bold">
            Home &gt; Patent Management &gt; Forward to Director
          </Text>
        </Group>

        {/* Navigation Links */}
        <Group mb="lg" spacing="xs">
          <Link to="/recent">Recent</Link>
          <Text>|</Text>
          <Link to="/patent/pccAdmin/feedbackView">Review Applications</Link>
          <Text>|</Text>
          <Link to="/status-applications">Status of the Applications</Link>
          <Text>|</Text>
          <Link to="/patent/pccAdmin/manageAttorney">
            Manage Attorney Details
          </Link>
          <Text>|</Text>
          <Link to="/patent/pccAdmin/forwardRedirect">Forward to Director</Link>
        </Group>

        {/* Title */}
        <Text component="h6" fz="xl" mb="lg">
          Forward Applications to Director
        </Text>

        {/* Application Cards */}
        <Container fluid>
          <Flex wrap="wrap" gap="lg">
            {applications.map((app) => (
              <Card
                key={app.id}
                shadow="sm"
                p="lg"
                sx={{
                  borderLeft: `5px solid ${app.color}`,
                  height: 150,
                  position: "relative",
                  flex: "1 1 calc(33% - 16px)", // 3 columns with space in between
                }}
              >
                <Text fw={700} size="lg">
                  Application {app.id}
                </Text>
                <Text color="dimmed" size="sm">
                  {app.date}
                </Text>
                <Text size="md">Topic: {app.topic}</Text>
                <Text size="md">Field: {app.field}</Text>

                {/* Forward Button */}
                <Button
                  variant="outline"
                  component={Link}
                  to="/patent/pccAdmin/forwardRedirect"
                  state={{ applicationId: app.id }}
                  leftIcon={<IconEye />}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                >
                  Forward
                </Button>
              </Card>
            ))}
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}

export default ForwardToDirector;
