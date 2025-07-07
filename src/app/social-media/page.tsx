import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Social Media Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">My Approach</h2>
            <p className="text-lg">
              As a social media manager, I focus on creating engaging content that resonates with your target audience
              while maintaining a consistent brand voice. My experience with promoting group rideshare solutions
              has given me valuable insights into effective social media strategies for both B2B and B2C brands.
            </p>
            
            <h2 className="text-2xl font-serif pt-6">Services</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Content calendar development and management</li>
              <li>Daily posting and community engagement</li>
              <li>Event planning and promotion</li>
              <li>Behind-the-scenes content creation</li>
              <li>Campaign strategy and execution</li>
              <li>Analytics reporting and insights</li>
            </ul>
            
            <div className="pt-8">
              <Button asChild className="rounded-none px-8 py-6 text-lg font-medium">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-secondary p-8">
              <h3 className="text-xl font-serif mb-4">Case Study: Fetii Rideshare Solutions</h3>
              <p className="mb-4">
                As the Social Media Manager for Fetii Rideshare Solutions, I&apos;ve been responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Increasing brand awareness on UCF campus through daily social media content</li>
                <li>Planning and executing events that showcase the service benefits</li>
                <li>Creating engaging behind-the-scenes content that humanizes the brand</li>
                <li>Building a community of loyal users through consistent engagement</li>
              </ul>
            </div>
            
            <div className="bg-secondary p-8">
              <h3 className="text-xl font-serif mb-4">Strategy Elements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Content Planning</h4>
                  <p className="text-sm">Strategic content calendars aligned with business goals</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Community Building</h4>
                  <p className="text-sm">Engaging with followers to create brand advocates</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Visual Storytelling</h4>
                  <p className="text-sm">Compelling visuals that capture brand essence</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Analytics</h4>
                  <p className="text-sm">Data-driven decisions to optimize performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 