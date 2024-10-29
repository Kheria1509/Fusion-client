import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import './ReviewApplication.css';

const ReviewApplication = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = 3;

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleNotifyChanges = () => {
    console.log("Notifying for changes...");
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return "This is content for Page 1.";
      case 2:
        return "This is content for Page 2.";
      case 3:
        return "This is content for Page 3.";
      default:
        return "Content not available.";
    }
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <CustomBreadcrumbs
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Patent Management', link: '/patent/dashboard' },
          { label: 'Review Applications', link: '/patent/review' }
        ]}
      />

      {/* Navigation Links */}
      <Box display="flex" mb={2} sx={{ marginTop: '20px' }}>
        <Typography variant="body2" sx={{ mr: 2, cursor: 'pointer', color: 'black' }} onClick={() => handleNavigation('/patent/dashboard')}>
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{ mr: 2, fontWeight: 'bold', cursor: 'pointer', color: 'black' }} onClick={() => handleNavigation('/patent/review_application')}>
          Review Applications
        </Typography>
        <Typography variant="body2" sx={{ mr: 2, cursor: 'pointer', color: 'black' }} onClick={() => handleNavigation('/patent/status-applications')}>
          Status of Applications
        </Typography>
        <Typography variant="body2" sx={{ cursor: 'pointer', color: 'black' }} onClick={() => handleNavigation('/patent/manage_attorney')}>
          Manage Attorney Details
        </Typography>
      </Box>

      {/* Application Content */}
      <Typography variant="h4" className="application-title">
        Application 1
      </Typography>

      {/* Large Container for Page Content */}
      <Box
        className="application-container"
        position="relative"
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#e3f2fd'
        }}
      >
        <Typography variant="h6" sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          Page {currentPage}
        </Typography>

        <Typography variant="body1" mt={2}>
          {renderPageContent()}
        </Typography>
      </Box>

      {/* Pagination and Action Buttons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Button variant="contained" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        {currentPage === maxPage ? (
          <Box display="flex" gap={2}>
            <Button variant="contained" onClick={handleNotifyChanges}>
              Notify for Changes
            </Button>
            <Button variant="contained" onClick={() => handleNavigation('/patent/dashboard')}>
              Close
            </Button>
          </Box>
        ) : (
          <Button variant="contained" onClick={handleNextPage} disabled={currentPage === maxPage}>
            Next
          </Button>
        )}
      </Box>
    </div>
  );
};

export default ReviewApplication;
