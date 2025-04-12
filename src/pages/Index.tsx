
import HeroBanner from "@/components/HeroBanner";
import CategorySelector from "@/components/CategorySelector";
import FlashSale from "@/components/FlashSale";
import BestSelling from "@/components/BestSelling";
import ServiceFeatures from "@/components/ServiceFeatures";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroBanner />
      <CategorySelector />
      <FlashSale />
      <BestSelling />
      <ServiceFeatures />
    </div>
  );
};

export default Index;
