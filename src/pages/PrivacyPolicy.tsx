import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Check if user came from within the app
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy — Skawsh"
        description="Learn how Skawsh collects, uses, and protects your personal information when you use our laundry pickup and delivery service."
        path="/privacy-policy"
      />
      <div className="bg-skawsh-blue text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center text-white/80 hover:text-white mb-4 md:mb-6 transition-colors text-sm md:text-base bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-2xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-base md:text-xl mt-2 text-white/90">Last updated: September 16, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="prose prose-sm md:prose-lg max-w-none">
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            This Privacy Policy explains how CS Wishlink Private Limited ("the Company", "We", "Us", or "Our") collects, uses, and protects your information when you use the Skawsh mobile application ("Application") and related services.
          </p>
          
          <p className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
            By using Skawsh, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">1. Interpretation and Definitions</h2>
          
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Application</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Application refers to Skawsh, the mobile application developed and operated by the Company, available on Android and iOS devices.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Company</h3>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
            Company refers to CS Wishlink Private Limited, the parent company that owns and operates the Skawsh platform, with its registered office at:
          </p>
          <address className="mb-4 md:mb-6 text-gray-600 not-italic text-sm md:text-base leading-relaxed">
            CS Wishlink Private Limited<br />
            5-497, Near Hitec City, Izzathnagar, Kondapur,<br />
            K.V. Rangareddy, Hyderabad – 500084, Telangana, India
          </address>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Service</h3>
          <p className="mb-6">
            Service refers to the Skawsh mobile application and the laundry-related services offered through it, including order booking, pick-up, drop-off, delivery, and other features provided by the Company.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">User / You</h3>
          <p className="mb-6">
            You refers to the individual using the Application, or the company or other legal entity on behalf of which the individual is using the Application.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Laundry Service Provider</h3>
          <p className="mb-6">
            Laundry Service Provider means a third-party laundry studio, vendor, or business onboarded on the Skawsh platform to provide laundry, ironing, dry cleaning, shoe cleaning, or related services to Users.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Service Provider</h3>
          <p className="mb-6">
            Service Provider means any third-party company or individual engaged by the Company to support the Application, such as payment processors, cloud hosting providers, analytics platforms, or customer support providers.
          </p>
          <p className="mb-6">(Note: This does not include Laundry Service Providers.)</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Device</h3>
          <p className="mb-6">
            Device means any mobile device (such as a smartphone or tablet) that can access the Application.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Personal Data</h3>
          <p className="mb-6">
            Personal Data means any information that identifies, relates to, or could reasonably be linked with You.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Usage Data</h3>
          <p className="mb-6">
            Usage Data means information collected automatically when You use the Application, such as device identifiers, app interactions, and diagnostic data.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Personal Data</h3>
          <p className="mb-4">When You use our Service, We may ask you to provide the following information:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Delivery address (street, city, state, postal code)</li>
            <li>Payment details (processed securely via third-party providers)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Usage Data</h3>
          <p className="mb-4">Collected automatically, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Device type, operating system, and version</li>
            <li>Mobile network information</li>
            <li>IP address</li>
            <li>Application usage logs (such as order history, time spent, features used, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Information Collected from Device</h3>
          <p className="mb-4">With your permission, the Application may access:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Location (to assign drivers and track deliveries)</li>
            <li>Camera & Photos (for uploading order images or proof of delivery)</li>
            <li>Contacts (optional) if you choose to share referral links</li>
          </ul>
          <p className="mb-6">You can enable or disable these permissions at any time in your device settings.</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">3. How We Use Your Information</h2>
          <p className="mb-4">We may use your Personal Data to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide and maintain the Service (order booking, updates, delivery tracking)</li>
            <li>Manage Your User Account</li>
            <li>Process and complete payments</li>
            <li>Communicate with You regarding orders, updates, and support</li>
            <li>Send you offers, promotions, and service-related notifications (if you opt-in)</li>
            <li>Improve and personalize the Service</li>
            <li>Ensure safety, prevent fraud, and enforce legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">4. Sharing of Information</h2>
          <p className="mb-4">We may share Your information in the following cases:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>With Laundry Service Providers:</strong> To fulfill Your orders (pick-up, cleaning, delivery).</li>
            <li><strong>With Service Providers:</strong> For payment processing, analytics, cloud hosting, customer support, and related functions.</li>
            <li><strong>For Business Transfers:</strong> In case of merger, acquisition, or asset sale.</li>
            <li><strong>With Legal Authorities:</strong> If required by law or to protect rights, safety, or security.</li>
            <li><strong>With Your Consent:</strong> If You choose to share information for other purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">5. Data Retention</h2>
          <p className="mb-6">
            We retain your Personal Data only for as long as necessary to provide the Services and fulfill the purposes outlined in this Privacy Policy. We may retain certain information for longer periods where required by law or for legitimate business purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">6. Data Security</h2>
          <p className="mb-6">
            We use reasonable technical and organizational measures to protect Your information. However, no method of transmission or storage is 100% secure, and We cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">7. Your Rights</h2>
          <p className="mb-4">
            Depending on applicable laws, You may have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access, update, or delete Your Personal Data</li>
            <li>Request correction of inaccurate data</li>
            <li>Withdraw consent for certain processing activities</li>
            <li>Request that We limit or restrict data processing</li>
          </ul>
          <p className="mb-6">
            You can exercise these rights by contacting Us at{" "}
            <a href="mailto:contact@skawsh.com" className="text-skawsh-blue hover:underline">
              contact@skawsh.com
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">8. Children's Privacy</h2>
          <p className="mb-6">
            Skawsh is not intended for individuals under the age of 18. We do not knowingly collect Personal Data from anyone under 18. If You are a parent or guardian and You are aware that Your child has provided us data, please contact us, and we will delete it.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">9. Third-Party Links</h2>
          <p className="mb-6">
            The Application may contain links to external services or websites. We are not responsible for their privacy practices and encourage You to review their policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">10. Changes to this Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Updates will be posted in the Application with the "Last Updated" date. Continued use of the Service after updates means You accept the changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">11. Contact Us</h2>
          <p className="mb-4">
            If You have any questions or concerns about this Privacy Policy, please contact Us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@skawsh.com" className="text-skawsh-blue hover:underline">
                  contact@skawsh.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917993631199" className="text-skawsh-blue hover:underline">
                  +91 7993631199
                </a>
              </p>
              <p>
                <strong>Address:</strong><br />
                CS Wishlink Private Limited<br />
                5-497, Near Hitec City, Izzathnagar, Kondapur,<br />
                K.V. Rangareddy, Hyderabad – 500084, Telangana, India
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

export default PrivacyPolicy;