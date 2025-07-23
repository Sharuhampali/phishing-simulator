// import { prisma } from "@/lib/prisma"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft, Download, Users, Mail, Clock, TrendingUp } from "lucide-react"
// import Link from "next/link"
// import { writeFile } from "fs/promises"
// import { join } from "path"

// export const dynamic = "force-dynamic"

// interface UserInteraction {
//   id: string
//   email: string
//   password?: string | null
//   token: string
//   clickedLink: boolean
//   submittedAt: Date
// }

// function generateCSV(data: UserInteraction[]): string {
//   const header = ["Email", "Clicked", "Password", "Token", "SubmittedAt"]
//   const rows = data.map((i) => [
//     `"${i.email}"`,
//     i.clickedLink ? "Clicked" : "Sent",
//     `"${i.password || ""}"`,
//     `"${i.token}"`,
//     `"${i.submittedAt.toISOString()}"`
//   ])
//   return [header.join(","), ...rows.map((r) => r.join(","))].join("\n")
// }

// export default async function ReportPage() {
//   const rawInteractions = await prisma.userInteraction.findMany({
//     orderBy: { submittedAt: "desc" },
//   })
//   const interactions: UserInteraction[] = rawInteractions.map((i) => ({
//     ...i,
//     id: String(i.id),
//   }))

//   const totalInteractions = interactions.length
//   const clickedCount = interactions.filter((i) => i.clickedLink).length
//   const clickRate = totalInteractions > 0 ? Math.round((clickedCount / totalInteractions) * 100) : 0

