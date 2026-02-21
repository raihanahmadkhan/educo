import { motion } from 'framer-motion';
import { GraduationCap, School, FileCheck, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Study Abroad',
        description: 'Find your dream program in top destinations including USA, UK, Canada, and Australia.',
        icon: GraduationCap,
        gradient: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'University Admissions',
        description: 'Expert guidance on application procedures, SOP drafting, and interview preparation.',
        icon: School,
        gradient: 'from-indigo-500 to-purple-600',
    },
    {
        title: 'Visa Assistance',
        description: 'End-to-end support for visa documentation, mock interviews, and submission.',
        icon: FileCheck,
        gradient: 'from-sky-500 to-blue-600',
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Core Services</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Comprehensive solutions tailored to your academic goals and career aspirations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 premium-shadow premium-shadow-hover"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="text-white w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center text-primary-600 font-bold group-hover:underline">
                                Learn More
                                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
