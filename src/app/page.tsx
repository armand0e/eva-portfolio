"use client";

import Link from "next/link";
import Image from "next/image";
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
            className="text-5xl md:text-7xl font-serif tracking-tight text-[oklch(0.65_0.12_200)]"
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
            a <span className="text-[oklch(0.65_0.12_200)]">social media manager</span> & <span className="text-[oklch(0.65_0.12_200)]">content creator</span> who enjoys crafting engaging experiences for ambitious B2B and B2C brands.
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
              <Button asChild className="rounded-none bg-primary hover:bg-[oklch(0.85_0.15_88)] px-8 py-6 text-lg font-medium transition-all duration-300">
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
                className="inline-flex items-center text-foreground font-medium text-lg hover:underline group hover:text-[oklch(0.65_0.12_200)] transition-colors duration-300"
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
          <div className="bg-card border border-border shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-all duration-500 p-4 rounded-sm">
            <motion.div 
              className="aspect-[3/4] bg-gradient-to-br from-muted via-secondary/30 to-accent/20 rounded-sm overflow-hidden relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              {/* Portrait Image */}
              <div className="w-full h-full relative">
                <Image
                  src="/portrait.jpg"
                  alt="Eva Alonso - Social Media Manager & Content Creator"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                  priority
                />
                
                {/* Subtle overlay for depth and professional frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-background/5"></div>
                <div className="absolute inset-2 border border-border/20 rounded-sm pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
