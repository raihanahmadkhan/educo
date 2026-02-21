import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 pt-20 pb-10 text-white border-t border-transparent dark:border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <a href="#" className="flex items-center space-x-2">
                            <div className="bg-primary-600 p-1.5 rounded-lg">
                                <Globe className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                GlobalPath <span className="text-primary-400">Education</span>
                            </span>
                        </a>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering students to achieve their global academic dreams through expert guidance and personalized support.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white dark:hover:text-primary-400 transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white dark:hover:text-primary-400 transition-colors">Our Services</a></li>
                            <li><a href="#about" className="hover:text-white dark:hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white dark:hover:text-primary-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#services" className="hover:text-white dark:hover:text-primary-400 transition-colors">Study Abroad</a></li>
                            <li><a href="#services" className="hover:text-white dark:hover:text-primary-400 transition-colors">University Admissions</a></li>
                            <li><a href="#services" className="hover:text-white dark:hover:text-primary-400 transition-colors">Visa Assistance</a></li>
                            <li><a href="#services" className="hover:text-white dark:hover:text-primary-400 transition-colors">Test Preparation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Newsletter</h4>
                        <p className="text-slate-400 mb-6">Stay updated with the latest study abroad news and opportunities.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-slate-800 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 text-white outline-none"
                            />
                            <button className="bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 dark:hover:bg-primary-500 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} GlobalPath Education. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
