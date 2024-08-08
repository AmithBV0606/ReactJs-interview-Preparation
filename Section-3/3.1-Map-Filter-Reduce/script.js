const products = [
    {id: 1, name: "Product A", price: 20, category: "Electronics"},
    {id: 2, name: "Product B", price: 30, category: "Clothing"},
    {id: 3, name: "Product C", price: 15, category: "Electronics"},
    {id: 4, name: "Product D", price: 25, category: "Clothing"},
    {id: 5, name: "Product E", price: 50, category: "Electronics"},
    {id: 6, name: "Product F", price: 40, category: "Electronics"},
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

function App() {
    return(
        <div>
            <h2>Rendering lists</h2>

            <h2>Question 1: How does the map function work in React for rendering lists? Can you provide an example?</h2>
            
            <ul>
                {products.map((product, index) => {
                    return (
                        <li key={product.id}>
                            <strong>{product.name}</strong> - ${product.price} - Category: {product.category}
                        </li>
                    );
                })}
            </ul>

            <h2>Question 2: How can you filter products with a specific category?</h2>

            <ul>
                {products.filter((product) => product.category === "Electronics" ).map((product) => {
                    return(
                        <li key={product.id}>
                            <strong>{product.name}</strong> - ${product.price} - Category: {product.category}
                        </li>
                    );
                })}
            </ul>

            <h2>Question 3: How can you Render a summary of total prices for products?</h2>

            <h4>
                Total Price : ${products.reduce((acc, product) => {
                    return acc + product.price;
                }, 0)}
            </h4>

            <h2>Question 4: Add discountedPrice key with 10% discount to all theproducts with price more than $20 and render it.</h2>

            <ul>
                {products.filter(product => product.price > 20).map((product) => {
                    return(
                        <li key={product.id}>
                            <strong>{product.name}</strong> - ${product.price - (10 / 100) * product.price} - Category: {product.category}
                        </li>
                    );
                })}
            </ul>

            <p>Alternative Approach</p>

            <ul>
                {products.filter((product) => product.price > 20)
                .map((product) => {
                    return {
                        ...product,
                        discountedPrice: product.price * (10/100),
                    }
                })
                .map((product) => {
                    return(
                        <li key={product.id}>
                            <strong>{product.name}</strong> = ${product.discountedPrice} Discounted From ${product.price}
                        </li>
                    );
                })
                }
            </ul>

            <h2>Question 5: How can you filter and render unique elements from an arrayusing filter in React?</h2>

            {names
            .filter((name, index) => {
               return names.indexOf(name) === index;
            })
            .map((name) => {
                return (
                    <li>{name}</li>
                );
            })
            }
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);