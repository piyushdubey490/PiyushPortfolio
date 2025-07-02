import { Brain, ServerCog, Code, Plug, TrendingUp, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/lib/data';

const iconMap = {
  brain: Brain,
  cogs: ServerCog,
  code: Code,
  plug: Plug,
  'chart-line': TrendingUp,
  rocket: Rocket,
};

const Services = () => {
  const handleGetQuote = (serviceId: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Pre-fill the contact form with the service
      const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
      if (subjectSelect) {
        subjectSelect.value = serviceId;
      }
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLetsTalk = () => {
    window.open('https://calendly.com/piyushdubey', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and DevOps solutions tailored to accelerate your business growth and digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={service.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center text-white text-2xl mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleGetQuote(service.id)}
                    className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
          
          {/* Custom Solutions Card */}
          <Card className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="mb-6 leading-relaxed opacity-90">
                Need something unique? Let's discuss your specific requirements and create a tailored solution that fits your exact needs.
              </p>
              <ul className="text-sm opacity-80 mb-6 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Custom Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Proof of Concepts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Technical Due Diligence
                </li>
              </ul>
              <Button 
                onClick={handleLetsTalk}
                variant="secondary"
                className="w-full px-6 py-3 bg-white text-blue-500 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300"
              >
                Let's Talk
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
