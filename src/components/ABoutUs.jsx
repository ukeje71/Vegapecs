import { useEffect, useState, useRef } from "react";
import { Leaf, Shield, Globe, Award } from "lucide-react";

const Counter = ({ target, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span
      ref={ref}
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const AboutUs = () => {
  const stats = [
    { id: 1, target: 500, suffix: "+", label: "Farms Empowered" },
    { id: 2, target: 80, suffix: "%", label: "Reduced Post-Harvest Loss" },
    { id: 3, target: 36, suffix: "", label: "States Served" },
    { id: 4, target: 5, suffix: "M+", label: "Kilos Preserved" },
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Affordable, Food-safe packaging",
      description:
        "High-quality, durable materials at prices that work for small businesses. No compromise on safety or standards. ",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Nationwide delivery & Easy ordering",
      description:
        "Order directly via whatsapp, get quick responses, and enjoy fast delivery.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "We understand local agro needs",
      description:
        "We offer packaging that truly fits Nigerian food products and storage challenges.",
    },
  ];

  const StatCard = ({ stat }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={`bg-green-50 rounded-lg p-6 text-center transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <p className="text-3xl font-bold text-green-600 mb-2">
          <Counter target={stat.target} suffix={stat.suffix} />
        </p>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    );
  };

  const ValueCard = ({ value, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="text-green-600 mb-4">{value.icon}</div>
        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
        <p className="text-gray-600">{value.description}</p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solving Africa's Post-Harvest Challenge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We started with one question:{" "}
            <span className="text-green-600 font-medium">
              Why grow food and still go hungry?
            </span>
            <br />
            The answer led us to build smarter storage solutions for Nigerian
            food system.
          </p>
        </div>

        {/* Core Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-6 inline-flex items-center">
              <span className="mr-2">🌾</span>
              <span className="font-medium">Our Origin Story</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              From Problem to Solution
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              In 2023, our founders witnessed 40% of a maize harvest spoil
              before reaching market - not from poor farming, but from
              inadequate storage and poor access to storage and packaging solutions. This preventable loss became our mission.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, we combine{" "}
              <span className="font-semibold">practical tools</span> with{" "}
              <span className="font-semibold">deep local knowledge</span> to empower farmers, processors, and food businesses - Starting small, building smart.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors duration-200"
            >
              Meet Our Team
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 text-white">
              <span className="text-xl">Our Storage Solutions in Action</span>
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Food Businesses Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just sell products - we deliver measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <Award className="h-10 w-10 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Harvest?
            </h2>
            <p className="text-lg mb-6">
              Join <Counter target={500} suffix="+" duration={1.5} /> farms and
              food businesses preserving more and wasting less
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-green-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                View Product Catalog
              </a>
              <a
                href="https://wa.me/2348182443958"
                className="bg-green-700 hover:bg-green-800 font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Consult Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
