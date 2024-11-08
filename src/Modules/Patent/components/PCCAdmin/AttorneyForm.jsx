// AttorneyForm.jsx
import React from 'react';
import { TextInput, Group, Text, Box } from '@mantine/core';

const AttorneyForm = ({ attorney }) => {
  return (
    <Box>
      <Group position="apart">
        <Text><strong>Attorney Name:</strong> {attorney.AttorneyName}</Text>
        <Text><strong>Law Firm:</strong> {attorney.LawFirm}</Text>
      </Group>
      <Group position="apart" mt="sm">
        <Text><strong>Email:</strong> {attorney.Email}</Text>
        <Text><strong>Phone:</strong> {attorney.PhoneNumber}</Text>
      </Group>
      <Group position="apart" mt="sm">
        <Text><strong>Specialization:</strong> {attorney.Specialization}</Text>
        <Text><strong>Fee:</strong> {attorney.AttorneyFee}</Text>
      </Group>
      <Group position="apart" mt="sm">
        <Text><strong>Status:</strong> {attorney.Status}</Text>
        <Text><strong>Review Status:</strong> {attorney.ReviewStatus}</Text>
      </Group>
      <Text mt="sm"><strong>Comments:</strong> {attorney.Comments}</Text>
    </Box>
  );
};

export default AttorneyForm;
