
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

import { useState } from "react"
import { Eye, EyeOff, AlertTriangle } from "lucide-react"

export default function GoogleLoginSim() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      alert("✅ Credential submitted (simulation)")
      window.location.href = "https://www.google.com"
    }, 1500)
  }

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center p-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/googlelogo.jpg"
              alt="Google Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-gray-700 text-xl font-normal">Google</span>
        </div>
        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          Privacy & Terms
        </span>
      </header>

      {/* Content */}
      <section className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col gap-6">
          {/* Alert */}
          <div className="bg-red-50 border border-red-200 rounded flex gap-3 items-start p-4 text-sm">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
            <span className="text-red-800">
              <strong>Security alert</strong> — We detected unusual activity on your account.
              Sign in to review and secure your account.
            </span>
          </div>

          {/* Login Card */}
          <div className="border border-gray-200 shadow-sm rounded-md p-8">
            {/* Logo & Title */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full mx-auto overflow-hidden mb-4">
                <img
                  src="/googlelogo.jpg"
                  alt="Google Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-normal text-gray-900">Sign in</h2>
              <p className="text-sm text-gray-600 mt-1">to continue to Gmail</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email or phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4285F4] text-base"
                  required
                />
                <div className="text-xs text-[#1a73e8] mt-1 hover:underline cursor-pointer">
                  Forgot email?
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 px-4 pr-12 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4285F4] text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-xs text-[#1a73e8] mt-1 hover:underline cursor-pointer">
                  Forgot password?
                </div>
              </div>

              {/* Guest Mode Info */}
              <p className="text-xs text-gray-600">
                Not your computer? Use Guest mode to sign in privately.{" "}
                <span className="text-[#1a73e8] hover:underline cursor-pointer">Learn more</span>
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  className="text-[#1a73e8] text-sm hover:bg-blue-50 px-2 py-1 rounded"
                >
                  Create account
                </button>
                <button
                  type="submit"
                  className={`bg-[#1a73e8] text-white px-6 py-2 rounded text-sm font-medium ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="loader border-white border-t-2 rounded-full w-4 h-4 animate-spin" />
                      Signing in...
                    </span>
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-500 space-y-2">
            <div>English (United States)</div>
            <div className="flex justify-center gap-6">
              <span className="hover:underline cursor-pointer">Help</span>
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span className="hover:underline cursor-pointer">Terms</span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
