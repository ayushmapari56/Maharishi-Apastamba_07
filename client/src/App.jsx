import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/login" element={<Navigate to="/student/dashboard" replace />} /> {/* Temporary Redirect */}
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/login" element={<Navigate to="/company/dashboard" replace />} /> {/* Temporary Redirect */}
      </Routes>
    </Router>
  );
}

export default App;
