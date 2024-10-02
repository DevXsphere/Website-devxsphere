import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper import
import "swiper/css"; // Swiper CSS import

export default function TeamSection() {
  return (
    <div class="flex flex-col w-full my-12 px-4 md:px-12 lg:px-24"> {/* Changed background to dark */}
      <div class="flex flex-col">
        <div class="flex flex-col mt-8">
          <div class="container max-w-7xl px-4">
            <div class="flex flex-wrap justify-center text-center mb-24">
              <div class="w-full lg:w-6/12 px-4">
                <h1 class=" text-4xl font-bold mb-8"> {/* Text color to white */}
                  Meet the Team
                </h1>
                <p class="dark:text-gray-300 text-lg font-light"> {/* Text color to light gray */}
                  With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                </p>
              </div>
            </div>

            {/* Swiper Section */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3} // Adjust number of visible slides based on screen size
              breakpoints={{
                640: { slidesPerView: 1 }, // 1 slide on small screens
                768: { slidesPerView: 2 }, // 2 slides on medium screens
                1024: { slidesPerView: 3 }, // 3 slides on large screens
              }}
              pagination={{ clickable: true }}
             className="h-[30rem]"
            >
              {/* Team member 1 */}
              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-lg hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover" // Fixed image size
                      src="/Team/pfp speakerone.jpeg"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1"> {/* Text color to white */}
                      Utkarsh Upadhyay
                    </h1>
                    <div class="text-gray-400 font-light mb-2"> {/* Text color to light gray */}
                      Founder & lead
                    </div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="https://www.linkedin.com/in/utk2103/" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-400 mx-auto mt-2"></i>
                      </a>
                      <a href="https://x.com/utk2103" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                      </a>
                      <a href="https://instagram.com/utkarsh_k21" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide> 
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="public\Team\Saurabh.png"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Saurabh Upadhyay</h1>
                    <div class="text-gray-400 font-light mb-2">Founder & outreach</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Team member 2 */}
              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/Abhishek Sharma.jpg"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Abhishek Sharma</h1>
                    <div class="text-gray-400 font-light mb-2">Web lead</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="https://www.linkedin.com/in/abhishek-sharma-655182215/" target="_blank" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="https://x.com/As0755213Sharma" target="_blank" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="https://www.instagram.com/abhi.navsharma_/" target="_blank" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Additional team members can be added here */}
              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/Aakash Mahajan.png"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Aakash Mahajan</h1>
                    <div class="text-gray-400 font-light mb-2">Web dev contributer</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/RAJVEER SINGH.jpg"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Rajveer Singh</h1>
                    <div class="text-gray-400 font-light mb-2">Community advocate</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/Ashika Gupta.png"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Ashika Gupta</h1>
                    <div class="text-gray-400 font-light mb-2">UI/UX team</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide> 
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/Kusum Kharayat.jpg"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Kusum Kharayat</h1>
                    <div class="text-gray-400 font-light mb-2">Community advocate</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/YASHDEEP SINGH.jpg"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Yashdeep Singh</h1>
                    <div class="text-gray-400 font-light mb-2">Social media</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="flex flex-col shadow-2xl rounded-lg">
                  <a href="#" class="mx-auto">
                    <img
                      class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src="/Team/vanshika goel.jpeg"
                      alt="Team Member"
                    />
                  </a>
                  <div class="text-center mt-6">
                    <h1 class="dark:text-white text-xl font-bold mb-1">Vanshika Goel</h1>
                    <div class="text-gray-400 font-light mb-2">PR and social media</div>
                    <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" class="flex rounded-full hover:bg-indigo-700 h-10 w-10">
                        <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-blue-700 h-10 w-10">
                        <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" class="flex rounded-full hover:bg-orange-700 h-10 w-10">
                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
