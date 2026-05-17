import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const TermsConditions = () => {
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
        title="Terms & Conditions — Skawsh"
        description="Read the terms and conditions that govern your use of Skawsh's laundry and dry cleaning services."
        path="/terms-conditions"
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
          <h1 className="text-2xl md:text-4xl font-bold">Terms & Conditions</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-4 md:mb-6">1. Introduction; Acceptance</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            These Terms & Conditions ("Terms") govern your access to and use of the Skawsh mobile application and services (the "Service"). By downloading, registering, accessing or using the Service you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Service.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">2. Definitions</h2>
          <ul className="list-disc pl-4 md:pl-6 mb-6 md:mb-8 space-y-2 text-sm md:text-base">
            <li><strong>User / Customer:</strong> person who uses the Skawsh app to request laundry/cleaning services.</li>
            <li><strong>Vendor:</strong> third-party laundry studio / service provider listed on Skawsh that performs the actual cleaning service.</li>
            <li><strong>Order:</strong> a request submitted by a User for pick-up and cleaning services via the app.</li>
            <li><strong>Driver / Pickup Agent:</strong> person assigned to collect/deliver a user's items.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">3. Eligibility to Use the Services</h2>
          <ol className="list-decimal pl-4 md:pl-6 mb-6 md:mb-8 space-y-3 md:space-y-4 text-sm md:text-base">
            <li>You hereby represent and guarantee that you are at least eighteen (18) years of age or above and are fully able and competent to understand and agree with the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms.</li>
            <li><strong>Compliance with Laws.</strong> You are in compliance with all laws and regulations in the country in which you live when you access and use the Services. You agree to use the Services only in compliance with these Terms and applicable law, and in a manner that does not violate our legal rights or those of any third party(ies).</li>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">4. Scope of the Service (Marketplace Model)</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh operates as a marketplace connecting Users with independent Vendors. Skawsh does not directly perform all cleaning services — Vendors perform services and are independent contractors. Skawsh's role is to provide the platform for discovery, ordering, payments and limited mediation. Skawsh displays Vendor information, services and prices. Vendors set their service offerings and prices. Skawsh invoices orders with GST as applicable.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">5. Orders, Pickup, Delivery, Cancellations & Refunds</h2>
          
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Order Acceptance</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            An Order is accepted when a pickup is confirmed, and driver is assigned. Until then Skawsh may cancel or hold Orders for operational reasons.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Cancellation by User</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Users may cancel Orders before a driver has been assigned. Once a driver is assigned to the Order (pickup scheduled or in progress), Users may not cancel via the app. Any cancellation policy exceptions will be handled by Skawsh support discretion.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Refunds</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh issues refunds to Users where applicable. Refunds will be processed within 10 working days of approval by Skawsh. Refunds are issued by Skawsh (not individual Vendors). For all refund related issue user must sent a mail to Skawsh support team.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">6. Customer Responsibilities and Limitation of Liability</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The Vendor shall not be held liable for any damage or loss of items resulting from the User's failure to comply with the following responsibilities.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">6.1 Garment Preparation</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>The User is solely and entirely responsible for inspecting all garments and emptying all pockets prior to handing them over to the designated driver or the Vendor.</li>
            <li>The Vendor shall not be liable for any loss or damage to items left in pockets, including but not limited to, cash, jewelry, credit cards, keys, or any other personal belongings.</li>
            <li>By submitting garments, the User agrees to these terms and waives any and all claims related to items found in pockets after the garments have been submitted.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">6.2 Inspection and Claims</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>The User is responsible for inspecting all returned garments at the time of delivery. Any and all claims for damage, loss, or dissatisfaction with the Services must be made at the time of delivery, in the presence of the Delivery partner.</li>
            <li>The acceptance of the delivery by the User shall constitute a waiver of any and all claims for damage, loss, or quality issues that could have been reasonably discovered upon inspection.</li>
            <li>No claims will be entertained or accepted by the Skawsh once the delivery has been completed. This includes, but is not limited to, claims for missing garments or alleged damage.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">6.3 Stains, Color, and Special Requests</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>The Vendor makes no guarantee regarding the complete removal of stains. Stain removal efforts may require special processing and may not be successful on all fabrics. The Vendor shall not be liable for any residual stains or damage caused by the stain removal process.</li>
            <li>The Vendor shall not be liable for color fading, bleeding, or shrinkage that may occur during the laundering or dry-cleaning process, particularly for garments that have not been colorfast-tested or have non-standard care instructions.</li>
            <li>Additional charges may apply for special services such as stain removal or specific handling instructions. These charges will be communicated to the User, and the User agrees to be responsible for such charges.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">7. Pricing, Payments & GST</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Payments:</strong> Users will pay the amount displayed (including taxes) using payment methods enabled in the app.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>GST & invoicing:</strong> Skawsh generates invoices with applicable GST. Vendors may also issue their own invoices as required. Users may request invoice copies through support.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">8. Vendors & Onboarding</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Vendors on Skawsh are independent service providers. Skawsh does not require a written contract for onboarding nor mandatory GST registration for Vendors. Vendors are expected to follow applicable laws, local regulations and the platform's operational policies.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Vendor disputes with Users are handled initially through Skawsh mediation. Skawsh will attempt to resolve such disputes in good faith.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">9. Prohibited Items & Prohibited User Activities</h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Prohibited items (do NOT include in laundry bag):</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Hazardous materials (flammable, explosive, corrosive materials, batteries, fuel, chemicals).</li>
            <li>Illegal items (drugs, weapons, stolen goods).</li>
            <li>Items contaminated with biohazards (e.g., blood or bodily fluids).</li>
            <li>Valuables (cash, jewelry, electronics, heirlooms) do not include these; Skawsh is not responsible for loss of valuables.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">Prohibited user activities:</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>Fraudulent behavior, false data, fake accounts, or placing false orders.</li>
            <li>Unauthorized use of any confidential or employee contact information.</li>
            <li>Harassment, threats or abusive behavior toward staff or drivers.</li>
            <li>Interference with the app (malicious code, bots, scraping).</li>
          </ul>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Violation of these rules may lead to Order cancellation, account suspension or termination and legal action.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">10. Quality, Warranties & Guarantees</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh does not provide express warranties on cleaning quality or turnaround times. Vendors are responsible for the provision of services. Any quality complaints should be raised via support; Skawsh will attempt mediation and, where appropriate, refunds or re-service.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">11. Ownership of Platform Intellectual Property</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The User acknowledges and agrees that the Skawsh platform, including all of its software, technology, design, functionality, text, images, logos, trademarks (Skawsh name and logo), and all other content created by or for the Company (excluding User Content), are the exclusive property of Cswishlink Private Limited and are protected by intellectual property laws.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Limited License to User:</strong> Subject to the terms and conditions of this Agreement, the Company grants the User a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Skawsh application solely for its intended purpose of booking laundry services.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Prohibited Use:</strong> The User is expressly prohibited from copying, modifying, reproducing, reverse engineering, decompiling, distributing, selling, or creating derivative works based on the Skawsh platform or its content without the Company's prior written consent.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">12. User Content and License</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            This section governs the rights and responsibilities related to any content, materials, or information that a User submits, posts, or displays on the Skawsh platform, which includes, but is not limited to, written reviews, ratings, comments, and profile information ("User Content").
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">12.1 Grant of License</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>By submitting, posting, or displaying any User Content on or through the Skawsh platform, the User hereby grants Cswishlink Private Limited (operating as Skawsh) a perpetual, irrevocable, worldwide, royalty-free, fully paid-up, transferable, and sublicensable license to host, store, use, reproduce, copy, publicly display, distribute, modify, adapt, publish, and translate such User Content.</li>
            <li>This license is granted for the purposes of operating, promoting, and improving the Skawsh services, and for any commercial, marketing, or publicity purposes related to the Company's business.</li>
            <li>The User agrees that the Company may modify or adapt the User Content to transmit, display, or distribute it over computer networks and in various media and/or make changes to the User Content as necessary to conform and adapt that content to any requirements or limitations of any networks, devices, services, or media.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">12.2 User Representations and Warranties</h3>
          <p className="mb-3 text-sm md:text-base leading-relaxed">The User represents and warrants that:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li><strong>Ownership and Rights:</strong> The User is either the sole owner of all User Content they post, or they possess all necessary rights, licenses, consents, and permissions to post the User Content and to grant the license set forth in this Agreement.</li>
            <li><strong>No Violation:</strong> The posting or use of the User Content on the Skawsh platform does not and will not infringe, violate, or misappropriate the intellectual property rights, privacy rights, publicity rights, or any other rights of any third party, or violate any applicable law or regulation.</li>
            <li><strong>Accuracy:</strong> All reviews, ratings, and comments provided by the User are true, accurate, and based on the User's actual experience with the Vendor's services.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">12.3 Content Responsibility and Indemnity</h3>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
            <li>The User is solely responsible for its User Content. The Company does not endorse any User Content and shall not be liable for any loss or damage caused by the User Content.</li>
            <li>The User agrees to indemnify and hold Skawsh and its affiliates harmless from any and all claims, damages, liabilities, and expenses (including legal fees) arising from any breach of the warranties and representations made in this Section.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">13. Intermediary Status & Content Moderation</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh acts as an intermediary platform. To maintain any safe-harbor protections under the IT Act and intermediary rules Skawsh may be required to exercise due diligence, retain records, and respond to lawful takedown or disclosure requests. Users agree to cooperate in investigations.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">14. Suspension & Termination</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh may suspend or terminate accounts for fraud, misuse, repeated poor conduct or other breaches. Where feasible and appropriate, Skawsh will provide warnings and an opportunity to cure them before termination. Upon termination, your right to use the Service ends; Skawsh may retain certain information as required by law.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">15. Dispute Resolution; Governing Law; Class Action Waiver</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Arbitration & seat:</strong> Any dispute, controversy or claim arising out of or in connection with these Terms shall be finally settled by arbitration administered in accordance with the Arbitration and Conciliation Act, 1996.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The seat of arbitration shall be Hyderabad, Telangana, India.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Governing law:</strong> These Terms shall be governed by and construed in accordance with the laws of India. If a matter is brought to court, the courts in Telangana shall have jurisdiction.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Class action waiver:</strong> By using the Service you agree to resolve disputes individually and waive any right to bring or participate in class, collective, or representative claims.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">16. Changes to Terms & Notices</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh may vary or amend or change or update these Terms, from time to time entirely at its own discretion. You shall be responsible for checking these Terms from time to time and ensure continued compliance with these Terms. Your use of Skawsh Platform after any such amendment or change in the Terms shall be deemed as your express acceptance to such amended/changed terms and you also agree to be bound by such changed/amended Terms.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">17. Consumer Grievance Redressal</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh is committed to resolving user complaints and disputes efficiently and within the timelines mandated by applicable consumer and e-commerce laws.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">17.1 Grievance Officer Details</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            In compliance with the Information Technology Act, 2000, and related rules, Skawsh has appointed a designated Grievance Officer to handle user complaints.
          </p>
          <p className="mb-3 text-sm md:text-base leading-relaxed">
            For any complaints, issues, or grievances related to the Skawsh platform or the services received, please contact the designated officer:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-1 text-sm md:text-base">
            <li><strong>Name:</strong> Chetan</li>
            <li><strong>Email:</strong> contact@skawsh.com</li>
            <li><strong>Phone:</strong> +91 79936 31199</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">17.2 Grievance Procedure</h3>
          <ol className="list-decimal pl-4 md:pl-6 mb-6 md:mb-8 space-y-2 text-sm md:text-base">
            <li><strong>Submission:</strong> All grievances must be submitted via email to the address provided above. To ensure a prompt resolution, please include your full name, registered mobile number, order ID, and a detailed description of the issue.</li>
            <li><strong>Acknowledgement:</strong> We will acknowledge receipt of your complaint within 48 hours (2 working days) of submission.</li>
            <li><strong>Resolution:</strong> We aim to resolve all grievances within one (1) month from the date of receipt, adhering to the resolution timelines prescribed by law.</li>
          </ol>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">18. Limitation of Liability and Indemnity</h2>
          
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">18.1 Limitation of Liability</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            The User expressly understands and agrees that to the maximum extent permitted by applicable law, Cswishlink Private Limited (Skawsh) shall not be liable for any indirect, incidental, special, exemplary, punitive, or consequential damages, including but not limited to, damages for loss of profits, loss of data, business interruption, or loss of goodwill, arising out of or in connection with these Terms or the User's use of or inability to use the Service. Aggregate Liability Cap: Skawsh's entire aggregate liability to the User for any and all claims arising out of or in connection with these Terms, the Service, or any Order placed through the Service, regardless of the form of action (whether in contract, tort, or otherwise), shall be expressly limited to the total amount paid by the User for the specific Order giving rise to the claim. This limitation of liability shall not apply to the extent prohibited by law, including liability arising from Skawsh's gross negligence, willful misconduct, or fraud.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">18.2 Indemnity</h3>
          <p className="mb-3 text-sm md:text-base leading-relaxed">
            The User agrees to indemnify, defend, and hold Skawsh and its affiliates, officers, directors, employees, and agents harmless from and against any and all claims, liabilities, losses, damages, costs and expenses (including reasonable attorneys' fees) arising from:
          </p>
          <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 space-y-1 text-sm md:text-base">
            <li>The User's violation or breach of any term of these Terms.</li>
            <li>The misuse of the Service by the User.</li>
            <li>The User's breach of any applicable law or regulation.</li>
            <li>Any claim that the User Content infringes upon the rights of a third party (as specified in Section 12).</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">19. Force Majeure</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            Skawsh is not liable for any failure/delay due to causes outside reasonable control (natural disasters, strikes, pandemics, government restrictions, extreme weather, etc.). In such events, Skawsh will try to resume services as soon as feasible.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">20. Miscellaneous</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Severability:</strong> If any provision is found invalid, the rest remains in effect.
          </p>
          <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
            <strong>Entire agreement:</strong> These Terms, together with any policies referenced (Privacy Policy, Refund Policy) form the entire agreement between you and Skawsh regarding the Service.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 md:mt-12 mb-4 md:mb-6">Contact Information</h2>
          <p className="mb-3 md:mb-4 text-sm md:text-base">
            For any queries contact: <a href="mailto:contact@skawsh.com" className="text-skawsh-blue hover:underline font-medium">contact@skawsh.com</a>
          </p>
          
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

export default TermsConditions;