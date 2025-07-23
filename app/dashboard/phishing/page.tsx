// // // File: app/dashboard/phishing/page.tsx

// // 'use client';
// // import Link from "next/link";
// // import { useState } from "react";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// // import { toast } from "sonner";

// // export default function PhishingCampaignPage() {
// //   const [email, setEmail] = useState("");

// //   const handleLaunch = async (e: React.FormEvent) => {
// //   e.preventDefault();
// //   if (!email) return toast.error("Please enter a target email.");

// //   try {
// //     const res = await fetch("/api/phishing/launch", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ email }),
// //     });

// //     if (!res.ok) throw new Error("Failed to launch");

// //     const data = await res.json();
// //     toast.success(`Campaign launched. Link: ${data.phishingLink}`);
// //     console.log("Phishing Link:", data.phishingLink); // optional

// //     setEmail("");
// //   } catch (err) {
// //     toast.error("Failed to launch campaign.");
// //     console.error(err);
// //   }
// // };


// //   return (
// //     <main className="max-w-2xl mx-auto p-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Phishing Simulation Manager</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <form onSubmit={handleLaunch} className="space-y-4">
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium">Target Email</label>
// //               <Input
// //                 id="email"
// //                 type="email"
// //                 placeholder="victim@example.com"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <Button type="submit" className="w-full">Launch Campaign</Button>
// //           </form>
// //             <Link
// //                   href="/dashboard/report"
// //                   className="inline-block bg-secondary text-primary py-2 px-4 rounded-md hover:bg-secondary/80 transition"
// //                 >
// //                   View Report
// //                 </Link>

// //         </CardContent>
// //       </Card>
// //     </main>
// //   );
// // }
// 'use client';

// import Link from "next/link";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { toast } from "sonner";
// import { Mail, Send, BarChart3, ArrowLeft, Copy, ExternalLink } from 'lucide-react';

// interface LaunchResponse {
//   message: string;
//   phishingLink: string;
// }

// export default function PhishingCampaignPage() {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [generatedLink, setGeneratedLink] = useState<string | null>(null);

//   const handleLaunch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Please enter a target email address");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const res = await fetch("/api/phishing/launch", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       if (!res.ok) throw new Error("Failed to launch campaign");

//       const data: LaunchResponse = await res.json();
//       toast.success("Campaign launched successfully!");
//       setGeneratedLink(data.phishingLink);
//       setEmail("");
//     } catch {
//       toast.error("Failed to launch campaign. Please try again.");
//       // Optionally, you can log a generic error if needed
//       // console.error("Failed to launch campaign.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const copyToClipboard = async (text: string) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       toast.success("Link copied to clipboard!");
//     } catch {
//       toast.error("Failed to copy link");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//       <div className="container mx-auto px-4 py-8 max-w-4xl">
//         {/* Header */}
//         <div className="mb-8">
//           <Button variant="ghost" asChild className="mb-4">
//             <Link href="/dashboard">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Dashboard
//             </Link>
//           </Button>
          
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
//               <Mail className="h-8 w-8 text-red-600 dark:text-red-400" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold">Phishing Campaign Manager</h1>
//               <p className="text-muted-foreground">Create and manage phishing simulation campaigns</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Campaign Launch Form */}
//           <div className="lg:col-span-2">
//             <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Send className="h-5 w-5" />
//                   Launch New Campaign
//                 </CardTitle>
//                 <CardDescription>
//                   Send a simulated phishing email to test user awareness and response
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <form onSubmit={handleLaunch} className="space-y-4">
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium">
//                       Target Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="victim@example.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                       className="h-11"
//                     />
//                     <p className="text-xs text-muted-foreground">
//                       The email address that will receive the phishing simulation
//                     </p>
//                   </div>
                  
//                   <Button 
//                     type="submit" 
//                     className="w-full h-11 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <>
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
//                         Launching Campaign...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="mr-2 h-4 w-4" />
//                         Launch Campaign
//                       </>
//                     )}
//                   </Button>
//                 </form>

//                 {generatedLink && (
//                   <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
//                     <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
//                       Campaign Launched Successfully!
//                     </h4>
//                     <p className="text-sm text-green-700 dark:text-green-300 mb-3">
//                       Phishing link generated and email sent to target.
//                     </p>
//                     <div className="flex items-center gap-2">
//                       <Input
//                         value={generatedLink}
//                         readOnly
//                         className="text-xs bg-white dark:bg-slate-800"
//                       />
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => copyToClipboard(generatedLink)}
//                       >
//                         <Copy className="h-4 w-4" />
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         asChild
//                       >
//                         <a href={generatedLink} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="h-4 w-4" />
//                         </a>
//                       </Button>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Campaign Info */}
//             <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
//               <CardHeader className="pb-3">
//                 <CardTitle className="text-lg">Campaign Info</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-muted-foreground">Status</span>
//                   <Badge variant="secondary">Ready</Badge>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-muted-foreground">Template</span>
//                   <span className="text-sm font-medium">Security Alert</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-muted-foreground">Success Rate</span>
//                   <span className="text-sm font-medium">~73%</span>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Actions */}
//             <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
//               <CardHeader className="pb-3">
//                 <CardTitle className="text-lg">Quick Actions</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <Button variant="outline" className="w-full justify-start" asChild>
//                   <Link href="/dashboard/report">
//                     <BarChart3 className="mr-2 h-4 w-4" />
//                     View Reports
//                   </Link>
//                 </Button>
//                 <Separator />
//                 <div className="text-xs text-muted-foreground">
//                   <p className="mb-2">Email Template Preview:</p>
//                   <div className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded text-xs">
//                     &quot;Security Alert: Action Required - We have detected unusual activity...&quot;
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { Mail, Send, BarChart3, ArrowLeft, Copy, ExternalLink, Zap } from "lucide-react"

