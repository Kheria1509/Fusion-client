import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ManageAttorneyAssignment() {
  const navigate = useNavigate();
  const { id } = useParams();

  const attorneys = [
    { name: "Attorney 1 Name", email: "Email ID 1", phone: "Phone No. 1" },
    { name: "Attorney 2 Name", email: "Email ID 2", phone: "Phone No. 2" },
    { name: "Attorney 3 Name", email: "Email ID 3", phone: "Phone No. 3" },
    { name: "Attorney 4 Name", email: "Email ID 4", phone: "Phone No. 4" },
    { name: "Attorney 5 Name", email: "Email ID 5", phone: "Phone No. 5" },
  ];

  const [selectedAttorney, setSelectedAttorney] = useState("");

  // Load the saved attorney for the current application (if any)
  useEffect(() => {
    const savedAttorney = localStorage.getItem(
      `attorney_for_application_${id}`,
    );
    if (savedAttorney) {
      setSelectedAttorney(savedAttorney);
    }
  }, [id]);

  const handleAttorneySelect = (attorneyName) => {
    setSelectedAttorney(attorneyName);
    localStorage.setItem(`attorney_for_application_${id}`, attorneyName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate(-1);
    }
  };

  return (
    <div className="attorney-details-container">
      {/* Back button */}
      <div
        className="back-button"
        role="button"
        onClick={() => navigate(-1)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <span className="back-icon">&larr;</span> Previous
      </div>

      {/* Page Title */}
      <h1 className="page-title">Attorney Details for Application {id}</h1>

      {/* Attorney Table */}
      <table className="attorney-table">
        <thead>
          <tr>
            <th>Attorney Name</th>
            <th>Email ID</th>
            <th>Phone No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attorneys.map((attorney, index) => (
            <tr key={index}>
              <td>{attorney.name}</td>
              <td>{attorney.email}</td>
              <td>{attorney.phone}</td>
              <td>
                <button
                  onClick={() => handleAttorneySelect(attorney.name)}
                  className="select-button"
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Selected Attorney Display */}
      {selectedAttorney && (
        <div className="selected-attorney">
          <h3>Selected Attorney:</h3>
          <p>{selectedAttorney}</p>
        </div>
      )}
    </div>
  );
}

export default ManageAttorneyAssignment;
