// // app/dashboard/report.tsx
// import { prisma } from "@/lib/prisma";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// export const dynamic = "force-dynamic"; // enable server-side rendering

// export default async function ReportPage() {
//   const interactions = await prisma.userInteraction.findMany({
//     orderBy: { submittedAt: "desc" },
//   });

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Phishing Campaign Report</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Password</TableHead>
//                 <TableHead>Token</TableHead>
//                 <TableHead>Clicked</TableHead>
//                 <TableHead>Time</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {interactions.map((i) => (
//                 <TableRow key={i.id}>
//                   <TableCell>{i.email}</TableCell>
//                   {/* <TableCell>{i.password || "-"}</TableCell> */}
//                   <TableCell className="text-xs text-muted-foreground">{i.token}</TableCell>
//                   <TableCell>{i.clickedLink ? "Yes" : "No"}</TableCell>
//                   <TableCell>{new Date(i.submittedAt).toLocaleString()}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </main>
//   );
// }

import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Users, Mail, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

interface UserInteraction {
  id: string
  email: string
  password?: string | null
  token: string
  clickedLink: boolean
  submittedAt: Date
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
  const submittedCredentials = interactions.filter((i) => i.password).length
  const clickRate = totalInteractions > 0 ? Math.round((clickedCount / totalInteractions) * 100) : 0
  const credentialRate = totalInteractions > 0 ? Math.round((submittedCredentials / totalInteractions) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Campaign Analytics</h1>
                <p className="text-muted-foreground">Detailed insights from phishing simulations</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Targets</p>
                  <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{totalInteractions}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">Click Rate</p>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100">{clickRate}%</p>
                </div>
                <Mail className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">Credential Rate</p>
                  <p className="text-3xl font-bold text-red-900 dark:text-red-100">{credentialRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Avg Response</p>
                  <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">2.3m</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Results Table */}
        <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Campaign Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {interactions.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Campaign Data</h3>
                <p className="text-muted-foreground mb-4">Launch your first phishing campaign to see results here.</p>
                <Button asChild>
                  <Link href="/dashboard/phishing">Launch Campaign</Link>
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Target Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Credentials</TableHead>
                      <TableHead>Campaign ID</TableHead>
                      <TableHead>Timestamp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {interactions.map((interaction) => (
                      <TableRow key={interaction.id}>
                        <TableCell className="font-medium">{interaction.email}</TableCell>
                        <TableCell>
                          {interaction.clickedLink ? (
                            <Badge variant="destructive">Clicked</Badge>
                          ) : (
                            <Badge variant="secondary">Sent</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {interaction.password ? (
                            <Badge variant="destructive">Submitted</Badge>
                          ) : (
                            <Badge variant="outline">Not Submitted</Badge>
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-xs text-muted-foreground">
                          {interaction.token.slice(0, 8)}...
                        </TableCell>
                        <TableCell className="text-sm">{new Date(interaction.submittedAt).toLocaleString()}</TableCell>
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
