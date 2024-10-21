import { useState } from 'react';
import { AppShell, Button, Card, Grid, Group, Modal, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

interface Application {
  id: number;
  name: string;
}

const applications: Application[] = [
  { id: 1, name: "Dr.XYZ" },
  { id: 2, name: "Dr.XYZ" },
  { id: 3, name: "Dr.XYZ" },
  { id: 4, name: "Dr.XYZ" },
  { id: 5, name: "Dr.XYZ" },
  { id: 6, name: "Dr.XYZ" },
];

export default function FeedbackViewer() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  const openModal = (application: Application) => {
    setSelectedApplication(application);
    open();
  };

  return (
    <AppShell padding="md">
      <Title order={1} mb="md">Feedback</Title>
      <Grid>
        {applications.map((application) => (
          <Grid.Col key={application.id} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mb="xs">
                <Text fw={500}>Application {application.id}</Text>
              </Group>
              <Text size="sm" c="dimmed" mb="md">
                By {application.name}
              </Text>
              <Button fullWidth onClick={() => openModal(application)}>
                View Feedback
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal opened={opened} onClose={close} title="Feedback From Attorney" centered>
        {selectedApplication && (
          <Card withBorder radius="md" p="xl">
            <Text>Feedback for Application {selectedApplication.id} by {selectedApplication.name}</Text>
            {/* Placeholder for actual feedback content */}
            <Text mt="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
              nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt 
              nisl nunc euismod nunc.
            </Text>
          </Card>
        )}
      </Modal>
    </AppShell>
  );
}