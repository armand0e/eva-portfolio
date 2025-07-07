"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <motion.div 
          className="space-y-8 md:space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif tracking-tight text-primary"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I&apos;m Eva
          </motion.h1>
          
          <motion.p 
            className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl text-foreground"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            a <span className="text-primary font-medium">social media manager</span> & <span className="text-primary font-medium">content creator</span> who enjoys crafting engaging experiences for ambitious B2B and B2C brands.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 pt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild className="rounded-md bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-medium transition-all duration-300">
                <Link href="/contact">
                  GET IN TOUCH
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center text-muted-foreground font-medium text-lg hover:text-primary hover:underline group transition-colors duration-300"
              >
                Check out my work
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2 h-4 w-4"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  <title>Arrow Right</title>
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
