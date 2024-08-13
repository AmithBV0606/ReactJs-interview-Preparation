# useEffect Hook : 

### Question 1 : What is useEffect in React?
    - useEffect is a hook used in functional components to perform side effects after rendering, such as data fetching, subscriptions, or manual DOM manipulation.

#### Syntax : 
```javascript
useEffect( () => {
    // Side effect code goes here


    return () => {
        // Clean-up function(Optional) 
        // Runs when the component is unmounted

    }
}, [
    // Dependencies.
])
```

### Question 2 : Why is dependency array used in useEffect ?
    - When the dependency array is empty, useEffect runs only once.

    - When the values inside these dependency array changes, the useEffect re-run's.

    - If the dependency array is removed, the useEffect runs after every render.
<br />

    NOTE : Handling dependencies ensures that the effect runs only when necessary and prevents unnecessary re-execution of the effect, optimizing performance and avoiding potential bugs.

### Question 3 : Example of useEffect for data fetching ?
```javascript
import React from 'react'
import { useState, useEffect } from 'react';

const UseEffect = () => {
    const [user, setUser] = useState({});

    const fetchUser = async() => {
        const response = await fetch("https://random-data-api.com/api/v2/users");
        const data = await response.json();
        setUser(data)
    }

    useEffect(() => {
      fetchUser()
    }, [])
    
  return (
    <div>
        <p>First Name : {user.first_name}</p>
        <p>Last Name : {user.last_name}</p>
    </div>
  )
}

export default UseEffect;
```

### Question 4 : Convert major lifecycle methods to useEffect and Explain ?
- Explained in the previous chapter. [Click Here](../../Section-4/4.1-Class-Vs-Functional-Component/ClassToFunc.js)

### Question 5: How to perform cleanup in useEffect? Explain with example ?
    - You can return a cleanup function inside useEffect, which runs before the effect re-runs or when the component unmounts. 
    
    - This is useful for cleaning up subscriptions or event listeners.

```javascript
import React from 'react'
import { useState, useEffect } from 'react';

const UseEffect = () => {
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
  
  return (
    <div>
      {seconds}
    </div>
  )
}

export default UseEffect;
```

### Question 6: Explain useLayoutEffect and how it is different from useEffect ?
useEffect:

    - Asynchronous: Runs after the render cycle is committed to the screen.

    - Good for Performance: Does not block the browser from painting changes on the screen.

useLayoutEffect:

    - Synchronous: Runs synchronously immediately after the DOM is updated but before the browser paints anything on the screen.

    - Potentially Blocking: Can potentially cause delays in the rendering process if the operations are heavy.

```javascript
import React from 'react'
import { useEffect, useLayoutEffect } from 'react';

const UseEffect = () => {
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
    </div>
  )
}

export default UseEffect;
```