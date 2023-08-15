import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routing/Home";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import NavBar from "./components/NavBar";
import MentorshipRequestForm from "./components/MentorshipRequestForm";
import StudentDashboard from "./components/StudentDashboard";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/sign-in" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route
          path="/mentorship-request"
          element={<MentorshipRequestForm />}
        ></Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
