import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Text, Box, Grid } from "@mantine/core";
import { ArrowRight } from "phosphor-react";
import "./ApplicationDraft.css";

// Static data for saved drafts
const savedDraftsData = [
  {
    title: "Title of Patent Application - Draft 1",
    savedDate: "DD/MM/YYYY",
    savedTime: "HH:MM:SS",
    borderColor: "lightblue",
  },
  {
    title: "Title of Patent Application - Draft 2",
    savedDate: "DD/MM/YYYY",
    savedTime: "HH:MM:SS",
    borderColor: "orange",
  },
  {
    title: "Title of Patent Application - Draft 3",
    savedDate: "DD/MM/YYYY",
    savedTime: "HH:MM:SS",
    borderColor: "lightgreen",
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
        className="button"
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
    <Box style={{ padding: "0px" }}>
      {/* Header */}
      <Text className="header-text">Saved Drafts</Text>

      {/* Saved draft cards */}
      <Grid className="app-container">
        {savedDraftsData.map((draft, index) => (
          <Grid.Col span={6} key={index}>
            <SavedDraftCard
              title={draft.title}
              savedDate={draft.savedDate}
              savedTime={draft.savedTime}
              borderColor={draft.borderColor}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}

export default SavedDraftsPage;
