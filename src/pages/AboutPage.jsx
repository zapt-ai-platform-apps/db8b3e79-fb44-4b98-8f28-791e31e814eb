import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiBriefcase, FiBookOpen } from 'react-icons/fi';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { icon: <FiBriefcase />, value: "50+", label: "Projects Completed" },
    { icon: <FiUsers />, value: "30+", label: "Happy Clients" },
    { icon: <FiAward />, value: "5+", label: "Years Experience" },
    { icon: <FiBookOpen />, value: "∞", label: "Always Learning" }
  ];

  const skills = [
    { name: "Web Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Mobile Development", level: 75 },
    { name: "Database Design", level: 80 },
    { name: "Project Management", level: 85 }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <img src="https://images.unsplash.com/photo-1568038479111-87bf80659645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG9mJTIwYSUyMGZyZWVsYW5jZXIlMjBpbiUyMGJ1c2luZXNzJTIwY2FzdWFsJTIwYXR0aXJlJTIwc21pbGluZ3xlbnwwfHx8fDE3NDM5NTMzMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="AK - Professional Freelancer" 
                data-image-request="professional portrait of a freelancer in business casual attire smiling"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="mb-4">About Me</h1>
              <p className="text-gray-600 mb-6 text-lg">
                I'm a passionate freelance professional based in Stockholm, Sweden, dedicated to delivering 
                exceptional digital solutions that help businesses thrive in the online world.
              </p>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in web development, design, and IT consulting, 
                I've worked with clients across various industries to create impactful digital experiences 
                that drive results and exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-500 text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-6 text-center">My Story</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                My journey into freelancing began after working for several years at tech companies where I gained 
                valuable experience across various digital disciplines. I realized that I could provide more personalized 
                and dedicated service by working directly with clients as an independent professional.
              </p>
              <p>
                Since making that decision, I've had the privilege of working with businesses ranging from small 
                startups to established enterprises, helping them achieve their digital goals through custom solutions
                tailored to their specific needs.
              </p>
              <p>
                What drives me is seeing my clients succeed. Whether it's launching a new website that generates leads, 
                developing an application that streamlines operations, or creating a brand identity that resonates with 
                customers – I'm passionate about delivering results that make a real difference.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source 
                projects, or enjoying the beautiful outdoors in Stockholm.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I've honed my skills across various technologies and disciplines to deliver comprehensive solutions for my clients.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;