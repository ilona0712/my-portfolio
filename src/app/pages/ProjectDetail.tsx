import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle2, Calendar, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === projectId);
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Image */}
      <div className="w-full h-[400px] overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Header Card */}
        <Card className="mb-8">
          <CardHeader>
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="gap-2 mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Button>
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.subtitle}</p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{project.timeline}</span>
              </div>
              {project.role && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">{project.role}</span>
                </div>
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{project.overview}</p>
          </CardContent>
        </Card>

        {/* Challenge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Challenge</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </CardContent>
        </Card>

        {/* Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Impact & Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.impact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Project */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
          <CardContent className="p-8">
            <p className="text-sm text-gray-600 mb-2">Next Project</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{nextProject.title}</h3>
            <div className="flex gap-4">
              <Button onClick={() => navigate(`/projects/${nextProject.id}`)}>
                View Project
              </Button>
              <Link to="/projects">
                <Button variant="outline">All Projects</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
