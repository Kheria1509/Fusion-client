import React from "react";
import PropTypes from "prop-types";
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
  ArrowCircleDown,
  ArrowCircleRight,
  ClipboardText,
} from "@phosphor-icons/react";

import "./PCCAdminDashboard.css";

function PCCAdminDashboard({ setActiveTab }) {
  // Features Data Array
  const featuresData = [
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
        "Quick and easy access to important documents and forms for offline use.",
    },
    {
      icon: <ArrowCircleDown size={20} className="feature-icon" />,
      title: "Insights",
      description: "See past years applications data.",
    },
  ];

  // Function to Render Feature Items
  const renderFeatureItems = () =>
    featuresData.map((feature, index) => (
      <Box key={index} className="feature-item">
        <Box className="icon-and-title">
          {feature.icon}
          <Text className="feature-title">
            <strong>{feature.title}</strong>
          </Text>
        </Box>
        <Text className="feature-description">{feature.description}</Text>
      </Box>
    ));

  // Function to Render Dashboard Cards
  const renderDashboardCard = (icon, title, description, tabId) => (
    <Box className="dashboard-card">
      <Text className="dashboard-card-title">
        {icon} {title}
      </Text>
      <Divider className="card-divider" />
      <Text size="sm" mt="sm">
        {description}
      </Text>
      <Button
        variant="filled"
        color="blue"
        fullWidth
        mt="md"
        className="dashboard-button"
        onClick={() => setActiveTab(tabId)}
      >
        {title}
      </Button>
    </Box>
  );

  return (
    <Box>
      {/* Page Title */}
      <Text className="dashboard-title">Patent & Copyright Cell Dashboard</Text>

      {/* Overview Section */}
      <Box className="overview-section">
        <Text className="overview-title">
          IIITDM Jabalpur's Patent System
          <Buildings size={24} className="overview-icon" />
        </Text>
        <Text className="overview-text">
          The Patent Management System at IIITDM Jabalpur focuses on fostering
          research and development activities, particularly in IT-enabled design
          and manufacturing, as well as the design of IT systems.
        </Text>
        <Text className="overview-title">
          Overview
          <ChartBar size={24} className="overview-icon" />
        </Text>
        <Text className="overview-text">
          The PCC Admin Dashboard serves as the central hub for managing and
          overseeing the patent application process at IIITDM Jabalpur. With a
          streamlined interface and powerful tools, the platform supports the
          Patent Coordination Committee (PCC) in handling every stage of the
          patent lifecycle.
        </Text>
        <Divider mt="sm" />

        {/* Enhanced Features List */}
        <Box className="features-list">{renderFeatureItems()}</Box>
      </Box>

      {/* Dashboard Sections */}
      <Grid mt="md" className="dashboard-grid">
        {/* Dashboard Cards */}
        <Grid.Col span={6}>
          {renderDashboardCard(
            <Eye size={20} className="icon" />,
            "New Applications",
            "Review and provide feedback on the latest applications.",
            "1",
          )}
        </Grid.Col>

        <Grid.Col span={6}>
          {renderDashboardCard(
            <List size={20} className="icon" />,
            "Status of Applications",
            "Track the current status of all applications.",
            "2",
          )}
        </Grid.Col>

        <Grid.Col span={6}>
          {renderDashboardCard(
            <Briefcase size={20} className="icon" />,
            "Manage Attorney Details",
            "Manage and update attorney information.",
            "3",
          )}
        </Grid.Col>

        <Grid.Col span={6}>
          {renderDashboardCard(
            <ArrowCircleDown size={20} className="icon" />,
            "Downloads",
            "Access and download important documents.",
            "2",
          )}
        </Grid.Col>

        <Grid.Col span={6}>
          {renderDashboardCard(
            <ClipboardText size={20} className="icon" />,
            "Insights",
            "See past years applications data.",
            "3",
          )}
        </Grid.Col>
      </Grid>
    </Box>
  );
}

PCCAdminDashboard.propTypes = {
  setActiveTab: PropTypes.func.isRequired, // Ensure setActiveTab is a required function
};

export default PCCAdminDashboard;
