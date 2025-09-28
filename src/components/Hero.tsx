'use client'

import { Button } from "./ui/button";
import { Play, Loader2 } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isStartLoading, setIsStartLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleGetStarted = () => {
    setIsStartLoading(true);
    setTimeout(() => setIsStartLoading(false), 2000);
  };

  const handleDemo = () => {
    setIsDemoLoading(true);
    setTimeout(() => setIsDemoLoading(false), 2000);
  };



  return (
    <section className="min-h-[85vh] bg-gradient-to-br from-white via-blue-50/30 to-violet-50/40 relative overflow-hidden flex items-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-violet-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-200/50 rounded-full shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Powering Digital India</span>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <span className="block">Digital Commerce.</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-light">
                AI-powered open networks connecting every business, consumer, and community.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-10 py-4 h-auto font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={handleGetStarted}
                disabled={isStartLoading}
              >
                {isStartLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Getting Started...
                  </>
                ) : (
                  "Get Started Free"
                )}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-4 h-auto font-semibold border-2 border-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-border bg-origin-border hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50 transition-all duration-300"
                onClick={handleDemo}
                disabled={isDemoLoading}
              >
                {isDemoLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </>
                )}
              </Button>
            </div>


          </div>

          {/* Premium Network Visualization */}
          <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-lg">
              {/* Central glowing orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full opacity-20 blur-xl animate-pulse" style={{animationDuration: '3s'}}></div>
              </div>
              
              {/* Core network node */}
              <div className="relative z-10 w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-violet-600 rounded-full shadow-2xl shadow-blue-500/30 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm border border-white/20"></div>
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-gradient-to-r from-blue-400/30 to-violet-400/30 rounded-full animate-spin" style={{animationDuration: '20s', borderImageSource: 'linear-gradient(to right, rgb(59 130 246 / 0.3), rgb(139 92 246 / 0.3))', borderImageSlice: 1}}></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border border-indigo-400/20 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
              </div>

              {/* Floating connection nodes */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce shadow-lg" style={{boxShadow: '0 0 20px rgb(59 130 246 / 0.5)'}}></div>
              <div className="absolute bottom-12 left-6 w-3 h-3 bg-violet-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.5s', boxShadow: '0 0 15px rgb(139 92 246 / 0.5)'}}></div>
              <div className="absolute top-20 left-4 w-2 h-2 bg-indigo-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1s', boxShadow: '0 0 10px rgb(99 102 241 / 0.5)'}}></div>
              <div className="absolute bottom-8 right-12 w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1.5s', boxShadow: '0 0 15px rgb(147 51 234 / 0.5)'}}></div>
              <div className="absolute top-1/2 right-2 w-2 h-2 bg-cyan-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '2s', boxShadow: '0 0 10px rgb(6 182 212 / 0.5)'}}></div>

              {/* Connection lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(59 130 246 / 0.4)" />
                      <stop offset="100%" stopColor="rgb(139 92 246 / 0.4)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M200,200 Q250,150 300,100"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{animationDuration: '2s'}}
                  />
                  <path
                    d="M200,200 Q150,250 100,300"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{animationDuration: '2.5s', animationDelay: '0.5s'}}
                  />
                  <path
                    d="M200,200 Q100,150 50,180"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{animationDuration: '3s', animationDelay: '1s'}}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}