
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Book, Users, Calendar } from "lucide-react";

const ContributePage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      name: "Community Platform",
      description: "Help us build the next generation community platform for open source enthusiasts.",
      tech: ["React", "Node.js", "MongoDB"],
      difficulty: "Intermediate",
      contributors: 25
    },
    {
      name: "Event Management System",
      description: "Contribute to our event management and registration system used by thousands.",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      difficulty: "Beginner",
      contributors: 18
    },
    {
      name: "Developer Tools",
      description: "Build tools that help developers contribute more effectively to open source projects.",
      tech: ["TypeScript", "Rust", "Docker"],
      difficulty: "Advanced",
      contributors: 12
    }
  ];

  const guides = [
    {
      title: "First Time Contributor Guide",
      description: "Everything you need to know to make your first open source contribution."
    },
    {
      title: "Code Review Best Practices",
      description: "Learn how to give and receive effective code reviews."
    },
    {
      title: "Documentation Writing",
      description: "Master the art of writing clear, helpful documentation."
    },
    {
      title: "Community Guidelines",
      description: "Understand our community standards and how to be a great contributor."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-4">🌱 Start Contributing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Ready to make your mark in the open source world? Choose from our active projects, 
            read our guides, or join our mentorship program to get started.
          </p>
        </div>

        {/* Active Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Active Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-card-foreground border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    {project.name}
                  </CardTitle>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    } transition-colors`}>
                      {project.difficulty}
                    </span>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full transition-colors">
                      {project.contributors} contributors
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded dark:bg-muted dark:text-muted-foreground transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                    Start Contributing
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Learning Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer bg-card text-card-foreground border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Book className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 dark:bg-blue-800 rounded-2xl p-12 text-center text-white dark:text-blue-100 transition-colors">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">
            Join thousands of developers who are making a difference in the open source community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-blue-200 dark:text-blue-900 dark:hover:bg-blue-300">
              <Users className="w-5 h-5 mr-2" />
              Join Mentorship Program
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 dark:border-blue-200 dark:hover:bg-blue-200 dark:hover:text-blue-900">
              <Calendar className="w-5 h-5 mr-2" />
              Attend Contributor Workshop
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContributePage;
