import React from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app">
      <input type="checkbox" id="check" />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
