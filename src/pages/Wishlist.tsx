
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/components/ProductCard";

// Sample wishlist items
const wishlistItems: (Product & { isInWishlist: boolean })[] = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.8,
    reviews: 65,
    discount: 35,
    isInWishlist: true,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 160,
    image: "https://images.unsplash.com/photo-1624705475877-c64c7b0d5404?q=80&w=687&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 65,
    isInWishlist: true,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    category: "Gaming",
    rating: 4.7,
    reviews: 65,
    isInWishlist: true,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.9,
    reviews: 65,
    isInWishlist: true,
  },
];

// Sample personalized recommendations
const recommendedItems: Product[] = [
  {
    id: 5,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 65,
    discount: 35,
  },
  {
    id: 6,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 65,
  },
  {
    id: 7,
    name: "HAVIT HV-G92 Gamepad",
    price: 550,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    category: "Gaming",
    rating: 4.8,
    reviews: 65,
  },
  {
    id: 8,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    category: "Gaming",
    rating: 4.6,
    reviews: 65,
  },
];

const Wishlist = () => {
  const [items, setItems] = useState(wishlistItems);
  const { toast } = useToast();

  const handleRemoveFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (id: number) => {
    toast({
      title: "Added to cart",
      description: "The item has been added to your cart.",
    });
  };

  const handleAddAllToCart = () => {
    toast({
      title: "All items added to cart",
      description: "All wishlist items have been added to your cart.",
    });
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Wishlist Items */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Wishlist ({items.length})</h1>
            {items.length > 0 && (
              <button
                onClick={handleAddAllToCart}
                className="px-6 py-2 bg-brand-red text-white rounded hover:bg-red-600 transition-colors"
              >
                Move All To Bag
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">
                Add items you love to your wishlist. Review them anytime and easily move them to the bag.
              </p>
              <Link
                to="/"
                className="bg-brand-red text-white px-6 py-3 rounded inline-block hover:bg-red-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={item.id} className="relative border border-gray-200 rounded-lg overflow-hidden group">
                  {/* Remove Button */}
                  <button
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                    onClick={() => handleRemoveFromWishlist(item.id)}
                  >
                    <Trash2 className="w-5 h-5 text-gray-500" />
                  </button>

                  {/* Product Image */}
                  <Link to={`/product/${item.id}`}>
                    <div className="relative pt-[100%]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Add to Cart Button */}
                  <div className="p-4">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-semibold">
                        ${item.price}
                        {item.originalPrice && (
                          <span className="text-gray-500 line-through text-sm ml-2">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Just For You Section */}
        {items.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <div className="w-5 h-10 bg-brand-red mr-2"></div>
              <h2 className="text-xl font-semibold">Just For You</h2>
              <Link to="/" className="ml-auto text-sm font-medium text-gray-500 hover:text-brand-red">
                See All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden group">
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`}>
                    <div className="relative pt-[100%]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                      {item.discount && (
                        <span className="absolute top-3 left-3 bg-brand-red text-white text-xs px-2 py-1 rounded">
                          -{item.discount}%
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-4">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">
                        ${item.price}
                        {item.originalPrice && (
                          <span className="text-gray-500 line-through text-sm ml-2">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                        <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
                      </div>
                    </div>

                    {/* Add to Cart (visible on hover) */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleAddToCart(item.id)}
                        className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
