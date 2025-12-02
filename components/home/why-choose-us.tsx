import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Expert Political Strategists",
    "Data-Driven Campaigning",
    "Premium Design Quality",
    "24/7 Support Team",
    "Constituency-Level Targeting",
    "Proven Track Record",
];

export function WhyChooseUs() {
    return (
        <Section className="bg-muted/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                        Why Leaders Choose <span className="text-primary">VoteWin</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        We understand the nuances of Indian politics. Our team combines traditional political wisdom with cutting-edge digital strategies to ensure your message reaches every voter effectively.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                                <span className="font-medium text-gray-800">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                        {/* Placeholder for an image - in a real app, use next/image */}
                        <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Campaign Strategy Meeting Image</span>
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
                </div>
            </div>
        </Section>
    );
}
