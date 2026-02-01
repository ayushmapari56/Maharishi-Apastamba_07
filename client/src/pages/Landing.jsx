import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { AnimatedLayout } from "../components/AnimatedLayout";

export default function Landing() {
    const navigate = useNavigate();
    const [role, setRole] = useState(null);

    return (
        <AnimatedLayout className="flex flex-col items-center justify-center relative overflow-hidden bg-black selection:bg-blue-500/30">

            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

            {/* Hero Section */}
            <div className="z-10 text-center max-w-4xl px-6 mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
                >
                    Campus Placement <br /> Reimagined.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    An intelligent ecosystem where eligibility is instant, decisions are explainable, and recruitment is seamless.
                </motion.p>

                <div className="flex gap-4 justify-center">
                    <Button
                        className="flex items-center gap-2 text-lg px-8 py-3"
                        onClick={() => document.getElementById('roles').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Started <ArrowRight size={20} />
                    </Button>
                    <Button variant="outline" className="text-lg px-8 py-3">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Role Selection */}
            <div id="roles" className="z-10 mt-32 mb-20 w-full max-w-5xl px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Who are you?</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Student Card */}
                    <Card
                        className="flex flex-col items-center text-center p-10 cursor-pointer border-blue-500/30 hover:border-blue-500"
                        onClick={() => navigate('/student/login')}
                    >
                        <div className="p-4 bg-blue-500/10 rounded-full mb-6 text-blue-400">
                            <GraduationCap size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Student</h3>
                        <p className="text-gray-400">
                            Track eligibility, apply to drives, and view your selection status in real-time.
                        </p>
                    </Card>

                    {/* Company Card */}
                    <Card
                        className="flex flex-col items-center text-center p-10 cursor-pointer border-purple-500/30 hover:border-purple-500"
                        onClick={() => navigate('/company/login')}
                    >
                        <div className="p-4 bg-purple-500/10 rounded-full mb-6 text-purple-400">
                            <Briefcase size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Company</h3>
                        <p className="text-gray-400">
                            Define criteria, shortlist candidates instantly, and manage rounds effortlessly.
                        </p>
                    </Card>

                </div>
            </div>

            {/* Features Grid */}
            <div className="z-10 grid md:grid-cols-3 gap-6 max-w-6xl px-6 mb-32">
                <FeatureCard
                    icon={<ShieldCheck className="text-green-400" />}
                    title="Instant Eligibility"
                    desc="Know exactly why you are eligible or not for every drive."
                />
                <FeatureCard
                    icon={<Zap className="text-yellow-400" />}
                    title="Real-time Updates"
                    desc="Get notified instantly about shortlist status and upcoming rounds."
                />
                <FeatureCard
                    icon={<Briefcase className="text-blue-400" />}
                    title="Streamlined Hiring"
                    desc="Companies can filter thousands of students with complex logic in seconds."
                />
            </div>

        </AnimatedLayout>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="mb-4">{icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    );
}
