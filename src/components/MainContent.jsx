import React from "react";
import { useTheme } from "./ThemeContext";
import Button from "../tools/Button";
import landing from "../assets/landing.svg";
import "../assets/styles/maincontent.css";

const MainContent = () => {
  const { isDarkTheme, currentTheme } = useTheme();

  const textStyle = {
    color: currentTheme.color,
  };

  return (
    <div
      className="container-fluid text-center"
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
      }}
    >
      <div className="row ms-md-4 ms">
        <div className="col-md-6 col-12 order-2 order-md-1">
          <div className="container">
            <div className="row pt-3">
              <div className="col text-start">
                <div className="container">
                  <div className="row pt-4">
                    <div
                      className="col codes codes-2"
                      style={{ color: currentTheme.color }}
                    >
                      ✦Plan.Book.Celebrate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-2 codes codes-size ms-1">
              <div className="col text-start">
                <div className="fw-bold mt-3" style={textStyle}>
                  The Perfect Setting{" "}
                  <span style={{ color: "#0288D1" }}>Awaits</span> You!
                </div>
              </div>
            </div>

            <div className="row pt-3 ms-1">
              <div className="col">
                <div className="text text-start" style={textStyle}>
                  Celebrate your special moments in the perfect setting. Explore
                  exquisite Mahals designed for every occasion. Book
                  effortlessly and create memories that last a lifetime!
                </div>
              </div>
            </div>

            <div className="row mt-3 ms-1">
              <div className="col d-flex justify-content-start align-items-center gap-2">
                <Button
                  context={"Get Started"}
                  haveIcon={"bi bi-arrow-right"}
                  theme={isDarkTheme ? "dark" : "light"}
                />
                <div className="ps-3">
                  <Button
                    context={"View Bookings"}
                    haveIcon={"bi bi-arrow-right"}
                    theme={isDarkTheme ? "light" : "dark"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 order-1 order-md-2">
          <img src={landing} className="landing-img" alt="landing" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
