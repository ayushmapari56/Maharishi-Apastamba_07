import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/student/login" element={<div className="text-white p-10">Student Login (Coming Soon)</div>} />
        <Route path="/company/login" element={<div className="text-white p-10">Company Login (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
