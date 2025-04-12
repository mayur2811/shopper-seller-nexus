
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Exclusive</h2>
            <h6 className="font-medium mb-4">Subscribe</h6>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white rounded-md py-2 px-4 w-full text-white placeholder:text-gray-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-6">Support</h2>
            <p className="text-sm mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm mb-2">exclusive@gmail.com</p>
            <p className="text-sm mb-2">+88015-88888-9999</p>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-6">Account</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-sm hover:text-brand-red">My Account</Link>
              </li>
              <li>
                <Link to="/login" className="text-sm hover:text-brand-red">Login / Register</Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm hover:text-brand-red">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm hover:text-brand-red">Wishlist</Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-brand-red">Shop</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-6">Quick Link</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-brand-red">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-brand-red">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-brand-red">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-brand-red">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-6">Download App</h2>
            <p className="text-xs mb-3">Save $3 with App New User Only</p>
            <div className="flex mb-4">
              <div className="w-24 h-24 bg-white rounded-md flex items-center justify-center">
                <span className="text-xs text-black">QR Code</span>
              </div>
              <div className="ml-4 flex flex-col space-y-2">
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-8" />
                </a>
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-8" />
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-red">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-brand-red">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-brand-red">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-brand-red">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
