import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <ServicesGrid />
            <WhyChooseUs />
            <PortfolioPreview />
            <ContactCTA />
            <Footer />
        </main>
    );
}
