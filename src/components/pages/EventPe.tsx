'use client'
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Calendar, 
  PartyPopper, 
  Star, 
  Users, 
  Heart,
  Clock,
  CheckCircle,
  Gift
} from "lucide-react";

interface EventPeProps {
  onBack: () => void;
}

export function EventPe({ onBack }: EventPeProps) {
  const features = [
    {
      icon: Calendar,
      title: "Complete Planning",
      description: "End-to-end event planning and management"
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Top-rated event planners and coordinators"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Punctual and professional service delivery"
    },
    {
      icon: CheckCircle,
      title: "Stress-Free Events",
      description: "We handle everything so you can enjoy"
    }
  ];

  const eventTypes = [
    { name: "Wedding Planning", price: "₹50,000", rating: 4.9, planner: "Dream Weddings", offers: "Free Consultation" },
    { name: "Corporate Events", price: "₹25,000", rating: 4.8, planner: "Business Events Co", offers: "10% OFF" },
    { name: "Birthday Parties", price: "₹8,000", rating: 4.7, planner: "Party Masters", offers: "15% OFF" },
    { name: "Anniversary Events", price: "₹12,000", rating: 4.9, planner: "Celebration Hub", offers: "Free Decor" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Setu.plus
        </Button>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Calendar className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">EventPe</h1>
                  <p className="text-indigo-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Event Planning & Management Made Easy
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From birthday parties to corporate events, we help you plan, organize, and execute memorable events. 
                Professional planning, stress-free experience, unforgettable memories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  Plan Event
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-indigo-200 hover:bg-indigo-50 text-lg px-8 py-4">
                  Browse Services
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>1000+ successful events</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 average rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NTg5NDU5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event planning management"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Gift className="h-6 w-6 text-indigo-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Free Consultation</div>
                    <div className="text-sm text-gray-600">Plan your event</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose EventPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make event planning simple, stress-free, and memorable with our comprehensive service features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-indigo-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Event Types */}
      <section className="py-16 bg-gradient-to-br from-indigo-50/50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Popular Event Types
            </h3>
            <p className="text-gray-600">Choose from our most popular event planning services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {event.offers}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{event.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{event.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{event.planner}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="text-indigo-600 font-medium">{event.price}</span>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      Plan Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Creating Memories</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Create Memories
          </h3>
          
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust EventPe for their special occasions. 
            Professional planning, stress-free experience, unforgettable memories.
          </p>
          
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-4">
            <Calendar className="mr-2 h-5 w-5" />
            Plan Your Event
          </Button>
        </div>
      </section>
    </div>
  );
}