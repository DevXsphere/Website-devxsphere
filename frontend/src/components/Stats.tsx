import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const [contributors, setContributors] = useState(0);
  const [projects, setProjects] = useState(0);
  const [events, setEvents] = useState(0);
  const [linesOfCode, setLinesOfCode] = useState(0);

  const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(1250, setContributors);
          animateCounter(350, setProjects);
          animateCounter(120, setEvents);
          animateCounter(500000, setLinesOfCode);
          observer.disconnect();
        }
      });
    });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: contributors.toLocaleString(),
      label: "Contributors",
      icon: "👥",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: projects.toLocaleString(),
      label: "Open Source Projects",
      icon: "🚀",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: events.toLocaleString(),
      label: "Events Hosted",
      icon: "📅",
      color: "from-green-500 to-green-600"
    },
    {
      number: (linesOfCode / 1000).toFixed(0) + "K+",
      label: "Lines of Code",
      icon: "💻",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-background text-foreground transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">Community Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Our growing community continues to make a significant impact in the open-source ecosystem. 
            Here are some numbers that showcase our collective achievements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:scale-105 transition-transform duration-300 text-card-foreground"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-display`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium font-body">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

