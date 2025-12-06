"use client"
import React from 'react';

export default function LocationPage() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Location</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Visit our beautiful campus. Find us easily using the map and directions below.
          </p>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto mb-12 bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.220038454227!2d82.93561637452967!3d27.149366249882085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996d7baa2bd742d%3A0xe9763345ca21bfd!2sLittle%20flower%20school%20Bansi!5e0!3m2!1sen!2sin!4v1764958085261!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>

        {/* Address & Transport Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Address & Hours */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Bansi</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Address</h4>
                <p className="text-gray-600">Little Flower School,Bansi  City,Siddharth Nagar</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Office Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Getting Here */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Getting Here</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">By Public Transport</h4>
                <p className="text-gray-600">The nearest bus stop, 'Knowledge City Stop', is a 5-minute walk from the campus. Buses 15A and 22B run frequently.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">School Bus Service</h4>
                <p className="text-gray-600">We offer a comprehensive bus service covering major areas of the city. Please contact the transport office for route details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}