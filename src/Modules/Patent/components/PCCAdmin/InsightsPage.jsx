import React from "react";
import { Table, Button, RingProgress } from "@mantine/core";
import { Download } from "@phosphor-icons/react";
// import "./InsightsPage.css";

function InsightsPage() {
  const yearWiseData = [
    { year: "2021", value: 30 },
    { year: "2022", value: 40 },
    { year: "2023", value: 50 },
  ];

  const applications = [
    { status: "Submitted", count: 120 },
    { status: "Approved", count: 80 },
    { status: "Under Review", count: 40 },
  ];

  const exportToCSV = () => {
    const headers = ["Status,Count"];
    const rows = applications.map((app) => `${app.status},${app.count}`);
    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Applications_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container">
      <h2 className="title">Insights</h2>

      {/* Year-Wise Data Section */}
      <div className="section">
        <h3 className="section-title">Year-wise Data</h3>
        <div className="chart-container">
          {yearWiseData.map((data) => (
            <div key={data.year} className="chart-item">
              <h4>{data.year}</h4>
              <RingProgress
                size={120}
                thickness={12}
                roundCaps
                sections={[{ value: data.value, color: "blue" }]}
                label={
                  <div>
                    <strong>{data.value}%</strong>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Applications Table */}
      <div className="section">
        <h3 className="section-title">Applications Overview</h3>
        <Table striped highlightOnHover withBorder>
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.status}</td>
                <td>{app.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Export to CSV */}
      <Button className="download-button" onClick={exportToCSV}>
        <Download className="icon" />
        Download CSV Report
      </Button>
    </div>
  );
}

export default InsightsPage;
