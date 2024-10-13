import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Text, Box } from "@mantine/core";
import { Link } from "react-router-dom"; // For navigation between pages
import "./ApplicantNotifications.css"; // Import the CSS file

// Dummy data for notifications
const notificationsData = [
  {
    title: "Title of Patent Application",
    status: "Rejected",
    description: "Application rejected by PCC Admin",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    color: "red",
  },
  {
    title: "Title of Patent Application",
    status: "Accepted",
    description:
      "Application accepted by PCC Admin and forwarded to Director for initial review.",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    color: "green",
  },
  {
    title: "Title of Patent Application",
    status: "Accepted",
    description:
      "Application approved by Director and sent to Attorney for Patentability check",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    color: "green",
  },
  {
    title: "Title of Patent Application",
    status: "Rejected",
    description: "Application rejected by Director during final approval step.",
    date: "DD/MM/YYYY",
    time: "HH:MM:SS",
    color: "red",
  },
];

// Notification card component
function NotificationCard({ title, status, description, date, time, color }) {
  return (
    <Card
      className="notification-card"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <Text className="notification-title">{title}</Text>
      <Text className="notification-status" style={{ color }}>
        {status}
      </Text>
      <Text className="notification-date">{`${date} | ${time}`}</Text>
      <Text className="notification-description">{description}</Text>
      <Button variant="outline" className="mark-read-button">
        Mark as Read
      </Button>
    </Card>
  );
}

// PropTypes validation for NotificationCard
NotificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

// Main NotificationsPage component
function NotificationsPage() {
  const [notifications] = useState(notificationsData); // Remove unused setNotifications

  return (
    <Box className="notifications-page">
      {/* Page Title */}
      <Text className="page-title">Notifications</Text>

      {/* Navigation Links */}
      <Box className="nav-links">
        <Link className="nav-link" to="/applicant_dashboard">
          Submit New Application
        </Link>
        <Link className="nav-link" to="/viewapplicationspage">
          View Applications
        </Link>
        <Link className="nav-link" to="/saveddraftspage">
          Saved Drafts
        </Link>
        <Link className="nav-link active" to="/notifications">
          Notifications
        </Link>
      </Box>

      {/* Notifications container */}
      <Box className="notifications-container">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            status={notification.status}
            description={notification.description}
            date={notification.date}
            time={notification.time}
            color={notification.color}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NotificationsPage;
