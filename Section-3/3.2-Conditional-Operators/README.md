# Conditional Operator

### Question 1 : Difference between (&&) and (||)?

    Logical AND(&&) : Returns true only when both the operands are true.<br />

```javascript
function App() {
    return(
        <div>
            <h2>Conditional Operators</h2>     

            <LogicalAND />
        </div>
    );
}

function LogicalAND() {
    let x = 5;
    let y = 10;

    if (x > 0 && y > 0) {
        return <span>Both are greater than 0</span>;
    } else {
        return <></>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

    Logical OR(||) : Returns true when either of the operands are true.<br />

```javascript
function App() {
    return(
        <div>
            <h2>Conditional Operators</h2>     

            <LogicalOR />
        </div>
    );
}

function LogicalOR() {
    let isRaining = false;
    let isSunny = true;

    if(isRaining || isSunny){
        return <span>It's either raining or Sunny (or both)</span>
    } else <></>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Question 2 : Difference between ?(Optional Chain) vs ??(Nullish Coalescing) ?

```javascript
// Example for Optional Chaining : 
const OptionalChaining = () => {
    let user = {
      name: "John",
      address: {
        city: "New York!",
      },
    };
  
    // return user && user.address && <p>{user.address.city}</p>; // old method

    return <p>{user?.address?.city}</p>;
};
```

```javascript
// Example for Nullish Coalescing : 
const NullishCoalescing = () => {
    let userInput = null;
    let defaultValue = "Hello, default value!";
  
    return <p>{userInput ?? defaultValue}</p>;
};

```