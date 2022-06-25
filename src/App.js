import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios("/api/test", {}).then((res) => {
      setState(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Welcome to React Router with Spring boot!</h1>
      <div>java 서버로 부터 받은 데이터 : "{state}"</div>
      <Routes>
        <Route path="/" element="test2" />
        <Route path="/about" element="about" />
      </Routes>
    </div>
  );
}

export default App;
