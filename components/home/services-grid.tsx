import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { services, type Service } from "@/lib/services-data";

export function ServicesGrid() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Premium Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive political promotion solutions tailored for modern election campaigns.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service: Service, index) => (
                    <Link key={index} href={`/services/${service.slug}`} className="block group">
                        <Card className="h-full border-transparent shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <CardTitle className="mb-2">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
