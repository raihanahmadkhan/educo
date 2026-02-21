import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100/50 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-[-5%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-primary-100"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Trusted by 5000+ Students Worldwide</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-8"
                    >
                        Study Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">Made Simple</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed"
                    >
                        Navigate your international education journey with confidence. From expert counseling to visa assistance, we're with you every step of the way.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <a
                            href="#contact"
                            className="group bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all premium-shadow flex items-center"
                        >
                            Book Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 rounded-2xl font-bold text-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700"
                        >
                            Explore Services
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
