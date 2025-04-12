
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick view functionality
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="p-4">
        <div className="relative pt-[100%]">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />

          {/* Discount Badge */}
          {product.discount && (
            <span className="badge badge-sale">-{product.discount}%</span>
          )}

          {/* New Badge */}
          {product.isNew && <span className="badge badge-new">NEW</span>}

          {/* Quick Actions */}
          <div className="quick-actions">
            <button
              onClick={handleAddToWishlist}
              className="quick-action-btn text-brand-red"
            >
              <Heart
                className={`w-5 h-5 ${isWishlisted ? "fill-brand-red" : ""}`}
              />
            </button>
            <button
              onClick={handleQuickView}
              className="quick-action-btn"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add To Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <h3 className="font-medium text-base mb-1">{product.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-brand-red font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
