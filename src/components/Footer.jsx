import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, ShoppingCart } from 'lucide-react';

const FAQSection = () => {
  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Phone className="mr-2" /> CONTACT US
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-green-600 rounded-full p-1 mr-3">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="https://wa.me/2348182443958" className="hover:underline">
                  WhatsApp: +234 818 244 3958
                </a>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 rounded-full p-1 mr-3">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:hello@vegapecs.com" className="hover:underline">
                  Email: hello@vegapecs.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="bg-green-600 rounded-full p-1 mr-3">
                  <Instagram className="h-4 w-4" />
                </span>
                <a href="https://instagram.com/vegapecs" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram: @vegapecs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="mb-4 text-green-100">
              Get farming tips and special offers delivered to your inbox
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-green-800/50 border border-green-600 focus:outline-none focus:ring-2 focus:ring-white placeholder-green-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-green-100 transition-all flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe
              </button>
            </form>
          </div>

          {/* Address & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Location</h3>
            <address className="not-italic mb-6 text-green-100">
              123 Agric Road<br />
              Farm Business District<br />
              Lagos, Nigeria
            </address>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 hover:bg-white hover:text-green-800 rounded-full p-2 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-white hover:text-green-800 rounded-full p-2 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-white hover:text-green-800 rounded-full p-2 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-white hover:text-green-800 rounded-full p-2 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Quote & CTA */}
        <div className="border-t border-green-600 pt-8 text-center">
          <blockquote className="text-xl italic mb-6 max-w-2xl mx-auto">
            "Food is power. Don't let it spoil." Protect what you grow and your products— order affordable storage & packaging tools today.
          </blockquote>
          <a
            href="https://wa.me/2348182443958"
            className="inline-flex items-center px-6 py-3 bg-white text-green-800 font-bold rounded-lg hover:bg-green-100 transition-all shadow-lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Shop Now on WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-green-300 mt-12 text-sm">
          <p>© {new Date().getFullYear()} VegaPecs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FAQSection;