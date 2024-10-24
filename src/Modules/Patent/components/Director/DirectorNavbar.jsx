import React from "react";
import { Anchor, Box } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import "./DirectorNavbar.css";

function DirectorNavbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Box className="navbar-container">
      <div className="navbar-links">
        <Anchor
          component={Link}
          to="/patent/director/recent"
          underline
          className={isActive("/patent/director/recent") ? "active" : ""}
        >
          Recent Applications
        </Anchor>
        <Anchor
          component={Link}
          to="/patent/director/final-review"
          underline={false}
          className={isActive("/patent/director/final-review") ? "active" : ""}
        >
          Applications for Final Review
        </Anchor>
        <Anchor
          component={Link}
          to="/patent/director/reviewed"
          underline={false}
          className={isActive("/patent/director/reviewed") ? "active" : ""}
        >
          Reviewed Applications
        </Anchor>
        <Anchor
          component={Link}
          to="/patent/director/active"
          underline={false}
          className={isActive("/patent/director/active") ? "active" : ""}
        >
          Active Applications
        </Anchor>
      </div>
    </Box>
  );
}

export default DirectorNavbar;
