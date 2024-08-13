import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react';

const UseEffect = () => {
  const [user, setUser] = useState({});

  const fetchUser = async() => {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    // console.log(data);
    setUser(data)
  }

  useEffect(() => {
    fetchUser()
  }, []);

  // CleanUp function example : 
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function: Clear interval before unmount or re-run
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []);

  // useLayoutEffect Hook
  useEffect(()=>{
    console.log("useEffect here");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect here");
  }, [])
  
  return (
    <div>
      <h3><u>useEffect Hook</u></h3>

      <h5>
          Question 1: What is useEffect in React?
      </h5>

      <h5>
          Question 2: Why is dependency array used in useEffect?
      </h5>

      <h5>
          Question 3: Example of useEffect for data fetching.
      </h5>
      <p>First Name : {user.first_name}</p>
      <p>Last Name : {user.last_name}</p>

      <h5>
          Question 4: Convert major lifecycle methods to useEffect and Explain.
      </h5>

      <h5>
        Question 5: How to perform cleanup in useEffect? Explain with example.
      </h5>
      {seconds}
    </div>
  )
}

export default UseEffect;