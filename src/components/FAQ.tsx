'use client'

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Setu.plus and how does it work?",
      answer: "Setu.plus is a comprehensive digital commerce platform that democratizes online business through AI-powered open networks. We provide 10 integrated services - from food delivery (FoodPe) to e-learning (LearnPe) - all within a single super app ecosystem. Our platform uses advanced AI to optimize operations, match customers with the right products, and provide intelligent insights for businesses of all sizes."
    },
    {
      question: "How does Setu.plus differ from other e-commerce platforms?",
      answer: "Unlike traditional platforms, Setu.plus operates as an open network that connects multiple verticals seamlessly. Our AI-first approach provides predictive analytics, dynamic pricing, and intelligent customer matching. We offer a complete ecosystem where businesses can access food delivery, retail, services, transportation, and education markets through one unified platform, reducing complexity and maximizing opportunities."
    },
    {
      question: "What services are included in the Setu.plus ecosystem?",
      answer: "Our super app includes 10 core services: FoodPe (food delivery), KiranaPe (grocery & essentials), ShopPe (e-commerce marketplace), RepairPe (home services), SnapPe (quick commerce), RidePe (transportation), TicketPe (bookings & events), EventPe (event management), DocPe (healthcare services), and LearnPe (online education). Each service is powered by the same AI engine and shares data insights across the platform."
    },
    {
      question: "How does the AI technology benefit my business?",
      answer: "Our AI engine provides real-time demand forecasting, automated inventory management, personalized customer recommendations, and dynamic pricing optimization. It analyzes patterns across all 10 verticals to give you insights no single-vertical platform can offer. This means better conversion rates, reduced operational costs, improved customer satisfaction, and data-driven decision making that scales with your business growth."
    },
    {
      question: "Is Setu.plus suitable for small businesses and individual sellers?",
      answer: "Absolutely! Setu.plus is designed to democratize digital commerce for businesses of all sizes. We offer flexible pricing tiers, easy onboarding, and comprehensive support for individual sellers, small businesses, and large enterprises. Our platform eliminates the need for multiple vendor relationships - you get access to all services through one account, with shared analytics, unified payments, and cross-vertical customer insights."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Setu.plus and how it can transform your digital commerce journey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="p-8 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand how Setu.plus can revolutionize your digital commerce strategy.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-8 py-3">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}