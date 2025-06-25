import {
  Search,
  MessageCircle,
  MapPin,
  Truck,
  CheckCircle,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Browse Products",
      description: "Explore our storage & packaging solutions",
      hoverText: "View our catalog of grain preservation technologies",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Order on WhatsApp",
      description: "Click the order button on any product",
      hoverText: "Instant connection to our sales team via WhatsApp",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Share Details",
      description: "Provide quantity & delivery location",
      hoverText: "We service all 36 states with reliable logistics",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "We dispatch within 24hrs of payment",
      hoverText: "Guaranteed secure delivery with tracking",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "7-day support after delivery",
      hoverText: "Our team ensures you're satisfied with your purchase",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full p-3 mb-4">
            <span className="text-2xl">⚙️</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            HOW IT WORKS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your agricultural storage solutions in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {/* Hover pop-up */}
                <div className="absolute inset-0 bg-green-600 text-white p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold mb-2">
                    Step {index + 1}
                  </span>
                  <p className="text-center">{step.hoverText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
