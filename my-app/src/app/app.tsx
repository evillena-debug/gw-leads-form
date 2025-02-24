import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleWorkspace from "components/gworkspace/step1-form/GoogleWorkspace";
import ContactInfo from "components/gworkspace/step2-form/ContactInfo";
import WorkspaceSetup from "components/gworkspace/step3-form/WorkspaceSetup/WorkspaceSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/google-workspace" element={<GoogleWorkspace />} />
        <Route path="/contact-info" element={<ContactInfo />} />
        <Route path="/workspace-setup" element={<WorkspaceSetup />} />
      </Routes>
    </Router>
  );
}

export default App;