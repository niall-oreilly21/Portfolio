import React from 'react';
import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ProjectsPage from "./Components/Pages/ProjectsPage";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer";

function App() {
  return (
      <Router>
          <NavBar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/skills" element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add more routes as needed */}
        </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
