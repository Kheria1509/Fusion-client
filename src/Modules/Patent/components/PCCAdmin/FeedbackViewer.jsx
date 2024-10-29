import React from "react";
import { Card, Text, Button, Grid, Box } from "@mantine/core";
import "./FeedbackViewer.css";

function FeedbackCard({ application, borderColor }) {
  return (
    <Card className="feedback-card" style={{ borderLeft: `6px solid ${borderColor}` }}>
      <Text className="applicant-name">{application.name}</Text>
      <Text className="application-date">Date: {application.date}</Text>
      <Text className="topic">
        Topic: <span className="highlighted-text">{application.topic}</span>
      </Text>
      <Text className="field">Field: {application.field}</Text>
      <Text className="attorney">Patent Attorney: {application.attorney}</Text>
      <Text className="status" style={{ color: application.statusColor }}>Status: {application.status}</Text>
      <Text className="feedback-details">{application.feedback}</Text>
      <Button variant="outline" className="view-feedback-button">
        View Details
      </Button>
    </Card>
  );
}

function FeedbackViewer() {
  const directorFeedbackData = [
    {
      name: "Application 1",
      date: "2023-10-03",
      topic: "Prototype for a mini rocket engine",
      field: "Mechanical Engineering",
      attorney: "Mr. Rahul Verma",
      status: "Pending Review",
      statusColor: "#FF6F61",
      feedback: "Reviewed technical aspects; requires additional testing data.",
      borderColor: "#FF6F61",
    },
    {
      name: "Application 2",
      date: "2023-09-21",
      topic: "AI-based Medical Diagnostic Tool",
      field: "Computer Science",
      attorney: "Ms. Deepika Arora",
      status: "Approved",
      statusColor: "#48BB78",
      feedback: "Approved with minor changes in model explainability.",
      borderColor: "#48BB78",
    },
    // Add more applications as needed
  ];

  const attorneyFeedbackData = [
    {
      name: "Application 3",
      date: "2023-08-15",
      topic: "Autonomous Drone Navigation",
      field: "Aerospace Engineering",
      attorney: "Mr. Sanjay Kulkarni",
      status: "Under Review",
      statusColor: "#F6AD55",
      feedback: "Requires clarification on claim language and specifications.",
      borderColor: "#4299E1",
    },
    {
      name: "Application 4",
      date: "2023-07-11",
      topic: "Advanced Image Processing for Satellites",
      field: "Electronics",
      attorney: "Ms. Meenakshi Jain",
      status: "Awaiting Revision",
      statusColor: "#FF6F61",
      feedback: "Further details needed on algorithm accuracy and testing.",
      borderColor: "#FF6F61",
    },
    // Add more applications as needed
  ];

  return (
    <Box padding="lg">
      <Text className="section-title">Feedback from Director</Text>
      <Grid className="feedback-grid">
        {directorFeedbackData.map((application, index) => (
          <Grid.Col span={6} key={index}>
            <FeedbackCard application={application} borderColor={application.borderColor} />
          </Grid.Col>
        ))}
      </Grid>

      <Text className="section-title">Feedback from Attorney</Text>
      <Grid className="feedback-grid">
        {attorneyFeedbackData.map((application, index) => (
          <Grid.Col span={6} key={index}>
            <FeedbackCard application={application} borderColor={application.borderColor} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default FeedbackViewer;
