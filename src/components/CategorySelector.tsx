
import { Laptop, Smartphone, Camera, Gamepad, Headphones, Watch } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Phones",
    icon: Smartphone,
    link: "/category/phones",
  },
  {
    id: 2,
    name: "Computers",
    icon: Laptop,
    link: "/category/computers",
  },
  {
    id: 3,
    name: "Cameras",
    icon: Camera,
    link: "/category/cameras",
  },
  {
    id: 4,
    name: "Gaming",
    icon: Gamepad,
    link: "/category/gaming",
  },
  {
    id: 5,
    name: "Headphones",
    icon: Headphones,
    link: "/category/headphones",
  },
  {
    id: 6,
    name: "Watches",
    icon: Watch,
    link: "/category/watches",
  },
];

const CategorySelector = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="w-5 h-10 bg-brand-red mr-2"></div>
          <h2 className="text-xl font-semibold">Categories</h2>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-md hover:border-brand-red transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <category.icon className="w-8 h-8" />
              </div>
              <span className="text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
