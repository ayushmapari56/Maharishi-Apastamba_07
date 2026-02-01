import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedLayout } from "../components/AnimatedLayout";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Clock } from "lucide-react";

// Mock Data
const MOCK_STUDENT = {
    name: "Ayush Sharma",
    cgpa: 8.2,
    backlogs: 0,
    branch: "CSE",
    skills: ["React", "Python", "Node.js"]
};

// Mock Jobs with Logic Pre-calculated (Backend will do this later)
const MOCK_DRIVES = [
    {
        id: 1,
        company: "Google",
        role: "SDE I",
        ctc: "30 LPA",
        eligibility: { eligible: false, reason: "CGPA 8.2 < 8.5 required" },
        status: "Not Eligible"
    },
    {
        id: 2,
        company: "TCS",
        role: "System Engineer",
        ctc: "7 LPA",
        eligibility: { eligible: true, reason: "CGPA 8.2 >= 6.0 & No Backlogs" },
        status: "Apply"
    },
    {
        id: 3,
        company: "Amazon",
        role: "SDE Intern",
        ctc: "80K/mo",
        eligibility: { eligible: true, reason: "CGPA 8.2 >= 7.5" },
        status: "Applied"
    }
];

export default function StudentDashboard() {
    const [jobs, setJobs] = useState(MOCK_DRIVES);

    const handleApply = (id) => {
        setJobs(jobs.map(job =>
            job.id === id ? { ...job, status: "Applied" } : job
        ));
    };

    return (
        <AnimatedLayout className="bg-black min-h-screen p-8 text-white">

            {/* Header */}
            <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                        Welcome, {MOCK_STUDENT.name}
                    </h1>
                    <p className="text-gray-400 mt-1">
                        CGPA: <span className="text-white font-mono">{MOCK_STUDENT.cgpa}</span> •
                        Branch: <span className="text-white font-mono">{MOCK_STUDENT.branch}</span>
                    </p>
                </div>
                <Link to="/">
                    <Button variant="outline">Logout</Button>
                </Link>
            </div>

            {/* Drives Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} onApply={handleApply} />
                ))}
            </div>

        </AnimatedLayout>
    );
}

function JobCard({ job, onApply }) {
    const isEligible = job.eligibility.eligible;

    return (
        <Card className={`relative overflow-hidden border-t-4 ${isEligible ? "border-t-green-500" : "border-t-red-500"}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-sm text-gray-400">{job.role}</p>
                </div>
                <span className="text-sm font-semibold bg-white/10 px-2 py-1 rounded">{job.ctc}</span>
            </div>

            {/* Eligibility Reason */}
            <div className={`text-xs px-3 py-2 rounded mb-4 font-mono border ${isEligible ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-red-500/10 border-red-500/30 text-red-500"}`}>
                {isEligible ? <CheckCircle size={14} className="inline mr-1" /> : <XCircle size={14} className="inline mr-1" />}
                {job.eligibility.reason}
            </div>

            {/* Action Button */}
            {job.status === "Applied" ? (
                <Button className="w-full bg-yellow-600/20 text-yellow-400 cursor-default hover:bg-yellow-600/20 shadow-none border border-yellow-600/50">
                    <Clock size={16} className="inline mr-2" /> Application Pending
                </Button>
            ) : isEligible ? (
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => onApply(job.id)}>
                    Apply Now
                </Button>
            ) : (
                <Button className="w-full opacity-50 cursor-not-allowed" variant="secondary">
                    Not Eligible
                </Button>
            )}
        </Card>
    );
}
