import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export function ContactCTA() {
    return (
        <Section className="bg-secondary text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                    Ready to Start Your Winning Campaign?
                </h2>
                <p className="text-lg text-blue-100 mb-10">
                    Don&apos;t leave your election success to chance. Partner with the experts in political promotion today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="white" asChild>
                        <a href="tel:+919876543210">Call Now: +91 98765 43210</a>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white" asChild>
                        <Link href="/contact">Request Consultation</Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
