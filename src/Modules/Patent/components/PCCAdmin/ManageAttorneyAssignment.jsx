// ManageAttorneyAssignment.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, Text, Group, Card } from '@mantine/core';
import AttorneyDetails from './AttorneyDetails';
import AttorneyForm from './AttorneyForm';
import NewAttorneyForm from './NewAttorneyForm'; 
import { PencilSimple } from 'phosphor-react';
import "./ManageAttorneyAssignment.css";
const ManageAttorneyAssignment = () => {
  const [attorneyData, setAttorneyData] = useState([]);
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [viewDetailsOpened, setViewDetailsOpened] = useState(false);
  const [newAttorneyOpened, setNewAttorneyOpened] = useState(false);

  // Fetch attorney data
  useEffect(() => {
    setAttorneyData(AttorneyDetails);
  }, []);

  // Handle view details button
  const handleViewDetails = (attorneyID) => {
    const selected = attorneyData.find((attorney) => attorney.AttorneyID === attorneyID);
    setSelectedAttorney(selected);
    setViewDetailsOpened(true); 
  };

  // Handle add new attorney
  const handleAddNewAttorney = (newAttorney) => {
    setAttorneyData([...attorneyData, newAttorney]);
    setNewAttorneyOpened(false);
  };

  return (
    <Container style={{ width: '100%' }}>
      <Text className="page-t-title">
        Manage Attorney Assignments
      </Text>
      <Text align="center" size="sm" color="dimmed" mb="md">
        View attorney details, assign applications, add new attorneys, reassign existing applications, and view feedback.
      </Text>

      {/* New Attorney Button */}
      <Button variant="filled" color="green" onClick={() => setNewAttorneyOpened(true)} style={{ marginBottom: '20px' }}>
        + Add New Attorney
      </Button>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Attorney Name</th>
              <th>Attorney ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attorneyData.map((attorney, index) => (
              <tr key={attorney.AttorneyID}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{attorney.AttorneyName}</td>
                <td style={{ textAlign: "center" }}>{attorney.AttorneyID}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    variant="subtle"
                    color="blue"
                    onClick={() => handleViewDetails(attorney.AttorneyID)}
                    leftIcon={<PencilSimple />}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Modal to show attorney form with Edit Button */}
      <Modal
        opened={viewDetailsOpened}
        onClose={() => setViewDetailsOpened(false)}
        title="Attorney Details"
        size="lg"
        centered
      >
        {selectedAttorney && (
          <>
            <AttorneyForm attorney={selectedAttorney} />
          </>
        )}
      </Modal>

      {/* Modal for Adding New Attorney */}
      <Modal
        opened={newAttorneyOpened}
        onClose={() => setNewAttorneyOpened(false)}
        title="Add New Attorney"
        size="lg"
        centered
      >
        <NewAttorneyForm onSubmit={handleAddNewAttorney} />
      </Modal>
    </Container>
  );
};

export default ManageAttorneyAssignment;
