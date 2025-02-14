import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "IMCROX",
  description: "The back-bone of the ImaginecoreX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased relative",
        fontSans.variable
      )}
      >
         <ThemeProvider attribute="class" defaultTheme="light">
         <PrimeReactProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
            </PrimeReactProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
