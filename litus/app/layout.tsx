import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400']
});

export const metadata: Metadata = {
  title: "LiTUS",
  description: "Aquarium manager and diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={roboto.className}>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
