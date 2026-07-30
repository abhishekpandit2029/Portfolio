import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/utils/theme-provider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { profile } from "../lib/profile";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.",
  keywords: [
    "Abhishek Pandit",
    "Software Development Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name} | ${profile.role}`,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.summary,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Decorative backdrop: grid paper plus a soft primary glow. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="glow absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2" />
          </div>

          <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
