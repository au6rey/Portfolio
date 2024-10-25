import type { Metadata } from "next";
import { profileData } from "@/lib/profile";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Inter({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: profileData.name,
  description: profileData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth text-lg`}>
      <body className="leading-relaxed dark:text-slate-400  antialiased ">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          themes={["dark", "light"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
