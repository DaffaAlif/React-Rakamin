import React from "react";

const Card = ({ children, title, variant = "default" }) => {
  const cardStyles = {
    default: "bg-white shadow-mg rounded-lg p-4",
    featured: "bg-blue-50 shadow-lg p-4 border-2 border-blue-200",
    compact: "bg-white shadow-sm rounded p-2",
  };
  return (
    <div className={cardStyles[variant]}>
      {title && <h2 className="text-xl font-bold mb-3">{title}</h2>}
      {children}
    </div>
  );
};

const Product = ({
  name,
  price,
  description,
  inStock,
  discountPercentage = 0,
  onAddToCart,
}) => {
  const discountedPrice = price * (1 - discountPercentage / 100);

  return (
    <Card variant={discountedPrice > 0 ? "featured" : "default"} title={name}>
      <div className="space-y-2">
        {discountPercentage > 0 && (
          <div className="text-green-600 font-bold">
            {discountPercentage}% OFF
          </div>
        )}

        <div className="flex items-center gap-2">
          {discountPercentage > 0 ? (
            <>
              <span className="line-through text-gray-300">${price}</span>
              <span className="line-through text-gray-300">
                ${discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-bold">${price}</span>
          )}
        </div>

        <p className="text-gray-600">{description}</p>

        <button
          onClick={onAddToCart}
          disabled={!inStock}
          className={`px-4 py-2 rounded ${
            inStock
              ? "bg-blue-500 text-white hover:bg-blue-400"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {inStock ? "Add to cart" : "Out of Stock"}
        </button>
      </div>
    </Card>
  );
};

const ProductList = () => {
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <div className="space-y-4">
      <Product
        name="Wireless Headphones"
        price={99.99}
        description={"High Quality wireless Headphones with noise cancelation"}
        inStock={true}
        discountPercentage={15}
        onAddToCart={() => handleAddToCart("Wireless Headphones")}
      />

      <Product
        name="Smart Watch"
        price={99.99}
        description={"High Quality wireless Headphones with noise cancelation"}
        inStock={true}
        discountPercentage={15}
        onAddToCart={() => handleAddToCart("Smart Watch")}
      />

      <Card variant="compact"><p className="text-sm text-gray-400">Free shipping orders over $50</p></Card>
    </div>
  );
};

export default ProductList;
