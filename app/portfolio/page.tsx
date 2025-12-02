import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCTA } from "@/components/home/contact-cta";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioItems = [
    {
        category: "posters",
        title: "Election Rally Poster",
        description: "High-impact visual for major city rally",
        image: "bg-red-100",
    },
    {
        category: "posters",
        title: "Manifesto Design",
        description: "Clear and engaging manifesto layout",
        image: "bg-blue-100",
    },
    {
        category: "videos",
        title: "Campaign Launch Video",
        description: "Cinematic introduction of the candidate",
        image: "bg-green-100",
    },
    {
        category: "videos",
        title: "Voter Testimonials",
        description: "Authentic stories from the constituency",
        image: "bg-yellow-100",
    },
    {
        category: "social",
        title: "Instagram Reels Series",
        description: "Viral short-form content strategy",
        image: "bg-purple-100",
    },
    {
        category: "social",
        title: "Twitter Campaign",
        description: "Trending hashtag management",
        image: "bg-pink-100",
    },
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Portfolio</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our successful campaigns and creative work that has helped leaders win.
                    </p>
                </div>
            </div>

            <Section>
                <Tabs defaultValue="all" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-4">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="posters">Posters</TabsTrigger>
                            <TabsTrigger value="videos">Videos</TabsTrigger>
                            <TabsTrigger value="social">Social</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="all" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolioItems.map((item, index) => (
                                <PortfolioCard key={index} item={item} />
                            ))}
                        </div>
                    </TabsContent>

                    {["posters", "videos", "social"].map((category) => (
                        <TabsContent key={category} value={category} className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {portfolioItems
                                    .filter((item) => item.category === category)
                                    .map((item, index) => (
                                        <PortfolioCard key={index} item={item} />
                                    ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </Section>

            <ContactCTA />
            <Footer />
        </main>
    );
}

function PortfolioCard({ item }: { item: any }) {
    return (
        <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div className={`aspect-[4/3] ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                    {/* Placeholder for actual image */}
                    Image: {item.title}
                </div>
            </div>
            <CardContent className="p-6">
                <h3 className="font-bold font-display text-xl mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
        </Card>
    );
}
