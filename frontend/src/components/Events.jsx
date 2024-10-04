import { CiCalendarDate } from "react-icons/ci";
import { LuClock5 } from "react-icons/lu";

const Events = () => {
  const events = [
    {
      status: 'Upcoming',
      name: 'Intro to React.js: Building Modern Web Apps',
      date: 'June 15, 2023',
      time: '6:30 PM - 8:30 PM',
      description: 'Join us for an in-depth introduction to React.js, the popular JavaScript library for building user interfaces. Learn the fundamentals, explore best practices, and build your first React app.',
    },
    {
      status: 'Upcoming',
      name: 'Advanced React.js Workshop: State Management & Performance',
      date: 'July 10, 2023',
      time: '5:00 PM - 7:00 PM',
      description: 'Dive deeper into React.js by mastering state management techniques and optimizing your app for better performance in this advanced workshop.',
    },
  ]
  return (
    <div className="flex flex-col w-full my-12 px-4 md:px-12 lg:px-24" id="event">
      <div className="w-fit text-white bg-black px-4 py-2 rounded-full mx-auto font-semibold sm:my-2">
        Stay Connected with Our
      </div>
      <div className="text-3xl md:text-4xl text-white lg:text-6xl text-center font-semibold mb-4 md:mb-6">
        Upcoming Events
      </div>
      <div className="text-gray-400 text-center text-sm md:text-xl lg:text-2xl lg:py-2 font-medium mx-auto">
        Explore our upcoming tech events, workshops, and meetups designed to foster collaboration and knowledge sharing.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 my-8 2xl:px-48">
        {events.map((event) => {
          return (<div className="bg-white p-6 shadow-lg rounded-xl">
            <div className="w-fit text-white bg-black text-xs px-3 py-1 rounded-full font-bold mb-2">
              {event.status}
            </div>
            <div className="font-bold text-lg md:text-xl my-2">
              {event.name}
            </div>
            <div className="flex items-center gap-2 text-black my-2">
              <CiCalendarDate /> {event.date} <LuClock5 /> {event.time}
            </div>
            <div className="text-gray-600 text-sm md:text-base my-4">
              {event.description}
            </div>
            <button className="font-bold text-white bg-black py-2 px-4 rounded-full transition-transform transform hover:scale-105">
              Register Now
            </button>
          </div>)
        })}


      </div>

      <button className="w-fit mx-auto my-8 text-lg font-bold border  text-white bg-black hover:bg-white hover:text-black hover:border transition-all hover:border-black py-3 px-6 rounded-full duration-300 transform ">
        View All Events
      </button>
    </div>
  );
};

export default Events;
