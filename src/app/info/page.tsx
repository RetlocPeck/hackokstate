'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Code, Coffee, Wifi, Utensils, Heart } from 'lucide-react';

export default function InfoPage() {
  const schedule = [
    { time: 'Friday 6:00 PM', event: 'Registration & Check-in', description: 'Get your badge and swag!' },
    { time: 'Friday 7:00 PM', event: 'Opening Ceremony', description: 'Welcome & rules overview' },
    { time: 'Friday 8:00 PM', event: 'Team Formation', description: 'Find your perfect team' },
    { time: 'Friday 9:00 PM', event: 'Hacking Begins!', description: 'Let the coding commence' },
    { time: 'Saturday 8:00 AM', event: 'Breakfast', description: 'Fuel up for the day' },
    { time: 'Saturday 12:00 PM', event: 'Lunch', description: 'Midday refuel' },
    { time: 'Saturday 2:00 PM', event: 'Tech Talks', description: 'Industry experts share insights' },
    { time: 'Saturday 6:00 PM', event: 'Dinner', description: 'Evening meal' },
    { time: 'Saturday 11:59 PM', event: 'Midnight Snacks', description: 'Late night energy boost' },
    { time: 'Sunday 8:00 AM', event: 'Breakfast', description: 'Final fuel before submissions' },
    { time: 'Sunday 11:00 AM', event: 'Submissions Due', description: 'Finalize your projects' },
    { time: 'Sunday 12:00 PM', event: 'Project Presentations', description: 'Show off your work' },
    { time: 'Sunday 3:00 PM', event: 'Awards Ceremony', description: 'Celebrate the winners!' },
    { time: 'Sunday 4:00 PM', event: 'Closing & Wrap-up', description: 'Thank you and see you next year!' }
  ];

  const tracks = [
    {
      title: 'Web Development',
      description: 'Build amazing web applications using modern frameworks',
      prize: '$2,500',
      icon: Code
    },
    {
      title: 'Mobile Development',
      description: 'Create innovative mobile apps for iOS and Android',
      prize: '$2,500',
      icon: Users
    },
    {
      title: 'AI/ML',
      description: 'Harness the power of artificial intelligence and machine learning',
      prize: '$2,500',
      icon: Trophy
    },
    {
      title: 'Social Good',
      description: 'Build solutions that make a positive impact on society',
      prize: '$2,500',
      icon: Heart
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Blazing fast internet throughout the venue' },
    { icon: Utensils, title: 'Free Meals', description: 'All meals and snacks provided for 48 hours' },
    { icon: Coffee, title: 'Unlimited Coffee', description: 'Stay caffeinated with premium coffee and energy drinks' },
    { icon: Users, title: 'Mentorship', description: 'Industry professionals available for guidance' }
  ];

  const faq = [
    {
      question: 'Who can participate?',
      answer: 'All university students are welcome! From beginners to advanced programmers, we have something for everyone.'
    },
    {
      question: 'Do I need a team?',
                      answer: 'You can participate solo or in teams of up to 4 people. We&rsquo;ll have team formation sessions to help you find teammates.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, any hardware you want to use, and your creativity! We&rsquo;ll provide everything else.'
    },
    {
      question: 'Is there a cost to participate?',
      answer: 'Nope! Hack OKState is completely free, including meals, snacks, and swag.'
    },
    {
      question: 'What if I&rsquo;m a beginner?',
      answer: 'Perfect! We have workshops, mentors, and resources specifically for beginners. This is a great place to learn!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-osu-orange to-osu-orange-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl font-bold">Event Information</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Everything you need to know about Hack OKState &rsquo;25
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-osu-orange rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-osu-black">When</h3>
                  <p className="text-gray-600">February 15-16, 2025</p>
                  <p className="text-gray-600">Friday 6:00 PM - Sunday 4:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-osu-orange rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-osu-black">Where</h3>
                  <p className="text-gray-600">Student Union Building</p>
                  <p className="text-gray-600">Oklahoma State University</p>
                  <p className="text-gray-600">Stillwater, OK</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-osu-orange rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-osu-black">Duration</h3>
                  <p className="text-gray-600">48 Hours</p>
                  <p className="text-gray-600">Non-stop hacking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Tracks */}
      <section className="py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Competition Tracks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your track and compete for amazing prizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-osu-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-osu-orange group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-osu-orange group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-osu-black">{track.title}</h3>
                    <p className="text-gray-600">{track.description}</p>
                    <div className="text-2xl font-bold text-osu-orange">{track.prize}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Event Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              48 hours of non-stop innovation and fun
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-24 text-right">
                    <div className="text-sm font-semibold text-osu-orange">{item.time}</div>
                  </div>
                  <div className="w-4 h-4 bg-osu-orange rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-osu-black">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">What We Provide</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Focus on coding - we&rsquo;ll take care of everything else
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 p-6"
                >
                  <div className="w-16 h-16 bg-osu-orange/10 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-osu-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-osu-black">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-osu-black">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We&rsquo;ve got answers!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-osu-black mb-4">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
