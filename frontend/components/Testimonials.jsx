import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper import
import "swiper/css"; // Swiper CSS import

export default function Testimonials() {
  return (
    <div className="container mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
        <Swiper
          spaceBetween={20}          // Space between each card
          slidesPerView={3}           // 3 slides visible on desktop
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide for small screens
            1024: { slidesPerView: 3 }, // 3 slides for large screens
            1440: { slidesPerView: 4 }  // 4 slides for extra-large screens
          }}
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg h-64 w-72">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                className="w-16 h-16 rounded-full mb-4"
                alt="User"
              />
              <h5 className="dark:text-black mb-2 text-lg font-bold">Maria Smantha</h5>
              <h6 className="dark:text-black mb-4 font-medium text-primary">Web Developer</h6>
              <p className="text-gray-600 text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic."
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg h-64 w-72">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                className="w-16 h-16 rounded-full mb-4"
                alt="User"
              />
              <h5 className="dark:text-black mb-2 text-lg font-bold">Lisa Cudrow</h5>
              <h6 className="dark:text-black mb-4 font-medium text-primary">Graphic Designer</h6>
              <p className="text-gray-600 text-sm">
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg h-64 w-72">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                className="w-16 h-16 rounded-full mb-4"
                alt="User"
              />
              <h5 className="dark:text-black mb-2 text-lg font-bold">John Smith</h5>
              <h6 className="dark:text-black mb-4 font-medium text-primary">Marketing Specialist</h6>
              <p className="text-gray-600 text-sm">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg h-64 w-72">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                className="w-16 h-16 rounded-full mb-4"
                alt="User"
              />
              <h5 className="dark:text-black mb-2 text-lg font-bold">Anna Lee</h5>
              <h6 className="dark:text-black mb-4 font-medium text-primary">Project Manager</h6>
              <p className="text-gray-600 text-sm">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
