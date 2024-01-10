import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import JobRoleOverview from "./pages/JobRoleOverview";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import CrudJobs from "./pages/crud-jobs/CrudJobs";
import AppHeader from "./pages/AppHeader";
import AppFooter from "./pages/AppFooter";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <AppHeader />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<CrudJobs />}></Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/job-role-overview" element={<JobRoleOverview />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </main>
      <AppFooter />
    </Container>
  );
};

export default App;
