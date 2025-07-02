import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    // Replace with actual booking link
    window.open('https://calendly.com/piyushdubey', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Professional Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            PD
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Piyush Dubey</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            AI & DevOps Engineer | Web Developer | Consultant
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building scalable AI/DevOps solutions with impact. Transforming ideas into robust, intelligent systems that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleHireMe}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              <i className="fas fa-handshake mr-2"></i>
              Hire Me
            </Button>
            <Button 
              variant="outline"
              onClick={handleBookCall}
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Book a Free Call
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
