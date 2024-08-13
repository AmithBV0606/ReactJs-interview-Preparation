import React from 'react';
import { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    email:"",
  })

  const handleIncrement = () => {
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);

      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    // console.log(name, " : ", value);
    setUserData({...userData, [name]:value})
  }

  return (
    <div>
        <h3><u>useState Hook</u></h3>

        <h5>Question 1: What is useState in React?</h5>
        <div>Count : {count}</div>
        <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>

        <h5>Question 2 : What is the output for the following code?</h5>
        <button onClick={handleIncrement}>Increment</button>

        <h5>Question 3: What is Two Way Data Binding and How can you achieve it in react?</h5>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <p>Value : {value}</p>
        
        <h5>Question 4: Build a Form containing First name, last name and email. Use only one state to manage all fields.</h5>

        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(userData)
        }}>
          <input 
            type="text" 
            placeholder='Enter First Name'
            name='firstName'
            onChange={handleInputChange}
          /><br /><br />

          <input 
            type="text" 
            placeholder='Enter Last Name'
            name='lastName'
            onChange={handleInputChange}
          /><br /><br />

          <input 
            type="email" 
            placeholder='Enter Email'
            name='email'
            onChange={handleInputChange}
          /><br /><br />

          <button>Submit</button>
        </form>
    </div>
  )
}

export default UseState