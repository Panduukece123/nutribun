import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, GaugeCircle, Heart, Leaf } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
      title: 'High Quality Ingredients',
      description: 'We source only the finest organic and natural ingredients for our breads.'
    },
    {
      icon: <GaugeCircle className="h-10 w-10 text-green-600" />,
      title: 'Nutrient-Rich',
      description: 'Packed with essential vitamins, minerals, and fiber for a balanced diet.'
    },
    {
      icon: <Heart className="h-10 w-10 text-green-600" />,
      title: 'Heart Healthy',
      description: 'Low in saturated fats and cholesterol for better heart health.'
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: 'Eco-Friendly',
      description: 'Sustainable practices from farm to table with eco-friendly packaging.'
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Rasa Susu',
      description: 'Dengan taburan susu bubuk yang manis dan perpaduan roti yang lembuk.',
      image: 'susu1.png',
      price: 'Rp 13K',
      category: 'signature',
      tag: 'Popular'
    },
    {
      id: 2,
      name: 'Rasa Stroberry',
      description: 'Dengan buah asli strobery dibarengi dengan krim membuat rasa menjadi lebih manis',
      image: 'stroberry.jpg',
      price: 'Rp 13K',
      category: 'signature',
      tag: 'Bestseller'
    },
    
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      content: 'Nutribun has become an essential part of my diet. It gives me the energy I need for my workouts while keeping me full and satisfied!',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Nutrition Coach',
      content: 'I recommend Nutribun to all my clients. The nutritional profile is impressive, and it tastes amazing. A perfect combination!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Mom of Three',
      content: 'My kids love Nutribun! As a parent, I feel good knowing they\'re eating something healthy that they actually enjoy.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5
    },
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Choose Nutribun?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commitment to health and nutrition sets us apart. Here's why Nutribun is becoming the go-to choice for health-conscious individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-stone-50 p-6 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Featured Products</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our most popular healthy bread options, crafted with care and packed with nutrients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition duration-300">
              View all products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="story.jpg" 
                alt="Nutribun bakery" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Nutribun was created with a clear purpose: to provide a high-protein, naturally sweet bread that supports the needs of growing children and busy students.
              </p>
              <p className="text-gray-600 mb-6">
                Our team understands the importance of nutritious food that fits into a fast-paced lifestyle without compromising on taste. That’s why each Nutribun loaf is made with carefully selected ingredients, rich in protein and naturally sweetened, making it a perfect snack or meal companion for active kids and hardworking college students.
              </p>
              <Link 
                to="/about" 
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 inline-flex items-center"
              >
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about Nutribun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try Nutribun?</h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Join the new generation of students and parents who trust Nutribun to fuel their day—deliciously and nutritiously..
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="px-8 py-3 bg-white text-green-800 font-medium rounded-md hover:bg-green-100 transition duration-300"
            >
              Shop Now
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-green-700 transition duration-300"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;