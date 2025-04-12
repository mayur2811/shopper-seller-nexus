
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a coupon code",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Coupon applied",
      description: `Coupon "${couponCode}" has been applied to your order`,
    });
  };

  const handlePlaceOrder = () => {
    // Validation
    if (!billingDetails.firstName || !billingDetails.address || !billingDetails.city || !billingDetails.phone || !billingDetails.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Place order logic here
    toast({
      title: "Order placed successfully",
      description: "Thank you for your purchase!",
    });
  };

  // Order summary data
  const orderItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 1100,
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    },
  ];

  const subtotal = 1750;
  const shipping = "Free";
  const total = subtotal;

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-red">
            Account
          </Link>
          <span>/</span>
          <Link to="/account" className="hover:text-brand-red">
            My Account
          </Link>
          <span>/</span>
          <Link to="/product" className="hover:text-brand-red">
            Product
          </Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-brand-red">
            View Cart
          </Link>
          <span>/</span>
          <span className="text-black">CheckOut</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Billing Details</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Billing Form */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={billingDetails.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={billingDetails.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="address" className="block mb-2">
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-3 border border-gray-300 rounded mb-4"
                  placeholder="House number and street name"
                  value={billingDetails.address}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Apartment, floor, etc. (optional)"
                  value={billingDetails.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="city" className="block mb-2">
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={billingDetails.city}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={billingDetails.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  className="mr-2"
                  checked={billingDetails.saveInfo}
                  onChange={handleInputChange}
                />
                <label htmlFor="saveInfo">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/* Order Items */}
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>${item.price}</span>
                </div>
              ))}

              {/* Order Total */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{shipping}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    className="mr-3"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  <label htmlFor="bank" className="flex-1">Bank</label>
                  <div className="flex space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    className="mr-3"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mt-6 space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 p-3 border border-gray-300 rounded"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    className="bg-brand-red text-white px-4 rounded hover:bg-red-600 transition-colors"
                    onClick={handleApplyCoupon}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                className="mt-6 bg-brand-red text-white w-full py-3 rounded text-center hover:bg-red-600 transition-colors"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
