// import Counter2 from "./Counter"; // Default Import
import { Counter2 } from "./Counter"; // Named Import

// Example for Ques 2, Ques 3, Ques 6. 
function App(){
    return (
        <React.Fragment>
            <h2>15 Most asked Interview Question</h2>

            <h3>Components</h3>

            <ul>
                <li>Reusable building block for the UI</li>
                <li>It can be a class or function that returns JSX</li>
            </ul>  

            <StateVsProps props={"I am a prop!!"} /> 

            <GrandparentComponent />     

            <Counter />    

            <CounterNew />   

            <Greeting name="Amith" />

            <Counter2 />
        </React.Fragment>
    );
};

// Example for Ques 4
function StateVsProps(props) {
    const [state, setState] = React.useState("Amith")
    return(
        <div>
            <p>Hello, {state}!!</p>
            <p>{props.props}</p>
        </div>
    );
};

// Example for Ques 5 : Prop drilling 
// Sending data from GrandParentComponent to the GrandChildComponent
// GrandparentComponent
const GrandparentComponent = () => {
    const data = "Hello from Grandparent";
    return <ParentComponent data={data} />;
};

// ParentComponent
const ParentComponent = ({data}) => {
    return <ChildComponent data={data} />;
};

// ChildComponent
const ChildComponent = ({data}) => {
    return <GrandchildComponent data={data} />;
};

// GrandchildComponent
const GrandchildComponent = ({data}) => {
    return <p>{data}</p>;
};

// Example for Ques 7 :
const Counter = () => {
    const [count, setCount] = React.useState(0);
    // Initializing state with count and setCount function\

    // let count = 0; // How are they different from normal variables?
  
    const increment = () => {
        // count = count + 1;
        // console.log(count);
      setCount(count + 1);
      // Updating the state using setCount function
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
};

// Example for Ques 8 : 
class CounterNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <DisplayCount countProp={this.state.count} />
                <button onClick={()=>this.incrementCount()}>Increment</button>
            </div>
        );
    }
}

// Example for Ques 9 :
const Greeting = (props) => {
    return <h1>Hello, {props.name}! How are you?</h1>;
};

// Example for Ques 10 :
StateVsProps.propTypes = {
    props: PropTypes.string,
}

// Example for Ques 11 : 
class DisplayCount extends React.Component {
    render(){
        return <h2>NewCount: {this.props.countProp}</h2>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);