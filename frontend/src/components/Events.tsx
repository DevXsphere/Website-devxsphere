
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Open Source Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      attendees: 500,
      type: "Conference"
    },
    {
      id: 2,
      title: "JavaScript Meetup",
      date: "March 22, 2024",
      location: "New York, NY",
      attendees: 120,
      type: "Meetup"
    },
    {
      id: 3,
      title: "Python Workshop",
      date: "March 28, 2024",
      location: "Austin, TX",
      attendees: 80,
      type: "Workshop"
    },
    {
      id: 4,
      title: "DevOps Bootcamp",
      date: "April 5, 2024",
      location: "Seattle, WA",
      attendees: 200,
      type: "Bootcamp"
    },
    {
      id: 5,
      title: "AI/ML Conference",
      date: "April 12, 2024",
      location: "Boston, MA",
      attendees: 350,
      type: "Conference"
    },
    {
      id: 6,
      title: "Hackathon Weekend",
      date: "April 20, 2024",
      location: "Chicago, IL",
      attendees: 150,
      type: "Hackathon"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">Upcoming Events</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            Join us at meetups, conferences, and tech events happening around the globe. 
            Connect with fellow developers and expand your network.
          </p>
        </div>
        
        <div className="mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="events-swiper"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">Event Photo Space</div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.attendees} attendees</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => navigate('/register')}
          >
            Register for Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
