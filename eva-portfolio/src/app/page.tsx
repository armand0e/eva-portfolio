import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <div className="space-y-8 md:space-y-16">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
            Hello, I'm Eva
          </h1>
          
          <p className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl">
            a social media manager & content creator who enjoys crafting engaging experiences for ambitious B2B and B2C brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Button asChild className="rounded-none bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-medium">
              <Link href="/contact">
                GET IN TOUCH
              </Link>
            </Button>
            
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-foreground font-medium text-lg hover:underline group"
            >
              Check out my work
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
