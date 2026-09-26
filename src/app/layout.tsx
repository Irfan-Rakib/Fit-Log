import type { Metadata } from "next";
import "./globals.css";

import { FitLogProvider } from "@/context/FitLogContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description: "Train with intent. Log every set with FitLog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2500,
            }}
          />
        </FitLogProvider>
      </body>
    </html>
  );
}
