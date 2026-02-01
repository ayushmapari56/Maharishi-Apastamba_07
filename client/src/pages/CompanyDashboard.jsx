import { useState } from "react";
import { AnimatedLayout } from "../components/AnimatedLayout";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Link } from "react-router-dom";
import { Plus, Users, check_eligibility } from "lucide-react";

// Mock Applicants for a Drive
const MOCK_APPLICANTS = [
    { id: 101, name: "Ayush Sharma", cgpa: 8.2, branch: "CSE", status: "Eligible" },
    { id: 102, name: "Rohan Das", cgpa: 7.1, branch: "ECE", status: "Not Eligible (CGPA < 7.5)" },
    { id: 103, name: "Sneha Gupta", cgpa: 9.0, branch: "CSE", status: "Eligible" },
];

export default function CompanyDashboard() {
    const [activeTab, setActiveTab] = useState("create"); // 'create' | 'view'
    const [jobForm, setJobForm] = useState({
        company: "My Company",
        role: "",
        ctc: "",
        minCgpa: "",
        maxBacklogs: "",
        allowedBranches: "CSE, ECE"
    });

    const handleInputChange = (e) => {
        setJobForm({ ...jobForm, [e.target.id]: e.target.value });
    };

    const handleCreate = () => {
        alert("Job Created! (Mock)");
        setActiveTab("view");
    };

    return (
        <AnimatedLayout className="bg-black min-h-screen p-8 text-white">

            {/* Header */}
            <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Recruiter Portal
                </h1>
                <div className="flex gap-4">
                    <Button variant={activeTab === "create" ? "primary" : "outline"} onClick={() => setActiveTab("create")}>
                        <Plus size={18} className="mr-2" /> Post New Drive
                    </Button>
                    <Button variant={activeTab === "view" ? "primary" : "outline"} onClick={() => setActiveTab("view")}>
                        <Users size={18} className="mr-2" /> View Applicants
                    </Button>
                    <Link to="/">
                        <Button variant="secondary" className="ml-4">Logout</Button>
                    </Link>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">

                {/* CREATE JOB FORM */}
                {activeTab === "create" && (
                    <Card>
                        <h2 className="text-2xl font-bold mb-6 text-purple-300">Create Placement Drive</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <Input id="company" label="Company Name" value={jobForm.company} onChange={handleInputChange} />
                            <Input id="role" label="Job Role" placeholder="e.g. SDE I" value={jobForm.role} onChange={handleInputChange} />
                            <Input id="ctc" label="CTC (LPA)" placeholder="e.g. 12 LPA" value={jobForm.ctc} onChange={handleInputChange} />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-400 mb-4 border-b border-gray-700 pb-2">Eligibility Criteria</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <Input id="minCgpa" label="Min CGPA" type="number" step="0.1" placeholder="7.0" value={jobForm.minCgpa} onChange={handleInputChange} />
                            <Input id="maxBacklogs" label="Max Backlogs" type="number" placeholder="0" value={jobForm.maxBacklogs} onChange={handleInputChange} />
                            <Input id="allowedBranches" label="Allowed Branches" placeholder="CSE, ECE" value={jobForm.allowedBranches} onChange={handleInputChange} />
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleCreate}>
                            Launch Drive
                        </Button>
                    </Card>
                )}

                {/* VIEW APPLICANTS */}
                {activeTab === "view" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-gray-400">
                            <span>Reviewing Applicants for: <strong className="text-white">SDE I (Mock)</strong></span>
                            <span>Total Applicants: {MOCK_APPLICANTS.length}</span>
                        </div>

                        {MOCK_APPLICANTS.map((student) => (
                            <Card key={student.id} className="flex justify-between items-center p-4 hover:bg-gray-800/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                                        {student.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{student.name}</h4>
                                        <p className="text-sm text-gray-400">{student.branch} • CGPA {student.cgpa}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className={`px-3 py-1 rounded text-xs font-mono ${student.status.startsWith('Eligible') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-500'}`}>
                                        {student.status}
                                    </div>
                                    {student.status === 'Eligible' && (
                                        <Button className="text-sm px-4 py-1" variant="outline">
                                            Shortlist
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

            </div>

        </AnimatedLayout>
    );
}
