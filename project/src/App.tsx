import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Download, FileText, MessageCircle } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import { projects } from './data/projects';
import { blogPosts } from './data/blog';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-indigo-600">Portfolio</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'blog', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${
                    activeSection === item
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="px-6 py-4 space-y-4">
              {['home', 'about', 'projects', 'blog', 'resume', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-600 hover:text-indigo-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center bg-fixed">
        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Hi, I'm <span className="text-indigo-300">Wagema John Ruitha</span>
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Information Technology Expert | AI, Big Data & CyberSecurity Enthusiast
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <a href="#" className="text-white hover:text-indigo-300 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <Github size={24} />
              </a>
              <a href="#" className="text-white hover:text-indigo-300 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-indigo-300 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce inline-block"
            >
              <ChevronDown size={24} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with a keen eye for creating beautiful and functional web applications. With expertise in modern web technologies and a problem-solving mindset, I strive to build solutions that make a difference.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Resume
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="text-indigo-600" />
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Senior Developer</h4>
                    <p className="text-gray-600">Tech Company • 2020 - Present</p>
                    <p className="text-sm text-gray-500">Led development of multiple web applications</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Full Stack Developer</h4>
                    <p className="text-gray-600">StartUp Inc • 2018 - 2020</p>
                    <p className="text-sm text-gray-500">Developed and maintained client projects</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Master's in Computer Science</h4>
                    <p className="text-gray-600">University Name • 2018</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bachelor's in Software Engineering</h4>
                    <p className="text-gray-600">University Name • 2016</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Get In Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;