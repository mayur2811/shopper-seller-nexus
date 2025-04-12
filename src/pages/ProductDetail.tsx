
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingCart, Eye, ChevronRight, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProductCard, { Product } from "@/components/ProductCard";

// Sample product
const productDetail = {
  id: 1,
  name: "Havic HV G-92 Gamepad",
  price: 192.00,
  originalPrice: 250.00,
  category: "Gaming",
  rating: 4.5,
  reviews: 150,
  inStock: true,
  colors: ["white", "red"],
  sizes: ["XS", "S", "M", "L", "XL"],
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  images: [
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1074&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628696795206-3acfa924d0d2?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop",
  ],
};

// Related products
const relatedProducts: Product[] = [
  {
    id: 2,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    category: "Gaming",
    rating: 4.8,
    reviews: 88,
    discount: 40,
  },
  {
    id: 3,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    category: "Gaming",
    rating: 4.7,
    reviews: 75,
    discount: 35,
  },
  {
    id: 4,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 99,
    discount: 30,
  },
  {
    id: 5,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1624705475877-c64c7b0d5404?q=80&w=687&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.6,
    reviews: 65,
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState(productDetail.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(productDetail.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productDetail.sizes[2]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${productDetail.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${productDetail.name} has been ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist.`,
    });
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-red">
            Account
          </Link>
          <span>/</span>
          <Link to="/gaming" className="hover:text-brand-red">
            Gaming
          </Link>
          <span>/</span>
          <span className="text-black">{productDetail.name}</span>
        </div>

        {/* Product Information */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnail Images */}
              <div className="flex md:flex-col gap-4 mt-4 md:mt-0">
                {productDetail.images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 cursor-pointer border ${
                      mainImage === image ? "border-brand-red" : "border-gray-200"
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${productDetail.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 border border-gray-200 p-4">
                <img
                  src={mainImage}
                  alt={productDetail.name}
                  className="w-full h-96 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold mb-2">{productDetail.name}</h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(productDetail.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                {productDetail.rating % 1 !== 0 && (
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({productDetail.reviews} Reviews)
              </span>
              {productDetail.inStock ? (
                <span className="ml-4 text-green-500 text-sm">In Stock</span>
              ) : (
                <span className="ml-4 text-red-500 text-sm">Out of Stock</span>
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-2xl font-semibold">${productDetail.price}</span>
              {productDetail.originalPrice && (
                <span className="ml-2 text-gray-500 line-through">
                  ${productDetail.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{productDetail.description}</p>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Colours:</h3>
              <div className="flex space-x-3">
                {productDetail.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-brand-red"
                        : "ring-1 ring-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Size:</h3>
              <div className="flex space-x-3">
                {productDetail.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 flex items-center justify-center border ${
                      selectedSize === size
                        ? "border-brand-red text-brand-red"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Quantity */}
              <div className="flex border border-gray-300 rounded">
                <button
                  className="px-4 py-2"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-4 py-2 border-l border-r border-gray-300 w-12 text-center">
                  {quantity}
                </div>
                <button
                  className="px-4 py-2"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                className="bg-brand-red text-white px-6 py-2 rounded flex items-center hover:bg-red-600 transition-colors"
                onClick={handleAddToCart}
              >
                Buy Now
              </button>

              {/* Wishlist */}
              <button
                className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                  isWishlisted ? "text-brand-red" : ""
                }`}
                onClick={handleAddToWishlist}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? "fill-brand-red" : ""}`}
                />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm text-gray-500">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">Return Delivery</h4>
                  <p className="text-sm text-gray-500">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Related Item</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
