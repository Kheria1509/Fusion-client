import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import {
  Text,
  Box,
  Divider,
  Tooltip,
  Badge,
  Button,
  Modal,
  TextInput,
} from "@mantine/core";
import {
  EnvelopeSimple,
  Phone,
  Briefcase,
  CurrencyDollar,
  CheckCircle,
  Info,
  PencilSimple,
  List,
} from "phosphor-react";
import ApplicationModal from "./ApplicationModal"; // Import the new ApplicationModal component
import "./AttorneyForm.css";

function AttorneyForm({ attorney, onUpdate }) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isApplicationModalOpen, setApplicationModalOpen] = useState(false); // State for Application Modal
  const [updatedData, setUpdatedData] = useState({ ...attorney });

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);

  const openApplicationModal = () => setApplicationModalOpen(true); // Open Application Modal
  const closeApplicationModal = () => setApplicationModalOpen(false); // Close Application Modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleEditSubmit = () => {
    onUpdate(updatedData); // Pass updated data to parent component or state
    closeEditModal();
    alert("Details Updated Successfully!");
  };

  return (
    <Box className="attorney-form-container">
      <Text className="attorney-form-header" align="center">
        Attorney Profile
      </Text>
      <Divider my="sm" />

      {/* Attorney Details */}
      <Tooltip label="Name of the Attorney" position="right">
        <Text className="attorney-detail">
          <Briefcase size={18} className="icon" />
          <strong>Name: </strong> {attorney.AttorneyName}
        </Text>
      </Tooltip>

      <Tooltip label="Associated Law Firm" position="right">
        <Text className="attorney-detail">
          <Briefcase size={18} className="icon" />
          <strong>Law Firm:</strong> {attorney.LawFirm}
        </Text>
      </Tooltip>

      <Tooltip label="Contact Email" position="right">
        <Text className="attorney-detail">
          <EnvelopeSimple size={18} className="icon" />
          <strong>Email:</strong> {attorney.Email}
        </Text>
      </Tooltip>

      <Tooltip label="Phone Number" position="right">
        <Text className="attorney-detail">
          <Phone size={18} className="icon" />
          <strong>Phone:</strong> {attorney.PhoneNumber}
        </Text>
      </Tooltip>

      <Tooltip label="Area of Specialization" position="right">
        <Text className="attorney-detail">
          <Info size={18} className="icon" />
          <strong>Specialization:</strong> {attorney.Specialization}
        </Text>
      </Tooltip>

      <Tooltip label="Attorney's Fee" position="right">
        <Text className="attorney-detail">
          <CurrencyDollar size={18} className="icon" />
          <strong>Fee:</strong> {attorney.AttorneyFee}
        </Text>
      </Tooltip>

      <Tooltip label="Application Status" position="right">
        <Text className="attorney-detail">
          <CheckCircle size={18} className="icon" />
          <strong>Status:</strong> {attorney.Status}
        </Text>
      </Tooltip>

      <Tooltip label="Current Review Status" position="right">
        <Text className="attorney-detail">
          <CheckCircle size={18} className="icon" />
          <strong>Review Status:</strong> {attorney.ReviewStatus}
        </Text>
      </Tooltip>

      <Divider my="sm" />

      <Text className="comments-section">
        <strong>Comments:</strong>{" "}
        {attorney.Comments || "No comments available at this time."}
      </Text>

      <Badge variant="light" size="xl" className="created-by-badge">
        Created By: {attorney.CreatedBy}
      </Badge>

      <br />

      {/* Button to Edit Details */}
      <Button
        mt="lg"
        variant="filled"
        color="blue"
        leftIcon={<PencilSimple />}
        onClick={openEditModal}
      >
        Edit Details
      </Button>

      {/* New Button to View Applications */}
      <Button
        mt="lg"
        ml="md"
        variant="fullfilled"
        color="blue"
        leftIcon={<List />}
        onClick={openApplicationModal}
      >
        Applications
      </Button>

      {/* Modal for editing details */}
      <Modal
        opened={isEditModalOpen}
        onClose={closeEditModal}
        title="Edit Attorney Details"
        centered
      >
        <TextInput
          label="Attorney Name"
          name="AttorneyName"
          value={updatedData.AttorneyName}
          onChange={handleInputChange}
          mt="sm"
        />
        <TextInput
          label="Law Firm"
          name="LawFirm"
          value={updatedData.LawFirm}
          onChange={handleInputChange}
          mt="sm"
        />
        <TextInput
          label="Email"
          name="Email"
          value={updatedData.Email}
          onChange={handleInputChange}
          mt="sm"
        />
        <TextInput
          label="Phone Number"
          name="PhoneNumber"
          value={updatedData.PhoneNumber}
          onChange={handleInputChange}
          mt="sm"
        />
        <TextInput
          label="Specialization"
          name="Specialization"
          value={updatedData.Specialization}
          onChange={handleInputChange}
          mt="sm"
        />
        <TextInput
          label="Attorney Fee"
          name="AttorneyFee"
          value={updatedData.AttorneyFee}
          onChange={handleInputChange}
          mt="sm"
        />
        <Button
          onClick={handleEditSubmit}
          color="blue"
          fullWidth
          mt="lg"
          style={{
            backgroundColor: "#1c7ed6",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Save Changes
        </Button>
      </Modal>

      {/* Modal to Display Applications */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={closeApplicationModal}
        applications={attorney.AssignedApplications} // Pass assigned applications
      />
    </Box>
  );
}

// Define PropTypes for the component
AttorneyForm.propTypes = {
  attorney: PropTypes.shape({
    AttorneyName: PropTypes.string.isRequired,
    LawFirm: PropTypes.string,
    Email: PropTypes.string.isRequired,
    PhoneNumber: PropTypes.string,
    Specialization: PropTypes.string,
    AttorneyFee: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Status: PropTypes.string,
    ReviewStatus: PropTypes.string,
    Comments: PropTypes.string,
    CreatedBy: PropTypes.string,
    AssignedApplications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AttorneyForm;
