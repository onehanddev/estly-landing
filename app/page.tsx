import React from "react";
import { 
  Shield, 
  Mail, 
  Users, 
  Zap, 
  Workflow, 
  CheckCircle, 
  ArrowRight,
  Database,
  Search,
  MessageSquare,
  Lock
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
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
            <a href="#waitlist" className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now in Private Beta
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
              The AI Operating System for <span className="text-primary">Company Secretaries</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Estly turns unstructured client emails into structured CRM actions. 
              Handle entity formation and post-licensing changes with fewer errors and more control.
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <WaitlistForm />
            </div>

            <div className="mt-20 relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur opacity-25" />
              <div className="relative bg-background border border-border/50 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center p-8">
                {/* Mockup Placeholder */}
                <div className="w-full h-full rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-10" />
                  <div className="flex flex-col items-center gap-4">
                    <Workflow className="w-12 h-12 text-primary/40" />
                    <p className="text-sm font-medium text-muted-foreground">Interactive Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Focus on Advisory, Not Admin</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estly automates the repetitive parts of corporate services, keeping you in control with human-in-the-loop workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">A Smarter Workflow</h2>
              
              <div className="space-y-12">
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
        <section id="waitlist" className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your corporate services?</h2>
                <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
                  Join the exclusive waitlist for our private beta and be the first to transform your company secretarial practice.
                </p>
                <div className="flex justify-center">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Estly</span>
              <span className="text-xs text-muted-foreground ml-2">© 2025 Estly AI. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-8 items-start">
      <div className="text-4xl md:text-5xl font-black text-primary/10 select-none">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 mt-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
}
