"use client";
import React, { useState } from 'react'

export default function AboutPage() {
  // State to manage which tab is open. 1 is open by default.
  const [openTab, setOpenTab] = useState<number | null>(1);

  const tabData = [
    {
      id: 1,
      title: "About My School and School Life ",
      content: "I study in the reputed private school in my city, and I am glad to be a student of this school. My school is one of the most renowned schools in my town.  My school is large and beautiful, with excellent facilities for sports, academics, and extracurricular activities."
    },
    {
      id: 2,
      title: "Games",
      content: " 2 It has clean classrooms and a big playground to play games."
    },
    {
      id: 3,
      title: "School Life",
      content: "School life is a wonderful phase where we make friends gain knowledge, and lay the foundation for our future. It’s a time filled with fun and learning, creating memories that stay with us forever."
    },
    {
      id: 4,
      title: "What is a few sentences for school?",
      content: "School is an institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is commonly compulsory.24 Sept 2025."
    }
  ];

  return (
    <div className='bg-amber-50'>
      <div className="image bg-amber-50 w-full p-5 text-center">
        <img src="/images/about.jpeg" alt="About Us" className='mx-auto block mt-10 border-2 border-gray-500 shadow-lg rounded-lg' />
      </div>

      {/* Tabs */}
      <div className="tabs container mx-auto px-4 py-12">
        <div className="w-full max-w-3xl mx-auto">
          {tabData.map((tab) => (
            <div key={tab.id} className="border-b border-black">
              <button
                onClick={() => setOpenTab(openTab === tab.id ? null : tab.id)}
                className="w-full text-left py-4 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold text-black">{tab.title}</h1>
                  <span className={`transform transition-transform duration-300 text-black ${openTab === tab.id ? 'rotate-180' : ''}`}>▼</span>
                </div>
              </button>
              {openTab === tab.id && (
                <div className="pb-4 pt-2">
                  <p className="text-gray-600">{tab.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
