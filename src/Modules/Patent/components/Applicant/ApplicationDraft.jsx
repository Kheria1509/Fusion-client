import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Text, Box, Grid, Modal } from "@mantine/core";
import { ArrowRight } from "phosphor-react";
import "./ApplicationDraft.css";

// Static data for saved drafts
const savedDraftsData = [
  {
    title: "Title of Patent Application - Draft 1",
    savedDate: "12/09/2024",
    savedTime: "14:30:45",
    borderColor: "lightblue",
    content: "This is the content of Draft 1 for the patent application.",
  },
  {
    title: "Title of Patent Application - Draft 2",
    savedDate: "08/09/2024",
    savedTime: "13:20:30",
    borderColor: "orange",
    content: "This is the content of Draft 2 for the patent application.",
  },
  {
    title: "Title of Patent Application - Draft 3",
    savedDate: "05/09/2024",
    savedTime: "11:15:50",
    borderColor: "lightgreen",
    content: "This is the content of Draft 3 for the patent application.",
  },
];

// Saved draft card component
function SavedDraftCard({
  title,
  savedDate,
  savedTime,
  borderColor,
  onViewDraft,
}) {
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
        onClick={onViewDraft}
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
  onViewDraft: PropTypes.func.isRequired,
};

// Main SavedDraftsPage component
function SavedDraftsPage() {
  const [opened, setOpened] = useState(false);
  const [selectedDraft, setSelectedDraft] = useState(null);

  // Function to open the modal with the selected draft
  const handleViewDraft = (draft) => {
    setSelectedDraft(draft);
    setOpened(true);
  };

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
              onViewDraft={() => handleViewDraft(draft)}
            />
          </Grid.Col>
        ))}
      </Grid>

      {/* Modal to display the saved draft content */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={selectedDraft ? selectedDraft.title : ""}
        size="lg"
      >
        {selectedDraft && (
          <Box>
            <Text className="modal-details">
              Last Saved on: {selectedDraft.savedDate} |{" "}
              {selectedDraft.savedTime}
            </Text>
            <Text className="modal-content">{selectedDraft.content}</Text>
          </Box>
        )}
      </Modal>
    </Box>
  );
}

export default SavedDraftsPage;
