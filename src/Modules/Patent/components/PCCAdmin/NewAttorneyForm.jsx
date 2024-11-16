// NewAttorneyForm.jsx
import React, { useState } from "react";
import {
  TextInput,
  Button,
  Box,
  Group,
  Text,
  Select,
  Title,
} from "@mantine/core";
import {
  UserCircle,
  Briefcase,
  Envelope,
  Phone,
  Tag,
  CurrencyDollar,
  FileText,
} from "phosphor-react";

const NewAttorneyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    AttorneyName: "",
    LawFirm: "",
    Email: "",
    PhoneNumber: "",
    Specialization: "",
    AttorneyFee: "",
    AssignedApplication: "",
  });

  const applicationOptions = [
    { value: "101", label: "101 - Patent for AI Diagnosis" },
    { value: "102", label: "102 - Machine Learning Optimization" },
    { value: "103", label: "103 - Blockchain Innovations" },
    // Add more options as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, AssignedApplication: value });
  };

  const handleSubmit = () => {
    onSubmit({
      ...formData,
      AttorneyID: Math.random().toString(36).substring(2, 9),
    });
  };

  return (
    <Box>
      {/* Centered, bold, and larger title */}
      <Title
        align="center"
        order={2}
        mb="md"
        style={{ fontWeight: "bold", fontSize: "1.8rem" }}
      >
        New Attorney Form
      </Title>

      <Group position="center" spacing="md">
        <UserCircle size={28} />
        <TextInput
          label="Attorney Name"
          name="AttorneyName"
          value={formData.AttorneyName}
          onChange={handleChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Group position="center" spacing="md" mt="sm">
        <Briefcase size={28} />
        <TextInput
          label="Law Firm"
          name="LawFirm"
          value={formData.LawFirm}
          onChange={handleChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Group position="center" spacing="md" mt="sm">
        <Envelope size={28} />
        <TextInput
          label="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Group position="center" spacing="md" mt="sm">
        <Phone size={28} />
        <TextInput
          label="Phone Number"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Group position="center" spacing="md" mt="sm">
        <Tag size={28} />
        <TextInput
          label="Specialization"
          name="Specialization"
          value={formData.Specialization}
          onChange={handleChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Group position="center" spacing="md" mt="sm">
        <CurrencyDollar size={28} />
        <TextInput
          label="Attorney Fee"
          name="AttorneyFee"
          value={formData.AttorneyFee}
          onChange={handleChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Group position="center" spacing="md" mt="sm">
        <FileText size={28} />
        <Select
          label="Assign to Application"
          placeholder="Select Application"
          data={applicationOptions}
          value={formData.AssignedApplication}
          onChange={handleSelectChange}
          required
          style={{ width: "90%" }}
        />
      </Group>

      <Button
        fullWidth
        mt="lg" // Increased margin for more spacing above
        onClick={handleSubmit}
        color="white"
        style={{
          backgroundColor: "#e9f5ff", // Very light blue background
          color: "#74c0fc", // Lighter blue text color
          padding: "10px",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "1.5px solid #74c0fc", // Thinner blue border
          transition:
            "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease", // Smooth color transition
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#ffffff"; // White background on hover
          e.target.style.color = "#1c7ed6"; // Darker blue text color on hover
          e.target.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#e9f5ff"; // Revert to very light blue background
          e.target.style.color = "#74c0fc"; // Revert to lighter blue text color
          e.target.style.boxShadow = "none";
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default NewAttorneyForm;
