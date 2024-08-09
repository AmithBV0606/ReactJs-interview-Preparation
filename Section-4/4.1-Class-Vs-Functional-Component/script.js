function App(){
    return(
        <div>
            <h2>Class-ic React vs Functional React Components</h2>

            <h2>Question 1 : Explain Class Based Components in React.</h2>
            <Counter />

            <h2>Question 2 : Explain constructor and super keywords here</h2>

            <h2>Question 3 : Explain Component Lifecycle Methods by adding them to this counter app</h2>

            <h2> Question 4: Explain Function Based Component and what are hooks? Explain
            any 2.</h2>
            <PhotoGallery />

            <h2>Question 5: Convert this Class based component to Function Based
            Component and explain it.</h2>
        </div>
    );
}

// Example for Question 1 : 
class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = { // State creation
            count:0,
            count1:0
        };
    }

    Increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    Increment1 = () => {
        this.setState({ count1: this.state.count1 + 1 });
    }

    // Example for Question 3 : 
    componentDidMount(){ // Mounting means when the component is initialized for the very first time.
        console.log("Component Mounted")
    }

    // Example for Question 3 :
    // Used to detect changes in state and props
    // Similar like useEffect
    componentDidUpdate(prevProps, prevState){
        if (prevState.count != this.state.count) {
            console.log(prevState.count)
            console.log(this.state.count)
            console.log("Component Updated");
        }
    }

     // Unmounting
    componentWillUnmount(){
        console.log("Component Unmounted")
    }

    render(){
        return(
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.Increment}>Add</button>
                <p>Count : {this.state.count1}</p>
                <button onClick={this.Increment1}>Add Count1</button>
            </div>
        );
    }
}

// Example for Question 4 :
const PhotoGallery = () => {
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => setPhotos(data))
        .catch((err) => console.error(err));
    }, [])
    
    return (
        <div>
            <h1>Photo Gallery</h1>
            <div>
                {photos.slice(0, 25).map((photo) => {
                    return <img key={photo.id} src={photo.thumbnailUrl}/>
                })}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)