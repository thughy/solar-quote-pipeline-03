
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-solar-blue-dark mb-4">
        Thank You for Your Request!
      </h2>
      
      <div className="max-w-lg mx-auto">
        <p className="text-gray-700 mb-6">
          Your solar quote request has been submitted successfully. Our team will now match you with up to 3 verified installers who will contact you within 48 hours with personalized quotes.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-solar-blue-dark mb-4">What Happens Next?</h3>
          <ol className="text-left space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="font-semibold">1.</span>
              <span>Our team reviews your requirements to find the best installer matches.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">2.</span>
              <span>You'll receive notifications when installers are preparing quotes for you.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">3.</span>
              <span>Compare quotes, ask questions, and choose the best option for your needs.</span>
            </li>
          </ol>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-solar-blue text-solar-blue hover:bg-solar-blue/10"
            >
              Return to Home
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button 
              className="w-full sm:w-auto bg-solar-blue hover:bg-solar-blue-dark"
            >
              Learn More About the Process
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
