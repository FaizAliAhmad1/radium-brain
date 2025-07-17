
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import howProgramWorksHero from "@/assets/how-program-works-hero.jpg";
import howProgramWorksNewHero from "@/assets/how-program-works-new-hero.jpg";
import benefitsHero from "@/assets/benefits-hero.jpg";
import aboutRadiumBrain from "@/assets/about-radium-brain.jpg";
import logoTransparent from "@/assets/logo-transparent.png";
import structuredLearningImg from "@/assets/structured-learning.jpg";
import { 
  Brain, 
  Eye, 
  Target, 
  Lightbulb, 
  MapPin, 
  Palette, 
  Focus, 
  Heart,
  Play,
  CheckCircle2,
  Users,
  GraduationCap,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin as Location,
  Clock,
  Trophy,
  Globe,
  BookOpen,
  Users2,
  Monitor,
  Gamepad2,
  BarChart3,
  Puzzle,
  Crosshair,
  Zap,
  Shield
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours to discuss bringing Radium Brain to your school.",
    });
    setFormData({ name: '', email: '', phone: '', school: '', message: '' });
  };

  const skills = [
    { icon: Brain, title: "Memory", description: "Enhanced retention and recall abilities", color: "purple" },
    { icon: Target, title: "Concentration", description: "Improved focus and attention span", color: "blue" },
    { icon: Puzzle, title: "Problem-Solving", description: "Systematic approach to challenges", color: "green" },
    { icon: Lightbulb, title: "Critical Thinking", description: "Analytical and logical reasoning", color: "orange" },
    { icon: Crosshair, title: "Strategic Thinking", description: "Long-term planning and foresight", color: "blue" },
    { icon: Palette, title: "Creative Thinking", description: "Innovation and out-of-box solutions", color: "yellow" },
    { icon: Zap, title: "Visualization", description: "Mental imagery and spatial awareness", color: "blue" },
    { icon: Shield, title: "Stress Management", description: "Build Emotional regulation and resilience", color: "green" }
  ];

  const steps = [
    { title: "Assessment", description: "Evaluate current cognitive skill levels" },
    { title: "Structured Learning", description: "Video lessons adapted to student's grade level" },
    { title: "Practice & Application", description: "Real-world exercises and challenges" },
    { title: "Progress Tracking", description: "Monitor improvement and celebrate milestones" }
  ];

  const benefits = [
    "Improved academic performance across all subjects",
    "Better classroom focus and attention",
    "Enhanced problem-solving in daily situations",
    "Reduced dependency on mobile games and screens",
    "Stronger emotional regulation and stress management",
    "Increased creativity and innovative thinking"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/0f2bcd2d-5061-421f-84a2-185b3075ea2b.png"
              alt="Radium Brain Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={() => window.location.href = 'mailto:brainradium@gmail.com?subject=Interested in Radium Brain Program&body=Hello,%0D%0A%0D%0AI am interested in learning more about the Radium Brain cognitive skills development program for our school.%0D%0A%0D%0APlease provide more information about:%0D%0A- Program implementation%0D%0A- Pricing and packages%0D%0A- Training requirements%0D%0A- Success stories%0D%0A%0D%0ASchool/Organization:%0D%0AContact Person:%0D%0APhone Number:%0D%0ABest time to contact:%0D%0A%0D%0AThank you!'}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Cognitive Skills Development Platform</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Build Smarter Minds,<br />
                <span className="text-blue-600">Not Just Better Grades</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Evidence-based cognitive training platform that enhances memory, focus, and critical thinking across students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                  onClick={() => window.location.href = 'mailto:brainradium@gmail.com?subject=Request for Demo Video&body=Hello,%0D%0A%0D%0AI would like to request a demo video of the Radium Brain cognitive skills development program.%0D%0A%0D%0APlease send me:%0D%0A- Program demonstration video%0D%0A- Overview of key features%0D%0A- Student engagement examples%0D%0A- Implementation process%0D%0A%0D%0ASchool/Organization:%0D%0AContact Person:%0D%0AEmail:%0D%0APhone Number:%0D%0A%0D%0AThank you!'}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3"
                  onClick={() => window.location.href = 'mailto:brainradium@gmail.com?subject=Schedule School Visit Request&body=Hello,%0D%0A%0D%0AI would like to schedule a school visit to learn more about the Radium Brain program.%0D%0A%0D%0APlease coordinate with us for:%0D%0A- On-site program presentation%0D%0A- Live demonstration for faculty%0D%0A- Q&A session with administrators%0D%0A- Implementation planning discussion%0D%0A%0D%0ASchool Details:%0D%0ASchool Name:%0D%0AAddress:%0D%0AContact Person:%0D%0AEmail:%0D%0APhone Number:%0D%0APreferred Visit Dates:%0D%0ANumber of Attendees:%0D%0A%0D%0AThank you!'}
                >
                  Schedule School Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Student learning with focus" 
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Problem We're Solving</h2>
              <p className="text-gray-700 mb-6">Students today are growing up in a world of distractions and addictive screens — losing focus, creativity, and emotional control. Traditional education focuses on information, not on building the mental skills students need to thrive.</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Declining attention spans and focus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Poor problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Weak memory and retention</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                  <span>Lack of strategic thinking</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/76479769-2467-4bdf-8f6f-0a84a2791c77.png" 
                alt="Team collaboration and growth" 
                className="rounded-xl shadow-lg max-w-sm w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Solution</h2>
              <p className="text-gray-700 mb-6">Our program doesn't just shield students from distractions; it sharpens them — building decision-making, memory, and strategic thinking from an early age through engaging, gamified experiences.</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Enhanced memory and concentration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Improved problem-solving skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Better strategic thinking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Increased emotional resilience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills We Develop Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">8 Core Cognitive Skills We Develop</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our evidence-based program systematically builds essential mental skills that enhance academic performance and life success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skills.map((skill, index) => {
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'purple':
                    return 'bg-purple-100 text-purple-600';
                  case 'blue':
                    return 'bg-blue-100 text-blue-600';
                  case 'green':
                    return 'bg-green-100 text-green-600';
                  case 'orange':
                    return 'bg-orange-100 text-orange-600';
                  case 'yellow':
                    return 'bg-yellow-100 text-yellow-600';
                  default:
                    return 'bg-gray-100 text-gray-600';
                }
              };

              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                  <div className="mb-4">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(skill.color)}`}>
                      <skill.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How Our Program Works</h2>
            <p className="text-xl text-gray-600">Simple, structured, and effective approach to cognitive development</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => {
              const images = [
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Assessment - student learning
                structuredLearningImg, // Structured Learning - new custom image
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Practice & Application - children learning
                "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"  // Progress Tracking - growth/charts
              ];
              
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div>
                    <img 
                      src={images[index]} 
                      alt={step.title} 
                      className="w-full h-48 object-cover rounded-lg shadow-md mx-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits for Students & Parents Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits for Students & Parents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes that matter for academic success and personal development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* For Students */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">For Students</h3>
              <p className="text-gray-600 text-center mb-8">Developing skills that create confident, capable learners</p>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Brain className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Enhanced Learning Capacity</h4>
                      <p className="text-gray-600">Improved memory, focus, and problem-solving skills that benefit all subjects</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Better Academic Performance</h4>
                      <p className="text-gray-600">Stronger cognitive foundation leads to improved grades across the curriculum</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Life Skills Development</h4>
                      <p className="text-gray-600">Critical thinking and decision-making skills that extend beyond the classroom</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* For Parents */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">For Parents</h3>
              <p className="text-gray-600 text-center mb-8">Peace of mind knowing your child is developing essential skills</p>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Reduced Screen Time Concerns</h4>
                      <p className="text-gray-600">Transform passive screen time into active brain-building activities</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Star className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Visible Progress Tracking</h4>
                      <p className="text-gray-600">Clear insights into your child's cognitive development and achievements</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Future-Ready Skills</h4>
                      <p className="text-gray-600">Prepare your child with essential skills for the modern world</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Real Impact Stats */}
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-12">Real Impact, Real Results</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Improvement in focus</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">78%</div>
                <div className="text-blue-100">Better problem-solving</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">92%</div>
                <div className="text-blue-100">Student engagement</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">89%</div>
                <div className="text-blue-100">Parent satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Schools Love RadiumBrain Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Schools Love RadiumBrain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 500+ schools across India who have transformed their students' cognitive abilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Zero Teacher Effort</h3>
                  <p className="text-gray-600">Complete self-learning platform with video lessons and automated progress tracking</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Measurable Results</h3>
                  <p className="text-gray-600">Clear metrics showing improvement in concentration, problem-solving, and academic performance</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Multi-Language Support</h3>
                  <p className="text-gray-600">Available in Hindi, English, and regional languages for inclusive learning</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">NEP 2020 Aligned</h3>
                  <p className="text-gray-600">Perfectly aligned with National Education Policy's focus on critical thinking and holistic development</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Users2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Community Building</h3>
                  <p className="text-gray-600">Foster collaboration and healthy competition among students</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Implementation</h3>
                  <p className="text-gray-600">Cost-effective solution that fits any school budget without compromising quality</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Three-Tier Service Structure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Three-Tier Service Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive ecosystem designed for students, educators, and parents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Tier 1 - Students */}
            <Card className="p-8 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Tier 1</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Students</h4>
                <p className="text-gray-600">Mobile/Web App</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Gamified learning modules</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Weekly cognitive challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Interactive brain games</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Progress tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Achievement badges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Multi-language support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>

            {/* Tier 2 - Teachers/Schools */}
            <Card className="p-8 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Tier 2</h3>
                <h4 className="text-lg font-semibold text-green-600 mb-2">Teachers/Schools</h4>
                <p className="text-gray-600">LMS Dashboard</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Student progress tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Class leaderboards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Reward management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Curriculum integration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Assessment tools</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>

            {/* Tier 3 - Parents */}
            <Card className="p-8 border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Tier 3</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Parents</h4>
                <p className="text-gray-600">Parent App View</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Child's progress insights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Learning tips and guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Achievement notifications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Home practice suggestions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Development reports</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Communication tools</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
          </div>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Engaging Format</h3>
              <p className="text-gray-600">Interactive games and challenges that make learning cognitive skills fun and addictive</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">Comprehensive analytics help educators and parents track real cognitive development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transparent Progress</h3>
              <p className="text-gray-600">Clear visibility into skill development with detailed reports and achievement systems</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Bring This Program to Your School</h2>
            <p className="text-xl text-gray-600">Ready to transform your students' cognitive abilities? Let's talk!</p>
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span>+91 6206379425</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span>brainradium@gmail.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Location className="h-5 w-5 text-blue-600 mr-3" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">About Radium Brain</h2>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">About</h3>
                <p className="text-lg text-gray-700 mb-6">
                  At Radium Brain, we are on a mission to reimagine how young minds are shaped in today's digital age. In a world flooded with distractions, screen addiction, and academic pressure, children are missing out on the core cognitive skills that define future-ready individuals —like memory, focus, critical thinking, decision-making, and emotional resilience.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  While big companies invest heavily in teaching their employees skills like decision-making, strategic thinking, and stress management using tools like chess, we bring those same high-performance principles to children — earlier, and in a more engaging way.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our platform is designed to help students develop memory, focus, creativity, and emotional intelligence in a structured, fun, and school-friendly way.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To empower young minds by delivering enterprise-grade cognitive skill development at the school level — replacing passive screen time with purposeful brain training.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={aboutRadiumBrain}
                alt="About Radium Brain - cognitive development facility" 
                className="rounded-2xl shadow-xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/0f2bcd2d-5061-421f-84a2-185b3075ea2b.png"
                  alt="Radium Brain Logo" 
                  className="h-24 w-auto"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Class 1-5 Program</li>
                <li>Class 6-8 Program</li>
                <li>Class 9-10 Program</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Video Lessons</li>
                <li>Practice Exercises</li>
                <li>Progress Reports</li>
                <li>Parent Guides</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>brainradium@gmail.com</li>
                <li>+91 6206379425</li>
                <li>Hyderabad, Telangana, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Radium Brain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
