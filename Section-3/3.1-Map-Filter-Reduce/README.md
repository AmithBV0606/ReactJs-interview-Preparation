# Rendering Lists

### Question 1: How does the map function work in React for rendering lists? Can you provide an example?

    - Commonly used to iterate through an array and render components dynamically.

    - It allows you to create a new array of React elements based on the original array.

```javascript
<ul>
  {products.map((product) => {
    return (
      <li key={product.id}>
        <strong>{product.name}</strong> - ${product.price}- Category: {product.category}
      </li>
    );
  })}
</ul>
```

### Question 2: How can you filter products with a specific category?

```javascript
<ul>
    {products.filter((product) => product.category === "Electronics" ).map((product) => {
        return(
            <li>
                <strong>{product.name}</strong> - ${product.price} - Category: {product.category}
            </li>
        );
    })}
</ul>
```

### Question 3: How can you Render a summary of total prices for products?

```javascript
<h4>
    Total Price : ${products.reduce((acc, product) => {
        return acc + product.price;
    }, 0)}
</h4>
```

### Question 4: Add discountedPrice key with 10% discount to all theproducts with price more than $20 and render it.

```javascript
<ul>
    {products
        .filter((product) => product.price > 20)
        .map((product) => {
        return {
            ...product,
            discountedPrice: product.price * (10 / 100),
        };
        })
        .map((product) => {
        return (
            <li key={product.id}>
            <strong>{product.name}</strong> - ${product.discountedPrice} -
            Discounted from: {product.price}
            </li>
        );
    })}
</ul>
```

### Question 5: How can you filter and render unique elements from an arrayusing filter in React?

```javascript
const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

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
```