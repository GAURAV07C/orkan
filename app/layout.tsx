import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google'
import Header from "@/components/Base/Header";
// import { ThemeProvider } from "next-themes";
import {shadesOfPurple} from '@clerk/themes'
import {ClerkProvider} from '@clerk/nextjs'

const inter = Inter({subsets : ['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
      baseTheme: shadesOfPurple,
      variables:{
        colorPrimary:'#3b82f6',
        colorBackground:'#1a202c',
        colorInputBackground:"#2D3748",
        colorInputText :"#F3F4F6"
      },

      elements:{
        formButtonPrimary:"text-white",
        card:'bg-gray-800',
        headerSubtitle:"text-gray-400",
        headerTitle:"text-blue-400"

      }
    }}  >
    <html lang="en">
      <body

        className={`${inter.className} bg-black text-gray-200 doted-background`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="dark" > */}
        <Header />
        <main className="min-h-screen">

        {children}

        </main>

        <footer className="bg-gray-900 py-12 ">
          <div className="container mx-auto text-center text-gray-200">
            <p>Made with ❤️ by Gaurav </p>
          </div>
        </footer>

        {/* </ThemeProvider> */}

       
      </body>
    </html>
    </ClerkProvider>
  );
}
