
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard, { Product } from "./ProductCard";

// Sample flash sale products
const flashSaleProducts: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    category: "Gaming",
    rating: 4.5,
    reviews: 88,
    discount: 25,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    category: "Gaming",
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.7,
    reviews: 99,
    discount: 30,
  },
  {
    id: 4,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1624705475877-c64c7b0d5404?q=80&w=687&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 65,
    discount: 5,
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 350,
    originalPrice: 450,
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1742&auto=format&fit=crop",
    category: "Furniture",
    rating: 4.2,
    reviews: 45,
    discount: 20,
  },
];

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({
          ...timeLeft,
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (timeLeft.days > 0) {
        setTimeLeft({
          ...timeLeft,
          days: timeLeft.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-5 h-10 bg-brand-red mr-2"></div>
            <div>
              <h2 className="text-xl font-semibold">Flash Sales</h2>
            </div>
          </div>

          {/* Timer */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="countdown-item">{timeLeft.days.toString().padStart(2, "0")}</div>
              <span>:</span>
              <div className="countdown-item">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <span>:</span>
              <div className="countdown-item">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <span>:</span>
              <div className="countdown-item">{timeLeft.seconds.toString().padStart(2, "0")}</div>
            </div>

            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
