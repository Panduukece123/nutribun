import React, { useEffect } from "react";
import { Heart, Award, Users, Leaf } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Heart className="h-10 w-10 text-green-600" />,
      title: "Health First",
      description:
        "We prioritize your health in every recipe and ingredient choice we make.",
    },
    {
      icon: <Award className="h-10 w-10 text-green-600" />,
      title: "Quality Assurance",
      description:
        "We never compromise on quality, sourcing only the finest ingredients.",
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Community Focus",
      description:
        "We believe in building a healthier community through better nutrition.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Sustainability",
      description:
        "We are committed to sustainable practices in every aspect of our business.",
    },
  ];

  const team = [
    {
      name: "Dr. Maya Patel",
      role: "Founder & Nutritionist",
      image:
        "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg",
      bio: "With over 15 years of experience in nutrition science, Dr. Patel founded Nutribun with a mission to make healthy bread accessible to all.",
    },
    {
      name: "Chef Thomas Rodriguez",
      role: "Head Baker",
      image: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg",
      bio: "A master baker with international training, Chef Thomas brings artisanal techniques to create our signature healthy yet delicious breads.",
    },
    {
      name: "Sophia Kim",
      role: "Product Development",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
      bio: "As our innovation leader, Sophia combines creativity with nutritional science to develop new products that delight and nourish.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-green-100">
              Founded with a passion for nutrition and a love for bread,
              Nutribun is revolutionizing the way people think about this staple
              food.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="aa.jpg"
                alt="Nutribun bakery"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                The Nutribun Journey
              </h2>
              <p className="text-gray-600 mb-4">
                Nutribun was born in 2024 from a simple idea: creating a
                high-protein, naturally sweet bread that meets the needs of
                growing children and busy students—without compromising on
                taste.
              </p>
              <p className="text-gray-600 mb-4">
                Using wholesome ingredients like protein-rich flour, fresh eggs,
                creamy milk, and real strawberries, our founder crafted a recipe
                that’s both nutritious and irresistibly delicious. After testing
                and perfecting the blend, Nutribun quickly became a favorite
                among parents and students looking for healthier daily options.
              </p>
              <p className="text-gray-600">
                What started as a small kitchen experiment has now grown into a
                trusted name in healthy baking. And while we’ve grown, our
                mission stays the same: to make smart, protein-packed bread that
                supports active lives—one sweet bite at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Nutribun, our values guide everything we do, from recipe
              development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}

      {/* Our Mission */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-green-100 mb-8">
              "To fuel young minds and active lives with high-protein, naturally
              sweet bread that’s both nutritious and delicious."
            </p>
            <p className="text-green-100">
              Every day, we stay committed to this mission by crafting bread
              that supports the energy and growth needs of children and
              students—using quality ingredients and flavors they love. Because
              with Nutribun, health and taste always go hand in hand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
