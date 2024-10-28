import React from "react";
import { Box, Text, Button, Grid, Textarea, Flex, Group } from "@mantine/core";
import { Link } from "react-router-dom";

function ForwardRedirect() {
  return (
    <Flex style={{ height: "100vh", overflow: "hidden" }}>
      {/* Main Content */}
      <Flex
        direction="column"
        style={{
          flexGrow: 1,
          padding: "24px",
          overflow: "hidden",
        }}
      >
        {/* Breadcrumbs */}
        <Box style={{ marginTop: "20px", marginBottom: "16px" }}>
          <Text weight={700} size="sm">
            Home &gt; Patent Management &gt; Forward Application
          </Text>
        </Box>

        {/* Navigation Links */}
        <Group mb="lg">
          <Link to="/recent" style={{ textDecoration: "none" }}>
            Recent
          </Link>
          <Text>|</Text>
          <Link to="/review-applications" style={{ textDecoration: "none" }}>
            Review Applications
          </Link>
          <Text>|</Text>
          <Link to="/status-applications" style={{ textDecoration: "none" }}>
            Status of the Applications
          </Link>
          <Text>|</Text>
          <Link to="/manage-attorney" style={{ textDecoration: "none" }}>
            View Attorney Details
          </Link>
          <Text>|</Text>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            Notifications
          </Link>
        </Group>

        {/* Title */}
        <Text variant="h4" mb="lg">
          Forward Application
        </Text>

        {/* Content Area */}
        <Grid>
          <Grid.Col span={8}>
            <Box
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                minHeight: "300px",
              }}
            >
              <Text variant="h6" mb="lg">
                Applications
              </Text>
              {/* Placeholder for Applications List */}
              <Box
                style={{
                  backgroundColor: "#f0f0f0",
                  height: "100%",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid.Col>

          <Grid.Col span={4}>
            <Box
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                minHeight: "300px",
              }}
            >
              <Text variant="h6" mb="lg">
                Message For Director (if any)
              </Text>
              <Textarea
                placeholder="Enter your message here..."
                minRows={10}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid.Col>
        </Grid>

        {/* Forward Button */}
        <Group position="right" mt="lg">
          <Button
            variant="filled"
            color="blue"
            style={{ textTransform: "none" }}
          >
            Forward
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default ForwardRedirect;
