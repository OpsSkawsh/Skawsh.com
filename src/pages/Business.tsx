import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Shield, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { SEO } from "@/components/SEO";

const Business = () => {
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
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Partner With Skawsh — Grow Your Laundry Business"
        description="Join Skawsh as a partner studio. Fill capacity, reach more customers, and run your laundry business with our platform."
        path="/business"
      />
      {/* Header */}
      <header className="p-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-foreground hover:text-foreground/80"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Previous Page
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-skawsh-blue">
              Ready to grow your laundry business?
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Download the Skawsh app on the App Store or Play Store and submit 
              your studio registration request directly from the app.
            </p>
            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-4xl mx-auto">
              Connect with local customers, boost your orders, and become part of a 
              trusted network of laundry providers.
            </p>
            
            {/* App Store Buttons */}
            <AppStoreButtons className="justify-center items-center mb-12 md:mb-16 max-w-lg sm:max-w-none mx-auto" />
          </div>

          {/* Features Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Boost Orders */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-skawsh-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Zap className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">Boost Orders</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Connect with more customers in your area and increase your daily orders.
              </p>
            </div>

            {/* Trusted Network */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-skawsh-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Shield className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">Trusted Network</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Join a vetted community of professional laundry service providers.
              </p>
            </div>

            {/* Grow Revenue */}
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-skawsh-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <DollarSign className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">Grow Revenue</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Expand your business reach and maximize your earning potential.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button
            onClick={handleBackClick}
            className="bg-skawsh-blue text-white hover:bg-skawsh-blue/90 px-6 md:px-8 py-3 text-base md:text-lg font-medium w-full sm:w-auto"
          >
            Back to Previous Page
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Business;