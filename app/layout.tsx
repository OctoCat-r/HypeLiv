import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Satoshi } from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import Header from "./components/header";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font--satoshi",
});

export const metadata: Metadata = {
  title: "HypeLiv",
  description: "Your solutions partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Toaster position="bottom-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
