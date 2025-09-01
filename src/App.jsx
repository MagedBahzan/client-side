import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./componants/layout/Layout";
import CoursesPage from "./CoursesPage";
import AllNews from "./AllNews";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="courses">
              <Route index element={<CoursesPage />} />
              <Route path=":id" element={<AllNews />} />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="Skillbridge-login" element={<LoginPage />} />
            <Route path="Skillbridge-Sign-Up" element={<SignUpPage />} />
            <Route path="/Terms-of-Use" element={<h1>Terms of Use Page</h1>} />
            <Route
              path="/Privacy-Policy"
              element={<h1>Privacy Policy Page</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
