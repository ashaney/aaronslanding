import Link from 'next/link';
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 text-sm">
      <div className="w-full max-w-3xl space-y-8 mt-12">
        <section>
          <h2 className="mb-2">hello ⁘</h2>
          <p>i'm aaron. welcome to my page.</p>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-2">about me ⁘</h2>
          <Link href="/about" className="hover:underline">click here</Link>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">watch ⁘ listen ⁘ read ⁘</h2>
          <ul className="space-y-2">
            <li><Link href="https://www.youtube.com/@iaminprogress" className="hover:underline">youtube</Link></li>
            <li><Link href="https://exploringthe.space/" className="hover:underline">blog</Link></li>
            <li><Link href="https://https://note.com/quiet_sage0000" className="hover:underline">ノート</Link></li>
          </ul>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">projects ⁘</h2>
          <ul className="space-y-2">
            <li><Link href="https://sigmatic.work" className="hover:underline">sigmatic</Link></li>
            <li><Link href="https://github.com/ashaney" className="hover:underline">github</Link></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
