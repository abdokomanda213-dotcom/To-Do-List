import { useState } from "react";
import "./counter.css";
import Buttons from "./Buttons";
function Counter() {
  const [count, setCount] = useState(0);
  const countHandl = (action) => {
    switch (action) {
      case "increment":
        setCount(count + 1);
        break;

      case "decrement":
        setCount(count - 1);
        break;

      case "reset":
        setCount(0);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <h1 className="count-display ">{count}</h1>
      <Buttons onAction={countHandl} />
    </>
  );
}

export default Counter;
