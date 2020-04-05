import React from "react";
import stylesheet from "antd/dist/antd.min.css";
import Navbar from "./Navbar";

function App({ children }) {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Navbar />
    </main>
  );
}

export default App;
