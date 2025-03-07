
import { ArrowRight, CheckCircle, Sun, Zap, Home as HomeIcon, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-solar-blue-dark mb-6">
                Get 3 Competitive Solar Quotes from Trusted Installers
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Save up to 70% on your energy bills with a custom solar solution. Compare quotes from verified installers in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="bg-solar-blue hover:bg-solar-blue-dark text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors text-lg font-medium"
                >
                  <Zap className="h-5 w-5" />
                  <span>Start Your Quote</span>
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-white hover:bg-gray-50 text-solar-blue-dark border border-solar-blue py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors text-lg font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1614799269377-db3c5fd7be74?q=80&w=1000&auto=format&fit=crop"
                alt="Solar panels on a roof"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-solar-blue-dark mb-12">
            How SolarConnect Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-solar-blue-dark mb-3">
                Share Your Energy Needs
              </h3>
              <p className="text-gray-700">
                Tell us about your property, energy usage, and backup requirements using our simple form.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-solar-blue-dark mb-3">
                Get Multiple Quotes
              </h3>
              <p className="text-gray-700">
                Receive 3 customized quotes from verified solar installers in your area.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-solar-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-solar-blue-dark mb-3">
                Choose the Best Offer
              </h3>
              <p className="text-gray-700">
                Compare quotes, ask questions, and select the installer that best fits your needs and budget.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/quote"
              className="bg-solar-orange hover:bg-solar-orange-dark text-white py-3 px-8 rounded-md inline-flex items-center gap-2 transition-colors text-lg font-medium"
            >
              <span>Get Your Free Quotes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-solar-blue-dark mb-12">
            Why Choose SolarConnect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-solar-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-solar-blue-dark mb-2">
                  Save on Rising Electricity Costs
                </h3>
                <p className="text-gray-700">
                  With 2025 tariff rates reaching ₦240/kWh in Band A areas, solar can reduce your bills by 60-70%. See exact savings with our calculator.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-solar-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-solar-blue-dark mb-2">
                  Reliable Backup Power
                </h3>
                <p className="text-gray-700">
                  End generator dependency with battery backup systems that keep your essential appliances running during outages.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-solar-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-solar-blue-dark mb-2">
                  Verified Installers
                </h3>
                <p className="text-gray-700">
                  We partner only with experienced, trusted solar providers to ensure quality installation and service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-solar-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-solar-blue-dark mb-2">
                  Custom Solutions
                </h3>
                <p className="text-gray-700">
                  Get a system designed specifically for your property, budget, and energy needs - no one-size-fits-all here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-solar-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Solar Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners and businesses who have saved with SolarConnect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white hover:bg-gray-100 text-solar-blue-dark py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors text-lg font-medium"
            >
              <HomeIcon className="h-5 w-5" />
              <span>For Homeowners</span>
            </Link>
            <Link
              to="/quote?type=business"
              className="bg-solar-yellow hover:bg-solar-orange text-solar-blue-dark py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors text-lg font-medium"
            >
              <Building className="h-5 w-5" />
              <span>For Businesses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
