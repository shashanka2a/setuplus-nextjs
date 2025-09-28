'use client'
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Camera, 
  Star, 
  Users, 
  Heart,
  Palette,
  Image as ImageIcon,
  Award
} from "lucide-react";

interface SnapPeProps {
  onBack: () => void;
}

export function SnapPe({ onBack }: SnapPeProps) {
  const features = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Expert photographers for all occasions"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Top-rated photographers and creative professionals"
    },
    {
      icon: Palette,
      title: "Creative Services",
      description: "From editing to graphic design, we do it all"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium quality work with satisfaction guarantee"
    }
  ];

  const services = [
    { name: "Wedding Photography", price: "₹15,000", rating: 4.9, photographer: "Raj Photography", offers: "20% OFF" },
    { name: "Corporate Events", price: "₹8,000", rating: 4.8, photographer: "Studio Pro", offers: "Free Editing" },
    { name: "Portrait Sessions", price: "₹3,000", rating: 4.7, photographer: "Lens Master", offers: "15% OFF" },
    { name: "Product Photography", price: "₹5,000", rating: 4.9, photographer: "Click Studio", offers: "Bulk Discount" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-50 to-violet-50 overflow-hidden">
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
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-violet-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Camera className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">SnapPe</h1>
                  <p className="text-purple-600 font-medium">by Setu.plus</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Professional Photography & Creative Services
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with talented photographers and creative professionals for all your visual needs. 
                From weddings to corporate events, we capture your special moments with artistic excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  <Camera className="mr-2 h-5 w-5" />
                  Hire Photographer
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-purple-200 hover:bg-purple-50 text-lg px-8 py-4">
                  View Portfolio
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>500+ professional photographers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 average rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554048612-b6a482b224ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHNlcnZpY2VzfGVufDF8fHx8MTc1ODk0NTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Photography services"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <ImageIcon className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Free Consultation</div>
                    <div className="text-sm text-gray-600">Book a session</div>
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
              Why Choose SnapPe?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make professional photography accessible and affordable with our premium service features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-gradient-to-br from-purple-50/50 to-violet-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Popular Photography Services
            </h3>
            <p className="text-gray-600">Book from top-rated photographers in your area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-purple-100 to-violet-100 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {service.offers}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{service.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{service.photographer}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="text-purple-600 font-medium">{service.price}</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Trusted by Creatives</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Capture Memories?
          </h3>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust SnapPe for their photography needs. 
            Professional quality, creative excellence, unforgettable moments.
          </p>
          
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4">
            <Camera className="mr-2 h-5 w-5" />
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
}