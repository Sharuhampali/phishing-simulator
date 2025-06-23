// File: app/dashboard/phishing/page.tsx

'use client';
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function PhishingCampaignPage() {
  const [email, setEmail] = useState("");

  const handleLaunch = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return toast.error("Please enter a target email.");

  try {
    const res = await fetch("/api/phishing/launch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error("Failed to launch");

    const data = await res.json();
    toast.success(`Campaign launched. Link: ${data.phishingLink}`);
    console.log("Phishing Link:", data.phishingLink); // optional

    setEmail("");
  } catch (err) {
    toast.error("Failed to launch campaign.");
    console.error(err);
  }
};


  return (
    <main className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Phishing Simulation Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLaunch} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Target Email</label>
              <Input
                id="email"
                type="email"
                placeholder="victim@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Launch Campaign</Button>
          </form>
            <Link
                  href="/dashboard/report"
                  className="inline-block bg-secondary text-primary py-2 px-4 rounded-md hover:bg-secondary/80 transition"
                >
                  View Report
                </Link>

        </CardContent>
      </Card>
    </main>
  );
}
