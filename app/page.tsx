import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Lock, Zap, ArrowRight, CheckCircle, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              Enterprise Security Training
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            CyberSim Platform
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced cybersecurity simulation platform for training and awareness. Test your organization's security
            posture with realistic attack scenarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              <Link href="/dashboard">
                <Shield className="mr-2 h-5 w-5" />
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard/report">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Reports
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-xl bg-white dark:bg-slate-800 hover:shadow-2xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg w-fit">
                <Mail className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-xl">Phishing Simulation</CardTitle>
              <CardDescription>Send realistic phishing emails and track user interactions in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Email campaign management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Credential harvesting detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Detailed analytics & reporting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white dark:bg-slate-800 hover:shadow-2xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit">
                <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">XSS Simulation</CardTitle>
              <CardDescription>Test web application security with cross-site scripting attacks</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300" />
                  Automated vulnerability scanning
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300" />
                  Payload injection testing
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300" />
                  Security assessment reports
                </li>
              </ul>
              <Badge variant="secondary" className="mt-4">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white dark:bg-slate-800 hover:shadow-2xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-fit">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl">Brute Force Testing</CardTitle>
              <CardDescription>Simulate password attacks and test authentication security</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300" />
                  Password strength analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300" />
                  Dictionary attack simulation
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300" />
                  Security policy recommendations
                </li>
              </ul>
              <Badge variant="secondary" className="mt-4">
                Coming Soon
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Platform Statistics</h2>
            <p className="text-muted-foreground">Real-time insights from security simulations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,247</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">87%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">156</div>
              <div className="text-sm text-muted-foreground">Campaigns Run</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Strengthen Your Security?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start your cybersecurity training journey today with our comprehensive simulation platform.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            <Link href="/dashboard">
              <Users className="mr-2 h-5 w-5" />
              Get Started Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
