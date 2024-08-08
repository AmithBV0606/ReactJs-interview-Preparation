const Counter2 = () => {
    const [count, setCount] = React.useState(0);
  
    const increment = () => {
      setCount(count + 2);
    };
  
    return (
      <div>
        <p>Count2: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
};

// export default Counter2; // Default Export
export {Counter2}; // Named Export Export