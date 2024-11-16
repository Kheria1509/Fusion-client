import React, { useState } from "react";
import { Table, Button, Container, Card, Text } from "@mantine/core";
import { ArrowCircleDown } from "@phosphor-icons/react";
import "./DownloadsPage.css";

function DownloadsPage() {
  const [downloadsData] = useState([
    {
      id: 1,
      title: "Intellectual Property Filling Form",
      link: "https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/DRSPC/IPRM/Annexure%20I.pdf",
    },
    {
      id: 2,
      title: "Request for Provisional Patent Filing",
      link: "https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/DRSPC/IPRM/Annexure%20II.pdf",
    },
    {
      id: 3,
      title: "Intellectual Property Policy Document",
      link: "https://www.iiitdmj.ac.in/downloads/IPR%20Policy%20Final%20V1%2016_6_2020.pdf",
    },
  ]);

  return (
    <Container style={{ width: "100%" }}>
      <Text className="page-t-title">
        View Downloadable Forms and Documents
      </Text>
      <Text align="center" size="sm" color="dimmed" mb="md">
        The following is a list of documents available for download. Please
        review the document title and click the "Download" button to access the
        desired file.
      </Text>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className="table-card"
      >
        <Table striped highlightOnHover className="downloads-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Document Title</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {downloadsData.map((download, index) => (
              <tr key={download.id}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{download.title}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    component="a"
                    href={download.link}
                    target="_blank"
                    variant="outline"
                    color="blue"
                    leftIcon={<ArrowCircleDown size={16} />}
                    className="download-button"
                  >
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default DownloadsPage;
