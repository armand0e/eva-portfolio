"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center py-6 px-8 md:px-16"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          EVA ALONSO
        </Link>
      </motion.div>
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex gap-8">
          <NavigationMenuItem>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavigationMenuLink asChild>
                <Link href="/social-media" className="text-sm font-medium tracking-wider">
                  SOCIAL MEDIA MANAGEMENT
                </Link>
              </NavigationMenuLink>
            </motion.div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavigationMenuLink asChild>
                <Link href="/content" className="text-sm font-medium tracking-wider">
                  CONTENT STRATEGY & WRITING
                </Link>
              </NavigationMenuLink>
            </motion.div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavigationMenuLink asChild>
                <Link href="/portfolio" className="text-sm font-medium tracking-wider">
                  PORTFOLIO
                </Link>
              </NavigationMenuLink>
            </motion.div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-sm font-medium tracking-wider">
                  ABOUT
                </Link>
              </NavigationMenuLink>
            </motion.div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-4 items-center">
        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://www.instagram.com/eva_alonso1?igsh=MWM2YjB6NDgzdnlwcw%3D%3D&utm_source=qr"
            aria-label="Instagram"
            className="h-5 w-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <title>Instagram</title>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.2, rotate: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://www.facebook.com/share/166mff5oCg/?mibextid=wwXIfr"
            aria-label="Facebook"
            className="h-5 w-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <title>Facebook</title>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
          <Link
            href="https://www.linkedin.com/in/eva-alonso-347582261/"
            aria-label="LinkedIn"
            className="h-5 w-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.2, rotate: -5 }} transition={{ duration: 0.2 }}>
          <Link
            href="mailto:evaberlyn@icloud.com"
            aria-label="Email"
            className="h-5 w-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <title>Email</title>
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 