// components/ProductCard.jsx
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {product.name}
          </h3>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              product.availability === "In Stock"
                ? "bg-green-100 text-green-800"
                : product.availability === "Limited Stock"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {product.availability}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-green-700">
            {product.price}
          </span>
          <a
            href="https://wa.me/2348182443958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="mr-2 h-4 w-4 " />
           <p className="text-sm md:text-xl">Order Now</p> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