interface LaunchResponse {
  message: string
  phishingLink: string
}

export default function PhishingCampaignPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedLink, setGeneratedLink] = useState<string | null>(null)

  const handleLaunch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Target email address required")
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("/api/phishing/launch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("Failed to launch campaign")

      const data: LaunchResponse = await res.json()
      toast.success("Campaign deployed successfully!", {
        description: "Phishing email sent to target",
      })
      setGeneratedLink(data.phishingLink)
      setEmail("")
    } catch {
      toast.error("Campaign deployment failed", {
        description: "Check system logs for details",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Link copied to clipboard")
    } catch {
      toast.error("Failed to copy link")
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-green-400 hover:bg-green-500/10">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {"< back_to_terminal"}
            </Link>
          </Button>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg border border-red-500/30">
              <Mail className="h-8 w-8 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-400">{"> PHISHING_CAMPAIGN_MANAGER"}</h1>
              <p className="text-green-300/70">{"social_engineering_attack_deployment_system"}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Campaign Launch Form */}
          <div className="lg:col-span-2">
            <Card className="bg-black border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
                  <Send className="h-5 w-5" />
                  {"> DEPLOY_PHISHING_CAMPAIGN"}
                </CardTitle>
                <CardDescription className="text-green-300/70 font-mono text-sm">
                  {"execute_social_engineering_attack_vector()"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleLaunch} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-green-400 font-mono">
                      {"target_email_address:"}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="victim@target-corp.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 bg-black border-green-500/30 text-green-400 font-mono focus:border-green-400"
                    />
                    <p className="text-xs text-green-300/70 font-mono">
                      {"// primary_target_for_credential_harvesting"}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-mono font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        {"deploying_payload..."}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {"> EXECUTE_CAMPAIGN"}
                      </>
                    )}
                  </Button>
                </form>

                {generatedLink && (
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2 font-mono">
                      {"> CAMPAIGN_DEPLOYED_SUCCESSFULLY"}
                    </h4>
                    <p className="text-sm text-green-300/80 mb-3 font-mono">
                      {"phishing_payload_delivered_to_target_inbox"}
                    </p>
                    <div className="space-y-2">
                      <div className="text-xs text-green-300/70 font-mono">{"generated_phishing_url:"}</div>
                      <div className="flex items-center gap-2">
                        <Input
                          value={generatedLink}
                          readOnly
                          className="text-xs bg-black border-green-500/30 text-green-400 font-mono"
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(generatedLink)}
                          className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
                        >
                          <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Campaign Status */}
            <Card className="bg-black border-green-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-400 font-mono">{"> CAMPAIGN_STATUS"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-300/70 font-mono">{"system_status:"}</span>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 font-mono">
                    {"OPERATIONAL"}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-300/70 font-mono">{"template_type:"}</span>
                  <span className="text-sm font-medium text-green-400 font-mono">{"GOOGLE_AUTH"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-300/70 font-mono">{"success_rate:"}</span>
                  <span className="text-sm font-medium text-green-400 font-mono">{"~73.2%"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-300/70 font-mono">{"payload_status:"}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-400 font-mono">{"ACTIVE"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-black border-blue-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-400 font-mono">{"> QUICK_ACTIONS"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-mono bg-transparent"
                  asChild
                >
                  <Link href="/dashboard/report">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    {"> access_analytics"}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-mono bg-transparent"
                  asChild
                >
                  <Link href="/simulate/bruteforce">
                    <Zap className="mr-2 h-4 w-4" />
                    {"> launch_bruteforce"}
                  </Link>
                </Button>
                <Separator className="bg-green-500/20" />
                <div className="text-xs text-green-300/70 font-mono">
                  <p className="mb-2">{"email_template_preview:"}</p>
                  <div className="p-2 bg-green-500/5 rounded text-xs border border-green-500/20">
                    {"[URGENT] Google Security Alert"}
                    <br />
                    {"Unusual activity detected..."}
                    <br />
                    {"Click to verify account →"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Info */}
            <Card className="bg-black border-yellow-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-400 font-mono">{"> SYSTEM_INFO"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-yellow-300/70">{"version:"}</span>
                  <span className="text-yellow-400">{"v2.1.3"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-300/70">{"uptime:"}</span>
                  <span className="text-yellow-400">{"72h 14m"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-300/70">{"encryption:"}</span>
                  <span className="text-yellow-400">{"AES-256"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-300/70">{"stealth_mode:"}</span>
                  <span className="text-yellow-400">{"ENABLED"}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
