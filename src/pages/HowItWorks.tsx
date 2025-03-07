
import { ArrowRight, CheckCircle, ClipboardList, Mail, Phone, Search, Sun, User } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-solar-blue-dark mb-8 text-center">How SolarConnect Works</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700 text-center">
          Our simple 4-step process connects you with trusted solar installers and helps you find the best solar solution for your home or business.
        </p>
      </div>

      <div className="space-y-20 max-w-4xl mx-auto my-16">
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">1</div>
            <h2 className="text-2xl font-semibold text-solar-blue-dark mb-4">Complete Our Simple Form</h2>
            <p className="text-gray-700 mb-4">
              Share details about your property, energy usage, and specific needs through our user-friendly form. This takes just 3-5 minutes and helps us understand your requirements.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Property details and location</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Current energy consumption patterns</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Backup power requirements</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Budget and preferences</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <ClipboardList className="h-32 w-32 text-solar-blue" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Search className="h-32 w-32 text-solar-blue" />
          </div>
          <div>
            <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">2</div>
            <h2 className="text-2xl font-semibold text-solar-blue-dark mb-4">We Match You With Installers</h2>
            <p className="text-gray-700 mb-4">
              Our system automatically matches your requirements with the most suitable solar installers in our network, considering their expertise, service area, and customer ratings.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Matched with 3 pre-vetted installers</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">All installers are certified and experienced</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Installers specialize in your property type</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">3</div>
            <h2 className="text-2xl font-semibold text-solar-blue-dark mb-4">Receive Customized Quotes</h2>
            <p className="text-gray-700 mb-4">
              Within 48 hours, you'll receive up to 3 detailed quotes from our installer partners. Each quote includes system specifications, costs, estimated savings, and financing options.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Detailed system specifications</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Clear pricing and payment options</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Projected energy savings calculator</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Warranty and maintenance details</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Mail className="h-32 w-32 text-solar-blue" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Phone className="h-32 w-32 text-solar-blue" />
          </div>
          <div>
            <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">4</div>
            <h2 className="text-2xl font-semibold text-solar-blue-dark mb-4">Choose Your Preferred Installer</h2>
            <p className="text-gray-700 mb-4">
              Compare quotes, ask questions, and select the installer that best meets your needs. Our team is available to help you understand the quotes and make an informed decision.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">No pressure or obligation to proceed</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Expert support from our team</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-solar-blue flex-shrink-0 mt-1" />
                <p className="text-gray-700">Direct communication with installers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 p-8 rounded-lg text-center max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-solar-blue-dark mb-4">Ready to Start Saving on Energy Costs?</h2>
        <p className="text-gray-700 mb-6">
          Join thousands of satisfied customers who've found their perfect solar solution through SolarConnect.
        </p>
        <Link
          to="/quote"
          className="bg-solar-blue hover:bg-solar-blue-dark text-white py-3 px-8 rounded-md inline-flex items-center gap-2 transition-colors text-lg font-medium"
        >
          <Sun className="h-5 w-5" />
          <span>Start Your Free Quote</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
