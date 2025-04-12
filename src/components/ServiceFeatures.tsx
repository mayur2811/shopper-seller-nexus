
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const ServiceFeatures = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free & Fast Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
