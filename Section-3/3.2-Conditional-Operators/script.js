function App() {
    return(
        <div>
            <h2>Conditional Operators</h2>     

            <h2>Question 1 : Difference between (&&) and (||)?</h2>
            <LogicalAND /> <br/>
            <LogicalOR />

            <h2>Question 2 : Difference between ?(Optional Chain) vs ??(Nullish Coalescing) ?
            </h2>
            <OptionalChaining />
            <NullishCoalescing />
        </div>
    );
}

// Question 1 Example : 
function LogicalAND() {
    let x = 5;
    let y = 10;

    if (x > 0 && y > 0) {
        return <span>Both are greater than 0</span>;
    } else {
        return <></>;
    }
}
function LogicalOR() {
    let isRaining = false;
    let isSunny = true;

    if(isRaining || isSunny){ // if the first check turns out to be true, then the other condition will not be checked when OR operator is used
        return <span>It's either raining or Sunny (or both)</span>
    } else <></>
}

// Question 2 Example : 
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
const NullishCoalescing = () => {
    let userInput = null;
    let defaultValue = "Hello, default value!";
  
    return <p>{userInput ?? defaultValue}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);