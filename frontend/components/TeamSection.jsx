import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


// Team data array
const teamData = [
  {
    name: "Utkarsh Upadhyay",
    position: "Founder & Lead",
    imgSrc: "/Team/pfp speakerone.jpeg",
    linkedin: "https://www.linkedin.com/in/utk2103/",
    twitter: "https://x.com/utk2103",
    instagram: "https://instagram.com/utkarsh_k21",
  },
  {
    name: "Saurabh Upadhyay",
    position: "Founder & outreach",
    imgSrc: "public/Team/Saurabh.png",
    linkedin: "https://www.linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Abhishek Sharma",
    position: "Web lead",
    imgSrc: "/Team/Abhishek Sharma.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Aakash Mahajan",
    position: "Web dev contributer",
    imgSrc: "/Team/Aakash Mahajan.png",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Rajveer Singh",
    position: "Community advocate",
    imgSrc: "/Team/RAJVEER SINGH.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Ashika Gupta",
    position: "UI/UX team",
    imgSrc: "/Team/Ashika Gupta.png",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Kusum Kharayat",
    position: "Community advocate",
    imgSrc: "/Team/Kusum Kharayat.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Yashdeep Singh",
    position: "Social media",
    imgSrc: "/Team/YASHDEEP SINGH.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Vanshika Goelt",
    position: "PR and social media",
    imgSrc: "/Team/vanshika goel.jpeg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  // Add more team members as needed...
];

export default function ImprovedTeamSection() {
  return (
    <div className="flex flex-col w-full my-12 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            {/* Section Title */}
            <div className="flex flex-wrap justify-center text-center mb-16">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-white text-4xl font-bold mb-4">Meet Our Team</h1>
                <p className="text-gray-300 text-lg font-light">
                  A group of skilled professionals committed to delivering the best.
                </p>
              </div>
            </div>

            {/* Swiper Section */}
            <Swiper
            
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 }, // 1 slide on small screens
                768: { slidesPerView: 2 }, // 2 slides on medium screens
                1024: { slidesPerView: 3 }, // 3 slides on large screens
                1280: { slidesPerView: 4 }, // 4 slides on extra-large screens
              }}
              pagination={{ clickable: true }}
            >
              {teamData.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center bg-gray-900 rounded-3xl p-6 transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
                    <img
                      className="rounded-full w-32 h-32 object-cover border-4 border-gray-700 shadow-lg"
                      src={member.imgSrc}
                      alt={member.name}
                    />
                    <div className="text-center mt-4">
                      <h1 className="text-white text-xl font-semibold">{member.name}</h1>
                      <p className="text-gray-400 font-light">{member.position}</p>
                    </div>
                    <div className="flex justify-center mt-4 space-x-4">
                      <a
                        href={member.linkedin}
                        className="text-indigo-400 hover:text-indigo-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mdi mdi-linkedin text-2xl"></i>
                      </a>
                      <a
                        href={member.twitter}
                        className="text-blue-300 hover:text-blue-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mdi mdi-twitter text-2xl"></i>
                      </a>
                      <a
                        href={member.instagram}
                        className="text-orange-400 hover:text-orange-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mdi mdi-instagram text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
