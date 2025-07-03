import { useState } from 'react';
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { BlogPost } from '@/lib/types';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
          
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {selectedPost.image && (
              <div className="h-64 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  📝
                </div>
              </div>
            )}
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedPost.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime} min read</span>
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n/g, '<br/>') }}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-500">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on AI, DevOps, and modern web development
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
            className="px-4 py-2 text-sm"
          >
            All Posts
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className="px-4 py-2 text-sm"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {!selectedTag && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Featured Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-4xl opacity-30">
                      📝
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min</span>
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts / Filtered Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            {selectedTag ? `Posts tagged "${selectedTag}"` : 'Recent Posts'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedTag ? filteredPosts : recentPosts).map((post) => (
              <Card 
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <div className="text-white text-3xl opacity-30">
                    📖
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} min</span>
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl shadow-lg text-white inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Stay Updated?</h3>
              <p className="mb-6 opacity-90">
                Get notified when I publish new articles about AI, DevOps, and web development.
              </p>
              <Button 
                variant="secondary"
                className="px-6 py-3 bg-white text-blue-500 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;