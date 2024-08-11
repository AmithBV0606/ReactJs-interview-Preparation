function App() {
    return(
        <div>
            <h2>Types of components</h2>

            <h2>Question 1: What are Smart / Stateful / Container Components?</h2>

            <h2>Question 2: What are Dumb / Stateless / Presentational Components?</h2>

            <h2>Question 3: What are Higher Order Component (HOC)?</h2>
            <FeatureWithAuth /> <br />
            <FeatureWithAuthFn />

            <h2>Question 4 : What is Pure Component?</h2>
            <Counter />

            <h2>Question 5: What are Controlled Component?</h2>
            <ControlledInput />

            <h2>Question 6 : What are Un-Controlled Component?</h2>
            <UnControlledComponent />
        </div>
    );
}

// Example for Question 3 : Higher Order Component using Class.
const withLogin = (WrappedComponent) => {
    return class extends React.Component {
        login(){
            // Login logic
            console.log("Login Successful")
        }

        logout(){
            // Logout logic
            console.log("Logout Successful")
        }

        render(){
            return <WrappedComponent login={this.login} logout={this.logout} />
        }
    }
}

class FeatureComponent extends React.Component {
    render(){
        return(
            <div>
                <button onClick={() => this.props.login()}>LogIn</button>
                <button onClick={() => this.props.logout()}>LogOut</button>
            </div>
        );
    }
}

const FeatureWithAuth = withLogin(FeatureComponent);

// ________________________________________________________

// Example for Question 3 : Higher Order Component using Function.

const withLoginFn = (WrappedComponent) => {
    return () => {
        function login(){
            // Login logic
            console.log("Login Successful")
        }

        function logout(){
            // Logout logic
            console.log("Logout Successful")
        }

        return <WrappedComponent login={login} logout={logout} />
    }
}

const FeatureComponentFn = (props) => {
    return(
        <div>
            <button onClick={() => props.login()}>LogIn</button>
            <button onClick={() => props.logout()}>LogOut</button>
        </div>
    );
}

const FeatureWithAuthFn = withLoginFn(FeatureComponentFn);

// ___________________________________________________

// Example for question 4 : Using class based component

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={incrementCount}>Increment</button>
            {/* <MemoizedComponentClass /> */}
            <MemoizedComponentFn />
        </div>
    );
}

class MemoizedComponentClass extends React.PureComponent {
    render(){
        console.log("Class Component Re-rendered!")
        return(
            <div>
                Pure Class Component
            </div>
        );
    }
}

// Example for question 4 : Using function based component
const MemoizedComponentFn = React.memo(() => {
    console.log("Function Component Re-rendered!")
    return(
        <div>
            Pure Function Component
        </div>
    );
});

// _____________________________________________________

// Example for Question 5: Contolled Component

const ControlledInput = () => {
    const [value, setValue] = React.useState("");

    const handleChange = () => {
        setValue(event.target.value);
    }

    return(
        <div>
            {/* Here the value attribute in the input field shows that this input field is controlled by the React's state. */}
            <input type="text" value={value} onChange={handleChange} />
            <p>Value : {value}</p>
        </div>
    );
}

// _________________________________________________

// Example for Question 6 : Uncontrolled Component

const UnControlledComponent = () => {
    const InputRef = React.useRef(null);

    function handleClick() {
        console.log(InputRef?.current?.value);
    }

    return(
        <div>
            <input type="text" ref={InputRef}/>
            <button onClick={handleClick}>Get Value</button>
        </div>
    );
}
// useRef hook is used to access the DOM elements

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);