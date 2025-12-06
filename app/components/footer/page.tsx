import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Little Flower School</h3>
            <p className="text-gray-300">
              123 Education Lane, Knowledge City, 12345
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline text-gray-300">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline text-gray-300">About Us</a></li>
              <li className="mb-2"><a href="/academics" className="hover:underline text-gray-300">Academics</a></li>
              <li className="mb-2"><a href="/admissions" className="hover:underline text-gray-300">Admissions</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Email: aryansrivastav2121@gmail.com</p>
            <p className="text-gray-300 mb-4">Phone: +91 7991915131</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-blue-900 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Aryan Srivastav. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
