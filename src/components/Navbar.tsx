
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-black text-white py-3 text-center text-sm relative">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold">ShopNow</span>
        </p>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <span className="mr-1">English</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto py-4 px-4 lg:px-0 flex items-center justify-between border-b">
        <Link to="/" className="text-2xl font-bold">
          Exclusive
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-brand-red transition-colors">
            Home
          </Link>
          <Link to="/contact" className="hover:text-brand-red transition-colors">
            Contact
          </Link>
          <Link to="/about" className="hover:text-brand-red transition-colors">
            About
          </Link>
          <Link to="/signup" className="hover:text-brand-red transition-colors">
            Sign Up
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 rounded-md py-2 px-4 pr-10 w-[300px] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>

          <Link to="/wishlist" className="hover:text-brand-red">
            <Heart className="w-6 h-6" />
          </Link>
          
          <Link to="/cart" className="hover:text-brand-red relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-brand-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              2
            </span>
          </Link>
          
          <Link to="/login" className="hover:text-brand-red">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
