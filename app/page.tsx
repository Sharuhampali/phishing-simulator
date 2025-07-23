
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Shield, Mail, Lock, Zap, ArrowRight, CheckCircle, Users, BarChart3, Terminal, Code, Cpu } from 'lucide-react'
// import Link from "next/link"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-black text-green-400 font-mono">
//       {/* Matrix-style background */}
//       <div className="fixed inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:100px_100px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:100px_100px]" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {/* Hero Section */}
//         <div className="text-center space-y-6 mb-16">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
//               <Terminal className="h-12 w-12 text-green-400" />
//             </div>
//             <Badge variant="outline" className="px-3 py-1 border-green-500/30 text-green-400">
//               [CLASSIFIED] SECURITY TRAINING
//             </Badge>
//           </div>

//           <div className="space-y-4">
//             <div className="text-sm text-green-500/70 font-mono">
//               {'> initializing_cybersim_platform...'}
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold text-green-400 tracking-wider">
//               CYBER<span className="text-red-400">SIM</span>
//             </h1>
//             <div className="text-sm text-green-500/70 font-mono">
//               {'> system_status: OPERATIONAL'}
//             </div>
//           </div>

//           <p className="text-xl text-green-300/80 max-w-2xl mx-auto leading-relaxed font-mono">
//             {'[ADVANCED PENETRATION TESTING SUITE]'}<br />
//             Simulate real-world cyber attacks in controlled environments.<br />
//             Train your security team. Test your defenses.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button
//               asChild
//               size="lg"
//               className="bg-green-600 hover:bg-green-700 text-black font-mono font-bold border border-green-400"
//             >
//               <Link href="/dashboard">
//                 <Terminal className="mr-2 h-5 w-5" />
//                 {'> ACCESS_TERMINAL'}
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button variant="outline" size="lg" asChild className="border-green-500/30 text-green-400 hover:bg-green-500/10">
//               <Link href="/dashboard/report">
//                 <BarChart3 className="mr-2 h-5 w-5" />
//                 {'> VIEW_LOGS'}
//               </Link>
//             </Button>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <Card className="bg-black border-green-500/30 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/20">
//             <CardHeader className="pb-4">
//               <div className="p-2 bg-red-500/20 rounded-lg w-fit border border-red-500/30">
//                 <Mail className="h-8 w-8 text-red-400" />
//               </div>
//               <CardTitle className="text-xl text-green-400 font-mono">PHISHING_MODULE</CardTitle>
//               <CardDescription className="text-green-300/70 font-mono text-sm">
//                 {'> deploy_social_engineering_attacks()'}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2 text-sm text-green-300/80 font-mono">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   {'email_campaign_mgmt: ACTIVE'}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   {'credential_harvesting: ENABLED'}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   {'real_time_analytics: ONLINE'}
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="bg-black border-blue-500/30 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
//             <CardHeader className="pb-4">
//               <div className="p-2 bg-blue-500/20 rounded-lg w-fit border border-blue-500/30">
//                 <Code className="h-8 w-8 text-blue-400" />
//               </div>
//               <CardTitle className="text-xl text-green-400 font-mono">XSS_EXPLOIT</CardTitle>
//               <CardDescription className="text-green-300/70 font-mono text-sm">
//                 {'> inject_malicious_scripts()'}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2 text-sm text-green-300/80 font-mono">
//                 <li className="flex items-center gap-2">
//                   <div className="h-4 w-4 rounded-full bg-yellow-500/50 animate-pulse" />
//                   {'vulnerability_scan: PENDING'}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div className="h-4 w-4 rounded-full bg-yellow-500/50 animate-pulse" />
//                   {'payload_injection: PENDING'}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div className="h-4 w-4 rounded-full bg-yellow-500/50 animate-pulse" />
//                   {'security_assessment: PENDING'}
//                 </li>
//               </ul>
//               <Badge variant="outline" className="mt-4 border-yellow-500/30 text-yellow-400">
//                 {'[DEVELOPMENT_MODE]'}
//               </Badge>
//             </CardContent>
//           </Card>

//           <Card className="bg-black border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
//             <CardHeader className="pb-4">
//               <div className="p-2 bg-purple-500/20 rounded-lg w-fit border border-purple-500/30">
//                 <Cpu className="h-8 w-8 text-purple-400" />
//               </div>
//               <CardTitle className="text-xl text-green-400 font-mono">BRUTEFORCE_ENGINE</CardTitle>
//               <CardDescription className="text-green-300/70 font-mono text-sm">
//                 {'> crack_authentication_systems()'}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2 text-sm text-green-300/80 font-mono">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   {'password_analysis: ACTIVE'}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   {'dictionary_attack: LOADED'}
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4 text-green-500" />
//                   {'security_recommendations: READY'}
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Stats Section */}
//         <div className="bg-black border border-green-500/30 rounded-2xl p-8 mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-green-400 font-mono mb-2">{'> SYSTEM_METRICS'}</h2>
//             <p className="text-green-300/70 font-mono">{'real_time_security_intelligence'}</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-green-400 mb-2 font-mono">1,247</div>
//               <div className="text-sm text-green-300/70 font-mono">{'active_targets'}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-red-400 mb-2 font-mono">87%</div>
//               <div className="text-sm text-green-300/70 font-mono">{'compromise_rate'}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-400 mb-2 font-mono">156</div>
//               <div className="text-sm text-green-300/70 font-mono">{'campaigns_executed'}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">24/7</div>
//               <div className="text-sm text-green-300/70 font-mono">{'monitoring_active'}</div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center space-y-6">
//           <div className="text-sm text-green-500/70 font-mono mb-4">
//             {'> preparing_security_assessment...'}
//           </div>
//           <h2 className="text-3xl font-bold text-green-400 font-mono">{'INITIATE_SECURITY_PROTOCOL'}</h2>
//           <p className="text-green-300/80 max-w-xl mx-auto font-mono">
//             {'Begin comprehensive penetration testing and security awareness training.'}
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className="bg-green-600 hover:bg-green-700 text-black font-mono font-bold border border-green-400"
//           >
//             <Link href="/dashboard">
//               <Users className="mr-2 h-5 w-5" />
//               {'> EXECUTE_PROTOCOL'}
//             </Link>
//           </Button>
//         </div>
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
