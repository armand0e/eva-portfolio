import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col px-8 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-serif mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-serif">Professional Summary</h2>
            <p className="text-lg">
              Motivated and detail-oriented college student seeking a challenging role to gain hands-on experience in advertising,
              public relations, and social media management. Experienced in creating engaging content, organizing events, and
              promoting brand visibility across digital media platforms. Known for strong interpersonal skills, creativity, and a
              passion for optimizing workflow to enhance organizational success.
            </p>
            
            <h2 className="text-2xl font-serif pt-6">Education</h2>
            <p className="text-lg">Expected UCF Graduation date: May 2027<br />Major: Advertising and Public Relations</p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Skills & Activities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Bilingual (English/Spanish)</li>
              <li>Member of National Society of Leadership and Success Sigma Alpha Pi UCF Chapter</li>
              <li>Member of Kappa Delta Sorority UCF</li>
              <li>Member of Surf Club UCF</li>
              <li>Proficient in Microsoft Office, Adobe, Google (Docs, Spreadsheets, Forms), CapCut and other editing software</li>
              <li>Activity and event planner</li>
              <li>Artistically inclined and creative</li>
              <li>Strong interpersonal skills</li>
              <li>Fitness/weight training and nutrition knowledge</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 