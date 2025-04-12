
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Password strength validation
    if (password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password should be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically call your registration service
    toast({
      title: "Account created",
      description: "Welcome to Exclusive!",
    });

    // Redirect to login after signup
    navigate("/login");
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop"
              alt="Create Account"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>

          {/* Right side - Signup Form */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold mb-2">Create an account</h1>
              <p className="text-gray-600 mb-8">Enter your details below</p>

              <form onSubmit={handleSignUp} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="email"
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

                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-3 rounded-md font-medium hover:bg-red-600 transition-colors"
                >
                  Create Account
                </button>

                <div className="flex items-center justify-center space-x-2">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    <span>Sign up with Google</span>
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <p className="text-center text-gray-600">
                  Already have account?{" "}
                  <Link to="/login" className="text-brand-red hover:underline">
                    Log In
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

export default SignUp;
