# 15 Most Asked Interview Questions

### Ques 1: What is React and why is it used?

    - React is a popular JavaScript library used for building user interfaces (UIs) for 
    web applications.

    - It's known for its efficiency, flexibility, and reusability in creating interactive 
    UI components.

    - React allows developers to build complex UIs by breaking them down into smaller,
    reusable pieces called Components.

    - These components can manage their own state, making it easier to build 
    and maintain large-scale applications.

 ### Ques 2: What is JSX, and why is it used?
  
    - JSX -> JavaScript XML. 

    - Allows you to write HTML-like code within JavaScript.

    - JSX is used in React to define the structure of components. 
 
### Ques 3: What is a React component?

    - Components are independent and reusable bits of code which return JSX. 
    
    - They serve the same purpose as JavaScript functions, but work in isolation.

    - Components come in two types, Class components and Function components.

### Ques 4: What is the difference between state and props?

```
State : State is used for storing the data that will be controlled and manipulated by the component itself. States inside a component exclusively belongs to that component.
```
```
Props : Short for Properties, is something that a component receives from it's parent Component. Used to pass data from parent component to child component.
```
#### Key Differences : 
    - Mutability(Changable): State is mutable and managed within the component itself, 
    while props are immutable and passed from parent to child components.

    - Ownership: Components own and manage their own state, while props are owned 
    and managed by the parent component.

    - Usage: State is used for internal component data that might change over time, 
    while props are used to pass data from parent to child components. 

### Ques 5: What is prop drilling?
    
    Process of passing down props through multiple levels of nested components.

### Ques 6: What is a React fragment, and why is it used?

    React fragment is a way to group multiple elements without adding an extra HTML 
    element to the DOM. (<></>)

```javascript
<>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</>

OR

<React.Fragment>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</React.Fragment>

```
### Ques 7: How do you define and use state in a React Functional component? How are they different from normal variables?
    
    - In React functional components, state is defined and managed using the useState hook. 
    
    - The useState hook is a function that allows you to add state to functional components.

```javascript
import React, { useState } from 'react';

const Counter = () => {
  // Initialize state with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Update the state by calling setCount */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
```

### Ques 8: How do you define and use state in a React class component?

```javascript
class CounterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
    };
}

incrementCount() {
    this.setState({count: this.state.count + 1});
}

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>
            Increment
        </button>
      </div>
    );
  }
}
```

### Ques 9: How do you pass props to a functional component?</h5>

```javascript
import React from 'react';

// Functional component that receives props
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Another functional component where Greeting is used
const App = () => {
  return (
    <div>
      <Greeting name="Amith" />
    </div>
  );
};

export default App;
```

### Ques 10: What are PropTypes?

    PropType defines the type of prop a function is expecting to receive from it's parent component. PropType is a library.

```javascript
StatevsProps.propTypes = {
    propExample: PropTypes.string,
}; 
```

### Ques 11: How do you use props in a class component?

```javascript
class CounterNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <DisplayCount countProp={this.state.count} />
        <button onClick={() => this.incrementCount()}>
            Increment
        </button>
      </div>
    );
  }
}

// Sending prop in class component
class DisplayCount extends React.Component {
  render() {
    return <p>Count: {this.props.countProp}</p>;
  }
}
```

### Ques 12: In how many ways can we export/import things from a JS Module?
 
    Default Export/Import: 

    - Use it when you want to export something by default. 

    - Multiple Default exports are not allowed from the same module.

    - We can refer to the default exported thing by any name, so the name is not significant.

    Default Export eg - export default Counter
    Default Import eg - import Counter from './counter';
<br />

    Named Export/Import:

    - Use it when you have multiple things to be exported from a JS Module.

    - Named exports must be referred to by the Exact Same Name while importing them.

    Named Export eg - export {Counter};
    Named Import eg - import {Counter} from './counter';

### Ques 13: What is Virtual DOM?

    - A logical representation of the
    actual DOM in the form of React Elements. 

    - A programming concept where a virtual representation of the UI is kept in the memory. 

    - It is an object that has React Elements to represent the UI. 

### Ques 14: Reconciliation vs Rendering?

    - Reconciliation: The process of computing the difference between the 2 Virtual DOM's. 

    - Rendering: The actual updation of the information in the rendering environment.

### Ques 15: What is the Diff Algorithm?

    - Whenever the state or props get updated, an updated VDOM tree is generated.

    - Diff Algorithm calculates the difference between the 2 VDOMs (the previous VDOM and the updated VDOM). 

    - After calculating this diff only the actual DOM is updated. This makes React capable of doing fast DOM manipulations. 