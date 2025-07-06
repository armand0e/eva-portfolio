"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
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
          Get In Touch
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
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
            <motion.p 
              className="text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I&apos;d love to hear from you about potential collaboration opportunities, social media management needs, or any questions you might have.
            </motion.p>
            
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium text-lg">Email</h3>
                <a href="mailto:evaberlyn@icloud.com" className="text-primary hover:underline">
                  evaberlyn@icloud.com
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium text-lg">Phone</h3>
                <p>(954) 415-4530</p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium text-lg">Location</h3>
                <p>Oviedo, Florida</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <motion.div 
                    className="grid w-full items-center gap-1.5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 border border-input rounded-sm" 
                      placeholder="Your name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="grid w-full items-center gap-1.5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 border border-input rounded-sm" 
                      placeholder="Your email"
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="grid w-full items-center gap-1.5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      className="w-full p-2 border border-input rounded-sm min-h-32" 
                      placeholder="Your message"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="submit" className="w-full rounded-none">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 