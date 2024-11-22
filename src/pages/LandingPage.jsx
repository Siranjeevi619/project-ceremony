import React from "react";
import { ThemeProvider } from "../components/ThemeContext"; // Import ThemeProvider
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";

const LandingPage = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
