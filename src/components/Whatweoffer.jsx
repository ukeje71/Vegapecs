import {
  ShieldCheck,
  Package,
  Leaf,
  BarChart2,
  Truck,
  CheckCircle,
} from "lucide-react";
import Products from "./Products";

const WhatWeOffer = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full p-4 mb-6">
            <Package className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Storage & Packaging Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preserve More, Waste Less with our farm-to-market technologies
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <ShieldCheck className="h-8 w-8" />,
              title: "Pest-Proof",
              desc: "Airtight systems that eliminate infestations",
            },
            {
              icon: <Leaf className="h-8 w-8" />,
              title: "Moisture Control",
              desc: "12+ month shelf life extension",
            },
            {
              icon: <Package className="h-8 w-8" />,
              title: "Food-Grade",
              desc: "Export-approved materials",
            },
            {
              icon: <BarChart2 className="h-8 w-8" />,
              title: "Cost Saving",
              desc: "Bulk order discounts available",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="text-green-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Package className="h-6 w-6" /> Our Product Categories
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "🌾 Intelligent Grain Storage",
                features: [
                  "Hermetic silos & bags (20-ton capacity)",
                  "IoT monitoring systems",
                  "Oxygen elimination technology",
                ],
              },
              {
                title: "🫙 Liquid Packaging",
                features: [
                  "Leak-proof containers (10L-25L)",
                  "FDA-approved materials",
                  "Tamper-evident seals",
                ],
              },
              {
                title: "📦 Farm Packaging Kits",
                features: [
                  "Complete harvest-to-market sets",
                  "Custom branding options",
                  "Vacuum sealers included",
                ],
              },
              {
                title: "🔍 Quality Assurance",
                features: [
                  "Digital moisture meters",
                  "Solar drying systems",
                  "7-day support guarantee",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                <ul className="space-y-3">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
        <div className="mt-10 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products 
          </h2>
          <Products />
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-xl p-8 md:p-12 text-center text-white">
          <Truck className="h-10 w-10 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Storage?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get expert advice on the best solutions for your farm size and
            budget.
          </p>
          <a
            href="https://wa.me/2348182443958"
            className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Chat With Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
