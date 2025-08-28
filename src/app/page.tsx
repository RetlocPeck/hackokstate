'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Users, Trophy, Code, Rocket, Clock, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Trophy,
      title: '24 Hours',
      description: 'Non-stop coding and innovation'
    },
    {
      icon: Users,
      title: '100+ Hackers',
      description: 'Connect with brilliant minds'
    },
    {
      icon: Star,
      title: '$1K+ Prizes',
      description: 'Amazing rewards for winners'
    },
    {
      icon: Code,
      title: 'All Skill Levels',
      description: 'Beginners to experts welcome'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-osu-gray-light to-white">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6600' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-osu-black">Hack</span>{' '}
                <span className="text-osu-orange">OKState</span>{' '}
                <span className="text-osu-black">'25</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Oklahoma State University's premier hackathon. 24 hours of innovation, 
                collaboration, and building the future.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-osu-orange hover:bg-osu-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Register Now</span>
              </a>
              
              <Link 
                href="/info"
                className="border-2 border-osu-orange text-osu-orange hover:bg-osu-orange hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Learn More</span>
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-osu-orange" />
                <span className="font-medium">September 13-14, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-osu-orange" />
                <span className="font-medium">CEAT Endeavor, OSU</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-osu-orange" />
                <span className="font-medium">24 Hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Why Hack OKState?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the most exciting tech event of the year at Oklahoma State University
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 p-6 rounded-2xl hover:bg-osu-gray-light transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-osu-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-osu-orange group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-osu-orange group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-osu-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-osu-orange to-osu-orange-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to Build Something Amazing?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join hundreds of talented students for an unforgettable weekend of innovation and creativity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-osu-orange px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Users className="w-5 h-5" />
              <span>Register for Hack OKState '25</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}