import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Teams = [
  {
    id: 1,
    pfpImg: "/Team/pfp speakerone.jpeg",
    name: "Utkarsh Upadhyay",
    post: "Founder & lead",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://x.com/utk2103",
      instagram: "https://instagram.com/utkarsh_k21",
    },
  },
  {
    id: 2,
    pfpImg: "/Team/Saurabh.png",
    name: "Saurabh Upadhyay",
    post: "Founder & outreach",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
  {
    id: 3,
    pfpImg: "/Team/Abhishek Sharma.jpg",
    name: "Abhishek Sharma",
    post: "Web lead",
    links: {
      linkedIn: "https://www.linkedin.com/in/abhishek-sharma-655182215/",
      twitter: "https://x.com/As0755213Sharma",
      instagram: "https://www.instagram.com/abhi.navsharma_/",
    },
  },
  {
    id: 4,
    pfpImg: "/Team/Aakash Mahajan.png",
    name: "Aakash Mahajan",
    post: "Web dev contributer",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
  {
    id: 5,
    pfpImg: "/Team/RAJVEER SINGH.jpg",
    name: "Rajveer Singh",
    post: "Community advocate",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
  {
    id: 6,
    pfpImg: "/Team/Ashika Gupta.png",
    name: "Ashika Gupta",
    post: "UI/UX team",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
  {
    id: 7,
    pfpImg: "/Team/Kusum Kharayat.jpg",
    name: "Kusum Kharayat",
    post: "Community advocate",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
  {
    id: 8,
    pfpImg: "/Team/YASHDEEP SINGH.jpg",
    name: "Yashdeep Singh",
    post: "Social media",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
  {
    id: 9,
    pfpImg: "/Team/vanshika goel.jpeg",
    name: "Vanshika Goel",
    post: "PR and social media",
    links: {
      linkedIn: "https://www.linkedin.com/in/utk2103/",
      twitter: "https://www.linkedin.com/in/utk2103/",
      instagram: "https://www.linkedin.com/in/utk2103/",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            The passionate individuals who make our open-source community thrive.
            Each member brings unique expertise and dedication to our mission.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="team-swiper"
        >
          {Teams.map((member) => (
            <SwiperSlide key={member.id}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-blue-300 dark:border-blue-600 bg-gray-100 dark:bg-gray-700">
                    <img
                      src={member.pfpImg}
                      alt={`${member.name}'s profile`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.post}</p>
                  <div className="flex gap-4 justify-center mb-3">
                    {member.links.linkedIn && member.links.linkedIn !== "#" && (
                      <a
                        href={member.links.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <Linkedin size={22} />
                      </a>
                    )}
                    {member.links.twitter && member.links.twitter !== "#" && (
                      <a
                        href={member.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <Twitter size={22} />
                      </a>
                    )}
                    {member.links.instagram && member.links.instagram !== "#" && (
                      <a
                        href={member.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                      >
                        <Instagram size={22} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
