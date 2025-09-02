import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 text-sm">
      <div className="w-full max-w-3xl space-y-8 mt-12">
        <section>
          <h2 className="mb-2">hello ⁘</h2>
          <p>i&rsquo;m aaron. welcome to my page.</p>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-2">about me ⁘</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                click here
              </Link>
            </li>
            <li>
              <Link
                href="https://ko-fi.com/aar0naut"
                className="hover:underline"
              >
                support me
              </Link>
            </li>
            <li>
              <Link
                href="mailto:greetings@aar0naut.com"
                className="hover:underline"
              >
                say hello
              </Link>
            </li>
          </ul>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">watch ⁘ listen ⁘ read ⁘</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://www.youtube.com/@iaminprogress"
                className="hover:underline"
              >
                youtube
              </Link>
            </li>
            <li>
              <Link
                href="https://exploringthe.space/"
                className="hover:underline"
              >
                blog
              </Link>
            </li>
            <li>
              <Link
                href="https://note.com/quiet_sage0000"
                className="hover:underline"
              >
                ノート
              </Link>
            </li>
          </ul>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">personal projects ⁘</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://hello.omoshiro.app"
                className="hover:underline"
              >
                omoshiro
              </Link>
            </li>
            <li>
              <Link
                href="https://well-traveled.app/"
                className="hover:underline"
              >
                traveled
              </Link>
            </li>
            <li>
              <Link href="https://myjst.life/en" className="hover:underline">
                jst life
              </Link>
            </li>
          </ul>
        </section>

        <Separator className="bg-white/20" />

        <section>
          <h2 className="mb-4">work projects ⁘</h2>
          <ul className="space-y-2">
            <li>
              <Link href="https://omnisort.app" className="hover:underline">
                omnisort
              </Link>
            </li>
            <li>
              <Link href="https://minamo.app" className="hover:underline">
                minamo
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
