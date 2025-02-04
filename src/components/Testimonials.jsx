import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      content: 'The photos from our wedding day were absolutely stunning. Every precious moment was captured beautifully.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      content: 'Professional, punctual, and produced amazing photos for our company event. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Portrait Client',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      content: 'The family portrait session exceeded our expectations. The photos will be cherished forever.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;