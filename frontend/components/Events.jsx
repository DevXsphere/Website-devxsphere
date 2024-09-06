import {IconCalendar, IconClock} from "@tabler/icons-react"


const Events = () => {
  return (
    <div className="flex flex-col w-[100vw] my-12">
        <div className='w-fit text-white bg-black text-xs px-2 py-1 rounded-[8px] mx-3 md:mx-auto font-bold sm:my-1'>Upcoming Events</div>
        <div className="text-2xl md:text-5xl mx-3 sm:mx-auto font-bold mb-3">Stay Connected with Our Events</div>
        <div className="text-gray-400 text-sm md:text-2xl font-semibold mx-3 sm:mx-auto">Explore our upcoming tech events, workshops, and meetups designed to foster collaboration and knowledge sharing.</div>
        <div className="grid md:grid-cols-2 gap-16 my-8 mx-16 md:mx-48">
            <div>
                <div className='w-fit text-white bg-black text-xs px-2 py-1 rounded-[8px] font-bold'>Upcoming</div>
                <div className="font-bold text-xl my-3">Intro to React.js: Building Modern Web Apps</div>
                <div className="flex gap-1 text-gray-500 my-3">
                    <IconCalendar /> June 15, 2023 <IconClock /> 6:30 PM - 8:30 PM
                </div>
                <div className="my-6">Join us for an in-depth introduction to React.js, the popular Javascript library for building user interfaces. Learn the fundamentals, explore best practices, and build your first React app.</div>
                <button className="font-bold text-white bg-black py-1 px-2 rounded-[8px]">Register Now</button>
            </div>
           <div>
                <div className='w-fit text-white bg-black text-xs px-2 py-1 rounded-[8px] font-bold'>Upcoming</div>
                <div className="font-bold text-xl my-3">Intro to React.js: Building Modern Web Apps</div>
                <div className="flex gap-1 text-gray-500 my-3">
                    <IconCalendar /> June 15, 2023 <IconClock /> 6:30 PM - 8:30 PM
                </div>
                <div className="my-6">Join us for an in-depth introduction to React.js, the popular Javascript library for building user interfaces. Learn the fundamentals, explore best practices, and build your first React app.</div>
                <button className="font-bold text-white bg-black py-1 px-2 rounded-[8px]">Register Now</button>
            </div>
        </div>
        <button className="w-fit mx-auto my-5 text-[18px] font-bold text-white bg-black py-2 px-3 rounded-[8px]">View All Events</button>
    </div>
  )
}

export default Events