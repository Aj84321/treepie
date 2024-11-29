import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <span className="text-sm text-gray-500">{category}</span>
            <h3 className="text-lg font-semibold mt-1">{name}</h3>
            <p className="text-xl font-bold mt-2">${price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};