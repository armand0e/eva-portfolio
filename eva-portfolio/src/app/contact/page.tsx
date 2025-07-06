import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Get In Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl">
              I'd love to hear from you about potential collaboration opportunities, social media management needs, or any questions you might have.
            </p>
            
            <div className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <a href="mailto:Evaberlyn@icloud.com" className="text-primary hover:underline">
                  Evaberlyn@icloud.com
                </a>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Phone</h3>
                <p>(954) 415-4530</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Location</h3>
                <p>Oviedo, Florida</p>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border border-input rounded-sm" 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border border-input rounded-sm" 
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-2 border border-input rounded-sm min-h-32" 
                    placeholder="Your message"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-none">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 