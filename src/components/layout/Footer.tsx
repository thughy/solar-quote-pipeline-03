
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-solar-blue-dark mb-4">SolarConnect</h3>
            <p className="text-gray-600">
              Helping homeowners and businesses find the best solar solutions with competitive quotes from trusted installers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-solar-blue-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-solar-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-solar-blue transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-solar-blue transition-colors">About</Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-600 hover:text-solar-blue transition-colors">Get Quotes</Link>
              </li>
              <li>
                <Link to="/installers" className="text-gray-600 hover:text-solar-blue transition-colors">Find Installers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-solar-blue-dark mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-solar-blue" />
                <a href="mailto:info@solarconnect.com" className="text-gray-600 hover:text-solar-blue transition-colors">
                  info@solarconnect.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-solar-blue" />
                <a href="tel:+2341234567890" className="text-gray-600 hover:text-solar-blue transition-colors">
                  +234 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SolarConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
