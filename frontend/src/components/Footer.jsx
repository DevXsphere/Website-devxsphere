import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { TbBrandMastodon, TbBrandZulip } from "react-icons/tb";

export default function Footer() {
  const socialMedias = [
    {
      link: "https://www.linkedin.com/company/DevXsphere",
      icon: <FaLinkedinIn className="size-8 md:size-8 xl:size-10" />,
      className:
        " text-white hover:bg-blue-600 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110",
    },
    {
      link: "https://www.facebook.com",
      icon: <FaFacebookF className="size-8 md:size-8 xl:size-10" />,
      className:
        " text-white hover:bg-blue-500 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110",
    },
    {
      link: "https://x.com/DevXsphere",
      icon: <FaXTwitter className="size-8 md:size-8 xl:size-10" />,
      className:
        " text-white hover:bg-gray-800 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110",
    },
    {
      link: "https://www.instagram.com/devXsphere/",
      icon: <FaInstagram className="size-8 md:size-8 xl:size-10" />,
      className:
        " text-white hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110",
    },
    {
      link: "https://mastodon.social",
      icon: <TbBrandMastodon className="size-8 md:size-8 xl:size-10" />,
      className:
        " text-white hover:bg-purple-600 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110",
    },
    {
      link: "https://zulip.com",
      icon: <TbBrandZulip className="size-8 md:size-8 xl:size-10" />,
      className:
        " text-white hover:bg-green-600 rounded-full p-2 transition-all duration-300 ease-in-out transform hover:scale-110",
    },
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Section */}
        <div className="my-3">
          <span className="text-xl">Contact Us </span>
          <div className="flex items-center space-x-4 my-4">
            {socialMedias.map((socialMedia, index) => {
              return (
                <a
                  key={index}
                  href={socialMedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialMedia.className}
                >
                  {socialMedia.icon}
                </a>
              );
            })}
          </div>
        </div>
        {/* Call to Action Button */}
        <button className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
          BECOME A VOLUNTEER
        </button>

        {/* Copyright Section */}
      </div>
      <div>
        <p className="text-white opacity-25 my-3 text-center">
          Copyright © 2024 devxsphere
        </p>
      </div>
    </footer>
  );
}
