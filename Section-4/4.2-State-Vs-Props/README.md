# State Vs Props

###  Question 1 : Explain state vs props in both class and functional components.

### Props :
    - Read-only data passed from a parent component to a child component.

    - Immutable and are used to communicate between components.

```javascript
// Class based component example for props.
class ParentComponent extends React.Component {
    render(){
        return (
            <div>
                <h3>Clase based Component :</h3>
                <ChildComponent name="Amith" age={24}/>
            </div>
        );
    }
}

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

```javascript
// Function based component example for props
function ParentComponent(){
    return (
        <div>
            <h3>Clase based Component :</h3>
            <ChildComponent name="Vikram" age={24}/>
        </div>
    );
}

function ChildComponent({name, age}){
    return(
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </div>
    );
}
```

### State : 
    - Mutable and represents the internal state of a component.

    - Managed and controlled within the component itself.

```javascript
// Class based component example for state
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    incrementCount = () => {
      this.setState({count: this.state.count + 1});
    };
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
}
```

```javascript
// Function based example for state
const CounterFn = () => {
    const [count, setCount] = React.useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
};
```

### Difference betwee Props and State 
- Props are immutable and data is passed to child component from parent component.

- State is mutable and represents the internal state of a component. 

- In class components, `this.props` and `this.state` are used to access props and state respectively. 

- In functional components, props are passed as an argument to the component function, and state is managed using hooks like `useState`.

### Question 2: What is children prop?

```javascript
function App() {
    return (
        <div>
            <Card>
                <h2>This is Card-1</h2> 
                // This is a child prop
            </Card>

            <Card>This is Card-2</Card>
        </div>
    );
}

const Card = (props) => {
    // logic
    return (
      <div style={{color: "orangered"}}>
        <p>card title</p>
        {props.children}
      </div>
    );
};
```