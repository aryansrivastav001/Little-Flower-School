import React from 'react'

export default function ContactPage() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We would love to hear from you! Whether you have a question about admissions, curriculum, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <span className="text-blue-900 text-xl">📍</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Address</h4>
                <p className="text-gray-600">Little Flower School, 123 Education Lane, Knowledge City, 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <span className="text-blue-900 text-xl">✉️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">aryansrivastav2121@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <span className="text-blue-900 text-xl">📞</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Phone</h4>
                <p className="text-gray-600">+91 7991915131</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
