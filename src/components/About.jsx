import React, { useState } from 'react';
import { Camera, Award, Users } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () => {
  const [openIndex, setOpenIndex] = useState(null); // State for toggling FAQ cards

  const toggleCard = (index) => {
    // Toggle open/close only for the clicked card
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-4">Capturing Moments, Creating Memories</h3>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience in professional photography, I've had the privilege
              of capturing countless precious moments and turning them into timeless memories.
              My passion lies in storytelling through my lens, whether it's a wedding, corporate
              event, or personal portrait session.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <Camera className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold">1000+</h4>
                <p className="text-sm text-gray-500">Photo Sessions</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold">15+</h4>
                <p className="text-sm text-gray-500">Awards Won</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <h4 className="font-semibold">500+</h4>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800"
              alt="Photographer at work"
              className="rounded-lg shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400"
              alt="Camera equipment"
              className="absolute -bottom-10 -left-10 w-64 rounded-lg shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Introduction section */}
        <div className="border border-lightDark rounded-[0.625rem] mt-40">
          <div className="flex gap-8 items-center pt-[2.5rem] px-[2.5rem]">
            {/* Name/Description above the image */}
            <div className="flex-shrink-0 w-full md:w-[40%] text-center">
              <h2 className="text-2xl font-bold text-gray-800">Hello, I'm Itachi Uchiha</h2>
              <p className="text-gray-500 mt-2">Photographer | Editor | Dreamer</p>
              <img src="About/intro1.jpg" alt="Photographer" className="w-full object-cover rounded-lg mt-8" />
            </div>

            {/* Content on the right */}
            <div className="flex-grow">
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                  <polygon points="12 17.27 18.18 21 15.54 13.97 21 9.24 14.81 9.24 12 2 9.19 9.24 3 9.24 8.46 13.97 5.82 21 12 17.27"></polygon>
                </svg>
                <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
                  Introduction
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-[0.875rem] mt-[0.75rem]">
                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world’s beauty as I see it.
                Born and raised in India, I draw inspiration from the rich diversity of my homeland, as well as from the captivating landscapes across the globe.
                Whether it's the vibrant colors of India or the serene views abroad, every photograph tells a story, and every frame is a piece of my heart.
                Join me as we embark on this visual odyssey, where culture, beauty, and moments of wonder unite.
              </p>

              {/* Let's Work Together Button */}
              <div className="mt-6 ml-6">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 mt-4 border border-yellow-500 text-yellow-500 font-medium rounded-md text-sm hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        
         {/* Contact Section */}
         <div className="mt-8 px-[2.5rem] flex justify-between items-center">
          <p className="text-gray-600 text-[1.23rem]">
            <strong>Email:</strong>
            <span className="mx-2"></span>
            <a href="mailto:your.email@example.com" className="hover:text-blue-500 focus:text-blue-500">
              your.email@example.com
            </a>
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter className="w-7 h-7" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram className="w-7 h-7" />
            </a>
          </div>
          <p className="text-gray-600 text-[1.23rem]">
            <strong>Phone:</strong>
            <a href="tel:+1234567890" className="hover:text-blue-500 focus:text-blue-500">
              +123 456 7890
            </a>
          </p>
        </div>
        <div className="border-b-2 border-customGray mt-8"></div> {/* This line adds the border below the section */}
        </div>

        
       {/* FAQ Section */}
<div className="mt-32 px-[2.5rem]">
  <div className="text-center">
    <h2 className="text-7xl font-bold text-gray-900 hover:text-teal-600 transition-all duration-300">Frequently Asked Questions</h2>
    <p className="text-gray-500 mt-6 text-lg">Find answers to your most common questions.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
    {/* Card 1 */}
    <div className="border border-lightDark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center px-6 py-4 cursor-pointer transition-transform transform hover:scale-105" onClick={() => toggleCard(0)}>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600">What type of Photography do you specialize in?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </div>
      {openIndex === 0 && (
        <div className="px-6 py-4 text-gray-600 bg-gray-50">
          <p>I specialize in Portrait, Landscape, Event, and Fine Art Photography. My work focuses on capturing moments that tell unique stories and evoke emotions.</p>
        </div>
      )}
    </div>

    {/* Card 2 */}
    <div className="border border-lightDark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center px-6 py-4 cursor-pointer transition-transform transform hover:scale-105" onClick={() => toggleCard(1)}>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600">How can I book a Photography session with you?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </div>
      {openIndex === 1 && (
        <div className="px-6 py-4 text-gray-600 bg-gray-50">
          <p>You can easily book a session by contacting me via the 'Contact' section on my website, or by reaching out through email or phone. I'll respond within 24 hours!</p>
        </div>
      )}
    </div>

    {/* Card 3 */}
    <div className="border border-lightDark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center px-6 py-4 cursor-pointer transition-transform transform hover:scale-105" onClick={() => toggleCard(2)}>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600">What equipment do you use?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </div>
      {openIndex === 2 && (
        <div className="px-6 py-4 text-gray-600 bg-gray-50">
          <p>I use top-of-the-line cameras, lenses, and lighting equipment to ensure the best quality. Some of my favorites include Canon EOS cameras, Sony mirrorless cameras, and various professional lenses.</p>
        </div>
      )}
    </div>

    {/* Card 4 */}
    <div className="border border-lightDark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center px-6 py-4 cursor-pointer transition-transform transform hover:scale-105" onClick={() => toggleCard(3)}>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-teal-600">How long does a session last?</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </div>
      {openIndex === 3 && (
        <div className="px-6 py-4 text-gray-600 bg-gray-50">
          <p>The duration of a session varies depending on the type of shoot. Portrait sessions typically last around 1-2 hours, while event photography may last several hours.</p>
        </div>
      )}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
