// // File: app/dashboard/phishing/page.tsx

// 'use client';
// import Link from "next/link";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { toast } from "sonner";

// export default function PhishingCampaignPage() {
//   const [email, setEmail] = useState("");

//   const handleLaunch = async (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!email) return toast.error("Please enter a target email.");

//   try {
//     const res = await fetch("/api/phishing/launch", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });

//     if (!res.ok) throw new Error("Failed to launch");

//     const data = await res.json();
//     toast.success(`Campaign launched. Link: ${data.phishingLink}`);
//     console.log("Phishing Link:", data.phishingLink); // optional

//     setEmail("");
//   } catch (err) {
//     toast.error("Failed to launch campaign.");
//     console.error(err);
//   }
// };


//   return (
//     <main className="max-w-2xl mx-auto p-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Phishing Simulation Manager</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLaunch} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium">Target Email</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="victim@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">Launch Campaign</Button>
//           </form>
//             <Link
//                   href="/dashboard/report"
//                   className="inline-block bg-secondary text-primary py-2 px-4 rounded-md hover:bg-secondary/80 transition"
//                 >
//                   View Report
//                 </Link>

//         </CardContent>
//       </Card>
//     </main>
//   );
// }
'use client';

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Mail, Send, BarChart3, ArrowLeft, Copy, ExternalLink } from 'lucide-react';

interface LaunchResponse {
  message: string;
  phishingLink: string;
}

export default function PhishingCampaignPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);

  const handleLaunch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a target email address");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/phishing/launch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to launch campaign");

      const data: LaunchResponse = await res.json();
      toast.success("Campaign launched successfully!");
      setGeneratedLink(data.phishingLink);
      setEmail("");
    } catch {
      toast.error("Failed to launch campaign. Please try again.");
      // Optionally, you can log a generic error if needed
      // console.error("Failed to launch campaign.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <Mail className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Phishing Campaign Manager</h1>
              <p className="text-muted-foreground">Create and manage phishing simulation campaigns</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Campaign Launch Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Launch New Campaign
                </CardTitle>
                <CardDescription>
                  Send a simulated phishing email to test user awareness and response
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleLaunch} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Target Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="victim@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11"
                    />
                    <p className="text-xs text-muted-foreground">
                      The email address that will receive the phishing simulation
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Launching Campaign...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Launch Campaign
                      </>
                    )}
                  </Button>
                </form>

                {generatedLink && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Campaign Launched Successfully!
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                      Phishing link generated and email sent to target.
                    </p>
                    <div className="flex items-center gap-2">
                      <Input
                        value={generatedLink}
                        readOnly
                        className="text-xs bg-white dark:bg-slate-800"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(generatedLink)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Campaign Info */}
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Campaign Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant="secondary">Ready</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Template</span>
                  <span className="text-sm font-medium">Security Alert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="text-sm font-medium">~73%</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/dashboard/report">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Reports
                  </Link>
                </Button>
                <Separator />
                <div className="text-xs text-muted-foreground">
                  <p className="mb-2">Email Template Preview:</p>
                  <div className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded text-xs">
                    &quot;Security Alert: Action Required - We have detected unusual activity...&quot;
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
