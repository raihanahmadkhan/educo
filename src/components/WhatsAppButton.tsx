import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/919006494884"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-shadow flex items-center justify-center group"
        >
            <MessageCircle className="w-7 h-7" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold">
                Chat with us
            </span>
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
        </motion.a>
    );
};
