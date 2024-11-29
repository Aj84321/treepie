import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductCard } from '@/components/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    category: 'Essential Collection',
  },
  {
    id: '2',
    name: 'Vintage Graphic Tee',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80',
    category: 'Graphic Collection',
  },
  {
    id: '3',
    name: 'Urban Street Tee',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80',
    category: 'Urban Collection',
  },
  {
    id: '4',
    name: 'Custom Design Tee',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
    category: 'Custom Collection',
  },
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Collection</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our most popular designs and styles, crafted with premium materials for ultimate comfort and style.
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};