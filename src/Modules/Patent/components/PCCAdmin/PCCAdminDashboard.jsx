import React from "react";
import { Grid, Box, Text, Divider, Button } from "@mantine/core";
import {
  Eye,
  List,
  Briefcase,
  ArrowRight,
  Chat,
  ChartBar,
  Clock,
  Buildings,
} from "@phosphor-icons/react";
import "./PCCAdminDashboard.css";
import { ArrowCircleDown, ArrowCircleRight } from "phosphor-react";
import PropTypes from "prop-types";

function PCCAdminDashboard({ setActiveTab }) {
  return (
    <Box>
      {/* Page Title */}
      <Text className="dashboard-title">Dashboard</Text>

      {/* Overview Section */}
      <Box className="overview-section">
        <Text className="overview-title">
          IIITDM Jabalpur's Patent System
          <Buildings size={24} className="overview-icon" />{" "}
          {/* Adds an Eye icon */}
        </Text>
        <Text className="overview-text">
          The Patent Management System at IIITDM Jabalpur focuses on fostering
          research and development activities, particularly in IT-enabled design
          and manufacturing, as well as the design of IT systems.
        </Text>
        <Text className="overview-title">
          Overview
          <ChartBar size={24} className="overview-icon" />{" "}
          {/* Adds a ChartBar icon */}
        </Text>
        <Text className="overview-text">
          The PCC Admin Dashboard serves as the central hub for managing and
          overseeing the patent application process at IIITDM Jabalpur. With a
          streamlined interface and powerful tools, the platform supports the
          Patent Coordination Committee (PCC) in handling every stage of the
          patent lifecycle. It provides a comprehensive suite of features to
          ensure a structured and efficient approach to patent management, while
          fostering an environment where intellectual property is valued and
          protected.
        </Text>
        <Divider mt="sm" />

        {/* Enhanced Features List */}
        <Box className="features-list">
          {[
            {
              icon: <Eye size={20} className="feature-icon" />,
              title: "Application Management and Review",
              description:
                "Track and review patent applications, view submission details, and monitor status updates.",
            },
            {
              icon: <ArrowRight size={20} className="feature-icon" />,
              title: "Forwarding to Director for Approval",
              description:
                "Streamlined process for sending applications to the Director, with automated notifications.",
            },
            {
              icon: <Briefcase size={20} className="feature-icon" />,
              title: "Attorney Feedback and Communication",
              description:
                "Integrate feedback from attorneys, facilitate communication, and track application history.",
            },
            {
              icon: <Clock size={20} className="feature-icon" />,
              title: "Transparent Record-Keeping and Status Visibility",
              description:
                "Real-time status updates, detailed history tracking, and archive functionality.",
            },
            {
              icon: <ChartBar size={20} className="feature-icon" />,
              title: "Dashboard Analytics and Insights",
              description:
                "Analyze application volume, performance metrics, and trends to support data-driven decisions.",
            },
            {
              icon: <ArrowCircleDown size={20} className="feature-icon" />,
              title: "Download Important Documents and Forms",
              description:
                "Easy Access to key Documents and Forms for quick offline access.",
            },
          ].map((feature, index) => (
            <Box key={index} className="feature-item">
              <Box className="icon-and-title">
                {feature.icon}
                <Text className="feature-title">
                  <strong>{feature.title}</strong>
                </Text>
              </Box>
              <Text className="feature-description">{feature.description}</Text>
            </Box>
          ))}
        </Box>
      </Box>

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
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="dashboard-button"
              onClick={() => setActiveTab("1")}
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
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="dashboard-button"
              onClick={() => setActiveTab("2")}
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
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="dashboard-button"
              onClick={() => setActiveTab("3")}
            >
              Manage Attorney
            </Button>
          </Box>
        </Grid.Col>

        {/* Forward to Director */}
        <Grid.Col span={6}>
          <Box className="dashboard-card forward-director">
            <Text className="dashboard-card-title">
              <ArrowCircleRight size={20} className="icon" /> Forward to
              Director
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Send applications forward for final review.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="dashboard-button"
              onClick={() => setActiveTab("4")}
            >
              Forward
            </Button>
          </Box>
        </Grid.Col>

        {/* Feedback Section */}
        <Grid.Col span={6}>
          <Box className="dashboard-card feedback-section">
            <Text className="dashboard-card-title">
              <Chat size={20} className="icon" /> Feedback Viewer
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              View and respond to user feedback.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="dashboard-button"
              onClick={() => setActiveTab("5")}
            >
              View Feedback
            </Button>
          </Box>
        </Grid.Col>

        {/* Downloads Section */}
        <Grid.Col span={6}>
          <Box className="dashboard-card downloads-section">
            <Text className="dashboard-card-title">
              <ArrowCircleDown size={20} className="icon" /> Downloads
            </Text>
            <Divider className="card-divider" />
            <Text size="sm" mt="sm">
              Access and download important documents.
            </Text>
            <Button
              variant="light"
              fullWidth
              mt="md"
              size="xs"
              className="dashboard-button"
              onClick={() => setActiveTab("6")}
            >
              Access Downloads
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
//
PCCAdminDashboard.propTypes = {
  setActiveTab: PropTypes.func.isRequired, // Ensure setActiveTab is a required function
};

export default PCCAdminDashboard;
