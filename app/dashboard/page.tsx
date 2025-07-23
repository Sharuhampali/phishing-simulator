// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Shield, Mail, Lock, Zap, TrendingUp, Users } from "lucide-react"
// import Link from "next/link"

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="p-2 bg-primary/10 rounded-lg">
//               <Shield className="h-8 w-8 text-primary" />
//             </div>
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
//                 CyberSim Dashboard
//               </h1>
//               <p className="text-muted-foreground">Advanced cybersecurity training platform</p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Active Campaigns</p>
//                   <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">12</p>
//                 </div>
//                 <TrendingUp className="h-8 w-8 text-blue-500" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-green-600 dark:text-green-400">Success Rate</p>
//                   <p className="text-3xl font-bold text-green-900 dark:text-green-100">87%</p>
//                 </div>
//                 <Zap className="h-8 w-8 text-green-500" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Total Users</p>
//                   <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">1,247</p>
//                 </div>
//                 <Users className="h-8 w-8 text-purple-500" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Main Content */}
//         <Tabs defaultValue="phishing" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-slate-800 shadow-lg">
//             <TabsTrigger value="phishing" className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               Phishing Simulation
//             </TabsTrigger>
//             <TabsTrigger value="xss" disabled className="flex items-center gap-2 opacity-50">
//               <Lock className="h-4 w-4" />
//               XSS Simulation
//               <Badge variant="secondary" className="ml-2 text-xs">
//                 Soon
//               </Badge>
//             </TabsTrigger>
//             <TabsTrigger value="bruteforce" disabled className="flex items-center gap-2 opacity-50">
//               <Shield className="h-4 w-4" />
//               Brute Force
//               <Badge variant="secondary" className="ml-2 text-xs">
//                 Soon
//               </Badge>
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="phishing">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
//                 <CardHeader className="pb-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
//                       <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
//                     </div>
//                     <div>
//                       <CardTitle className="text-xl">Launch Phishing Campaign</CardTitle>
//                       <CardDescription className="mt-1">
//                         Send simulated phishing emails and monitor victim behavior in real-time
//                       </CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
//                     <h4 className="font-semibold mb-2">Campaign Features:</h4>
//                     <ul className="text-sm text-muted-foreground space-y-1">
//                       <li>• Real-time email tracking</li>
//                       <li>• Credential harvesting simulation</li>
//                       <li>• Detailed analytics and reporting</li>
//                       <li>• Customizable email templates</li>
//                     </ul>
//                   </div>
//                   <Button
//                     asChild
//                     className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
//                   >
//                     <Link href="/dashboard/phishing">
//                       <Mail className="mr-2 h-4 w-4" />
//                       Manage Campaign
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
//                 <CardHeader className="pb-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
//                       <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
//                     </div>
//                     <div>
//                       <CardTitle className="text-xl">Campaign Analytics</CardTitle>
//                       <CardDescription className="mt-1">
//                         View detailed reports and insights from your security campaigns
//                       </CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
//                     <h4 className="font-semibold mb-2">Report Insights:</h4>
//                     <ul className="text-sm text-muted-foreground space-y-1">
//                       <li>• Click-through rates and timing</li>
//                       <li>• Credential submission analysis</li>
//                       <li>• User behavior patterns</li>
//                       <li>• Risk assessment scores</li>
//                     </ul>
//                   </div>
//                   <Button asChild variant="outline" className="w-full">
//                     <Link href="/dashboard/report">
//                       <TrendingUp className="mr-2 h-4 w-4" />
//                       View Reports
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           <TabsContent value="xss">
//             <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
//               <CardContent className="p-8 text-center">
//                 <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">XSS Simulation Coming Soon</h3>
//                 <p className="text-muted-foreground">
//                   Advanced cross-site scripting simulation tools are currently in development.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="bruteforce">
//             <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
//               <CardContent className="p-8 text-center">
//                 <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">Brute Force Simulation Coming Soon</h3>
//                 <p className="text-muted-foreground">
//                   Password attack simulation and defense training modules are in development.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Terminal, Mail, Code, Cpu, TrendingUp, Users, Activity, Zap } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
              <Terminal className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-green-400 tracking-wider">{"> CYBERSIM_TERMINAL"}</h1>
              <p className="text-green-300/70 font-mono">{"advanced_penetration_testing_suite"}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-black border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-400 font-mono">{"active_campaigns"}</p>
                  <p className="text-3xl font-bold text-blue-300 font-mono">12</p>
                </div>
                <Activity className="h-8 w-8 text-blue-500 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-400 font-mono">{"success_rate"}</p>
                  <p className="text-3xl font-bold text-green-300 font-mono">87%</p>
                </div>
                <Zap className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-400 font-mono">{"total_targets"}</p>
                  <p className="text-3xl font-bold text-purple-300 font-mono">1,247</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="phishing" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-black border border-green-500/30">
            <TabsTrigger
              value="phishing"
              className="flex items-center gap-2 data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 font-mono"
            >
              <Mail className="h-4 w-4" />
              {"PHISHING_SIM"}
            </TabsTrigger>
            <TabsTrigger value="xss" className="flex items-center gap-2 opacity-50 font-mono">
              <Code className="h-4 w-4" />
              {"XSS_EXPLOIT"}
              <Badge variant="outline" className="ml-2 text-xs border-yellow-500/30 text-yellow-400">
                {"DEV"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="bruteforce"
              className="flex items-center gap-2 data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 font-mono"
            >
              <Cpu className="h-4 w-4" />
              {"BRUTEFORCE"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phishing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/20 rounded-lg border border-red-500/30">
                      <Mail className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-green-400 font-mono">{"> DEPLOY_PHISHING_CAMPAIGN"}</CardTitle>
                      <CardDescription className="mt-1 text-green-300/70 font-mono text-sm">
                        {"execute_social_engineering_attacks()"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold mb-2 text-green-400 font-mono">{"module_capabilities:"}</h4>
                    <ul className="text-sm text-green-300/80 space-y-1 font-mono">
                      <li>{"• real_time_email_tracking"}</li>
                      <li>{"• credential_harvesting_simulation"}</li>
                      <li>{"• detailed_analytics_reporting"}</li>
                      <li>{"• customizable_email_templates"}</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-mono font-bold">
                    <Link href="/dashboard/phishing">
                      <Mail className="mr-2 h-4 w-4" />
                      {"> EXECUTE_CAMPAIGN"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-green-400 font-mono">{"> CAMPAIGN_ANALYTICS"}</CardTitle>
                      <CardDescription className="mt-1 text-green-300/70 font-mono text-sm">
                        {"analyze_security_breach_data()"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold mb-2 text-blue-400 font-mono">{"report_insights:"}</h4>
                    <ul className="text-sm text-blue-300/80 space-y-1 font-mono">
                      <li>{"• click_through_rates_timing"}</li>
                      <li>{"• credential_submission_analysis"}</li>
                      <li>{"• user_behavior_patterns"}</li>
                      <li>{"• risk_assessment_scores"}</li>
                    </ul>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-mono bg-transparent"
                  >
                    <Link href="/dashboard/report">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      {"> ACCESS_REPORTS"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="xss">
            <Card className="bg-black border-yellow-500/30">
              <CardContent className="p-8 text-center">
                <Code className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold mb-2 text-green-400 font-mono">{"> XSS_MODULE_INITIALIZING"}</h3>
                <p className="text-green-300/70 font-mono">{"cross_site_scripting_simulation_tools_in_development"}</p>
                <div className="mt-4 text-yellow-400 font-mono text-sm">{"[STATUS: DEVELOPMENT_MODE]"}</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bruteforce">
            <Card className="bg-black border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <Cpu className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-green-400 font-mono">{"> BRUTEFORCE_ENGINE"}</CardTitle>
                    <CardDescription className="mt-1 text-green-300/70 font-mono text-sm">
                      {"password_cracking_simulation_active"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold mb-2 text-purple-400 font-mono">{"engine_capabilities:"}</h4>
                  <ul className="text-sm text-purple-300/80 space-y-1 font-mono">
                    <li>{"• dictionary_attack_simulation"}</li>
                    <li>{"• password_strength_analysis"}</li>
                    <li>{"• real_time_cracking_progress"}</li>
                    <li>{"• security_recommendations"}</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold">
                  <Link href="/simulate/bruteforce">
                    <Cpu className="mr-2 h-4 w-4" />
                    {"> LAUNCH_BRUTEFORCE"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
