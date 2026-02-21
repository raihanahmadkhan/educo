import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 premium-shadow' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center gap-4">
                <a href="#" className="flex items-center space-x-2 group">
                    <div className="bg-primary-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                        <Globe className="text-white w-6 h-6" />
                    </div>
                    <span className={`text-xl font-bold tracking-tight text-slate-900 dark:text-white`}>
                        GlobalPath <span className="text-primary-600">Education</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="ml-4 flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors premium-shadow"
                        >
                            Free Consultation
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="text-slate-900 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="bg-primary-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Free Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
