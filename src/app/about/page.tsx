"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <motion.h1 
          className="text-4xl md:text-6xl font-serif mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl font-serif"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Professional Summary
            </motion.h2>
            <motion.p 
              className="text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Motivated and detail-oriented college student seeking a challenging role to gain hands-on experience in advertising,
              public relations, and social media management. Experienced in creating engaging content, organizing events, and
              promoting brand visibility across digital media platforms. Known for strong interpersonal skills, creativity, and a
              passion for optimizing workflow to enhance organizational success.
            </motion.p>
            
            <motion.h2 
              className="text-2xl font-serif pt-6"
              whileHover={{ scale: 1.02 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Education
            </motion.h2>
            <motion.p 
              className="text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Expected UCF Graduation date: May 2027<br />Major: Advertising and Public Relations
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl font-serif"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Skills & Activities
            </motion.h2>
            <motion.ul 
              className="list-disc list-inside space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                "Bilingual (English/Spanish)",
                "Member of National Society of Leadership and Success Sigma Alpha Pi UCF Chapter",
                "Member of Kappa Delta Sorority UCF",
                "Member of Surf Club UCF",
                "Proficient in Microsoft Office, Adobe, Google (Docs, Spreadsheets, Forms), CapCut and other editing software",
                "Activity and event planner",
                "Artistically inclined and creative",
                "Strong interpersonal skills",
                "Fitness/weight training and nutrition knowledge"
              ].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 