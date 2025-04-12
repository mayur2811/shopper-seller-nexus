
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically call your auth service
    toast({
      title: "Login successful",
      description: "Welcome back to Exclusive!",
    });

    // Reset form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop"
              alt="Login"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>

          {/* Right side - Login Form */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold mb-2">Log in to Exclusive</h1>
              <p className="text-gray-600 mb-8">Enter your details below</p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-brand-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition-colors"
                  >
                    Log In
                  </button>

                  <Link
                    to="/forgot-password"
                    className="text-brand-red hover:underline"
                  >
                    Forget Password?
                  </Link>
                </div>
              </form>

              <div className="mt-6">
                <p className="text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-brand-red hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
