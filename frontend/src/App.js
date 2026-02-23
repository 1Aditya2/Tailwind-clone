import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Features from './components/sections/features';
import Dashboard from './components/sections/Dashboard';
import Components from './components/sections/Components';
import CTA from './components/sections/CTA';
import DashboardVariations from './components/sections/DashboardVariations';
import Plugins from './components/sections/Plugins';
import DashboardAd from './components/sections/DashboardAd';
import BlogsnUpdates from './components/sections/BlogsnUpdates';
import Footer from './components/layout/Footer';
import TopNav from './components/sections/TopNav';

function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Dashboard />
      <Components />
      <CTA />
      <DashboardVariations />
      <Plugins />
      <DashboardAd />
      <BlogsnUpdates />
      <Footer />
      <TopNav />
    </div>
  );
}

export default App;
