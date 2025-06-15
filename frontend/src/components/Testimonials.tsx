
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Senior Developer at TechCorp",
      content: "This community has transformed how I approach open source. The mentorship and collaboration opportunities are incredible!",
      avatar: "JD"
    },
    {
      name: "Jane Smith",
      role: "Product Manager at StartupXYZ",
      content: "The events organized by this community have been game-changers for my career. I've made lifelong connections here.",
      avatar: "JS"
    },
    {
      name: "Carlos Rodriguez",
      role: "Freelance Developer",
      content: "From contributing to major projects to organizing local meetups, this platform has empowered me to give back to the community.",
      avatar: "CR"
    }
  ];

  const sponsors = [
    { name: "TechGiant Inc.", logo: "TG" },
    { name: "CloudFlow", logo: "CF" },
    { name: "DevTools Pro", logo: "DT" },
    { name: "CodeBase", logo: "CB" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">What Our Community Says</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
              Hear from developers who have grown their careers and made lasting impact through our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-700 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl text-blue-500 dark:text-blue-400 mb-4">"</div>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed font-body">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white font-display">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-body">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white font-display">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-gray-600 dark:text-gray-300 font-bold text-lg">{sponsor.logo}</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium font-body">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
