import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesGrid } from "@/components/home/services-grid";
import { ContactCTA } from "@/components/home/contact-cta";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Services</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We offer a complete suite of political promotion services designed to help you connect with voters and win elections.
                    </p>
                </div>
            </div>
            <ServicesGrid />
            <ContactCTA />
            <Footer />
        </main>
    );
}
