import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'wedding', 'portrait', 'nature', 'events'];
  
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      category: 'wedding',
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      category: 'portrait',
    },
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      category: 'nature',
    },
    {
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      category: 'events',
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
      category: 'wedding',
    },
    {
      url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
      category: 'portrait',
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      category: 'nature',
    },
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      category: 'events',
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Gallery</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold capitalize">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;