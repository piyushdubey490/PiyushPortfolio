import { Download, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills, certifications } from '@/lib/data';

const About = () => {
  const handleDownloadResume = () => {
    // Replace with actual resume file URL
    const resumeUrl = '/resume-piyush-dubey.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Piyush_Dubey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSkillColorClass = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
      cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getCertificationColorClass = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Computer Science Engineer passionate about building intelligent systems and scalable infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Summary */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Summary</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Experienced Software Engineer with expertise in Cloud and DevOps tools, IT infrastructure & 
                  management, AI & ML with strong skills in automation, monitoring and scripting. Proven experience 
                  in patent prosecution and workflow automation, with hands-on experience in building scalable 
                  applications and cloud infrastructure.
                </p>
                
                {/* Education */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Education</h4>
                  <Card className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 dark:text-white">B.Tech in Computer Science and Engineering</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2020 – June 2024</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Lovely Professional University, Phagwara, Punjab • CGPA: 8.41/10</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Focus areas: Cloud Computing, AI/ML, DevOps, Software Engineering, Database Management Systems
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Experience */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h4>
                  <div className="space-y-6">
                    <Card className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-800 dark:text-white">Software Developer 2</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2024 - Present</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">Wipro Technologies</p>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                          <li>• Developing enterprise-level software solutions using cutting-edge technologies</li>
                          <li>• Working on cloud-based applications and microservices architecture</li>
                          <li>• Collaborating with cross-functional teams to deliver high-quality software products</li>
                          <li>• Implementing best practices in software development and DevOps methodologies</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-800 dark:text-white">Patent Research Intern</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Oct 2023 - July 2024</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">K & S Partners</p>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                          <li>• Gained hands-on experience in Patent Prosecution (Examination Response, Hearing Submissions & Strategies)</li>
                          <li>• Worked on AI/ML, Network and Software Based Patents for Qualcomm</li>
                          <li>• Automated patent research workflows using Python scripts, reducing manual intervention by 30%</li>
                          <li>• Analyzed complex technical patents and prepared detailed prosecution strategies</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-800 dark:text-white">Technical Head</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2022 - 2024</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">IEEE Student Chapter, Lovely Professional University</p>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                          <li>• Led technical initiatives and organized workshops on emerging technologies</li>
                          <li>• Managed technical events and hackathons for 500+ students</li>
                          <li>• Mentored junior students in software development and project management</li>
                          <li>• Coordinated industry collaboration programs and guest lecture series</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-800 dark:text-white">Graphic Designer</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2021 - 2023</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">School of CSE, Lovely Professional University</p>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                          <li>• Designed marketing materials, posters, and digital content for academic events</li>
                          <li>• Created visual identities for student organizations and technical symposiums</li>
                          <li>• Collaborated with faculty and administration on branding initiatives</li>
                          <li>• Developed multimedia content for online platforms and social media campaigns</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-800 dark:text-white">Freelance Software Engineer</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">Independent Consultant</p>
                        <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                          <li>• Specializing in Cloud Infrastructure, DevOps automation, and AI/ML solutions</li>
                          <li>• Building full-stack web applications and REST APIs using modern technologies</li>
                          <li>• Helping startups and entrepreneurs with technical consulting and MVP development</li>
                          <li>• Delivering custom software solutions for diverse industry clients</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Skills & Achievements Sidebar */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h3>
                
                <div className="space-y-4">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <Badge 
                            key={skill}
                            className={`px-3 py-1 ${getSkillColorClass(skillGroup.color)} rounded-full text-sm`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Certifications */}
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${getCertificationColorClass(cert.color)} rounded-full flex items-center justify-center`}>
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">{cert.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Resume Download */}
            <Card className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl shadow-lg text-white text-center">
              <CardContent className="p-8">
                <Download className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-4">Download Resume</h3>
                <p className="mb-6 opacity-90">Get the complete details of my experience and skills</p>
                <Button 
                  onClick={handleDownloadResume}
                  variant="secondary"
                  className="w-full px-6 py-3 bg-white text-blue-500 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
