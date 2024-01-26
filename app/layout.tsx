import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});

export const metadata: Metadata = {
  title: "Create Melbet account",
  description:
    "how to create a Melbet account without a problem, more easy and advanced, and more secure. 100% official account with sunbet360",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#090c2b] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
