import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import JobRoleOverview from "./pages/JobRoleOverview";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import CrudJobs from "./pages/crud-jobs/CrudJobs";
import AppHeader from "./pages/AppHeader";
import AppFooter from "./pages/AppFooter";
const App = () => {
  return (
    <div>
      <AppHeader />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="jobs" element={<CrudJobs />}></Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/job-role-overview" element={<JobRoleOverview />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
