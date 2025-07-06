import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Portfolio</h1>
        
        <div className="grid grid-cols-1 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Social Media Manager and Organizer</CardTitle>
              <CardDescription className="text-lg">Fetii Rideshare Solutions (December 2024 - Present)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Promote on demand-group ridesharing for groups and businesses</li>
                <li>Plan activities and events and behind the scenes social media content</li>
                <li>Post daily on social media sites to promote awareness of student life on UCF campus</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Surf Camp Counselor</CardTitle>
              <CardDescription className="text-lg">Living Water Surf School - Pompano Beach, FL (June 2021 - August 2022)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Taught children (5-15 year old) how to surf, snorkel, and dive</li>
                <li>Organized and facilitated beach games and activities</li>
                <li>Educated campers on ocean safety and marine ecosystems</li>
                <li>Enforced behavior management rules and facilitated positive relations among campers</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Lifeguard/Swim Instructor</CardTitle>
              <CardDescription className="text-lg">Eagles Landing Camp - Coconut Creek, FL (June 2022 - July 2022)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Led children through 'instructionals' on how to swim</li>
                <li>Learned and taught specific swim strokes</li>
                <li>Implemented child water safety rules and enforced behavior management</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Hostess/Server</CardTitle>
              <CardDescription className="text-lg">Caribbean Grille - Boca Raton, FL (January 2022 - May 2022)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Memorized menus and offered special details to promote target items</li>
                <li>Greeted and seated guests, taking into account their preferences as well as the needs of the restaurant</li>
                <li>Oversaw server balance and table turnover to ensure that customers were properly seated and satisfied</li>
                <li>Worked in the kitchen and accurately informed groups about tables and food wait times</li>
                <li>Assisted in customer demands by taking orders, checking on tables, refilling beverages, and delivering meals and processing payments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 