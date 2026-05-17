import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Clock, Package, CreditCard, User, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Support = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const supportCategories = [
    {
      icon: Package,
      title: "Orders & Pickup Issues",
      description: "Issues related to pickup, delivery delays, or order status"
    },
    {
      icon: CreditCard,
      title: "Payments & Refunds",
      description: "Payment failures, refunds, invoices, or billing issues. Refunds are processed within 5 working days."
    },
    {
      icon: User,
      title: "Account & Profile",
      description: "Login issues, profile updates, phone number or email changes"
    },
    {
      icon: Shirt,
      title: "Laundry & Dry Clean Service Quality",
      description: "Issues related to washing, dry cleaning, damaged, or missing items"
    }
  ];

  const faqs = [
    {
      question: "How do I contact Skawsh support?",
      answer: "You can reach our support team via email at contact@skawsh.com or call us at +91 7993631199. Our support hours are Monday to Saturday, 9 AM to 7 PM IST."
    },
    {
      question: "How long does it take to get a refund?",
      answer: "Refunds are typically processed within 5 working days after approval. The amount will be credited back to your original payment method. If you haven't received your refund after 7 working days, please contact our support team."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order status in real-time through the Skawsh app. Go to 'My Orders' section to see the current status of your pickup, cleaning process, and delivery. You'll also receive notifications at each stage."
    },
    {
      question: "What should I do if my clothes are damaged?",
      answer: "If you notice any damage to your clothes, please report it within 24 hours of delivery through the app or by contacting our support team. Take photos of the damage and share them with us. We will investigate and provide appropriate compensation or resolution."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Yes, you can cancel or modify your order before the pickup is completed. Go to 'My Orders' in the app and select the order you wish to cancel or modify. Once the clothes are picked up, modifications may be limited. Contact support for assistance with special requests."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Skawsh Support — Help with Orders, Payments & Service"
        description="Contact Skawsh support or browse FAQs about pickup, delivery, refunds, account issues, and laundry service quality."
        path="/support"
        jsonLd={faqSchema}
      />
      {/* Header */}
      <div className="bg-skawsh-blue text-primary-foreground py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4 md:mb-6 transition-colors text-sm md:text-base bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-2xl md:text-4xl font-bold">Skawsh Support</h1>
          <p className="text-base md:text-xl mt-2 text-primary-foreground/90">
            Get help with orders, payments, laundry, and dry cleaning services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Contact Support Section - Critical for App Store */}
        <section className="bg-background py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-skawsh-blue-light rounded-xl p-6 md:p-8 border border-primary/20">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Contact Support
              </h2>
              <p className="text-muted-foreground mb-6">
                Need help? Our support team is available during working hours.
              </p>
              
              <div className="grid gap-4 md:grid-cols-3">
                <a 
                  href="mailto:contact@skawsh.com"
                  className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">contact@skawsh.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+917993631199"
                  className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 7993631199</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Support Hours</p>
                    <p className="font-medium text-foreground">Mon–Sat, 9 AM – 7 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              How can we help you?
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {supportCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow border border-border cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 md:py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-muted/30 rounded-lg border border-border px-4 md:px-6"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* App & Legal Identification Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-background rounded-xl p-6 md:p-8 border border-border text-center">
              <p className="text-muted-foreground leading-relaxed">
                Skawsh is operated by <strong className="text-foreground">CSWISHLINK PRIVATE LIMITED</strong>.
                <br />
                For app-related support, please contact us using the details above.
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="py-8 md:py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <Button 
              onClick={handleBackClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Back to Previous Page
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
