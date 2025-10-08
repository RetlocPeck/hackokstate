'use client';

import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Mail, Github, Linkedin, Globe } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { teamData, type TeamMember } from '@/data/team';

// Component to handle team member images with fallback
function TeamMemberImage({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    // Show placeholder if image fails to load
    return (
      <div className="absolute inset-0 bg-osu-orange/30 flex items-center justify-center">
        <span className="text-4xl font-bold text-osu-orange">
          {member.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-osu-orange/20 animate-pulse" />
      )}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className={`object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </>
  );
}

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [teamTitleVisible, setTeamTitleVisible] = useState(false);
  const [joinTeamVisible, setJoinTeamVisible] = useState(false);

  // Ensure component is mounted before running visibility checks
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check what's visible on page load
  useEffect(() => {
    if (!mounted) return;
    
    const checkVisibleSections = () => {
      const sections = [
        { id: 'team-section', setter: setTeamVisible },
        { id: 'team-title', setter: setTeamTitleVisible },
        { id: 'join-team', setter: setJoinTeamVisible }
      ];

      sections.forEach(({ id, setter }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            setter(true);
          }
        }
      });
    };

    // Check immediately and after a short delay to ensure DOM is ready
    checkVisibleSections();
    const timer = setTimeout(checkVisibleSections, 100);
    
    return () => clearTimeout(timer);
  }, [mounted]);
  const teamMembers = teamData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-osu-orange to-osu-orange-dark text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Meet Our Team</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto px-4">
              The passionate students behind Hack OKState '25
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section id="team-section" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            id="team-title"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => {
              setTeamTitleVisible(true);
              setTeamVisible(true);
            }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-osu-black">Our Organizing Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Dedicated students working to create an amazing hackathon experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member: TeamMember, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col w-full min-h-[400px]"
              >
                <div className="aspect-square bg-gradient-to-br from-osu-orange/20 to-osu-orange-dark/20 flex items-center justify-center relative overflow-hidden">
                  <TeamMemberImage member={member} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-osu-black">{member.name}</h3>
                    <p className="text-sm sm:text-base text-osu-orange font-semibold">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-2 sm:space-x-3 mt-auto">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-700 hover:bg-osu-orange hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-700 hover:bg-osu-orange hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-700 hover:bg-osu-orange hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-gray-700 hover:bg-osu-orange hover:text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={`${member.name} Website`}
                      >
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section id="join-team" className="py-12 sm:py-16 md:py-20 bg-osu-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-200px', amount: 0.1 }}
            onViewportEnter={() => setJoinTeamVisible(true)}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-osu-black">Want to Join Our Team?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're always looking for passionate students to help organize future hackathons.
            </p>
            <a
              href="mailto:hackokstate@okstate.edu"
              className="inline-flex items-center space-x-2 bg-osu-orange hover:bg-osu-orange-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span>Get Involved</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
