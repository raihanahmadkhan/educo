import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';

const highlights = [
    {
        title: 'Certified Counselors',
        description: 'Our team consists of industry veterans with over 15 years of experience.',
        icon: Award,
    },
    {
        title: 'Global Partnerships',
        description: 'We are official partners with 500+ top universities across the globe.',
        icon: Users,
    },
    {
        title: 'High Success Rate',
        description: '98% of our students successfully secure admissions and visas.',
        icon: ShieldCheck,
    },
    {
        title: 'Transparent Process',
        description: 'No hidden fees or surprises. We keep you informed at every stage.',
        icon: CheckCircle2,
    },
];

export const WhyChooseUs = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8 max-w-md">
                            Why Students Trust GlobalPath Education
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                            We don't just process applications; we build futures. Our student-centric approach ensures you find the perfect university and program that aligns with your personality and potential.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <div className="mb-4">
                                        <item.icon className="text-primary-600 w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-3xl overflow-hidden premium-shadow"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Students collaborating"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl premium-shadow border border-slate-100 dark:border-slate-700 hidden sm:block">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary-50 dark:bg-primary-900/30 p-3 rounded-xl">
                                    <Users className="text-primary-600 dark:text-primary-400 w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Join our community</p>
                                    <p className="text-xl font-bold text-slate-900 dark:text-white">5k+ Success Stories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
