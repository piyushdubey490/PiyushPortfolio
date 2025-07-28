import { socialLinks } from '@/lib/data';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const getSocialIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      linkedin: <FaLinkedin className="w-4 h-4" />,
      github: <FaGithub className="w-4 h-4" />,
      twitter: <FaTwitter className="w-4 h-4" />,
      envelope: <FaEnvelope className="w-4 h-4" />,
    };
    return iconMap[iconName] || <FaEnvelope className="w-4 h-4" />;
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Piyush Dubey</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              AI & DevOps Engineer specializing in building scalable solutions that drive business growth. 
              Transforming complex challenges into elegant, efficient systems.
            </p>
            <p className="text-sm text-gray-400">
              Available for freelance projects and consulting opportunities , contact me anytime.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'projects', 'blog', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-300 hover:text-blue-500 transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">AI/ML Consultation</span></li>
              <li><span className="text-gray-300">DevOps & CI/CD</span></li>
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">API Integration</span></li>
              <li><span className="text-gray-300">Tech Consulting</span></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Piyush Dubey. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
