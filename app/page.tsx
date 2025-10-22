'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      
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
          &quot;Our campaign creation took weeks, and we struggled to personalize content at scale. ROI tracking was manual and often inaccurate.&quot;
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
          &quot;Nexus AI Labs reduced our campaign launch time by 70%. We now generate personalized content for 50,000+ customers daily, and our ROI increased by 340%!&quot;
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
          &quot;A/B testing was time-consuming, and we could only test 2-3 variations per campaign. Insights came too late to make real-time adjustments.&quot;
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
          &quot;With Nexus AI Labs, we test 50+ variations simultaneously. The AI provides real-time optimization recommendations that boosted our conversion rates by 215%!&quot;
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
          &quot;Our team spent countless hours on audience segmentation and predictive analytics. Customer journey mapping was fragmented across multiple tools.&quot;
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
          &quot;Nexus AI Labs unified our entire marketing stack. AI-powered segmentation identified 12 new high-value audiences, increasing our customer lifetime value by 180%!&quot;
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
            <span className="text-sm font-medium text-purple-300">Let&apos;s Transform Your Marketing</span>
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
            <p className="text-gray-300">Fill out the form and our AI marketing experts will contact