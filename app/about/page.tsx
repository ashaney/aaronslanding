import Link from 'next/link';
import { Separator } from "@/components/ui/separator"
import { Music, Code, TreePine, Globe, Users } from 'lucide-react';

export default function About() {
  const currentDate = new Date();
  const birthDate = new Date('1986-08-01');
  const jan2000 = new Date('2000-01-01').getTime();
  const yearsSince2000 = Math.floor((currentDate.getTime() - jan2000) / (365.25 * 24 * 60 * 60 * 1000));
  const oldSite = 'https://web.archive.org/web/20010429071232/http://www.geocities.com/liquidsnk_mgs/';
  
  const myAge = currentDate.getFullYear() - birthDate.getFullYear() -
    (currentDate.getMonth() < birthDate.getMonth() || 
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) ? 1 : 0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-sm">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-2xl mb-4">about me ⁘</h1>
        
        <section>
          <h2 className="mb-2">professional ⁘</h2>
          <p>cpa is my day job. at night? i sleep.</p>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">interests ⁘</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Music className="mr-2 h-4 w-4" />
              <span>making music</span>
            </li>
            <li className="flex items-center">
              <Code className="mr-2 h-4 w-4" />
              <span>high-level programming languages</span>
            </li>
            <li className="flex items-center">
              <TreePine className="mr-2 h-4 w-4" />
              <span>being outside</span>
            </li>
            <li className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              <span>learning, traveling, reading</span>
            </li>
            <li className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <span>smiling with my wife & watching my children grow</span>
            </li>
          </ul>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-2">philosophy ⁘</h2>
          <p>i like to explore the cracks between cold hard data and the wild unpredictability of existence.</p>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-2">history ⁘</h2>
          <p>i am {myAge} years old. i visit japan often so feel free to ask me about my travels.</p>
          <p>i created my <a href={oldSite} target="_blank" className="hover:underline">first html page</a> back in the year 2000, which was {yearsSince2000} years ago.</p>
          <p>time flies.</p>
        </section>

        <Separator className="bg-white/20" />

        <Link href="/" className="block mt-8 hover:underline">⁘ back to home</Link>
      </div>
    </main>
  );
}