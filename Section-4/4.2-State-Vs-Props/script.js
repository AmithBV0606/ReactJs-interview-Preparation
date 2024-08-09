function App() {
    return (
        <div>
            <h2>State Vs Props Interview Questions</h2>

            <h2> Question 1: Explain state vs props in both class and functional components</h2>
            <ParentComponent/>
            <Counter />
            <CounterFn />

            <h2>Question 2: What is children prop?</h2>
            <Card>
                <h2>This is Card-1</h2>
            </Card>

            <Card>This is Card-2</Card>
        </div>
    );
}

// Example for Question 1 : Props
// Class based Parent Component
class ParentComponent extends React.Component {
    render(){
        return (
            <div>
                <h3>Clase based Component :</h3>
                <ChildComponent name="Amith" age={24}/>

                <h3>Function based Component :</h3>
                <ChildComponentFn name="Vikram" age={24}/>
                {/* Hence, a function based component can be called from inside a class based component */}
            </div>
        );
    }
}

// Class based Children Component
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

// Function based Children Component
const ChildComponentFn = ({name, age}) => {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
};

// _____________________Class and Function based example for props ends here__________________________________

// Example for question 1 : state
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
          <button onClick={this.incrementCount}>ClassIncrement</button>
        </div>
      );
    }
}

// Function based example for state
const CounterFn = () => {
    const [count, setCount] = React.useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>FunctionIncrement</button>
      </div>
    );
};

// _____________________Class and Function based example for state ends here__________________________________

// Example for Question 2 : 
const Card = (props) => {
    // logic
    return (
      <div style={{color: "orangered"}}>
        <p>card title</p>
        {props.children}
      </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);