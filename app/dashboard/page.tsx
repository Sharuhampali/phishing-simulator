import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Mail, Lock, Zap, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                CyberSim Dashboard
              </h1>
              <p className="text-muted-foreground">Advanced cybersecurity training platform</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Active Campaigns</p>
                  <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">12</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">Success Rate</p>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100">87%</p>
                </div>
                <Zap className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Total Users</p>
                  <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">1,247</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="phishing" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-slate-800 shadow-lg">
            <TabsTrigger value="phishing" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Phishing Simulation
            </TabsTrigger>
            <TabsTrigger value="xss" disabled className="flex items-center gap-2 opacity-50">
              <Lock className="h-4 w-4" />
              XSS Simulation
              <Badge variant="secondary" className="ml-2 text-xs">
                Soon
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="bruteforce" disabled className="flex items-center gap-2 opacity-50">
              <Shield className="h-4 w-4" />
              Brute Force
              <Badge variant="secondary" className="ml-2 text-xs">
                Soon
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phishing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                      <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Launch Phishing Campaign</CardTitle>
                      <CardDescription className="mt-1">
                        Send simulated phishing emails and monitor victim behavior in real-time
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Campaign Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time email tracking</li>
                      <li>• Credential harvesting simulation</li>
                      <li>• Detailed analytics and reporting</li>
                      <li>• Customizable email templates</li>
                    </ul>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                  >
                    <Link href="/dashboard/phishing">
                      <Mail className="mr-2 h-4 w-4" />
                      Manage Campaign
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Campaign Analytics</CardTitle>
                      <CardDescription className="mt-1">
                        View detailed reports and insights from your security campaigns
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Report Insights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Click-through rates and timing</li>
                      <li>• Credential submission analysis</li>
                      <li>• User behavior patterns</li>
                      <li>• Risk assessment scores</li>
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dashboard/report">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      View Reports
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="xss">
            <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
              <CardContent className="p-8 text-center">
                <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">XSS Simulation Coming Soon</h3>
                <p className="text-muted-foreground">
                  Advanced cross-site scripting simulation tools are currently in development.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bruteforce">
            <Card className="border-0 shadow-xl bg-white dark:bg-slate-800">
              <CardContent className="p-8 text-center">
                <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brute Force Simulation Coming Soon</h3>
                <p className="text-muted-foreground">
                  Password attack simulation and defense training modules are in development.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
