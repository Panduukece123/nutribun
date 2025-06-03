import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < testimonial.rating; i++) {
      stars.push(<Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />);
    }
    for (let i = testimonial.rating; i < 5; i++) {
      stars.push(<Star key={i + 5} className="h-4 w-4 text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center space-x-1 mb-4">
        {renderStars()}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;