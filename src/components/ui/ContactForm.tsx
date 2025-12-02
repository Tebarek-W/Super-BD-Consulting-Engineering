"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "general",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate form submission
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "general", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    const inputClasses = "w-full px-4 py-3 bg-neutral-light/20 border-2 rounded-xl outline-none transition-all duration-300 text-white placeholder-transparent";
    const getBorderClass = (id: string) =>
        focusedField === id ? "border-accent bg-neutral-light/30 shadow-lg shadow-accent/10" : "border-neutral-light/30 hover:border-neutral-light/50";

    const labelClasses = "absolute left-4 transition-all duration-300 pointer-events-none text-gray-400";
    const getLabelStyle = (id: string, value: string) =>
        focusedField === id || value.length > 0
            ? { transform: "translateY(-28px) scale(0.85)", color: "var(--accent)", backgroundColor: "var(--background)", padding: "0 4px", left: "12px" }
            : { transform: "translateY(12px)", color: "#9ca3af" };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <label
                        htmlFor="name"
                        className={labelClasses}
                        style={getLabelStyle("name", formData.name)}
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`${inputClasses} ${getBorderClass("name")}`}
                    />
                </div>
                <div className="relative">
                    <label
                        htmlFor="email"
                        className={labelClasses}
                        style={getLabelStyle("email", formData.email)}
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`${inputClasses} ${getBorderClass("email")}`}
                    />
                </div>
            </div>

            <div className="relative">
                <label
                    htmlFor="subject"
                    className="absolute -top-3 left-4 bg-background px-1 text-xs font-medium text-accent"
                >
                    Subject
                </label>
                <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses} ${getBorderClass("subject")} appearance-none cursor-pointer`}
                >
                    <option value="general" className="text-gray-900">General Inquiry</option>
                    <option value="quote" className="text-gray-900">Request a Quote</option>
                    <option value="soil" className="text-gray-900">Soil Investigation</option>
                    <option value="concrete" className="text-gray-900">Concrete Testing</option>
                    <option value="other" className="text-gray-900">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="relative">
                <label
                    htmlFor="message"
                    className={labelClasses}
                    style={getLabelStyle("message", formData.message)}
                >
                    Message
                </label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`${inputClasses} ${getBorderClass("message")} resize-none`}
                />
            </div>

            <Button
                type="submit"
                className={`w-full py-4 text-lg font-bold shadow-xl transition-all duration-300 ${status === "success"
                    ? "bg-green-500 hover:bg-green-600 shadow-green-500/30"
                    : "bg-accent hover:bg-accent-bright hover:scale-[1.02] shadow-accent/30"
                    }`}
                disabled={status === "submitting" || status === "success"}
            >
                <div className="flex items-center justify-center gap-2">
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            <span>Sending...</span>
                        </>
                    ) : status === "success" ? (
                        <>
                            <CheckCircle2 size={20} />
                            <span>Message Sent!</span>
                        </>
                    ) : (
                        <>
                            <Send size={20} />
                            <span>Send Message</span>
                        </>
                    )}
                </div>
            </Button>
        </form>
    );
}
