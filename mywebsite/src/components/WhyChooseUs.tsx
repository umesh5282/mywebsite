import React from 'react';
import teamImage from '../assets/hero_img_1.avif';

function WhyChooseUs() {
    return (
        <section className="bg-slate-800 text-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose <span className="text-white">Unmesh Info Solutions?</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        We combine innovation, expertise, and a client-focused approach to deliver
                        exceptional results for businesses worldwide.
                    </p>

                    {/* Features */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="text-teal-300 text-2xl">💡</div>
                            <div>
                                <h4 className="font-semibold text-lg">Innovative Approach</h4>
                                <p className="text-gray-400">
                                    We leverage cutting-edge technologies to provide forward-thinking solutions.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-cyan-300 text-2xl">🌐</div>
                            <div>
                                <h4 className="font-semibold text-lg">Global Expertise</h4>
                                <p className="text-gray-400">
                                    Our team brings international expertise to address diverse business needs.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-green-300 text-2xl">🧩</div>
                            <div>
                                <h4 className="font-semibold text-lg">End-to-End Services</h4>
                                <p className="text-gray-400">
                                    From concept to deployment, we provide comprehensive support throughout your journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        className="mt-10 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-md transition"
                    >
                        Learn More About Us →
                    </button>
                </div>

                {/* Right Image */}
                <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    data-aos="fade-left"
                >
                    <img
                        src={teamImage}
                        alt="Team collaboration"
                        className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
