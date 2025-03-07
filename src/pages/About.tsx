
import { Sun, Shield, ThumbsUp, Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-solar-blue-dark mb-8 text-center">About SolarConnect</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700 mb-4">
          SolarConnect is Nigeria's leading solar quote comparison platform, connecting homeowners and businesses with trusted solar installers to get the best value for their solar investment.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2023, we've helped thousands of Nigerians reduce their energy costs and increase their energy independence with customized solar solutions.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to accelerate Nigeria's transition to renewable energy by making solar power accessible, affordable, and simple for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="bg-solar-blue rounded-full p-4 mb-4">
            <Sun className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-solar-blue-dark mb-3">Our Vision</h2>
          <p className="text-gray-700">
            A Nigeria where clean, reliable solar energy is the default choice for homes and businesses, reducing dependence on the national grid and fossil fuels.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-solar-orange rounded-full p-4 mb-4">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-solar-blue-dark mb-3">Our Values</h2>
          <p className="text-gray-700">
            Transparency, quality, customer satisfaction, and environmental responsibility guide everything we do at SolarConnect.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-solar-blue-dark mb-8 text-center">Why Choose SolarConnect</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <ThumbsUp className="h-10 w-10 text-solar-blue" />
          </div>
          <h3 className="text-xl font-semibold text-solar-blue-dark mb-3 text-center">
            Free and Unbiased
          </h3>
          <p className="text-gray-700 text-center">
            Our service is completely free for customers. We don't favor any installer - we simply connect you with the best matches for your needs.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <Shield className="h-10 w-10 text-solar-blue" />
          </div>
          <h3 className="text-xl font-semibold text-solar-blue-dark mb-3 text-center">
            Vetted Installers
          </h3>
          <p className="text-gray-700 text-center">
            We thoroughly vet all installers in our network, ensuring they have the proper certifications, experience, and customer satisfaction records.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <Users className="h-10 w-10 text-solar-blue" />
          </div>
          <h3 className="text-xl font-semibold text-solar-blue-dark mb-3 text-center">
            Expert Support
          </h3>
          <p className="text-gray-700 text-center">
            Our team of solar experts is available to help you understand your quotes and make an informed decision about your solar investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
