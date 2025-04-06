import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiCheckCircle, FiDatabase } from 'react-icons/fi';

const HomePage = () => {
  const serviceItems = [
    {
      icon: <FiCode size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.'
    },
    {
      icon: <FiLayout size={32} />,
      title: 'UI/UX Design',
      description: 'User-focused designs that enhance experiences and boost conversions.'
    },
    {
      icon: <FiDatabase size={32} />,
      title: 'Database Solutions',
      description: 'Efficient database design and optimization for your applications.'
    },
    {
      icon: <FiCheckCircle size={32} />,
      title: 'Quality Assurance',
      description: 'Thorough testing to ensure your projects meet the highest standards.'
    }
  ];

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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">Professional Freelance Services</h1>
            <p className="text-xl mb-8">
              Web development, design, and IT consulting services tailored to your business needs.
              Building modern digital solutions with a focus on quality and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Get in Touch
              </Link>
              <Link to="/portfolio" className="btn btn-outline border-white text-white hover:bg-blue-700 hover:border-blue-700">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Providing comprehensive freelance services to help your business grow and succeed in the digital world.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceItems.map((service, index) => (
              <motion.div 
                key={index} 
                className="card p-6 text-center hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBmcmVlbGFuY2VyJTIwd29ya2luZyUyMG9uJTIwbGFwdG9wJTIwaW4lMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzQzOTUzMzI2fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Professional freelancer working" 
                data-image-request="professional freelancer working on laptop in modern office"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="mb-4">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm a dedicated freelance professional with over 5 years of experience delivering high-quality solutions for businesses of all sizes.
                My approach combines technical expertise with a deep understanding of business needs to create meaningful results.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4">What Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((_, index) => (
              <motion.div 
                key={index} 
                className="card p-6 shadow"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <h4 className="font-medium">
                      {index === 0 ? "Maria Johansson" : index === 1 ? "Erik Svensson" : "Anna Lindberg"}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {index === 0 ? "Marketing Director" : index === 1 ? "Startup Founder" : "E-commerce Manager"}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {index === 0 
                    ? "Working with AK was a game-changer for our website. The attention to detail and technical expertise delivered exactly what we needed."
                    : index === 1 
                      ? "AK understood our startup's vision and translated it into a beautiful, functional website that's helped us grow our customer base."
                      : "The e-commerce platform AK built for us has significantly improved our conversion rates and customer satisfaction."
                  }
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let's work together to bring your ideas to life. Contact me today for a free consultation.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;