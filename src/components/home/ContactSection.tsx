import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center mb-12">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@treepie.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Fashion Street, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <Input
                label="Name"
                type="text"
                placeholder="Your name"
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="Your email"
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  rows={4}
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};