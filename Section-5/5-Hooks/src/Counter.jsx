import {useEffect, useState} from "react";
import useCustomEffect from "./polyfills/UseEffectPolyfill";

function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // useEffect(() => {
  //   console.log("Effect triggered", count);

  //   return () => {
  //       console.log("Clean Up!!")
  //   }
  // }, [count]);

  useCustomEffect(() => {
    console.log("Effect triggered", count);

    return () => {
      console.log("I'm cleaning up your mess!!")
    }
  }, [count])
  
  console.log("rerendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
        <h1>Custom useEffect</h1>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;