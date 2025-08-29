import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bokun's Portfolio",
  description: "My Modern & Minimalist Dev Portfolio",
  icons: {
    icon: [
      {url: '/favicon/android-chrome-512x512.png', type: 'image/png', sizes: '512x512'},
      {url: '/favicon/android-chrome-192x192.png', type: 'image/png', sizes: '192x192'},
      {url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32'},
      {url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16'}
      ,{url: '/favicon/apple-touch-icon.png', type: 'image/png', sizes: '180x180'},
      {url: '/favicon/favicon.ico', type: 'image/ico', sizes: '16x16'},
    ],
    apple: [
      {url: '/apple-touch-icon.png', sizes: '180x180'}
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
