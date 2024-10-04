import React from "react";
import {FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter,FaLinkedinIn } from "react-icons/fa6";
import { TbBrandMastodon, TbBrandZulip } from "react-icons/tb";

export default function Footer() {

  const socialMedias = [
    {
      link: 'https://www.linkedin.com/company/DevXsphere',
      icon: <FaLinkedinIn className="size-8 md:size-10 xl:size-12" />,
    },
    {
      link: 'https://www.facebook.com',
      icon: <FaFacebookF className="size-8 md:size-10 xl:size-12" />,
    },
    {
      link: 'https://x.com/DevXsphere',
      icon: <FaXTwitter className="size-8 md:size-10 xl:size-12" />,
    },
    {
      link: 'https://www.instagram.com/devXsphere/',
      icon: <FaInstagram className="size-8 md:size-10 xl:size-12" />,
    },
    {
      link: 'https://mastodon.social',
      icon: <TbBrandMastodon className="size-8 md:size-10 xl:size-12" />,
    },
    {
      link: 'https://zulip.com',
      icon: <TbBrandZulip className="size-8 md:size-10 xl:size-12" />,
    },
  ]

  return (
    <footer className="bg-black text-white pt-8 pb-24" id="join-us">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Social Media Section */}
        <div className="my-3">
          <span className="text-xl">Contact us on</span>
          <div className="flex items-center space-x-4 my-4">
            {
              socialMedias.map((socialMedia) => {
                return (
                  <a href={socialMedia.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-2xl">
                    {socialMedia.icon}
                  </a>
                )
              })
            }
          </div>


        </div>

        {/* Call to Action Button */}
        <button className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
          BECOME A VOLUNTEER
        </button>

        {/* Copyright Section */}

      </div>
      <div>
        <p className="text-white opacity-25 my-3 text-center">Copyright © 2024 devxsphere</p>
      </div>
    </footer>
  );
}
