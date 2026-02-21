import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        destination: 'United Kingdom',
        text: "GlobalPath Education made my journey to the UK incredibly smooth. Their attention to detail in the application process was exceptional.",
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
        name: 'Michael Chen',
        destination: 'Canada',
        text: "The visa assistance I received was top-notch. I was nervous about the interview, but their mock sessions gave me the confidence I needed.",
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
        name: 'Anita Sharma',
        destination: 'Australia',
        text: "I couldn't have asked for better mentors. They helped me find the perfect university that fit my scholarship requirements.",
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Success Stories</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Hear from our students who are now studying at their dream universities around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 relative premium-shadow-hover"
                        >
                            <Quote className="absolute top-6 right-8 text-primary-200 w-12 h-12" />
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 italic mb-8 relative z-10">"{item.text}"</p>
                            <div className="flex items-center">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white dark:ring-slate-700"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{item.name}</h4>
                                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{item.destination}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
