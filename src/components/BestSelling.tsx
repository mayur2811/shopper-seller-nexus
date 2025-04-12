
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard, { Product } from "./ProductCard";

// Sample best selling products
const bestSellingProducts: Product[] = [
  {
    id: 6,
    name: "The North Coat",
    price: 260,
    originalPrice: 360,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
    category: "Fashion",
    rating: 5,
    reviews: 120,
    discount: 40,
  },
  {
    id: 7,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
    category: "Fashion",
    rating: 4.8,
    reviews: 65,
    discount: 35,
  },
  {
    id: 8,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1624705475877-c64c7b0d5404?q=80&w=687&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.9,
    reviews: 65,
  },
  {
    id: 9,
    name: "Small BookShelf",
    price: 360,
    image: "https://images.unsplash.com/photo-1594620302200-9a724a7070ee?q=80&w=1548&auto=format&fit=crop",
    category: "Home",
    rating: 4.6,
    reviews: 85,
  },
];

const BestSelling = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-5 h-10 bg-brand-red mr-2"></div>
            <div>
              <h2 className="text-xl font-semibold">Best Selling Products</h2>
            </div>
          </div>

          <button className="px-6 py-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors rounded-md">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
