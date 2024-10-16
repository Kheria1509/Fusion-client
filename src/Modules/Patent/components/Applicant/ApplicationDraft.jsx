import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Text, Box, Breadcrumbs, Anchor } from "@mantine/core";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import "./ApplicantDraft.css"; // Import the CSS file

// Dummy data for saved drafts
const savedDraftsData = [
  {
    title: "Title of Patent Application",
    savedDate: "DD/MM/YYYY",
    savedTime: "HH:MM:SS",
    borderColor: "red",
  },
  {
    title: "Title of Patent Application",
    savedDate: "DD/MM/YYYY",
    savedTime: "HH:MM:SS",
    borderColor: "orange",
  },
];

// Saved draft card component
function SavedDraftCard({ title, savedDate, savedTime, borderColor }) {
  return (
    <Card
      className="saved-draft-card"
      style={{ borderLeft: `6px solid ${borderColor}` }}
    >
      <Text className="card-title">{title}</Text>
      <Text className="card-details">
        Last Saved on: {savedDate} | {savedTime}
      </Text>
      <Button
        variant="outline"
        leftIcon={<ArrowRight size={16} />}
        className="card-button"
      >
        View Draft
      </Button>
    </Card>
  );
}

// PropTypes validation for SavedDraftCard
SavedDraftCard.propTypes = {
  title: PropTypes.string.isRequired,
  savedDate: PropTypes.string.isRequired,
  savedTime: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

// Main SavedDraftsPage component
function SavedDraftsPage() {
  return (
    <Box className="saved-drafts-page">
      {/* Breadcrumbs */}
      <Breadcrumbs className="breadcrumbs">
        <Anchor href="/">Home</Anchor> &gt;{" "}
        <Anchor href="/patent-management">Patent Management</Anchor> &gt;
        Applicant
      </Breadcrumbs>

      {/* Page Title */}
      <Text className="page-title">Saved Drafts</Text>

      {/* Navigation Links */}
      <Box className="navigation-links">
        <Box className="nav-links">
          <Anchor href="/applicant_dashboard">Submit New Application</Anchor>
          <Anchor href="/viewapplicationspage">View Applications</Anchor>
          <Anchor href="/saved-drafts" className="active">
            Saved Drafts
          </Anchor>
          <Anchor href="/notifications">Notifications</Anchor>
        </Box>
        <Button
          variant="subtle"
          leftIcon={<ArrowLeft size={16} />}
          className="button-back"
        >
          Back
        </Button>
      </Box>

      {/* Saved Draft Cards */}
      <Box className="drafts-container">
        {savedDraftsData.map((draft, index) => (
          <SavedDraftCard
            key={index}
            title={draft.title}
            savedDate={draft.savedDate}
            savedTime={draft.savedTime}
            borderColor={draft.borderColor}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SavedDraftsPage;
