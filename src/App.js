import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import About from './components/About';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import MeetTheTeam from './components/MeetTheTeam';
import UpcomingFeatures from './components/UpcomingFeatures';
import Footer from './components/Footer'; 
// import CanvasAnimation from './components/CanvasAnimation';

function App() {
  return (
    <div className="bg-primary text-textPrimary">
      <Navbar />
      <div className="pt-16">

        <Hero />
        <DashboardPreview />
        <HowItWorks />
        <div id="features">
        <Features />
        </div>
        <div id="about">
        <MeetTheTeam />
        </div>
        <UpcomingFeatures />
        <About />
        <div id="our-presence">
        <Clientele />
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
