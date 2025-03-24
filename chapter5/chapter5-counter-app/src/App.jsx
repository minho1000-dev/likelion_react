import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import CounterValue from "./components/CounterValue";
import CounterController from "./components/CounterController";
import CounterHistories from "./components/CounterHistories";

function App() {
  const [count, setCount] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleChange = (value) => {
    setCount(count + value);
    setHistories([...histories, value]);
  };

  return (
    <div className="appContainer">
      <Header />
      <CounterValue count={count} />
      <CounterController onChange={handleChange} />
      <CounterHistories histories={histories} />
    </div>
  );
}

export default App;
