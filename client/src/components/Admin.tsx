import { useState, useEffect } from 'react';
import { Calendar, Mail, User, DollarSign, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Simple fetch for admin interface

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
  createdAt: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getSubjectBadgeColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'ai-ml': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'devops': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'web-dev': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'api-integration': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'consulting': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'other': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    };
    return colors[subject] || colors['other'];
  };

  const getSubjectLabel = (subject: string) => {
    const labels: { [key: string]: string } = {
      'ai-ml': 'AI/ML Consultation',
      'devops': 'DevOps & CI/CD',
      'web-dev': 'Web Development',
      'api-integration': 'API Integration',
      'consulting': 'Tech Consulting',
      'other': 'Other'
    };
    return labels[subject] || subject;
  };

  if (selectedMessage) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setSelectedMessage(null)}
            className="mb-6 text-blue-500 hover:text-blue-600"
          >
            ← Back to Messages
          </Button>
          
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className={getSubjectBadgeColor(selectedMessage.subject)}>
                  {getSubjectLabel(selectedMessage.subject)}
                </Badge>
                {selectedMessage.budget && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    {selectedMessage.budget}
                  </Badge>
                )}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(selectedMessage.createdAt)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{selectedMessage.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Client Name</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <a 
                      href={`mailto:${selectedMessage.email}`}
                      className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                      {selectedMessage.email}
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email Address</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Project Details
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button 
                  onClick={() => window.open(`mailto:${selectedMessage.email}`)}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Reply via Email
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(selectedMessage.email)}
                >
                  Copy Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Contact Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and respond to client inquiries
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-12 text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                No messages yet
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Contact form submissions will appear here
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <Card 
                key={message.id}
                className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedMessage(message)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {message.name}
                        </h3>
                        <Badge className={getSubjectBadgeColor(message.subject)}>
                          {getSubjectLabel(message.subject)}
                        </Badge>
                        {message.budget && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            {message.budget}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {message.email}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        {message.message}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400 ml-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(message.createdAt)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;