import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const COUNTRIES = [
    "India", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Thank you for your enquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden premium-shadow grid grid-cols-1 lg:grid-cols-5 dark:border dark:border-slate-800">
                    <div className="lg:col-span-2 bg-primary-600 p-8 lg:p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
                            <p className="text-primary-100 mb-10 leading-relaxed">
                                Ready to take the first step towards your international education? Fill out the form and our expert counselors will reach out to you within 24 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/10 p-3 rounded-xl">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-100 uppercase tracking-wider font-semibold">Call Us</p>
                                        <p className="font-bold text-lg">+91 99999 99999</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/10 p-3 rounded-xl">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-100 uppercase tracking-wider font-semibold">Email Us</p>
                                        <p className="font-bold text-lg">info@globalpath.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/10 p-3 rounded-xl">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-100 uppercase tracking-wider font-semibold">Visit Us</p>
                                        <p className="font-bold text-lg">123 Education Lane, Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 hidden lg:block">
                            <p className="text-sm font-medium italic text-primary-100">
                                "Your pathway to global excellence begins here."
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 p-8 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-slate-900 dark:text-white"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-slate-900 dark:text-white"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-slate-900 dark:text-white"
                                        placeholder="+91 99999 99999"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Country Interested In</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-slate-900 dark:text-white"
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    >
                                        <option value="">Select a country</option>
                                        {COUNTRIES.map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-slate-900 dark:text-white"
                                    placeholder="Tell us about your academic background and goals..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all"
                            >
                                <span>Send Enquiry</span>
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
