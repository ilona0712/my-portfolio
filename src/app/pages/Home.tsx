import { Link } from 'react-router';
import { ArrowRight, Code, Database, Wifi, Cpu, Brain } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { projects } from '../data/projects';

export function Home() {
  const stats = [
    { label: 'Years of Study', value: '4th Year' },
    { label: 'Expected Graduation', value: '2027' },
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Specializing in system optimization and performance enhancement',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Predictive analytics, feature engineering, and ML model deployment',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Engineering',
      description: 'Web scraping, data pipelines, and automated data processing',
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Network Engineering',
      description: 'CCNA certified with hands-on infrastructure experience',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-600 font-medium">Software Engineer</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  Ilona Chamoun
                </h1>
                <p className="text-xl text-gray-600">
                  4th-year Computer & Communication Engineering Student at USJ
                </p>
                <p className="text-lg text-gray-700 font-medium mt-2">
                  Currently: AI Lab Intern at Byblos Bank
                </p>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a software engineering student specializing in backend development and system optimization. 
                I'm passionate about building efficient, scalable solutions that solve real-world technical challenges.
              </p>
              
              <p className="text-gray-700">
                4th-year Computer and Communication Engineering student at Université Saint-Joseph de Beyrouth, 
                combining theoretical knowledge with hands-on development experience. Skilled in backend system 
                customization, data management, and full-stack development.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <Button size="lg" className="gap-2">
                    View My Projects <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580894732930-0babd100d356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzcxMTcwNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Software Engineer at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600 mb-1">Available for</p>
                <p className="font-semibold text-gray-900">Summer 2026 Internships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining academic knowledge with practical experience across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work spanning backend development, automation, and embedded systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm currently available for internship opportunities and collaborative projects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}