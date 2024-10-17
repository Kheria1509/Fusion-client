import React from "react";
import { Route, Routes } from "react-router-dom";

// Applicant Components
import ApplicantDashboard from "../components/Applicant/ApplicantDashboard";
import ApplicationForm from "../components/Applicant/ApplicationForm";
import StatusView from "../components/Applicant/StatusView";
import AttorneyDetails from "../components/Applicant/AttorneyDetails";
import ModifyApplication from "../components/Applicant/ModifyApplication";

// PCCAdmin Components
import PCCAdminDashboard from "../components/PCCAdmin/PCCAdminDashboard";
import ApplicationReview from "../components/PCCAdmin/ApplicationReview";
import NotifyApplicant from "../components/PCCAdmin/NotifyApplicant";
import ForwardToDirector from "../components/PCCAdmin/ForwardToDirector";
import ManageAttorneyAssignment from "../components/PCCAdmin/ManageAttorneyAssignment";

// Director Components
import DirectorDashboard from "../components/Director/DirectorDashboard";
import ReviewApplication from "../components/Director/ReviewApplication";
import RequestModifications from "../components/Director/RequestModifications";

export default function PatentRoutes() {
  return (
    <Routes>
      {/* Applicant Routes */}
      <Route path="applicant/dashboard" element={<ApplicantDashboard />} />
      <Route path="applicant/form" element={<ApplicationForm />} />
      <Route path="applicant/status" element={<StatusView />} />
      <Route path="applicant/attorney-details" element={<AttorneyDetails />} />
      <Route path="applicant/modify" element={<ModifyApplication />} />

      {/* PCCAdmin Routes */}
      <Route path="pccadmin/dashboard" element={<PCCAdminDashboard />} />
      <Route path="pccadmin/review" element={<ApplicationReview />} />
      <Route path="pccadmin/notify" element={<NotifyApplicant />} />
      <Route path="pccadmin/forward" element={<ForwardToDirector />} />
      <Route
        path="pccadmin/attorney-manage"
        element={<ManageAttorneyAssignment />}
      />

      {/* Director Routes */}
      <Route path="director/dashboard" element={<DirectorDashboard />} />
      <Route path="director/review" element={<ReviewApplication />} />
      <Route
        path="director/request-modifications"
        element={<RequestModifications />}
      />
    </Routes>
  );
}
