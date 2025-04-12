
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 3,
    name: "LCD Monitor",
    price: 650,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=1470&auto=format&fit=crop",
    quantity: 1,
  },
  {
    id: 1,
    name: "Hi Gamepad",
    price: 550,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=987&auto=format&fit=crop",
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const { toast } = useToast();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
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
      description: `Coupon "${couponCode}" has been applied to your cart`,
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const shipping = "Free";
  const total = subtotal;

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-red">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">Cart</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/"
              className="bg-brand-red text-white px-6 py-3 rounded-md inline-block hover:bg-red-600 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="border-b pb-4 mb-6 grid grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <h3 className="font-semibold">Product</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Price</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Quantity</h3>
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold">Subtotal</h3>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 gap-4 items-center py-4 border-b"
                  >
                    <div className="col-span-2 flex items-center space-x-4">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-brand-red"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-center">${item.price}</div>
                    <div className="flex justify-center">
                      <div className="flex border border-gray-300 rounded w-28">
                        <button
                          className="px-3 py-1 border-r"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-10 text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="px-3 py-1 border-l"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                ))}

                <div className="flex justify-between mt-6">
                  <Link
                    to="/"
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Return To Shop
                  </Link>
                  <button
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                    onClick={() => {
                      toast({
                        title: "Cart updated",
                        description: "Your cart has been updated",
                      });
                    }}
                  >
                    Update Cart
                  </button>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-300 rounded px-4 py-2 flex-grow"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  className="bg-brand-red text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
                  onClick={handleApplyCoupon}
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Cart Total</h3>

                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-4">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${subtotal}</span>
                  </div>
                  <div className="flex justify-between border-b pb-4">
                    <span>Shipping:</span>
                    <span>{shipping}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Total:</span>
                    <span className="font-semibold">${total}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="mt-6 bg-brand-red text-white w-full py-3 rounded text-center block hover:bg-red-600 transition-colors"
                >
                  Process to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
