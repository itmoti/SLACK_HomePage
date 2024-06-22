import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./LandingPage/Navbar/Navbar";
import Courses from "./LandingPage/Courses/Courses";
import ProfessionalTeachers from "./LandingPage/ProfessionTeachers/ProfessionalTeachers";
import Footer from "./LandingPage/Footer/Footer";
import Knowledge from "./LandingPage/Knowledge/Knowledge";
import Destination from "./LandingPage/Destination/Destination";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Knowledge></Knowledge>
      <Destination></Destination>
      <Courses></Courses>
      <ProfessionalTeachers></ProfessionalTeachers>
      <Footer></Footer>
    </div>
  );
}

export default App;
