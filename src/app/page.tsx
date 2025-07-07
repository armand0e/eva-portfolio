"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col lg:flex-row justify-center items-start px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full gap-12">
        <motion.div 
          className="space-y-8 md:space-y-16 lg:w-2/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I&apos;m Eva
          </motion.h1>
          
          <motion.p 
            className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            a social media manager & content creator who enjoys crafting engaging experiences for ambitious B2B and B2C brands.
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
              <Button asChild className="rounded-none bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-medium">
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
                className="inline-flex items-center text-foreground font-medium text-lg hover:underline group"
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

        {/* Floating Portfolio Picture Card */}
        <motion.div
          className="lg:w-1/3 w-full max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-24"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          whileHover={{ 
            y: -8, 
            scale: 1.02
          }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-all duration-500 p-4">
            <motion.div 
              className="aspect-[3/4] bg-gradient-to-br from-stone-100 via-neutral-100 to-gray-100 dark:from-stone-800 dark:via-neutral-800 dark:to-gray-800 rounded-sm overflow-hidden relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              {/* Portrait placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-stone-200/70 via-neutral-200/70 to-gray-200/70 dark:from-stone-700/70 dark:via-neutral-700/70 dark:to-gray-700/70 flex items-center justify-center relative">
                <motion.div
                  className="w-24 h-24 opacity-30"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0] 
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-full h-full text-gray-400 dark:text-gray-500"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </motion.div>
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 dark:from-black/20 dark:to-white/5"></div>
                
                {/* Professional frame inner border */}
                <div className="absolute inset-2 border border-white/20 dark:border-gray-600/20 rounded-sm"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
