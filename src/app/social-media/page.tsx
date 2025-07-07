"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialMediaPage() {
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
          Social Media Management
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl font-serif"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              My Approach
            </motion.h2>
            <motion.p 
              className="text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              As a social media manager, I focus on creating engaging content that resonates with your target audience
              while maintaining a consistent brand voice. My experience with promoting group rideshare solutions
              has given me valuable insights into effective social media strategies for both B2B and B2C brands.
            </motion.p>
            
            <motion.h2 
              className="text-2xl font-serif pt-6"
              whileHover={{ scale: 1.02 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Services
            </motion.h2>
            <motion.ul 
              className="list-disc list-inside space-y-3 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "Content calendar development and management",
                "Daily posting and community engagement",
                "Event planning and promotion",
                "Behind-the-scenes content creation",
                "Campaign strategy and execution",
                "Analytics reporting and insights"
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="pt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild className="rounded-none px-8 py-6 text-lg font-medium">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="bg-secondary p-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <motion.h3 
                className="text-xl font-serif mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Case Study: Fetii Rideshare Solutions
              </motion.h3>
              <motion.p 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                As the Social Media Manager for Fetii Rideshare Solutions, I&apos;ve been responsible for:
              </motion.p>
              <motion.ul 
                className="list-disc list-inside space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {[
                  "Increasing brand awareness on UCF campus through daily social media content",
                  "Planning and executing events that showcase the service benefits",
                  "Creating engaging behind-the-scenes content that humanizes the brand",
                  "Building a community of loyal users through consistent engagement"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary p-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <motion.h3 
                className="text-xl font-serif mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Strategy Elements
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Content Planning", desc: "Strategic content calendars aligned with business goals" },
                  { title: "Community Building", desc: "Engaging with followers to create brand advocates" },
                  { title: "Visual Storytelling", desc: "Compelling visuals that capture brand essence" },
                  { title: "Analytics", desc: "Data-driven decisions to optimize performance" }
                ].map((element, index) => (
                  <motion.div 
                    key={element.title}
                    className="border-l-2 border-primary pl-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ x: 5, borderLeftWidth: "4px" }}
                  >
                    <h4 className="font-medium">{element.title}</h4>
                    <p className="text-sm">{element.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 