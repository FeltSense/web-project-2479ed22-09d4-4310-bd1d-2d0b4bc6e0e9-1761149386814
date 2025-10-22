'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo Section with Dots */}
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 tracking-tight">Nexus AI Labs</span>
          <div className="flex gap-1 mt-0.5">
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation with Dot Indicators */}
      <div className="hidden md:flex items-center gap-1">
        {['Home', 'Services', 'About', 'Pricing', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group/item"
          >
            <span className="relative z-10">{item}</span>
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity delay-75"></div>
          </a>
        ))}
        <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 relative overflow-hidden group/btn">
          <span className="relative z-10">Get Started</span>
          <div className="absolute top-0 right-0 w-2 h-2 bg-white/30 rounded-full group-hover/btn:scale-150 transition-transform"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/30 rounded-full group-hover/btn:scale-150 transition-transform delay-75"></div>
        </button>
      </div>

      {/* Mobile Menu Button with Dots */}
      <button className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group">
        <div className="w-6 h-0.5 bg-gray-900 transition-all group-hover:w-7"></div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
        </div>
        <div className="w-6 h-0.5 bg-gray-900 transition-all group-hover:w-7"></div>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-white border-t border-gray-100">
    <div className="px-4 py-6 space-y-1">
      {['Home', 'Services', 'About', 'Pricing', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group"
        >
          <span>{item}</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-75"></div>
          </div>
        </a>
      ))}
      <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all relative overflow-hidden group">
        <span className="relative z-10">Get Started</span>
        <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
      </button>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="space-y-8 py-12 lg:py-0">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="text-purple-300 text-sm font-medium">AI-Powered Marketing Intelligence</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          <span className="text-white">Transform Your</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Marketing ROI</span>
          <br />
          <span className="text-white">With Neural AI</span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
          Nexus AI Labs delivers predictive analytics and autonomous campaign optimization that increases conversion rates by 347% on average. Stop guessing. Start knowing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Start Free Analysis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:border-purple-400/50">
            Watch Demo
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-purple-400">347%</div>
            <div className="text-sm text-slate-400 mt-1">Avg ROI Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">2.4M+</div>
            <div className="text-sm text-slate-400 mt-1">Campaigns Optimized</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">98.7%</div>
            <div className="text-sm text-slate-400 mt-1">Client Retention</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative lg:h-[700px] h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm"></div>
        
        {/* Neural Network Visualization */}
        <div className="relative h-full rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop" 
            alt="AI Marketing Analytics Dashboard" 
            className="w-full h-full object-cover opacity-90"
          />
          
          {/* Floating Data Cards */}
          <div className="absolute top-8 right-8 bg-slate-900/90 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-xl animate-float">
            <div className="text-xs text-purple-300 mb-1">Campaign Performance</div>
            <div className="text-2xl font-bold text-white">+284%</div>
            <div className="text-xs text-green-400 mt-1">↑ 47% vs last month</div>
          </div>

          <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md border border-pink-500/30 rounded-xl p-4 shadow-xl animate-float delay-300">
            <div className="text-xs text-pink-300 mb-1">AI Predictions</div>
            <div className="text-2xl font-bold text-white">99.2%</div>
            <div className="text-xs text-blue-400 mt-1">Accuracy Rate</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl"></div>
      </div>

    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
    .delay-700 {
      animation-delay: 0.7s;
    }
  `}</style>
</section>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        AI-Powered Marketing Solutions
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto">
        Nexus AI Labs delivers end-to-end AI development with measurable ROI for marketing teams
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[minmax(200px,auto)]">
      
      {/* Large Card - Predictive Analytics */}
      <div className="md:col-span-3 lg:col-span-4 md:row-span-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] group">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Predictive Customer Analytics
            </h3>
            <p className="text-purple-100 text-lg mb-6">
              Custom AI solutions from Nexus AI Labs that predict customer behavior, optimize campaign performance, and maximize marketing ROI with enterprise-grade security.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">ML Specialists</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Proven ROI</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Clear Milestones</span>
          </div>
        </div>
      </div>

      {/* Tall Card - Content Generation */}
      <div className="md:col-span-3 lg:col-span-4 md:row-span-2 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] group">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              AI Content Generation Engine
            </h3>
            <p className="text-cyan-100 text-lg mb-6">
              Expert AI engineers at Nexus AI Labs build tailored content systems using latest frameworks. From consulting to deployment with ongoing optimization support.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Latest AI Tech</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Post-Launch Support</span>
          </div>
        </div>
      </div>

      {/* Wide Card - Audience Segmentation */}
      <div className="md:col-span-4 lg:col-span-5 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02] group">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">
              Intelligent Audience Segmentation
            </h3>
            <p className="text-orange-100 mb-4">
              Data scientists at Nexus AI Labs create custom segmentation models with transparent processes, delivering measurable results across industries with compliance guaranteed.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Data Scientists</span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Card - Campaign Optimization */}
      <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] group">
        <div className="flex flex-col h-full">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Real-Time Campaign Optimization
          </h3>
          <p className="text-emerald-100 text-sm mb-4">
            Nexus AI Labs delivers end-to-end AI systems that optimize ad spend and targeting in real-time with specific business solutions.
          </p>
          <div className="mt-auto">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Measurable ROI</span>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-12 text-center">
      <p className="text-purple-200 mb-6">
        Trusted by marketing teams worldwide • Expert AI engineers • Transparent deliverables
      </p>
      <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors shadow-xl hover:shadow-2xl">
        Start Your AI Journey with Nexus AI Labs
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        What Marketing Leaders Say
      </h2>
      <p className="text-lg text-slate-600">
        See how Nexus AI Labs transforms marketing strategies
      </p>
    </div>

    {/* First Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Sarah Chen</h3>
            <p className="text-sm text-slate-600">CMO, BrandVision Inc.</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
            BEFORE NEXUS AI LABS
          </span>
        </div>
        <p className="text-slate-700 italic">
          "Our campaign creation took weeks, and we struggled to personalize content at scale. ROI tracking was manual and often inaccurate."
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-xl border-l-4 border-green-400">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold text-white">Sarah Chen</h3>
            <p className="text-sm text-blue-100">CMO, BrandVision Inc.</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-green-900 bg-green-300 px-3 py-1 rounded-full">
            AFTER NEXUS AI LABS
          </span>
        </div>
        <p className="text-white">
          "Nexus AI Labs reduced our campaign launch time by 70%. We now generate personalized content for 50,000+ customers daily, and our ROI increased by 340%!"
        </p>
        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Second Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Marcus Rodriguez</h3>
            <p className="text-sm text-slate-600">Director of Digital Marketing, TechFlow</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
            BEFORE NEXUS AI LABS
          </span>
        </div>
        <p className="text-slate-700 italic">
          "A/B testing was time-consuming, and we could only test 2-3 variations per campaign. Insights came too late to make real-time adjustments."
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl border-l-4 border-green-400">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold text-white">Marcus Rodriguez</h3>
            <p className="text-sm text-purple-100">Director of Digital Marketing, TechFlow</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-green-900 bg-green-300 px-3 py-1 rounded-full">
            AFTER NEXUS AI LABS
          </span>
        </div>
        <p className="text-white">
          "With Nexus AI Labs, we test 50+ variations simultaneously. The AI provides real-time optimization recommendations that boosted our conversion rates by 215%!"
        </p>
        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Third Comparison */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Emily Thompson</h3>
            <p className="text-sm text-slate-600">VP of Marketing, GrowthScale</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
            BEFORE NEXUS AI LABS
          </span>
        </div>
        <p className="text-slate-700 italic">
          "Our team spent countless hours on audience segmentation and predictive analytics. Customer journey mapping was fragmented across multiple tools."
        </p>
      </div>

      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-xl border-l-4 border-green-400">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold text-white">Emily Thompson</h3>
            <p className="text-sm text-emerald-100">VP of Marketing, GrowthScale</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-green-900 bg-green-300 px-3 py-1 rounded-full">
            AFTER NEXUS AI LABS
          </span>
        </div>
        <p className="text-white">
          "Nexus AI Labs unified our entire marketing stack. AI-powered segmentation identified 12 new high-value audiences, increasing our customer lifetime value by 180%!"
        </p>
        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Nexus AI Labs Pricing
      </h2>
      <p className="text-xl text-purple-200">
        AI-powered marketing solutions that scale with your business
      </p>
      <div className="flex items-center justify-center gap-2 mt-6">
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-purple-200 font-medium">256-bit SSL Secure Payment</span>
      </div>
    </div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-3 gap-8 items-center">
      
      {/* Starter Tier */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
        <p className="text-purple-200 mb-6">Perfect for small businesses</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-white">$29</span>
          <span className="text-purple-200 ml-2">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">AI content generation (5,000 words/mo)</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Social media post scheduler</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Basic analytics dashboard</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Email support</span>
          </li>
        </ul>
        <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200">
          Get Started
        </button>
      </div>

      {/* Professional Tier - POPULAR */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 border-4 border-yellow-400 transform md:scale-110 shadow-2xl relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-purple-900 px-6 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
            Most Popular
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 mt-2">Professional</h3>
        <p className="text-purple-100 mb-6">For growing marketing teams</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-white">$79</span>
          <span className="text-purple-100 ml-2">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-medium">AI content generation (50,000 words/mo)</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-medium">Advanced campaign automation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-medium">Predictive audience insights</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-medium">A/B testing & optimization</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-medium">Priority 24/7 support</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white font-medium">Custom brand voice training</span>
          </li>
        </ul>
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full py-4 px-6 bg-white text-purple-600 font-bold rounded-lg hover:bg-yellow-400 hover:text-purple-900 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Start Free Trial →
        </button>
        <div className="flex items-center justify-center gap-3 mt-4">
          <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-sm font-medium">Secured by Stripe</span>
        </div>
      </div>

      {/* Enterprise Tier */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
        <p className="text-purple-200 mb-6">For large organizations</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-white">$299</span>
          <span className="text-purple-200 ml-2">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Unlimited AI content generation</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Multi-channel attribution modeling</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Dedicated account manager</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">Custom API integrations</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-purple-100">White-label solutions</span>
          </li>
        </ul>
        <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200">
          Contact Sales
        </button>
      </div>

    </div>

    {/* Trust Badges */}
    <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-purple-500/30">
      <div className="flex items-center gap-2 text-purple-200">
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">SSL Encrypted</span>
      </div>
      <div className="flex items-center gap-2 text-purple-200">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="font-medium">PCI Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-purple-200">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="font-medium">Money-Back Guarantee</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column - Content */}
      <div className="space-y-8">
        <div>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-purple-300">Let's Transform Your Marketing</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Amplify</span> Your Brand?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join leading brands leveraging Nexus AI Labs to revolutionize their marketing strategies with cutting-edge AI solutions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-400/30">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">AI-Powered Insights</h3>
              <p className="text-gray-400">Get data-driven recommendations in real-time</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-400/30">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Campaign Optimization</h3>
              <p className="text-gray-400">Maximize ROI across all marketing channels</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-400/30">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-gray-400">Expert team ready to help you succeed</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-4">Trusted by industry leaders:</p>
          <div className="flex items-center space-x-8 opacity-60">
            <span className="text-2xl font-bold">BRAND</span>
            <span className="text-2xl font-bold">CORP</span>
            <span className="text-2xl font-bold">TECH</span>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Get Your Free Strategy Session</h3>
            <p className="text-gray-300">Fill out the form and our AI marketing experts will contact you within 24 hours.</p>
          </div>

          <form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const statusDiv = form.querySelector('#form-status');
            
            // Get form data
            const formData = {
              name: form.name.value,
              email: form.email.value,
              phone: form.phone.value,
              company: form.company.value,
              monthlyBudget: form.monthlyBudget.value,
              marketingGoals: form.marketingGoals.value,
              message: form.message.value,
              source: 'Nexus AI Labs Contact Form'
            };

            // Validation
            if (!formData.name || !formData.email || !formData.phone) {
              statusDiv.innerHTML = '<div class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200"><p class="font-semibold">Please fill in all required fields.</p></div>';
              return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
              statusDiv.innerHTML = '<div class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200"><p class="font-semibold">Please enter a valid email address.</p></div>';
              return;
            }

            // Set loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
            statusDiv.innerHTML = '';

            try {
              const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
              });

              if (response.ok) {
                statusDiv.innerHTML = '<div class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200"><p class="font-semibold mb-1">🎉 Success!</p><p class="text-sm">Thank you for contacting Nexus AI Labs. We\'ll be in touch within 24 hours to discuss your marketing strategy.</p></div>';
                form.reset();
              } else {
                throw new Error('Submission failed');
              }
            } catch (error) {
              statusDiv.innerHTML = '<div class="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200"><p class="font-semibold mb-1">Oops! Something went wrong.</p><p class="text-sm">Please try again or email us directly at hello@nexusailabs.com</p></div>';
            } finally {
              submitButton.disabled = false;
              submitButton.innerHTML = 'Get Your Free Strategy Session';
            }
          }} className="space-y-5">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition"
                placeholder="John Smith"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition"
                placeholder="Your Company Inc."
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="monthlyBudget" className="block text-sm font-medium mb-2">Monthly Marketing Budget</label>
                <select
                  id="monthlyBudget"
                  name="monthlyBudget"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-800">Select budget</option>
                  <option value="<$5k" className="bg-slate-800">Less than $5,000</option>
                  <option value="$5k-$15k" className="bg-slate-800">$5,000 - $15,000</option>
                  <option value="$15k-$50k" className="bg-slate-800">$15,000 - $50,000</option>
                  <option value="$50k+" className="bg-slate-800">$50,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="marketingGoals" className="block text-sm font-medium mb-2">Primary Marketing Goal</label>
                <select
                  id="marketingGoals"
                  name="marketingGoals"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-800">Select goal</option>
                  <option value="Brand Awareness" className="bg-slate-800">Brand Awareness</option>
                  <option value="Lead Generation" className="bg-slate-800">Lead Generation</option>
                  <option value="Customer Retention" className="bg-slate-800">Customer Retention</option>
                  <option value="Sales Growth" className="bg-slate-800">Sales Growth</option>
                  <option value="Market Expansion" className="bg-slate-800">Market Expansion</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition resize-none"
                placeholder="Share your marketing challenges and goals..."
              ></textarea>
            </div>

            <div id="form-status" className="min-h-[20px]"></div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Get Your Free Strategy Session
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting this form, you agree to Nexus AI Labs' privacy policy. We respect your privacy and will never share your information.
            </p>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Prefer to talk? Call us at <a href="tel:+18885551234" className="text-purple-400 hover:text-purple-300 font-semibold">+1 (888) 555-1234</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Integration */}
  <div className="relative border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h4 className="text-2xl font-bold mb-4">Nexus AI Labs</h4>
          <p className="text-gray-400 mb-6 max-w-md">
            Empowering brands with AI-driven marketing solutions that deliver measurable results and sustainable growth.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-semibold mb-4">Solutions</h5>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">AI Marketing</a></li>
            <li><a href="#" className="hover:text-white transition">Campaign Analytics</a></li>
            <li><a href="#" className="hover:text-white transition">Content Generation</a></li>
            <li><a href="#" className="hover:text-white transition">SEO Optimization</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Nexus AI Labs. All rights reserved. | <a href="#" className="hover:text-white transition">Privacy Policy</a> | <a href="#" className="hover:text-white transition">Terms of Service</a></p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
      {/* Company Info - Spans 4 columns */}
      <div className="lg:col-span-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold">N</span>
          </div>
          <h3 className="text-2xl font-bold">Nexus AI Labs</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Transforming marketing through cutting-edge AI solutions. We help brands unlock unprecedented growth with intelligent automation and data-driven insights.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

      {/* Solutions - Spans 2 columns */}
      <div className="lg:col-span-2">
        <h4 className="text-lg font-semibold mb-6 text-purple-300">Solutions</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">AI Marketing</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Predictive Analytics</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Content Generation</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Customer Insights</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Campaign Automation</a></li>
        </ul>
      </div>

      {/* Industries - Spans 2 columns */}
      <div className="lg:col-span-2">
        <h4 className="text-lg font-semibold mb-6 text-purple-300">Industries</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">E-commerce</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">SaaS</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Healthcare</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Finance</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Retail</a></li>
        </ul>
      </div>

      {/* Company - Spans 2 columns */}
      <div className="lg:col-span-2">
        <h4 className="text-lg font-semibold mb-6 text-purple-300">Company</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Blog</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Press Kit</a></li>
          <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Partners</a></li>
        </ul>
      </div>

      {/* Contact - Spans 2 columns */}
      <div className="lg:col-span-2">
        <h4 className="text-lg font-semibold mb-6 text-purple-300">Contact</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:hello@nexusailabs.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">hello@nexusailabs.com</a>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <a href="tel:+15551234567" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">+1 (555) 123-4567</a>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span className="text-gray-300">San Francisco, CA 94105</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="border-t border-white/10 pt-12 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-2xl font-bold mb-2">Stay Ahead of the Curve</h4>
          <p className="text-gray-300">Get the latest AI marketing insights delivered to your inbox.</p>
        </div>
        <div className="flex gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
          />
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Nexus AI Labs. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Cookie Policy</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Accessibility</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}