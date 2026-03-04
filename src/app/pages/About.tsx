import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Code, Database, Network, Cpu, Globe, Award } from 'lucide-react';

export function About() {
  const skills = {
    'Programming Languages': [
      { name: 'Python', level: 'Primary language for backend development, automation, ML, and scripting' },
      { name: 'Java', level: 'Design Patterns, OOP, Backend Development' },
      { name: 'C++', level: 'Low-level programming, Pointers, Inheritance, Embedded Systems' },
      { name: 'JavaScript', level: 'Basic front-end interactivity' },
      { name: 'HTML & CSS', level: 'Front-end markup and styling (beginner level)' },
      { name: 'SQL', level: 'Database queries, optimization, window functions, CTEs' },
    ],
    'Backend Development': [
      'ERPNext POS Backend Customization',
      'Database Design and Optimization',
      'API Development and Integration',
      'Performance Optimization',
      'Data Management and Automation',
    ],
    'Machine Learning & Data Science': [
      'Feature Engineering and Data Processing',
      'ML Model Training (Random Forest, XGBoost, LightGBM)',
      'Time-Series Analysis and Prediction',
      'Model Interpretability (SHAP)',
      'Web Scraping and Data Extraction',
    ],
    'Systems & Tools': [
      'Ubuntu/Linux (CLI proficiency)',
      'Docker (Containerization and Deployment)',
      'Google Drive API Integration',
      'WordPress, Elementor',
      'Arduino, Hardware-Software Integration',
    ],
    'Networking': [
      'Cisco CCNA 1 & 2 Certified',
      'Network Design and Configuration',
      'Routing and Switching Fundamentals',
      'Network Security Basics',
    ],
  };

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Intermediate' },
  ];

  const certifications = [
    'Cisco CCNA 1 - Introduction to Networking',
    'Cisco CCNA 2 - Routing & Switching Essentials',
    'Java Backend Development',
  ];

  const principles = [
    {
      title: 'Understand the problem deeply',
      description: 'Before writing a single line of code',
    },
    {
      title: 'Optimize for maintainability',
      description: 'Because code is read more often than it\'s written',
    },
    {
      title: 'Measure everything',
      description: 'Because you can\'t improve what you don\'t measure',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4th-year Computer and Communication Engineering student passionate about solving 
            complex technical challenges through elegant, efficient code
          </p>
        </div>

        {/* Who I Am */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Who I Am</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm Ilona Chamoun, a 4th-year Software Engineering student at Université Saint-Joseph de Beyrouth (USJ) 
              in Lebanon, specializing in Computer and Communication Engineering. My journey in technology is driven 
              by a passion for solving complex technical challenges through elegant, efficient code.
            </p>
          </CardContent>
        </Card>

        {/* My Journey */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              My path into software engineering began with a fascination for how systems work beneath the surface. 
              This curiosity led me to pursue formal education in Computer and Communication Engineering, where 
              I've been able to explore everything from low-level embedded systems programming to high-level backend architecture.
            </p>
            <p>
              During my internships at DigitalCircle in the summers of 2023 and 2024, I gained invaluable real-world 
              experience in a startup environment. Working on production systems taught me not just how to write code, 
              but how to optimize for performance, ensure data integrity, and deliver solutions that directly impact business operations.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">
                Currently: AI Lab Intern at Byblos Bank
              </h4>
              <p className="text-gray-700 mb-3">
                Ashrafieh, Beirut | Jan 2026 - Present
              </p>
              <p className="text-gray-700 mb-3">
                I'm currently working in the AI Lab at Byblos Bank, where I'm diving deep into machine learning and 
                data engineering. This role has been transformative, introducing me to new technologies like Docker 
                for the first time and challenging me to build production-ready ML systems.
              </p>
              <p className="text-gray-700">
                Working on projects like ATM failure prediction and intelligent web scraping systems has taught me 
                that successful ML isn't just about algorithms—it's about feature engineering, data quality, system 
                optimization, and building trust through interpretability.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What Drives Me */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What Drives Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm particularly drawn to backend development and system optimization. There's something deeply 
              satisfying about making a system run 3 seconds faster or enabling 20% more transactions per hour. 
              These aren't just numbers—they represent better user experiences, increased business capacity, and 
              more efficient use of resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Efficiency</h4>
                <p className="text-sm text-gray-600">Every line of code should serve a purpose</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Reliability</h4>
                <p className="text-sm text-gray-600">Systems should work consistently, even under pressure</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600">Technology evolves rapidly, and so should we</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Practical Solutions</h4>
                <p className="text-sm text-gray-600">The best code is code that solves real problems</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Philosophy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">My Technical Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{principle.title}</h4>
                    <p className="text-sm text-gray-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills & Expertise */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">{category}</h3>
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          {typeof item === 'string' ? item : `${item.name} - ${item.level}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-gray-900">{lang.name}</p>
                  <p className="text-sm text-gray-600">{lang.level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  Diploma in Computer and Communication Engineering
                </h4>
                <p className="text-gray-600">Université Saint-Joseph de Beyrouth (USJ)</p>
                <p className="text-gray-600">Beirut, Lebanon</p>
                <p className="text-blue-600 font-medium">Expected Graduation: 2027</p>
                <p className="text-sm text-gray-600 mt-2">Specialization: Software Engineering</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Activities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Activities & Involvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                IEEE Member - Organizer in DYL (Digital Youth Leaders)
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  Supporting technical skill development in young engineers
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  Organizing workshops and technical events
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  Fostering leadership and collaboration in the tech community
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Looking Forward */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Looking Forward</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              As I approach my graduation in 2027, I'm excited to take on more challenging projects that push 
              the boundaries of what I can build. I'm particularly interested in opportunities that involve:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Backend system architecture and optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Data pipeline engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <Network className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Cloud infrastructure and DevOps</span>
              </li>
              <li className="flex items-start gap-2">
                <Cpu className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Embedded systems and IoT solutions</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
