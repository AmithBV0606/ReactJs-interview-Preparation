function Counter() {
    // Changes in state triggers the UI update.
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    // return React.createElement(
    //     "div", 
    //     null, 
    //     React.createElement("p", null, `count : ${count}`),
    //     React.createElement("button", {onClick: increment}, `Increment`)
    // );

    // This is what happens under the hood in jsx.

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {increment}>Increment</button>
        </div>
    );
    // This won't work without babel(transpiler)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));

// _____________________________________________________________________________________

// What is babel?

// Babel is a powerful and widely-used JavaScript compiler that has become an essential tool for developers.

// It allows developers to write modern JavaScript code and transpile it into a version that can run in all environments, including modern browsers and older ones.