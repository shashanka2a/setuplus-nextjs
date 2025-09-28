'use client'
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Ticket, 
  Calendar, 
  Star, 
  Users, 
  Heart,
  Clock,
  Shield,
  Film
} from "lucide-react";

interface TicketPeProps {
  onBack: () => void;
}

export function TicketPe({ onBack }: TicketPeProps) {
  const features = [
    {
      icon: Ticket,
      title: "Easy Booking",
      description: "Simple and fast ticket booking process"
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Competitive prices with exclusive offers"
    },
    {
      icon: Clock,
      title: "Instant Confirmation",
      description: "Get your tickets instantly after booking"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Safe and secure payment processing"
    }
  ];

  const events = [
    { name: "Bollywood Blockbuster", price: "₹299", rating: 4.8, venue: "PVR Cinemas", offers: "20% OFF" },
    { name: "Concert Night", price: "₹1,299", rating: 4.9, venue: "Music Arena", offers: "Early Bird" },
    { name: "Comedy Show", price: "₹599", rating: 4.7, venue: "Comedy Club", offers: "Buy 1 Get 1" },
    { name: "Sports Event", price: "₹899", rating: 4.8, venue: "Sports Complex", offers: "Group Discount" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
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
          <div className="absolute top-20 right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-rose-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Ticket className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">TicketPe</h1>
                  <p className="text-pink-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Book Tickets for Movies & Events
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your one-stop destination for movie tickets, concert bookings, and event reservations. 
                Best seats, best prices, guaranteed entertainment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-4">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Tickets
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-pink-200 hover:bg-pink-50 text-lg px-8 py-4">
                  Browse Events
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>1M+ tickets sold</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 customer rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1489599243109-49327270c05d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRpY2tldCUyMGJvb2tpbmd8ZW58MXx8fHwxNzU4OTQ1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Movie ticket booking"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Film className="h-6 w-6 text-pink-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Latest Movies</div>
                    <div className="text-sm text-gray-600">Book now</div>
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
              Why Choose TicketPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make entertainment booking simple, fast, and affordable with our premium service features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-pink-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Events */}
      <section className="py-16 bg-gradient-to-br from-pink-50/50 to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Popular Events & Movies
            </h3>
            <p className="text-gray-600">Book tickets for the most popular entertainment options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-pink-100 to-rose-100 relative">
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
                  <p className="text-sm text-gray-600 mb-2">{event.venue}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="text-pink-600 font-medium">{event.price}</span>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Entertainment Hub</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Entertainment?
          </h3>
          
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join millions of entertainment lovers who trust TicketPe for their bookings. 
            Best prices, instant confirmation, unforgettable experiences.
          </p>
          
          <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-4">
            <Ticket className="mr-2 h-5 w-5" />
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}