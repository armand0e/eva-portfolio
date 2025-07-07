import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContentStrategyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Content Strategy & Writing</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Content That Converts</h2>
            <p className="text-lg">
              Effective content strategy goes beyond just creating posts—it&apos;s about crafting narratives that resonate 
              with your audience and drive meaningful engagement. With my background in advertising and public relations, 
              I develop content strategies that align with your business objectives while delivering value to your audience.
            </p>
            
            <h2 className="text-2xl font-serif pt-6">My Process</h2>
            <ol className="list-decimal list-inside space-y-3 text-lg">
              <li>Research your audience and competitive landscape</li>
              <li>Define key messaging pillars and content themes</li>
              <li>Develop a comprehensive content calendar</li>
              <li>Create engaging, on-brand content</li>
              <li>Analyze performance and refine the strategy</li>
            </ol>
            
            <div className="pt-8">
              <Button asChild className="rounded-none px-8 py-6 text-lg font-medium">
                <Link href="/contact">
                  Start Your Content Journey
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-secondary p-8">
              <h3 className="text-xl font-serif mb-4">Content Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-medium">Content Strategy Development</h4>
                    <p className="text-sm">Comprehensive content plans tailored to your business goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-medium">Social Media Copy</h4>
                    <p className="text-sm">Engaging captions and posts that drive interaction</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-medium">Blog & Article Writing</h4>
                    <p className="text-sm">In-depth content that positions you as an industry authority</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 mt-1">4</div>
                  <div>
                    <h4 className="font-medium">Email Campaigns</h4>
                    <p className="text-sm">Compelling email content that nurtures leads and customers</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary p-8">
              <h3 className="text-xl font-serif mb-4">Why Quality Content Matters</h3>
              <p className="mb-4">
                In today&apos;s digital landscape, content is the cornerstone of brand communication. Quality content:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Builds trust with your audience</li>
                <li>Improves search engine visibility</li>
                <li>Establishes your brand voice and personality</li>
                <li>Drives engagement and conversions</li>
                <li>Creates lasting connections with your community</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 