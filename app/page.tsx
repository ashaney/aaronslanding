import Link from 'next/link';
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-sm">
      <div className="w-full max-w-2xl space-y-8">
        <section>
          <h2 className="mb-2">hello ⁘</h2>
          <p>i'm aaron. welcome to my page.</p>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-2">about me ⁘</h2>
          <Link href="/about" className="hover:underline">learn more</Link>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">watch ⁘ listen ⁘ read ⁘</h2>
          <ul className="space-y-2">
            <li><Link href="https://www.youtube.com/@yetanotherpodcast" className="hover:underline">youtube</Link></li>
            <li><Link href="https://exploringthespace.pika.page/" className="hover:underline">blog</Link></li>
            <li><Link href="https://vitalis.cloud" className="hover:underline">fitness log</Link></li>
          </ul>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">projects ⁘</h2>
          <ul>
            <li><Link href="https://zhabits.com" className="hover:underline">zhabits</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
}