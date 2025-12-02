import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCTA } from "@/components/home/contact-cta";
import { services } from "@/lib/services-data";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-secondary text-white py-20 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
                            <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">{service.title}</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
            </section>

            {/* Description & Benefits */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold font-display mb-6">Overview</h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {service.fullDescription}
                        </p>

                        <h3 className="text-2xl font-bold font-display mb-4">Key Benefits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold font-display mb-6">Our Process</h3>
                        <div className="space-y-8">
                            {service.process.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">{step}</h4>
                                        <p className="text-sm text-muted-foreground">We ensure every step is executed with precision.</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t">
                            <h4 className="font-semibold text-lg mb-4">Ready to get started?</h4>
                            <Button size="lg" className="w-full" asChild>
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
