# useState Hook :

### Question 1: What is useState in React?

    useState is a hook in React that allows functional components to manage state by declaring state variables and providing a function to update them.

```javascript
import React from 'react';
import { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
        </div>
    );
}

export default UseState
```

### Question 2 : What is the output for the following code?
```javascript
import React from 'react';
import { useState } from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // Solution : 
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

  return (
    <div>
        <div>Count : {count}</div>
        <button onClick={handleIncrement}>
            Increment
        </button>
    </div>
  )
}

export default UseState
```

### Question 3: What is Two Way Data Binding and How can you achieve it in react?

    - It is a concept that allows the synchronization of data between the model (or state) and the view in both directions.

    - You can achieve it by combining state management with controlled components.

```javascript
// Two way data binding.
import React from 'react';
import { useState } from 'react';

const UseState = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <p>Value : {value}</p>
        </div>
    );
}

export default UseState;
```

### Question 4: Build a Form containing First name, last name and email. Use only one state to manage all fields.
```javascript
import React from 'react';
import { useState } from 'react';

const UseState = () => {
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    email:"",
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})
  }

  return (
    <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(userData)
        }}>

          <input 
            type="text" 
            placeholder='Enter First Name'
            name='firstName'
            onChange={handleInputChange}
          />

          <input 
            type="text" 
            placeholder='Enter Last Name'
            name='lastName'
            onChange={handleInputChange}
          />

          <input 
            type="email" 
            placeholder='Enter Email'
            name='email'
            onChange={handleInputChange}
          />

          <button>Submit</button>

        </form>
    </div>
  )
}

export default UseState
```