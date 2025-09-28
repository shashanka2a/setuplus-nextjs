import { Button } from "./ui/button";
import { 
  Utensils, 
  ShoppingCart, 
  Store, 
  Wrench, 
  Camera, 
  Car, 
  Ticket, 
  Calendar, 
  Stethoscope, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";

interface ProductOverviewProps {
  onProductClick: (productId: string) => void;
}

export function ProductOverview({ onProductClick }: ProductOverviewProps) {
  const products = [
    {
      id: "foodpe",
      icon: Utensils,
      title: "FoodPe",
      description: "Restaurant delivery & takeaway made simple",
      backgroundColor: "bg-orange-50/80",
      borderColor: "border-orange-200/60",
      iconColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      id: "kiranape",
      icon: ShoppingCart,
      title: "KiranaPe",
      description: "Groceries & daily essentials at your doorstep",
      backgroundColor: "bg-green-50/80",
      borderColor: "border-green-200/60",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      id: "shoppe",
      icon: Store,
      title: "ShopPe",
      description: "Marketplace for new & used goods",
      backgroundColor: "bg-blue-50/80",
      borderColor: "border-blue-200/60",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: "repairpe",
      icon: Wrench,
      title: "RepairPe",
      description: "Home services - plumber, electrician & more",
      backgroundColor: "bg-amber-50/80",
      borderColor: "border-amber-200/60",
      iconColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      id: "snappe",
      icon: Camera,
      title: "SnapPe",
      description: "Photography & creative services",
      backgroundColor: "bg-purple-50/80",
      borderColor: "border-purple-200/60",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      id: "ridepe",
      icon: Car,
      title: "RidePe",
      description: "Carpooling & ride-sharing platform",
      backgroundColor: "bg-cyan-50/80",
      borderColor: "border-cyan-200/60",
      iconColor: "text-cyan-600",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700"
    },
    {
      id: "ticketpe",
      icon: Ticket,
      title: "TicketPe",
      description: "Movie & concert ticket booking",
      backgroundColor: "bg-pink-50/80",
      borderColor: "border-pink-200/60",
      iconColor: "text-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700"
    },
    {
      id: "eventpe",
      icon: Calendar,
      title: "EventPe",
      description: "Event planning & management made easy",
      backgroundColor: "bg-indigo-50/80",
      borderColor: "border-indigo-200/60",
      iconColor: "text-indigo-600",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      id: "docpe",
      icon: Stethoscope,
      title: "DocPe",
      description: "Doctor consultations & medicine delivery",
      backgroundColor: "bg-teal-50/80",
      borderColor: "border-teal-200/60",
      iconColor: "text-teal-600",
      buttonColor: "bg-teal-600 hover:bg-teal-700"
    },
    {
      id: "learnpe",
      icon: GraduationCap,
      title: "LearnPe",
      description: "Tutoring, test prep & skill development",
      backgroundColor: "bg-violet-50/80",
      borderColor: "border-violet-200/60",
      iconColor: "text-violet-600",
      buttonColor: "bg-violet-600 hover:bg-violet-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our complete ecosystem of apps designed to simplify your daily life and business needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`group ${product.backgroundColor} ${product.borderColor} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-opacity-100 cursor-pointer flex flex-col justify-between min-h-[280px]`}
              onClick={() => onProductClick(product.id)}
            >
              {/* Icon and Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <product.icon className={`h-8 w-8 ${product.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {product.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {product.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-4">
                <Button 
                  className={`w-full ${product.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-lg flex items-center justify-center gap-2`}
                >
                  Go to {product.title}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-violet-50 rounded-full px-8 py-4 border border-gray-200 shadow-md">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className="text-gray-700 font-semibold">One app, endless possibilities</span>
          </div>
        </div>
      </div>
    </section>
  );
}