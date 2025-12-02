import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Political Promotion Agency | Election Campaign Experts",
    description: "Premium political promotion services including poster design, social media management, and election campaigning.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, outfit.variable, "font-sans min-h-screen flex flex-col")}>
                {children}
            </body>
        </html>
    );
}
