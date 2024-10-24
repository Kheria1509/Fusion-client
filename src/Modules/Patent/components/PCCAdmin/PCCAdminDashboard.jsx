import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Group, Text } from "@mantine/core"; // Import Group and Text from Mantine

function PCCAdminDashboard() {
  return (
    <div>
      <Group mb="lg" spacing="xs">
        <Link to="/recent">Recent</Link>
        <Text>|</Text>
        <Link to="/patent/pccAdmin/feedbackView">Review Applications</Link>
        <Text>|</Text>
        <Link to="/status-applications">Status of the Applications</Link>
        <Text>|</Text>
        <Link to="/patent/pccAdmin/manageAttorney">
          Manage Attorney Details
        </Link>
        <Text>|</Text>
        <Link to="/patent/pccAdmin/forwardRedirect">Forward to Director</Link>
      </Group>
    </div>
  );
}

export default PCCAdminDashboard;
