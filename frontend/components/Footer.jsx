import React from "react";
import { IconBrandLinkedin, IconBrandFacebook, IconBrandX, IconBrandInstagram, IconBrandMastodon, IconBrandZulip } from "@tabler/icons-react";  // Importing Tabler icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Social Media Section */}
        <div className="flex items-center space-x-4">
          <span>Contact us on</span>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/DevXsphere" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin className="text-white hover:text-gray-300 cursor-pointer" size={30} />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <IconBrandFacebook className="text-white hover:text-gray-300 cursor-pointer" size={30} />
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com/DevXsphere" target="_blank" rel="noopener noreferrer">
            <IconBrandX className="text-white hover:text-gray-300 cursor-pointer" size={30} />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/devXsphere/" target="_blank" rel="noopener noreferrer">
            <IconBrandInstagram className="text-white hover:text-gray-300 cursor-pointer" size={30} />
          </a>

          {/* Mastodon */}
          <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer">
            <IconBrandMastodon className="text-white hover:text-gray-300 cursor-pointer" size={30} />
          </a>

          {/* Zulip */}
          <a href="https://zulip.com" target="_blank" rel="noopener noreferrer">
            <IconBrandZulip className="text-white hover:text-gray-300 cursor-pointer" size={30} />
          </a>
        </div>

        {/* Call to Action Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
          BECOME A VOLUNTEER
        </button>

        {/* Copyright Section */}
        <div>
          <p className="text-white">Copyright © 2024 devxsphere</p>
        </div>

      </div>
    </footer>
  );
}
