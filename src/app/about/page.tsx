"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <motion.h1 
          className="text-4xl md:text-6xl font-serif mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        
        {/* Hero Quote Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-lg p-8 mb-12 border border-border/50"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.blockquote 
            className="text-xl md:text-2xl font-serif italic text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "Creativity is intelligence having fun – and I believe every brand deserves to have fun while making an impact."
          </motion.blockquote>
          <motion.div 
            className="text-center mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            — Eva Alonso
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Professional Summary Section */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-serif">Professional Summary</h2>
              </motion.div>
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Motivated and detail-oriented college student seeking a challenging role to gain hands-on experience in advertising,
                public relations, and social media management. Experienced in creating engaging content, organizing events, and
                promoting brand visibility across digital media platforms. Known for strong interpersonal skills, creativity, and a
                passion for optimizing workflow to enhance organizational success.
              </motion.p>
            </motion.div>
            
            {/* Education Section */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-serif">Education</h2>
              </motion.div>
              <motion.div 
                className="space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-lg font-medium">University of Central Florida</p>
                <p className="text-muted-foreground">Bachelor's in Advertising and Public Relations</p>
                <p className="text-muted-foreground">Expected Graduation: May 2027</p>
              </motion.div>
            </motion.div>

            {/* Experience Highlights */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-serif">Experience Highlights</h2>
              </motion.div>
              <motion.ul className="space-y-3">
                {[
                  "Social Media Manager for Fetii Rideshare Solutions",
                  "Event planning and brand promotion experience",
                  "Content creation across multiple digital platforms",
                  "Community engagement and brand visibility campaigns"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-lg"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Skills Section */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                    <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m6-6h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4m-6-3h6m-5-4.5v9"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-serif">Skills</h2>
              </motion.div>
              <motion.div 
                className="grid grid-cols-1 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { skill: "Bilingual", detail: "English/Spanish" },
                  { skill: "Adobe Creative Suite", detail: "Design & Editing" },
                  { skill: "Microsoft Office", detail: "Full Suite" },
                  { skill: "Content Creation", detail: "CapCut & More" },
                  { skill: "Event Planning", detail: "Organization" },
                  { skill: "Social Media", detail: "Strategy & Management" }
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-md hover:bg-secondary/50 transition-colors"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.detail}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

                         {/* Activities Section */}
             <motion.div
               className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
               whileHover={{ y: -2 }}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.7 }}
             >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-serif">Activities</h2>
              </motion.div>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  "National Society of Leadership and Success",
                  "Kappa Delta Sorority UCF",
                  "Surf Club UCF",
                  "Fitness & Nutrition Enthusiast"
                ].map((activity, index) => (
                  <motion.li
                    key={activity}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/20 transition-colors"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-primary">•</span>
                    <span className="text-sm">{activity}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 