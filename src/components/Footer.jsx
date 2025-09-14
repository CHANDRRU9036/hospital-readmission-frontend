import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gradient-to-r from-slate-900 via-sky-900 to-cyan-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <img src="/images/hospital-logo-detailed.svg" className="h-9 w-9 object-contain" alt="Hospital Readmission Logo" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Hospital Readmission</h3>
              <p className="text-sky-200 text-sm">Predictive Model</p>
            </div>
          </div>
          <p className="text-sky-100 text-sm leading-relaxed max-w-md">
          Build a predictive model that can accurately classify patients as readmitted or not, based on the provided features. This model helps healthcare providers identify high-risk patients and take proactive measures to prevent readmissions.
          </p>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/sign-in" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/sign-up" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                Sign Up
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Contact Info */}
        {/* <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <div className="space-y-2 text-sm text-blue-200">
            <p>📧 info@hospitalreadmission.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 Healthcare District, Medical City</p>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sky-200 text-sm">
            <span>© {new Date().getFullYear()} Hospital Readmission. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
