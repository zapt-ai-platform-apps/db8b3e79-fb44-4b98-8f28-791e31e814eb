import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "PLACEHOLDER",
      imageRequest: "modern e-commerce website on desktop and mobile screens",
      description: "A complete e-commerce solution with product management, checkout, and customer accounts.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Finance Dashboard",
      category: "app",
      image: "PLACEHOLDER",
      imageRequest: "financial dashboard with charts and data visualization",
      description: "Real-time financial dashboard for tracking investments and market trends.",
      tech: ["Vue.js", "Firebase", "D3.js", "TailwindCSS"]
    },
    {
      id: 3,
      title: "Travel Blog",
      category: "design",
      image: "PLACEHOLDER",
      imageRequest: "beautiful travel blog website with large photos and clean typography",
      description: "Responsive travel blog with content management system and social sharing.",
      tech: ["WordPress", "Custom Theme", "SEO Optimization"]
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      category: "app",
      image: "PLACEHOLDER",
      imageRequest: "fitness tracking mobile app with workout tracking and progress charts",
      description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
      tech: ["React Native", "GraphQL", "AWS"]
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "web",
      image: "PLACEHOLDER",
      imageRequest: "elegant restaurant website with food menu and reservation system",
      description: "Website for a high-end restaurant with online reservations and menu showcase.",
      tech: ["HTML/CSS", "JavaScript", "PHP"]
    },
    {
      id: 6,
      title: "Corporate Identity",
      category: "design",
      image: "PLACEHOLDER",
      imageRequest: "corporate brand identity mockup with logo business cards and stationery",
      description: "Complete brand identity including logo, stationery, and style guidelines.",
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="mb-6">My Portfolio</h1>
            <p className="text-gray-600 text-lg mb-8">
              Browse through a selection of my recent projects across web development, 
              app design, and brand identity work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'web', 'app', 'design'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All Projects' : 
                 category === 'web' ? 'Web Development' :
                 category === 'app' ? 'Applications' : 'Design'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="card overflow-hidden group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1516900557549-41557d405adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8bWFwJTIwb2YlMjBTdG9ja2hvbG0lMjBTd2VkZW4lMjBjaXR5JTIwY2VudGVyfGVufDB8fHx8MTc0Mzk1MzMyN3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                    src={project.image} 
                    alt={project.title} 
                    data-image-request={project.imageRequest}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;