//   const csvData = generateCSV(interactions)
//   const filePath = join(process.cwd(), "public", "report.csv")
//   await writeFile(filePath, csvData)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <Button variant="ghost" asChild className="mb-4">
//             <Link href="/dashboard">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Dashboard
//             </Link>
//           </Button>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
//                 <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">Campaign Analytics</h1>
//                 <p className="text-muted-foreground">Detailed insights from phishing simulations</p>
//               </div>
//             </div>
//             <Button variant="outline" className="gap-2" asChild>
//               <a href="/report.csv" download>
//                 <Download className="h-4 w-4" />
//                 Export Report
//               </a>
//             </Button>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Targets</p>
//                   <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{totalInteractions}</p>
//                 </div>
//                 <Users className="h-8 w-8 text-blue-500" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-green-600 dark:text-green-400">Click Rate</p>
//                   <p className="text-3xl font-bold text-green-900 dark:text-green-100">{clickRate}%</p>
//                 </div>
//                 <Mail className="h-8 w-8 text-green-500" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-red-600 dark:text-red-400">Credential Rate</p>
//                   <p className="text-3xl font-bold text-red-900 dark:text-red-100">—</p>
//                 </div>
//                 <TrendingUp className="h-8 w-8 text-red-500" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Avg Response</p>
//                   <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">2.3m</p>
//                 </div>
//                 <Clock className="h-8 w-8 text-purple-500" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Detailed Results Table */}
//         <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <TrendingUp className="h-5 w-5" />
//               Campaign Results
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             {interactions.length === 0 ? (
//               <div className="text-center py-12">
//                 <Mail className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">No Campaign Data</h3>
//                 <p className="text-muted-foreground mb-4">Launch your first phishing campaign to see results here.</p>
//                 <Button asChild>
//                   <Link href="/dashboard/phishing">Launch Campaign</Link>
//                 </Button>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Target Email</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Password</TableHead>
//                       <TableHead>Campaign ID</TableHead>
//                       <TableHead>Timestamp</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {interactions.map((interaction) => (
//                       <TableRow key={interaction.id}>
//                         <TableCell className="font-medium">{interaction.email}</TableCell>
//                         <TableCell>
//                           {interaction.clickedLink ? (
//                             <Badge variant="destructive">Clicked</Badge>
//                           ) : (
//                             <Badge variant="secondary">Sent</Badge>
//                           )}
//                         </TableCell>
//                         <TableCell className="font-mono text-xs">
//                           {interaction.password || "—"}
//                         </TableCell>
//                         <TableCell className="font-mono text-xs text-muted-foreground">
//                           {interaction.token.slice(0, 8)}...
//                         </TableCell>
//                         <TableCell className="text-sm">{new Date(interaction.submittedAt).toLocaleString()}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Users, Mail, Clock, TrendingUp, Terminal, Activity } from "lucide-react"
import Link from "next/link"
import { writeFile } from "fs/promises"
import { join } from "path"

export const dynamic = "force-dynamic"

interface UserInteraction {
  id: string
  email: string
  password?: string | null
  token: string
  clickedLink: boolean
  submittedAt: Date
}

function generateCSV(data: UserInteraction[]): string {
  const header = ["Email", "Status", "Password", "Token", "SubmittedAt"]
  const rows = data.map((i) => [
    `"${i.email}"`,
    i.clickedLink ? "Compromised" : "Sent",
    `"${i.password || ""}"`,
    `"${i.token}"`,
    `"${i.submittedAt.toISOString()}"`,
  ])
  return [header.join(","), ...rows.map((r) => r.join(","))].join("\n")
}

export default async function ReportPage() {
  const rawInteractions = await prisma.userInteraction.findMany({
    orderBy: { submittedAt: "desc" },
  })
  const interactions: UserInteraction[] = rawInteractions.map((i) => ({
    ...i,
    id: String(i.id),
  }))

  const totalInteractions = interactions.length
  const clickedCount = interactions.filter((i) => i.clickedLink).length
  const credentialCount = interactions.filter((i) => i.password).length
  const clickRate = totalInteractions > 0 ? Math.round((clickedCount / totalInteractions) * 100) : 0
  const credentialRate = totalInteractions > 0 ? Math.round((credentialCount / totalInteractions) * 100) : 0

  const csvData = generateCSV(interactions)
  const filePath = join(process.cwd(), "public", "cybersim_report.csv")
  await writeFile(filePath, csvData)

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
          <Button variant="ghost" asChild className="mb-4 text-green-400 hover:bg-green-500/10">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {"< back_to_terminal"}
            </Link>
          </Button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-400">{"> CAMPAIGN_ANALYTICS"}</h1>
                <p className="text-green-300/70">{"detailed_breach_intelligence_report"}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="gap-2 border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono bg-transparent"
              asChild
            >
              <a href="/cybersim_report.csv" download>
                <Download className="h-4 w-4" />
                {"> export_data"}
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-400 font-mono">{"total_targets"}</p>
                  <p className="text-3xl font-bold text-blue-300 font-mono">{totalInteractions}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-400 font-mono">{"click_rate"}</p>
                  <p className="text-3xl font-bold text-green-300 font-mono">{clickRate}%</p>
                </div>
                <Mail className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-red-500/30 hover:shadow-lg hover:shadow-red-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-400 font-mono">{"credential_rate"}</p>
                  <p className="text-3xl font-bold text-red-300 font-mono">{credentialRate}%</p>
                </div>
                <Activity className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-400 font-mono">{"avg_response"}</p>
                  <p className="text-3xl font-bold text-purple-300 font-mono">2.3m</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Results Table */}
        <Card className="bg-black border-green-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
              <Terminal className="h-5 w-5" />
              {"> BREACH_INTELLIGENCE_LOG"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {interactions.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="h-16 w-16 text-green-400/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-green-400 font-mono">{"> NO_DATA_AVAILABLE"}</h3>
                <p className="text-green-300/70 mb-4 font-mono">{"execute_first_campaign_to_populate_database"}</p>
                <Button asChild className="bg-red-600 hover:bg-red-700 font-mono">
                  <Link href="/dashboard/phishing">{"> DEPLOY_CAMPAIGN"}</Link>
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-green-500/20">
                      <TableHead className="text-green-400 font-mono">{"target_email"}</TableHead>
                      <TableHead className="text-green-400 font-mono">{"breach_status"}</TableHead>
                      <TableHead className="text-green-400 font-mono">{"harvested_password"}</TableHead>
                      <TableHead className="text-green-400 font-mono">{"campaign_id"}</TableHead>
                      <TableHead className="text-green-400 font-mono">{"timestamp"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {interactions.map((interaction) => (
                      <TableRow key={interaction.id} className="border-green-500/10 hover:bg-green-500/5">
                        <TableCell className="font-medium text-green-300 font-mono">{interaction.email}</TableCell>
                        <TableCell>
                          {interaction.clickedLink ? (
                            <Badge variant="destructive" className="bg-red-600 text-white font-mono">
                              {"COMPROMISED"}
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-yellow-500/30 text-yellow-400 font-mono">
                              {"DELIVERED"}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-xs text-green-300">
                          {interaction.password ? (
                            <span className="bg-red-500/20 px-2 py-1 rounded border border-red-500/30">
                              {interaction.password}
                            </span>
                          ) : (
                            <span className="text-green-400/50">{"--"}</span>
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-xs text-green-400/70">
                          {interaction.token.slice(0, 8)}...
                        </TableCell>
                        <TableCell className="text-sm font-mono text-green-300">
                          {new Date(interaction.submittedAt).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
