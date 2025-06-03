import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
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
    {
      id: 3,
      name: 'Paket',
      description: 'Rasa strawberry + Rasa Susu membuat rasa makin enak dan harga makin murah',
      image: '25k.png',
      price: 'Rp 25K',
      category: 'signature',
      tag: 'promo'
    },
    
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'signature', name: 'Signature' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'special-diet', name: 'Special Diets' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-green-100">
              Discover our range of nutritious, delicious bread options crafted with the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 overflow-x-auto py-2">
              <Filter className="h-5 w-5 text-green-600 flex-shrink-0" />
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-100'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Nutrition Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Nutrition Facts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Nutribun, we believe great nutrition starts with real, honest ingredients. Here’s what makes our high-protein, sweet bread a smart choice for kids and students alike.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-stone-50 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Our Standard Ingredients</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>High-protein wheat flour (supports growth and energy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Organic ancient grains (quinoa, amaranth, millet)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fresh eggs (excellent source of protein and vitamins)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Full cream milk (rich in calcium and vitamin D)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Granulated sugar (for a touch of natural sweetness)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fresh strawberries (natural source of antioxidants and vitamin C)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Filtered water</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Nutritional Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>High in protein (essential for growing kids and active students)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Source of calcium and vitamin D (supports bone health)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Contains vitamins A, B-complex, and E</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Antioxidants from real strawberries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Natural sugars for quick energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Rich, satisfying taste with balanced nutrition</span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">What We Never Use</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-red-500">✕</span>
                  <span>Artificial preservatives</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-red-500">✕</span>
                  <span>High fructose corn syrup</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-red-500">✕</span>
                  <span>Artificial colors or flavors</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-red-500">✕</span>
                  <span>Artificial flavors</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-red-500">✕</span>
                  <span>Bromated flour</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-red-500">✕</span>
                  <span>GMO ingredients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;