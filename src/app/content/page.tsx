"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContentStrategyPage() {
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
          Content Strategy & Writing
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
              Content That Converts
            </motion.h2>
            <motion.p 
              className="text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Effective content strategy goes beyond just creating posts—it&apos;s about crafting narratives that resonate 
              with your audience and drive meaningful engagement. With my background in advertising and public relations, 
              I develop content strategies that align with your business objectives while delivering value to your audience.
            </motion.p>
            
            <motion.h2 
              className="text-2xl font-serif pt-6"
              whileHover={{ scale: 1.02 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              My Process
            </motion.h2>
            <motion.ol 
              className="list-decimal list-inside space-y-3 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "Research your audience and competitive landscape",
                "Define key messaging pillars and content themes",
                "Develop a comprehensive content calendar",
                "Create engaging, on-brand content",
                "Analyze performance and refine the strategy"
              ].map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {step}
                </motion.li>
              ))}
            </motion.ol>
            
            <motion.div 
              className="pt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild className="rounded-none px-8 py-6 text-lg font-medium">
                  <Link href="/contact">
                    Start Your Content Journey
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
                Content Services
              </motion.h3>
              <ul className="space-y-4">
                {[
                  { 
                    number: "1", 
                    title: "Content Strategy Development", 
                    desc: "Comprehensive content plans tailored to your business goals" 
                  },
                  { 
                    number: "2", 
                    title: "Social Media Copy", 
                    desc: "Engaging captions and posts that drive interaction" 
                  },
                  { 
                    number: "3", 
                    title: "Blog & Article Writing", 
                    desc: "In-depth content that positions you as an industry authority" 
                  },
                  { 
                    number: "4", 
                    title: "Email Campaigns", 
                    desc: "Compelling email content that nurtures leads and customers" 
                  }
                ].map((service, index) => (
                  <motion.li 
                    key={service.number}
                    className="flex items-start"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 mt-1"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.number}
                    </motion.div>
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm">{service.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
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
                Why Quality Content Matters
              </motion.h3>
              <motion.p 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                In today&apos;s digital landscape, content is the cornerstone of brand communication. Quality content:
              </motion.p>
              <motion.ul 
                className="list-disc list-inside space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {[
                  "Builds trust with your audience",
                  "Improves search engine visibility",
                  "Establishes your brand voice and personality",
                  "Drives engagement and conversions",
                  "Creates lasting connections with your community"
                ].map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {benefit}
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