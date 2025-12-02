import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
    return (
        <Section className="bg-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Recent Campaign Work</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        See how we&apos;ve helped other leaders achieve their goals through impactful design and strategy.
                    </p>
                </div>
                <Button variant="outline" asChild>
                    <Link href="/portfolio">View All Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 shadow-md">
                        {/* Placeholder for portfolio item */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-50">
                            Portfolio Item {item}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-white font-bold text-xl">Election Campaign 2024</h3>
                            <p className="text-gray-200 text-sm">Branding & Social Media</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
