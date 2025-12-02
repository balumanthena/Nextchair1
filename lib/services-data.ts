import { Megaphone, PenTool, Video, Users, Target, Share2, LucideIcon } from "lucide-react";

export interface Service {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    fullDescription: string;
    benefits: string[];
    process: string[];
}

export const services: Service[] = [
    {
        slug: "political-branding",
        title: "Political Branding",
        description: "Build a strong, trustworthy personal brand that resonates with voters.",
        icon: Users,
        fullDescription: "In the modern political landscape, your personal brand is your most valuable asset. We help you craft a compelling narrative that highlights your values, vision, and dedication to the people. Our comprehensive branding strategy ensures you stand out as a leader who can be trusted.",
        benefits: [
            "Establish a distinct and memorable identity",
            "Build trust and credibility with voters",
            "Consistent messaging across all platforms",
            "Professional image management",
        ],
        process: [
            "Discovery & Persona Analysis",
            "Visual Identity Creation (Logo, Colors, Typography)",
            "Message Development & Slogan Creation",
            "Brand Guidelines Implementation",
        ],
    },
    {
        slug: "poster-design",
        title: "Poster Design",
        description: "High-impact posters, banners, and hoardings designed to grab attention.",
        icon: PenTool,
        fullDescription: "Visual communication is key to capturing voter attention. Our expert designers create striking posters, banners, and hoardings that convey your message instantly. Whether it's for a rally, a festival greeting, or an election manifesto, we ensure your visuals are powerful and persuasive.",
        benefits: [
            "Eye-catching designs that stand out",
            "Clear communication of key messages",
            "High-quality print-ready files",
            "Consistent visual language",
        ],
        process: [
            "Requirement Gathering & Concept",
            "Drafting & Design Iterations",
            "Feedback & Refinement",
            "Final Delivery & Print Coordination",
        ],
    },
    {
        slug: "social-media",
        title: "Social Media Management",
        description: "Complete management of Facebook, Instagram, Twitter, and YouTube accounts.",
        icon: Share2,
        fullDescription: "Social media is the battleground for modern elections. We manage your presence across all major platforms, ensuring consistent engagement with your constituents. From daily posts to community management, we handle it all so you can focus on meeting people.",
        benefits: [
            "Consistent online presence",
            "Increased voter engagement",
            "Real-time feedback monitoring",
            "Viral content potential",
        ],
        process: [
            "Platform Audit & Strategy",
            "Content Calendar Creation",
            "Daily Posting & Engagement",
            "Monthly Performance Reporting",
        ],
    },
    {
        slug: "video-editing",
        title: "Video Editing & Reels",
        description: "Engaging short-form content and professional campaign videos.",
        icon: Video,
        fullDescription: "Video content rules the internet. We produce high-quality campaign videos, documentaries, and engaging Reels/Shorts that tell your story effectively. Our editing team turns raw footage into polished, emotional, and shareable content.",
        benefits: [
            "Higher engagement rates than text/images",
            "Emotional connection with voters",
            "Shareable content for WhatsApp/Socials",
            "Professional broadcast quality",
        ],
        process: [
            "Scripting & Storyboarding",
            "Video Editing & Color Grading",
            "Sound Design & Music",
            "Final Export & Optimization",
        ],
    },
    {
        slug: "election-advertising",
        title: "Election Advertising",
        description: "Targeted paid ads on Google, Facebook, and Instagram to reach every voter.",
        icon: Megaphone,
        fullDescription: "Reach voters where they spend their time. Our paid advertising strategies on Google, Facebook, and Instagram ensure your message reaches the right demographics in your constituency. We optimize budgets to maximize reach and impact.",
        benefits: [
            "Precise demographic targeting",
            "Immediate reach and visibility",
            "Measurable ROI",
            "Flexible budget management",
        ],
        process: [
            "Audience Research & Targeting",
            "Ad Creative & Copywriting",
            "Campaign Setup & Launch",
            "Optimization & Reporting",
        ],
    },
    {
        slug: "voter-targeting",
        title: "Voter Targeting",
        description: "Data-driven strategies to identify and connect with your key constituency.",
        icon: Target,
        fullDescription: "Win elections with data. We use advanced analytics to identify key voter segments, understand their concerns, and tailor your message accordingly. Our constituency-level targeting ensures no vote is left behind.",
        benefits: [
            "Data-backed decision making",
            "Efficient resource allocation",
            "Personalized voter communication",
            "Identify swing booths/areas",
        ],
        process: [
            "Constituency Data Analysis",
            "Voter Segmentation",
            "Strategy Formulation",
            "Execution & Monitoring",
        ],
    },
];
