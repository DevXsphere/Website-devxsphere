import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Contribute = () => {
  const navigate = useNavigate();

  const ways = [
    {
      title: "Code Contributions",
      description: "Submit pull requests, fix bugs, and add new features to open source projects.",
      icon: "💻"
    },
    {
      title: "Documentation",
      description: "Help improve project documentation, write tutorials, and create guides.",
      icon: "📝"
    },
    {
      title: "Community Support",
      description: "Answer questions, mentor newcomers, and help grow our community.",
      icon: "🤝"
    },
    {
      title: "Event Organization",
      description: "Organize meetups, workshops, and conferences in your local area.",
      icon: "🎪"
    }
  ];

  return (
    <section id="contribute" className="py-20 bg-gradient-to-br from-background via-accent-100 to-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">Start Contributing Today</h2>
          <p className="text-xl max-w-3xl mx-auto font-body text-muted-foreground dark:text-blue-100">
            Ready to make your mark in the open-source world? There are countless ways to get involved 
            and make a meaningful impact in our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 dark:bg-white/10 dark:hover:bg-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-display text-foreground">{way.title}</h3>
                <p className="text-sm font-body text-muted-foreground dark:text-blue-100">{way.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => navigate('/contribute')}
          >
            🌱 Get Started Contributing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
