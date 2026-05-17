import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const DriverTermsConditions = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/drivers');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Driver Terms & Conditions — Skawsh"
        description="Terms and conditions governing the use of the Skawsh Driver app by delivery partners."
        path="/drivers/terms-conditions"
      />
      <div className="bg-skawsh-blue text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center text-white/80 hover:text-white mb-4 md:mb-6 transition-colors text-sm md:text-base bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <h1 className="text-2xl md:text-4xl font-bold">Terms & Conditions for Skawsh Driver Application</h1>
          <p className="text-base md:text-xl mt-2 text-white/90">Last updated: 28 January 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="prose prose-sm md:prose-lg max-w-none">
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            These Terms & Conditions ("Terms") govern your access to and use of the Skawsh Driver Application (the "App"), operated by Cswishlink Pvt Ltd. By registering, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, you must not use the App.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">1. Eligibility</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            You must be at least 18 years old to register as a driver.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            You must provide accurate and complete information during registration and verification.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Aadhaar verification is mandatory to access the App.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">2. Driver Responsibilities</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">As a Skawsh driver, you agree to:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Accept and complete delivery tasks in a professional and timely manner</li>
            <li>Maintain accurate status updates for assigned orders</li>
            <li>Handle customer items with care and responsibility</li>
            <li>Follow all applicable local laws, traffic rules, and safety regulations</li>
          </ul>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh reserves the right to suspend or terminate accounts for misconduct, fraud, or repeated service issues.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">3. Account & Verification</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Drivers are responsible for maintaining the confidentiality of their login credentials.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            You are solely responsible for all activities conducted through your account.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh may re-verify your identity or documents at any time for compliance or safety reasons.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">4. Location Tracking</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The App uses foreground and background location access only during active delivery operations.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Location tracking is required to assign jobs, enable navigation, and track delivery progress.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">5. Payments & Earnings</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Earnings, incentives, and settlements are calculated based on completed deliveries.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Payments are processed through third-party payment partners.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh is not responsible for delays caused by banking systems or third-party providers.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">6. Service Availability</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh does not guarantee continuous or uninterrupted access to the App.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Features may be modified, suspended, or discontinued without prior notice.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">7. Prohibited Activities</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">You agree not to:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Use the App for unlawful, fraudulent, or abusive purposes</li>
            <li>Share false information or impersonate another individual</li>
            <li>Manipulate order status, location data, or payment systems</li>
            <li>Attempt to reverse engineer or misuse the App</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">8. Termination</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">Skawsh may suspend or terminate your account at any time if:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>You violate these Terms</li>
            <li>You provide false or misleading information</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">9. Limitation of Liability</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">Skawsh shall not be liable for:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Loss of income, profits, or data</li>
            <li>Damages arising from delivery disputes between drivers, customers, or vendors</li>
            <li>Issues caused by third-party services or force majeure events</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">10. Governing Law</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            These Terms shall be governed by and interpreted in accordance with the laws of India, with jurisdiction in Telangana.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">11. Contact Information</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            For questions related to these Terms & Conditions, contact:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Company Name:</strong> Cswishlink Pvt Ltd (Skawsh)
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@skawsh.com" className="text-skawsh-blue hover:underline">
                  support@skawsh.com
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                5-497, NEAR HITEC CITY, IZZATHNAGAR, KONDAPUR,<br />
                Kondapur, K.V.Rangareddy, Serilingampally,<br />
                Telangana, India, 500084
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleBackClick}
              className="bg-skawsh-blue hover:bg-skawsh-blue/90 text-white px-8 py-3"
            >
              Back to Previous Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverTermsConditions;
