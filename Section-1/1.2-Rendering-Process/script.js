// React is declarative in nature and not Imperative, that means it doesn’t allow you to interact directly with dom. 

// It uses something called virtual DOM to do this process.

// Slides : https://app.eraser.io/workspace/zz6uyMHtBfPf9rzyzplH

// React Rendering Process is divided into two parts.

// 1) Rendering Phase : 

// Types of Render : 
// a) Initial Render => When the component is loaded for the very first time.
// b) Re-render => When the state updates, it updates our component

// Note : Re-rendering is only triggered by state changes.

function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount(prevVal => prevVal + 1);
        setCount(prevVal => prevVal + 1);
        setCount(prevVal => prevVal + 1);
        setCount(prevVal => prevVal + 1);
        setCount(prevVal => prevVal + 1);

        // Since setCount method is asynchronous, after setCount runs for 5 times, the initial state of setCount will be 0, so all 5 times setCount results (in 0 + 1)
    };
// _______________________________________________________________________________________
// To View Virtual DOM in the form of Object
    // const counter = React.createElement(
    //     "div", 
    //     null, 
    //     React.createElement("p", null, `count : ${count}`),
    //     React.createElement("button", {onClick: increment}, `Increment`)
    // );
    // console.log('Count Rendered!', counter);
    // return counter;
// _______________________________________________________________________________________
    
    console.log('Count Rendered!');

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {increment}>Increment</button>
        </div>
    );
}

const CounterParent = () => {
    const [showMessage, setShowMessage] = React.useState(false);
    const [showMessage2, setShowMessage2] = React.useState(false);

    console.log("Parent Rendered!");

    const toggleMsg = () => {
        setShowMessage(!showMessage);
        setShowMessage2(!showMessage2);
    }
    
    return (
        <div>
            <h1>Counter</h1>
            <Counter />
            <br />
            {showMessage && <b>Now You Can See Me! </b>}
            {showMessage2 && <b>Now You Can See Me! Againnnnnnnnnn! </b>}
            <button onClick = {toggleMsg}>Show Message</button>
            <br />
            <Frameworks />
        </div>
    );
}

const Frameworks = () => {
    const [frameworks, setFrameworks] = React.useState(["React", "Angular"]);
    
    return (
        <div>
            <h3>Popular Frameworks</h3>
            <div>
                {frameworks.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
            <button onClick={()=>setFrameworks([...frameworks, "Vue"])}>Add New</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(React.createElement(Counter));
root.render(React.createElement(CounterParent));

// ___________________________________________________________________________________________

// 2) Commit Phase