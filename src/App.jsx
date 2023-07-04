import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
