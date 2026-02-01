import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/login" element={<Navigate to="/student/dashboard" replace />} /> {/* Temporary Redirect */}
        <Route path="/company/login" element={<div className="text-white p-10">Company Login (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
