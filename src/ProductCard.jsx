import React from "react";

const ProductCard = () => {
  const product = {
    name: "Wireless Heaphone",
    price: 9,
    instock: true,
    features: ["Wireless Charging", "9 Hours Listening", "Bluetooth 5.0"],
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 ">
      <h2 className="text-[20px]  font-bold mb-2">{product.name}</h2>
      <p>price : $ {product.price.toFixed(2)}</p>
      <p className={product.instock ? 'text-green-500' : 'text-red-500'}>Status : {product.instock ? "In Stock" : "Not in Stock"}</p>

      <ul className="mt-4">
        {product.features.map((feature, idx) => (
          <li className="text-gray-400" key={idx}>-{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
