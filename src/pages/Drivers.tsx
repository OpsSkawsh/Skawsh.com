import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const Drivers = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Skawsh Driver Portal — Legal Documents"
        description="Access privacy policy and terms & conditions for the Skawsh Driver app."
        path="/drivers"
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
          <h1 className="text-2xl md:text-4xl font-bold">Skawsh Driver Portal</h1>
          <p className="text-base md:text-xl mt-2 text-white/90">
            Access important legal documents and policies for Skawsh drivers.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Privacy Policy Card */}
          <Link
            to="/drivers/privacy-policy"
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-skawsh-blue/30"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-skawsh-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-skawsh-blue/20 transition-colors">
                <Shield className="w-8 h-8 text-skawsh-blue" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Privacy Policy</h2>
              <p className="text-gray-500 text-sm">
                Learn how we collect, use, and protect your personal information.
              </p>
            </div>
          </Link>

          {/* Terms & Conditions Card */}
          <Link
            to="/drivers/terms-conditions"
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-skawsh-blue/30"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-skawsh-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-skawsh-blue/20 transition-colors">
                <FileText className="w-8 h-8 text-skawsh-blue" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Terms & Conditions</h2>
              <p className="text-gray-500 text-sm">
                Review the terms governing your use of the Skawsh Driver App.
              </p>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleBackClick}
            className="bg-skawsh-blue hover:bg-skawsh-blue/90 text-white px-8 py-3"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
