import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const DriverPrivacyPolicy = () => {
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
        title="Driver Privacy Policy — Skawsh"
        description="Privacy policy for drivers using the Skawsh Driver app, covering data collected, usage, and protections."
        path="/drivers/privacy-policy"
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
          <h1 className="text-2xl md:text-4xl font-bold">Privacy Policy for Skawsh Driver Application</h1>
          <p className="text-base md:text-xl mt-2 text-white/90">Last updated: 28 January 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="prose prose-sm md:prose-lg max-w-none">
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Skawsh ("we", "our", "us") operates the Skawsh Driver Application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App. By accessing or using the App, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">1. Information We Collect</h2>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">1.1 Personal Information</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            We collect personal information required to create and manage a driver account, including:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Full name</li>
            <li>Mobile phone number</li>
            <li>Email address</li>
            <li>Profile photo</li>
          </ul>

          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed"><strong>Identity Verification (Mandatory / Optional):</strong></p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Aadhaar number (mandatory) for driver verification</li>
            <li>PAN card details (optional)</li>
            <li>Driving license details (optional)</li>
            <li>Vehicle details (optional)</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">1.2 Location Information</h3>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
            We collect real-time location data while the App is running in the background to:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Assign delivery jobs</li>
            <li>Enable navigation using Google Maps</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">1.3 Usage and Device Information</h3>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
            We may automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Device type, OS version, and App version</li>
            <li>IP address</li>
            <li>Log data, crash reports, and diagnostic data collected via Firebase Analytics</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">1.4 Payment Information</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            We do not store sensitive payment information such as bank account or card details.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Payments and settlements are processed through third-party payment partners.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">2. How We Use Your Information</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">We use the collected information to:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Create and manage driver accounts</li>
            <li>Verify driver identity and eligibility</li>
            <li>Assign and manage delivery orders</li>
            <li>Provide navigation and delivery tracking</li>
            <li>Process payments and incentives</li>
            <li>Communicate important updates, alerts, and support messages</li>
            <li>Improve App performance, safety, and user experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">3. Sharing of Information</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">We may share your information only in the following cases:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li><strong>With Customers and Vendors:</strong> Limited details such as name, profile photo, and live delivery status</li>
            <li><strong>With Service Providers:</strong> Technology, analytics, mapping, and payment service providers who support App operations</li>
            <li><strong>For Legal Reasons:</strong> If required by law, regulation, or legal process</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
          </ul>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            We do not sell or rent your personal data to third parties.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">4. Data Retention</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">We retain personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Fulfill the purposes described in this Privacy Policy</li>
            <li>Comply with legal, tax, or regulatory obligations</li>
          </ul>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            When data is no longer required, it is securely deleted or anonymized.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">5. Data Security</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, loss, misuse, or alteration.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            We encrypt all data in transit using TLS/SSL.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">6. Permissions Used by the App</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">The Skawsh Driver App may request the following permissions:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li><strong>Location (Foreground & Background):</strong> For delivery assignment, live tracking, and navigation</li>
            <li><strong>Camera:</strong> For Aadhaar upload, document verification, and proof of delivery</li>
            <li><strong>Storage:</strong> For storing delivery-related images or documents</li>
            <li><strong>Notifications:</strong> To send order updates, alerts, and important service messages</li>
          </ul>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            You may revoke permissions through your device settings. However, disabling critical permissions such as location may prevent the App from functioning properly.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">7. Your Rights</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed">Depending on applicable laws, you may have the right to:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your account and personal data</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            To exercise these rights, contact us using the details below.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">8. Children's Privacy</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The Skawsh Driver App is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">9. Third-Party Links and Services</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The App may contain links to third-party services (e.g., maps or payment gateways). We are not responsible for the privacy practices of these third parties.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">10. Changes to This Privacy Policy</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted within the App and updated on the Play Store listing. Continued use of the App means you accept the updated policy.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">11. Contact Us</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            If you have any questions, concerns, or requests related to data access or deletion, you can contact us at:
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

export default DriverPrivacyPolicy;
