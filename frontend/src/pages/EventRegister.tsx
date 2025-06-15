
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EventRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Open Source Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      attendees: 500,
      type: "Conference",
      description: "The largest gathering of open source developers, featuring keynotes from industry leaders and hands-on workshops.",
      price: "Free",
      spotsLeft: 50
    },
    {
      id: 2,
      title: "JavaScript Meetup",
      date: "March 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "New York, NY",
      attendees: 120,
      type: "Meetup",
      description: "Monthly meetup for JavaScript enthusiasts to share knowledge and network with fellow developers.",
      price: "Free",
      spotsLeft: 25
    },
    {
      id: 3,
      title: "Python Workshop",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Austin, TX",
      attendees: 80,
      type: "Workshop",
      description: "Hands-on Python workshop covering advanced topics in data science and machine learning.",
      price: "$25",
      spotsLeft: 12
    }
  ];

  const handleRegister = (eventId: number) => {
    toast({
      title: "Registration Successful!",
      description: "You've been registered for the event. Check your email for confirmation.",
    });
    navigate('/');
  };

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Register for Events</h1>
          <p className="text-xl text-muted-foreground">
            Choose from our upcoming events and secure your spot in the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="hover:shadow-lg transition-shadow bg-card text-card-foreground border border-border"
            >
              <CardHeader className="bg-transparent">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-accent-100 dark:bg-accent-200 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full transition-colors">
                    {event.type}
                  </span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {event.price}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.attendees} registered</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-orange-600 dark:text-orange-300 font-medium">
                    {event.spotsLeft} spots left
                  </span>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800"
                  onClick={() => handleRegister(event.id)}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
