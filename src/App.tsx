// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
    </Routes>
  );
}

export default App;
