import { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Facebook, Leaf, Twitter, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm("xblynllq");
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4 sm:text-left text-center">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Leaf className="text-green-400 w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                VegaPecs
              </span>
            </div>
            <p className="text-green-100">
              Empowering African farmers with innovative storage solutions since 2020.
            </p>
            <div className="flex space-x-4 pt-2 items-center justify-center sm:justify-start">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-green-300 hover:text-white transition-colors"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:text-left text-center">
            <h3 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h3>
            <ul className="space-y-2">
              {['Products', 'Solutions', 'Pricing', 'Testimonials', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-green-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="sm:text-left text-center">
            <h3 className="text-lg font-semibold mb-4 text-green-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center sm:justify-start">
                <Phone className="h-5 w-5 mt-0.5 mr-3 text-green-300 flex-shrink-0" />
                <div>
                  <p className="text-green-100">+234 818 244 3958</p>
                  <p className="text-sm text-green-300">Mon-Fri, 9am-5pm</p>
                </div>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Mail className="h-5 w-5 mt-0.5 mr-3 text-green-300 flex-shrink-0" />
                <a href="mailto:hello@vegapecs.com" className="text-green-100 hover:text-white">
                  hello@vegapecs.com
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 text-green-300 flex-shrink-0" />
                <address className="not-italic text-green-100">
                  123 Agric Road<br />
                  Lagos, Nigeria
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="sm:text-left text-center">
            <h3 className="text-lg font-semibold mb-4 text-green-300">Newsletter</h3>
            {state.succeeded ? (
              <div className="bg-green-700/50 p-4 rounded-lg">
                <p className="text-green-100 font-medium">
                  Thank you for subscribing!
                </p>
                <p className="text-sm text-green-200 mt-1">
                  You'll receive our next farming tips.
                </p>
              </div>
            ) : (
              <>
                <p className="text-green-100 mb-4">
                  Get farming tips and exclusive offers
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-green-900/50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-green-400"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-300 text-sm mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg transition-all flex items-center justify-center ${
                      state.submitting ? 'opacity-80' : 'hover:from-green-600 hover:to-green-700 hover:shadow-md'
                    }`}
                  >
                    {state.submitting ? (
                      <span className="animate-pulse">Subscribing...</span>
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Subscribe
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700/50 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} VegaPecs. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;