import React from 'react';
import { Heart, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          
          <div className="flex flex-col items-center md:items-center ">
            <p className="text-gray-400 flex items-center text-center">
              <span>&copy; 2025. Crafted with</span>
              <Heart size={16} className="mx-1 text-accent-500" />
              <span>by Yankho Kamtukulo. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;