function ClassToFunc(){
    return(
        <div>
            <h2>Question 5: Convert this Class based component to Function Based
            Component and explain it.</h2>
            <DataList />
            <DataListfn />
        </div>
    );
}

// Example for Question 5 :

// Here we have a class based component called "DataList"
class DataList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isLoading: true,
        error: null,
      };
    }
  
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          this.setState({data, isLoading: false});
        })
        .catch((error) => {
          this.setState({error: "Error fetching data", isLoading: false});
          console.error("Error fetching data:", error);
        });
    }
  
    render() {
      const {data, isLoading, error} = this.state;
  
      if (isLoading) {
        return <div>Loading...</div>;
      }
  
      if (error) {
        return <div>{error}</div>;
      }
  
      return (
        <div>
          <h3>Data List</h3>
          <ul>
            {data.splice(0, 10).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      );
    }
}

// Now we have to convert class based component called "DataList" to functional based component.
function DataListfn(){
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
            setError("Error fetching data");
            setIsLoading(false);
          console.error("Error fetching data:", error);
        });
    }, []);
  
    if (isLoading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>{error}</div>;
    }

    return (
        <div>
          <h3>Data List</h3>
          <ul>
            {data.splice(0, 6).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassToFunc />)