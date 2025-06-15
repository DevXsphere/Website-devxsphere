import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">About Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            We are passionate advocates for open-source culture, dedicated to building a thriving community 
            of developers, designers, and innovators who believe in the power of collaboration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-blue-500 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white font-display">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-body">
                    To foster an inclusive environment where developers of all skill levels can learn, 
                    contribute, and grow together through open-source collaboration.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-purple-500 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white font-display">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-body">
                    A world where open-source technology drives innovation, creates opportunities, 
                    and brings people together across geographical and cultural boundaries.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-green-500 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white font-display">Our Values</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-body">
                    Transparency, collaboration, inclusivity, and continuous learning form the 
                    foundation of everything we do in our community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl flex items-center justify-center">
              <img
                src="/image/event.JPG"
                alt="About Our Community"
                className="w-full h-64 object-cover rounded-lg"
                style={{ maxHeight: 256, objectFit: 'cover' }}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
