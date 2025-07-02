import { ExternalLink, Github, Eye, ShoppingCart, Cloud, Heart, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';

const iconMap = {
  eye: Eye,
  'shopping-cart': ShoppingCart,
  cloud: Cloud,
  heart: Heart,
  plus: Plus,
};

const Projects = () => {
  const handleViewAll = () => {
    window.open('https://github.com/piyushdubey', '_blank');
  };

  const handleLiveDemo = (project: any) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else {
      alert('Live demo coming soon!');
    }
  };

  const handleViewCode = (project: any) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    } else {
      window.open('https://github.com/piyushdubey', '_blank');
    }
  };

  const getProjectIcon = (projectId: string) => {
    const iconMapping: { [key: string]: keyof typeof iconMap } = {
      'object-detection': 'eye',
      'ecommerce-pipeline': 'shopping-cart',
      'cloud-infrastructure': 'cloud',
      'cancer-prediction': 'heart',
    };
    
    const iconKey = iconMapping[projectId] || 'eye';
    return iconMap[iconKey];
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions that demonstrate my expertise in AI, DevOps, and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = getProjectIcon(project.id);
            
            return (
              <Card 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}>
                  <IconComponent className="w-16 h-16 opacity-50" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => handleLiveDemo(project)}
                      className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleViewCode(project)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 text-sm font-medium rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          
          {/* More Projects Card */}
          <Card className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white">
            <div className="h-48 bg-white/10 flex items-center justify-center">
              <Plus className="w-16 h-16 opacity-50" />
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">More Projects</h3>
              <p className="mb-4 text-sm leading-relaxed opacity-90">
                Interested in seeing more of my work? Check out my GitHub profile for additional projects and contributions.
              </p>
              <Button 
                onClick={handleViewAll}
                variant="secondary"
                className="w-full px-4 py-2 bg-white text-blue-500 hover:bg-gray-100 text-sm font-medium rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
