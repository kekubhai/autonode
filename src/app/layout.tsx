
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "sonner";
const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoNode",
  description: "Automate your work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange >
<ModalProvider>

        {children}
</ModalProvider>
        </ThemeProvider>
       
        </body>
    </html>
        </ClerkProvider>
  );
}
