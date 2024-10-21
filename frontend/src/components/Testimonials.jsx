import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper import
import "swiper/css"; // Swiper CSS import

export default function Testimonials() {
  const testimonials = [
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
      name: "Maria Smantha",
      job: "Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic.",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
      name: "Lisa Cudrow",
      job: "Graphic Designer",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
      name: "John Smith",
      job: "Marketing Specialist",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
      name: "Anna Lee",
      job: "Project Manager",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <div className="container mx-auto px-2 md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
        <Swiper
          spaceBetween={20} // Space between each card
          slidesPerView={1} // Default 1 slide visible
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 slides for medium screens
            1024: { slidesPerView: 3 }, // 3 slides for medium screens
            1280: { slidesPerView: 4 }, // 4 slides for large screens
          }}
        >
          {testimonials.map((Testimonial) => {
            return (
              <SwiperSlide key={Testimonial.name}>
                <div
                  className="flex flex-col items-center hover:scale-110 hover:duration-150 bg-white p-6 rounded-lg shadow-lg 
          w-full lg:w-72 h-72"
                >
                  <img
                    src={Testimonial.url}
                    className="w-16 h-16 rounded-full mb-4"
                    alt="User"
                  />
                  <h5 className="mb-2 text-lg font-bold">{Testimonial.name}</h5>
                  <h6 className="mb-4 font-medium text-primary">
                    {Testimonial.job}
                  </h6>
                  <p className="text-gray-600 text-sm">{Testimonial.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}
