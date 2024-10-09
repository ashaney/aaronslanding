import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "aaron's homepage",
  description: 'my landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${firaCode.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}