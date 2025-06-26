import { Users, Factory, Globe, ShoppingBag, Users2, CheckCircle } from 'lucide-react';

const WhoWeServe = () => {
  const customerSegments = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smallholder Farmers",
      description: "Affordable storage for 1-10 acre farms",
      benefits: ["Moisture bags", "Solar dryers", "Small silos"]
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Food Processors",
      description: "Commercial-grade preservation",
      benefits: ["Vacuum sealers", "Food-grade packaging", "Bulk containers"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Mini Exporters",
      description: "Export-compliant solutions",
      benefits: ["Hermetic bags", "Certified packaging", "Document support"]
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Food Vendors & Resellers",
      description: "Retail-ready packaging",
      benefits: ["Ziplock pouches", "Shrink wraps", "Branded labels"]
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Agro Cooperatives",
      description: "Bulk solutions for groups",
      benefits: ["20-ton silos", "Group discounts", "Shared equipment"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            WHO WE SERVE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you grow, package, or move food — we're here for you.
          </p>
        </div>

        {/* Customer Segments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {customerSegments.map((segment, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all text-center"
            >
              <div className="bg-green-100 text-green-600 rounded-full p-3 w-fit mx-auto mb-4">
                {segment.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{segment.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{segment.description}</p>
              <ul className="text-left space-y-1 text-sm">
                {segment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/2348182443958"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <span>Get Custom Solutions</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;