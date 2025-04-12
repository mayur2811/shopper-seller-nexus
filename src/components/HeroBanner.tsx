
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const slides: BannerSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Up to 10% off Voucher",
    subtitle: "Latest tech gadgets for your productivity",
    cta: "Shop Now",
    link: "/products/category/electronics"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "New Arrivals",
    subtitle: "Explore our newest collection of products",
    cta: "Discover",
    link: "/products/new-arrivals"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    title: "Flash Sale",
    subtitle: "Limited time offers on top products",
    cta: "Shop Now",
    link: "/products/flash-sale"
  }
];

const HeroBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Banner Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white mb-6">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-block bg-brand-red text-white py-3 px-6 rounded-md font-medium hover:bg-red-600 transition-colors"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? "bg-brand-red" : "bg-white/50"
            }`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
