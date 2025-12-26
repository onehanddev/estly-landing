"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Mail, 
  Zap, 
  Workflow, 
  CheckCircle, 
  Database
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Estly</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
              Beta
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#waitlist" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:scale-105 active:scale-95 transition-all">
              Join Beta
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Limited Beta Release
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.05]"
            >
              The AI Operating System for <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Company Secretaries</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Estly turns unstructured client instructions from emails into structured actions. 
              Automate entity management while staying in full control.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section id="features" className="py-32 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Focus on Advisory, Not Admin</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estly automates the repetitive parts of corporate services, keeping you in control with human-in-the-loop workflows.
              </p>
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <FeatureCard 
                icon={<Mail className="w-6 h-6" />}
                title="Email Intelligence"
                description="Extract instructions directly from client emails. Estly understands complex requests and maps them to structured workflows."
              />
              <FeatureCard 
                icon={<Database className="w-6 h-6" />}
                title="CRM Sync"
                description="Seamlessly sync with Salesforce, Zoho, and more. No more manual data entry or jumping between disconnected tools."
              />
              <FeatureCard 
                icon={<Shield className="w-6 h-6" />}
                title="Human-in-the-Loop"
                description="AI handles the heavy lifting, but you stay in control with mandatory review checkpoints for every critical action."
              />
              <FeatureCard 
                icon={<Workflow className="w-6 h-6" />}
                title="Entity Lifecycle"
                description="Manage everything from initial formation to post-licensing changes—shareholders, directors, and structure updates."
              />
              <FeatureCard 
                icon={<CheckCircle className="w-6 h-6" />}
                title="Compliance-First"
                description="Automated audit trails and jurisdictional compliance checks built into every step of the process."
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="10x Faster Turnaround"
                description="Reduce processing time from days to minutes. Free your team for high-value advisory and governance work."
              />
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">How Estly Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <Step 
                  number="01"
                  title="Receive Instructions"
                  description="Client sends an email about a change in directors or a new entity formation. Estly's AI instantly parses the request."
                />
                <Step 
                  number="02"
                  title="Review & Validate"
                  description="Estly prepares the necessary updates and documents. You review the structured data against internal SOPs and local laws."
                />
                <Step 
                  number="03"
                  title="Execute & Sync"
                  description="With one click, documents are generated and your CRM is updated. A complete audit trail is logged automatically."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="py-32">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl shadow-primary/20"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to scale your corporate services?</h2>
                <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join the exclusive waitlist for our private beta and be the first to transform your company secretarial practice.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Estly</span>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                The AI-native workspace for modern company secretaries. 
                Streamlining entity management and post-licensing changes.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
                <li><a href="#waitlist" className="hover:text-foreground transition-colors">Beta Access</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">© 2025 Estly AI. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="p-10 rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="text-7xl font-black text-primary/5 mb-6 select-none leading-none">
        {number}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
