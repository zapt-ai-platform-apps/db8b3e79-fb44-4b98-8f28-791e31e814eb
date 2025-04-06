import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiLayout, FiSmartphone, FiDatabase, 
  FiServer, FiShoppingCart, FiBarChart2, FiHelpCircle 
} from 'react-icons/fi';

const ServicesPage = () => {
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

  const services = [
    {
      icon: <FiCode size={40} />,
      title: "Web Development",
      description: "Custom websites built with the latest technologies to ensure performance, security, and scalability. From simple landing pages to complex web applications.",
      features: [
        "Responsive design for all devices",
        "SEO-friendly structure",
        "Performance optimization",
        "Content management systems",
        "Custom functionality"
      ]
    },
    {
      icon: <FiLayout size={40} />,
      title: "UI/UX Design",
      description: "User-focused design that enhances experiences and boosts conversions. Creating interfaces that are both beautiful and functional.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Interactive design",
        "Usability testing",
        "Brand alignment"
      ]
    },
    {
      icon: <FiSmartphone size={40} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "App Store optimization",
        "Push notifications",
        "Offline functionality"
      ]
    },
    {
      icon: <FiDatabase size={40} />,
      title: "Database Solutions",
      description: "Efficient database design, implementation, and optimization to ensure your applications run smoothly and securely.",
      features: [
        "Database architecture",
        "Performance optimization",
        "Data migration",
        "Backup and recovery",
        "Security implementation"
      ]
    },
    {
      icon: <FiServer size={40} />,
      title: "API Development",
      description: "Custom API development to connect your applications and services, enabling seamless integration and data flow.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API documentation",
        "Authentication & security",
        "Performance optimization"
      ]
    },
    {
      icon: <FiShoppingCart size={40} />,
      title: "E-commerce Development",
      description: "Comprehensive e-commerce solutions to help you sell products online, from catalog management to secure checkout.",
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Inventory management",
        "Customer accounts",
        "Order fulfillment"
      ]
    },
    {
      icon: <FiBarChart2 size={40} />,
      title: "Analytics & Reporting",
      description: "Implementation of analytics tools and custom reporting solutions to help you understand your users and make data-driven decisions.",
      features: [
        "Analytics setup and tracking",
        "Custom dashboard creation",
        "Data visualization",
        "Conversion tracking",
        "Performance reporting"
      ]
    },
    {
      icon: <FiHelpCircle size={40} />,
      title: "Consulting & Support",
      description: "Expert advice and ongoing support to help you navigate technical challenges and make informed decisions.",
      features: [
        "Technical strategy",
        "Platform selection",
        "Code review and audit",
        "Performance optimization",
        "Maintenance and support"
      ]
    }
  ];

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
            <h1 className="mb-6">My Services</h1>
            <p className="text-gray-600 text-lg mb-8">
              Comprehensive freelance services tailored to your business needs. From web development to digital consulting, 
              I provide end-to-end solutions that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="card p-8 hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4">My Work Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I follow a structured approach to ensure every project is completed efficiently, on time, and to the highest standards.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { number: "01", title: "Discovery & Planning", description: "Understanding your goals, requirements, and constraints to create a solid project plan." },
              { number: "02", title: "Design & Prototyping", description: "Creating wireframes, mockups, and prototypes to visualize solutions before development begins." },
              { number: "03", title: "Development", description: "Building your solution with clean, efficient code following best practices and modern standards." },
              { number: "04", title: "Testing & Quality Assurance", description: "Rigorous testing to ensure everything works flawlessly across all platforms and devices." },
              { number: "05", title: "Deployment", description: "Careful deployment to ensure a smooth transition and minimal disruption." },
              { number: "06", title: "Support & Maintenance", description: "Ongoing support to address any issues and keep your solution running optimally." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  {index < 5 && <div className="w-px h-full bg-blue-200 mx-auto mt-2"></div>}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let's discuss how I can help you achieve your goals with tailored freelance services.
            </p>
            <a href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;