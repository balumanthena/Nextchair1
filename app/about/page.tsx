import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCTA } from "@/components/home/contact-cta";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, TrendingUp, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            {/* Hero */}
            <div className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">About VoteWin</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We are a team of political strategists, digital experts, and creative minds dedicated to strengthening democracy through effective communication.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-display mb-6">Our Mission</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            To empower political leaders with the tools, strategies, and creative assets they need to connect authentically with voters and drive positive change in society.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We believe that every candidate has a unique story. Our job is to tell that story in the most compelling way possible, ensuring it reaches every corner of the constituency.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/5 p-6 rounded-2xl text-center">
                            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                            <p className="text-sm font-medium">Election Wins</p>
                        </div>
                        <div className="bg-secondary/5 p-6 rounded-2xl text-center">
                            <h3 className="text-4xl font-bold text-secondary mb-2">10M+</h3>
                            <p className="text-sm font-medium">Voters Reached</p>
                        </div>
                        <div className="bg-secondary/5 p-6 rounded-2xl text-center">
                            <h3 className="text-4xl font-bold text-secondary mb-2">5+</h3>
                            <p className="text-sm font-medium">Years Experience</p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-2xl text-center">
                            <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                            <p className="text-sm font-medium">Dedication</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section className="bg-gray-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-display mb-4">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Integrity", desc: "We maintain the highest ethical standards in all our campaigns." },
                        { icon: Users, title: "People First", desc: "Understanding voter needs is at the heart of our strategy." },
                        { icon: TrendingUp, title: "Results Driven", desc: "We focus on measurable outcomes and winning margins." },
                        { icon: Award, title: "Excellence", desc: "Premium quality in every design, video, and post." },
                    ].map((val, i) => (
                        <Card key={i} className="text-center border-none shadow-md">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <val.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                                <p className="text-sm text-muted-foreground">{val.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
