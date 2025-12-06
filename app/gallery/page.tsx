import React from 'react';

export default function GalleryPage() {
  // Aap yahan apne images ki list bana sakte hain
  const galleryItems = [
    { id: 1, title: "Campus View", description: "A beautiful shot of our main building.", imageUrl: "/images/campus.jpeg" },
    { id: 2, title: "Annual Sports Day", description: "Students participating in a relay race.", imageUrl: "/images/campus.jpeg" },
    { id: 3, title: "Science Exhibition", description: "An innovative project by our students.", imageUrl: "/images/campus.jpeg" },
    { id: 4, title: "Library", description: "Our well-stocked library for students.", imageUrl: "/images/campus.jpeg" },
    { id: 5, title: "Classroom", description: "A modern and interactive learning space.", imageUrl: "/images/campus.jpeg" },
    { id: 6, title: "Art & Craft", description: "Creativity at its best in the art class.", imageUrl: "/images/campus.jpeg" },
    { id: 7, title: "Music Room", description: "Students learning to play instruments.", imageUrl: "/images/campus.jpeg" },
    { id: 8, title: "Computer Lab", description: "Students getting hands-on tech experience.", imageUrl: "/images/campus.jpeg" },
    { id: 9, title: "Graduation Day", description: "Celebrating the success of our students.", imageUrl: "/images/campus.jpeg" },
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Gallery</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse into the vibrant life at Little Flower School. Explore our campus, events, and the moments that make our school special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:scale-105 transition-transform duration-300">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}