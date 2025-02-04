import React from 'react';
import { Calendar, Users, Camera, Heart } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Weddings',
      description: 'Capturing your special day with elegance and emotion.',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Corporate Events',
      description: 'Professional coverage for your business gatherings.',
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Portrait Sessions',
      description: 'Personal and family portraits that tell your story.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Engagement Shoots',
      description: 'Romantic sessions to celebrate your love story.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Managed Events</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide professional
            photography services for all types of events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-black mb-4">{event.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
            Book an Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;