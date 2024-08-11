# Different Types of Components

### Question 1 : What are Smart / Stateful / Container Components?

    - Manages state, handles business logic, and passes data down to presentational components. These were the components we were using till now.

    - A component that has props, state and business logic.

### Example : 
```javascript
function App(){
    return (
        <React.Fragment>
            <StateVsProps props={"I am a prop!!"} /> 
        </React.Fragment>
    );
};

function StateVsProps(props) {
    const [state, setState] = React.useState("Amith")
    return(
        <div>
            <p>Hello, {state}!!</p>
            <p>{props.props}</p>
        </div>
    );
};
```

### Question 2 : What are Dumb / Stateless / Presentational Components?

    - Only renders UI based on the props it receives.

    - These type of components will not have their own state, business logic or lifecycle methods.

### Example :
```javascript
// Example 1 : 
const ChildComponentFn = ({name, age}) => {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
};

// Example 2 : 
class ChildComponent extends React.Component {
    render(){
        const {name, age} = this.props;
        return (
            <div>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
            </div>
        );
    }
}
```

### Question 3 : What are Higher Order Component (HOC)?

    - Function that takes a component and returns a new enhanced component.

    - Used for code reuse, logic sharing, and adding additional functionalities to components.

    - Just like hooks, we use the key "use" before every hoook, here in components we use "with".

    - Higher Order Component's name start's with "with".

### Example : 
```javascript
// Class based component example :
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
```

```javascript
// Function based component example : 
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
```

### Question 4 : What are Pure Components?

    - Optimize the rendering performance of components by reducing unnecessary re-renders.

### Example : 
```javascript
const Counter = () => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <MemoizedComponent />
        </div>
    );
}

// PureComponent is an inbuilt method.
class MemoizedComponent extends React.PureComponent {
    render(){
        console.log("Class Component Re-rendered!")
        return(
            <div>
                Pure Class Component
            </div>
        );
    }
}
```

Note : In functional component we don't have inbuilt pure component method like class component, so we use "memo"

```javascript
const MemoizedComponentFn = React.memo(() => {
    console.log("Function Component Re-rendered!")
    return(
        <div>
            Pure Function Component
        </div>
    );
});
```

### Question 5 : What are Controlled Component?

    - Value of the input field is controlled by React through state.

```javascript
const ControlledInput = () => {
    const [value, setValue] = React.useState("");

    const handleChange = () => {
        setValue(event.target.value);
    }

    return(
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Value : {value}</p>
        </div>
    );
}
```
Note : Here in the above example, the value attribute in the input field shows that the input field is controlled by the React's state.

Entered value -> onChange() -> handleChange() -> setValue -> value -> Input's Value

### Question 6 : What are Un-Controlled Component?

    - Input field maintains its own state using the DOM. 

    - React doesn’t control the value, but it can still interact with the input using refs.

```javascript
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
```