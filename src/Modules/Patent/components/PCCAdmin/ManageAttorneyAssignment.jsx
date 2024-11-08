// ManageAttorneyAssignment.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, Text, Group, Card } from '@mantine/core';
import AttorneyDetails from './AttorneyDetails';
import AttorneyForm from './AttorneyForm'; // Import the AttorneyForm component

const ManageAttorneyAssignment = () => {
  const [attorneyData, setAttorneyData] = useState([]);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [opened, setOpened] = useState(false);

  // Fetch attorney data
  useEffect(() => {
    setAttorneyData(AttorneyDetails);
  }, []);

  // Handle the button click to show attorney details
  const handleViewDetails = (attorneyID) => {
    const selected = attorneyData.find((attorney) => attorney.AttorneyID === attorneyID);
    setSelectedAttorney(selected);
    setOpened(true); // Open the modal
  };

  return (
    <Container style={{ width: '100%' }}>
      <Text align="left" size="xl" weight={500} style={{ marginBottom: '20px' }}>
          Manage Attorney Assignments
        </Text>
      <Card shadow="sm" padding="lg" radius="md" withBorder>

        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Attorney Name</th>
              <th>Attorney ID</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {attorneyData.map((attorney, index) => (
              <tr key={attorney.AttorneyID}>
                <td>{index + 1}</td>
                <td>{attorney.AttorneyName}</td>
                <td>{attorney.AttorneyID}</td>
                <td>
                  <Button
                    variant="outline"
                    color="blue"
                    onClick={() => handleViewDetails(attorney.AttorneyID)}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Modal to show attorney form */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Attorney Details"
        size="lg"
        centered
      >
        {selectedAttorney && <AttorneyForm attorney={selectedAttorney} />}
      </Modal>
    </Container>
  );
};

export default ManageAttorneyAssignment;
