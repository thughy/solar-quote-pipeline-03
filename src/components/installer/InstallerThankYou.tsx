
import { CheckCircle2 } from "lucide-react";

const InstallerThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-green-500 mb-4">
        <CheckCircle2 className="h-16 w-16" />
      </div>
      <h2 className="text-2xl font-bold text-center text-solar-blue-dark mb-4">
        Quote Submitted Successfully!
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Thank you for submitting your solar installation quote. The customer will be notified immediately.
        You can track the status of your quotes in your installer dashboard.
      </p>
      <div className="bg-blue-50 p-4 rounded-md border border-blue-100 w-full max-w-md">
        <h3 className="font-semibold text-solar-blue-dark mb-2">Next Steps:</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">1.</span>
            The customer will review your quote along with others they receive.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">2.</span>
            If selected, you'll be notified to arrange a site visit.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 font-bold mr-2">3.</span>
            After the site visit, you can finalize the quote with any necessary adjustments.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstallerThankYou;
