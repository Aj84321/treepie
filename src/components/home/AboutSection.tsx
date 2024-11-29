import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Palette, Recycle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Premium Quality",
      description: "100% cotton, pre-shrunk fabric that maintains shape and comfort wash after wash."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Designs",
      description: "Create your unique design or choose from our curated collection of artwork."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Sustainable Fashion",
      description: "Eco-friendly materials and ethical manufacturing processes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine quality craftsmanship with innovative design tools to create t-shirts that you'll love to wear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};