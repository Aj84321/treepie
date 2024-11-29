import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Express Yourself Through Custom T-Shirts
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Create your unique style with our premium quality t-shirts. Upload your designs or choose from our curated collections.
            </p>
            <div className="mt-10">
              <Button size="lg" className="group">
                Start Designing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="mt-10">
            <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80"
                alt="T-shirt collection"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};