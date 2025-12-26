"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary"
      >
        <CheckCircle2 className="w-5 h-5" />
        <p className="font-medium text-sm">You've been added to the waitlist!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md group">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          required
          className={cn(
            "flex-1 px-4 py-3 rounded-xl border border-border bg-background",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "transition-all duration-200 text-sm md:text-base"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium",
            "hover:opacity-90 active:scale-95 transition-all duration-200",
            "flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
            "text-sm md:text-base whitespace-nowrap"
          )}
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground text-center sm:text-left">
        Join 200+ company secretaries in the private beta.
      </p>
    </form>
  );
}
