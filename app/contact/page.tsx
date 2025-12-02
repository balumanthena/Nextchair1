"use client";

import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { Section } from "../../components/ui/section";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <div className="bg-secondary text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Contact Us</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Ready to win? Get in touch with our team to discuss your campaign strategy.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-display mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground text-lg">
                                We are available for consultations and campaign planning. Reach out to us via phone, email, or visit our office.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="flex items-start space-x-4 p-6">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Office Address</h3>
                                        <p className="text-muted-foreground">123 Election Avenue, Political District,<br />New Delhi, India 110001</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-start space-x-4 p-6">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground mb-1">
                                            <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
                                        </p>
                                        <p className="text-sm text-muted-foreground">Mon-Sat, 9am - 8pm</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-start space-x-4 p-6">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground">
                                            <a href="mailto:info@votewin.com" className="hover:text-primary">info@votewin.com</a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border">
                        <h2 className="text-2xl font-bold font-display mb-6">Send us a Message</h2>
                        {submitted ? (
                            <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                <p>Your message has been sent successfully. We will get back to you shortly.</p>
                                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                        <input
                                            id="name"
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                        <input
                                            id="phone"
                                            required
                                            type="tel"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="city" className="text-sm font-medium">City / Constituency</label>
                                        <input
                                            id="city"
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="New Delhi"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us about your campaign goals..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
