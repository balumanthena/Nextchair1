import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold font-display text-white">
                                Vote<span className="text-primary">Win</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-300">
                            Premium political promotion agency dedicated to winning elections through strategic branding and digital dominance.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/services/political-branding" className="hover:text-white">Political Branding</Link></li>
                            <li><Link href="/services/social-media" className="hover:text-white">Social Media Management</Link></li>
                            <li><Link href="/services/poster-design" className="hover:text-white">Poster Design</Link></li>
                            <li><Link href="/services/video-editing" className="hover:text-white">Video Editing & Reels</Link></li>
                            <li><Link href="/services/election-advertising" className="hover:text-white">Election Advertising</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Election Avenue, Political District, New Delhi, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:info@votewin.com" className="hover:text-white">info@votewin.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} VoteWin Political Promotion Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
