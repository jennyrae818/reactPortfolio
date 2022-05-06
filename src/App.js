import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header";
import Aboutme from "./components/aboutMe";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
