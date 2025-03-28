import React from 'react';
import { 
  ArrowRight, 
  Code, 
  BarChart3, 
  Share2, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Star, 
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Search,
  Palette,
  MessageSquare,
  LineChart,
  PieChart,
  TrendingUp,
  Megaphone,
  Target,
  Camera
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">TechVision</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-secondary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-float">
              Transform Your Digital Presence
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
              We craft innovative digital solutions that drive growth and deliver measurable results for forward-thinking businesses.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive digital solutions tailored for your success</p>
          </div>

          <div className="space-y-20">
            {/* Technology Services */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Services</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Custom Website Development</li>
                    <li>• E-commerce Solutions</li>
                    <li>• Progressive Web Apps</li>
                    <li>• API Integration</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• iOS App Development</li>
                    <li>• Android App Development</li>
                    <li>• Cross-platform Solutions</li>
                    <li>• App Maintenance & Updates</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Cloud Migration</li>
                    <li>• AWS & Azure Services</li>
                    <li>• Cloud Infrastructure</li>
                    <li>• DevOps Implementation</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Analytics Services */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics Services</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Data Collection & Analysis</li>
                    <li>• Predictive Analytics</li>
                    <li>• Customer Insights</li>
                    <li>• Performance Metrics</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <LineChart className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Business Intelligence</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Interactive Dashboards</li>
                    <li>• Real-time Reporting</li>
                    <li>• KPI Tracking</li>
                    <li>• Data Visualization</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <PieChart className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Market Research</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Competitor Analysis</li>
                    <li>• Market Trends</li>
                    <li>• Consumer Behavior</li>
                    <li>• Industry Reports</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Digital Marketing Services */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Digital Marketing Services</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">SEO Services</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Keyword Research</li>
                    <li>• On-page Optimization</li>
                    <li>• Technical SEO</li>
                    <li>• Link Building</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Share2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Social Media Marketing</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Content Strategy</li>
                    <li>• Community Management</li>
                    <li>• Paid Advertising</li>
                    <li>• Influencer Marketing</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Megaphone className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Content Marketing</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Content Creation</li>
                    <li>• Blog Management</li>
                    <li>• Email Marketing</li>
                    <li>• Video Production</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Creative Services */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Creative Services</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• User Research</li>
                    <li>• Wireframing</li>
                    <li>• Prototyping</li>
                    <li>• Visual Design</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Brand Design</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Logo Design</li>
                    <li>• Brand Guidelines</li>
                    <li>• Marketing Materials</li>
                    <li>• Brand Strategy</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="material-card p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Content Creation</h4>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Copywriting</li>
                    <li>• Graphic Design</li>
                    <li>• Video Production</li>
                    <li>• Animation</li>
                  </ul>
                  <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">Driving digital transformation with expertise and innovation</p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform -rotate-6"></div>
                <img
                  className="relative rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                  alt="Team collaboration"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth and create lasting impact in the digital landscape.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg text-gray-700">Expert team of digital professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg text-gray-700">Award-winning solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">Let's discuss your next project</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="material-card p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="material-card p-6 flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@techvision.com</p>
                </div>
              </div>

              <div className="material-card p-6 flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="material-card p-6 flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <Globe className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold text-white">TechVision</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; 2025 TechVision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;