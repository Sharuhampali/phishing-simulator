// 'use client';

// import React, { useState } from 'react';
// import { Button} from '@/components/ui/button'; // Adjust import paths for your setup
// import { Input } from '@/components/ui/input'; // Adjust import paths for your setup
// import { Card } from '@/components/ui/card'; // Adjust import paths for your setup
// import {Progress } from '@/components/ui/progress'; // Adjust import paths for your setup

// const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function getNextAttempt(current: string, charset: string): string {
//   let arr = current.split('');
//   let i = arr.length - 1;

//   while (i >= 0) {
//     let idx = charset.indexOf(arr[i]);
//     if (idx < charset.length - 1) {
//       arr[i] = charset[idx + 1];
//       return arr.join('');
//     } else {
//       arr[i] = charset[0];
//       i--;
//     }
//   }
//   return charset[0] + arr.join('');
// }

// export default function BruteForceSimulator() {
//   const [target, setTarget] = useState('abc');
//   const [attempt, setAttempt] = useState('');
//   const [found, setFound] = useState(false);
//   const [tries, setTries] = useState(0);

//   const startBruteForce = async () => {
//     setFound(false);
//     let current = ''.padStart(target.length, charset[0]);
//     setAttempt(current);
//     setTries(0);

//     let running = true;
//     let steps = 0;

//     while (running) {
//       setAttempt(current);
//       setTries(steps);

//       if (current === target) {
//         setFound(true);
//         break;
//       }
//       await new Promise(r => setTimeout(r, 50)); // Slow down for effect
//       current = getNextAttempt(current, charset);
//       steps++;
//     }
//   };

//   return (
//     <Card className="max-w-sm mx-auto p-6">
//       <div>
//         <Input
//           disabled={found}
//           value={target}
//           onChange={e => setTarget(e.target.value)}
//           maxLength={6}
//           placeholder="Target Password (max 6 chars)"
//         />
//         <Button onClick={startBruteForce} className="mt-4" disabled={found}>
//           Start Brute Force
//         </Button>
//       </div>

//       <div className="mt-8">
//         <div>Current Attempt: <span className="font-mono">{attempt}</span></div>
//         <div>Attempts: {tries}</div>
//         {found && <div className="mt-2 text-green-600">Password found!</div>}
//         <Progress value={found ? 100 : (tries / (Math.pow(charset.length, target.length))) * 100} className="mt-4" />
//       </div>
//     </Card>
//   );
// }
"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { Cpu, Play, Square, RotateCcw, Zap, Shield, Hash, ArrowLeft } from "lucide-react"
import Link from "next/link"

const CHARSET = "abcdefghijklmnopqrstuvwxyz0123456789"
const COMMON_PASSWORDS = ["123456", "password", "admin", "qwerty", "abc123", "letmein", "123123"]

interface BruteForceStats {
  attempts: number
  speed: number
  timeElapsed: number
  estimatedTime: number
}

function getNextAttempt(current: string, charset: string): string {
  const arr = current.split("")
  let i = arr.length - 1

  while (i >= 0) {
    const idx = charset.indexOf(arr[i])
    if (idx < charset.length - 1) {
      arr[i] = charset[idx + 1]
      return arr.join("")
    } else {
      arr[i] = charset[0]
      i--
    }
  }
  return charset[0] + arr.join("")
}

function calculateTotalCombinations(length: number, charsetSize: number): number {
  return Math.pow(charsetSize, length)
}

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds.toFixed(1)}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`
  return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`
}

export default function AdvancedBruteForceSimulator() {
  const [target, setTarget] = useState("abc")
  const [attempt, setAttempt] = useState("")
  const [found, setFound] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [stats, setStats] = useState<BruteForceStats>({
    attempts: 0,
    speed: 0,
    timeElapsed: 0,
    estimatedTime: 0,
  })
  const [attackMode, setAttackMode] = useState<"dictionary" | "bruteforce">("dictionary")

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const attemptsRef = useRef<number>(0)
  const isRunningRef = useRef<boolean>(false)

  const startBruteForceAttack = useCallback(async () => {
    if (!isRunningRef.current) {
      setFound(false)
      setIsRunning(true)
      isRunningRef.current = true
      setAttempt("")
      setStats({ attempts: 0, speed: 0, timeElapsed: 0, estimatedTime: 0 })
      startTimeRef.current = Date.now()
      attemptsRef.current = 0

      toast.info("Brute force attack initiated", {
        description: "Testing all possible combinations",
      })
    }

    let current = "".padStart(target.length, CHARSET[0])
    const totalCombinations = calculateTotalCombinations(target.length, CHARSET.length)

    const runAttack = () => {
      if (!isRunningRef.current) return

      setAttempt(current)
      attemptsRef.current++

      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const speed = attemptsRef.current / elapsed
      const remaining = totalCombinations - attemptsRef.current

      setStats({
        attempts: attemptsRef.current,
        speed: speed,
        timeElapsed: elapsed,
        estimatedTime: remaining / speed,
      })

      if (current === target) {
        setFound(true)
        setIsRunning(false)
        isRunningRef.current = false
        toast.success("Target compromised!", {
          description: `Password cracked after ${attemptsRef.current} attempts in ${formatTime(elapsed)}`,
        })
        return
      }

      current = getNextAttempt(current, CHARSET)
      intervalRef.current = setTimeout(runAttack, 50)
    }

    runAttack()
  }, [target])

  const startDictionaryAttack = useCallback(async () => {
    setFound(false)
    setIsRunning(true)
    isRunningRef.current = true
    setAttempt("")
    setStats({ attempts: 0, speed: 0, timeElapsed: 0, estimatedTime: 0 })
    startTimeRef.current = Date.now()
    attemptsRef.current = 0

    toast.info("Dictionary attack initiated", {
      description: "Testing common password combinations",
    })

    for (let i = 0; i < COMMON_PASSWORDS.length; i++) {
      if (!isRunningRef.current) return

      const password = COMMON_PASSWORDS[i]
      setAttempt(password)
      attemptsRef.current++

      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const speed = attemptsRef.current / elapsed

      setStats({
        attempts: attemptsRef.current,
        speed: speed,
        timeElapsed: elapsed,
        estimatedTime: (COMMON_PASSWORDS.length - i) / speed,
      })

      if (password === target) {
        setFound(true)
        setIsRunning(false)
        isRunningRef.current = false
        toast.success("Target compromised!", {
          description: `Password cracked via dictionary attack in ${attemptsRef.current} attempts`,
        })
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    if (isRunningRef.current) {
      toast.warning("Dictionary attack failed", {
        description: "Escalating to brute force protocol...",
      })
      startBruteForceAttack()
    }
  }, [target, startBruteForceAttack])

  const startAttack = () => {
    if (attackMode === "dictionary") {
      startDictionaryAttack()
    } else {
      startBruteForceAttack()
    }
  }

  const stopAttack = () => {
    setIsRunning(false)
    isRunningRef.current = false
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }
    toast.info("Attack protocol terminated")
  }

  const resetSimulation = () => {
    setIsRunning(false)
    isRunningRef.current = false
    setFound(false)
    setAttempt("")
    setStats({ attempts: 0, speed: 0, timeElapsed: 0, estimatedTime: 0 })
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }
  }

  const progress = found
    ? 100
    : (stats.attempts / calculateTotalCombinations(target.length, CHARSET.length)) * 100




  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-green-400 hover:bg-green-500/10">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {"< back_to_terminal"}
            </Link>
          </Button>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Cpu className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold text-green-400">{"> BRUTEFORCE_ENGINE_v2.1"}</h1>
            </div>
            <p className="text-green-300/70">{"advanced_password_cracking_simulation"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <Card className="bg-black border-green-500/30 lg:col-span-2 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
                <Shield className="h-5 w-5" />
                {"> ATTACK_CONFIGURATION"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 font-mono">
                    {"target_password:"}
                  </label>
                  <Input
                    value={target}
                    onChange={(e) => setTarget(e.target.value.toLowerCase())}
                    maxLength={8}
                    placeholder="Enter target password"
                    className="bg-black border-green-500/30 text-green-400 font-mono focus:border-green-400"
                    disabled={isRunning}
                  />
                  <p className="text-xs text-green-300/70 mt-1 font-mono">
                    {"// max_length: 8_chars | charset: a-z0-9"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 font-mono">{"attack_mode:"}</label>
                  <div className="flex gap-2">
                    <Button
                      variant={attackMode === "dictionary" ? "default" : "outline"}
                      onClick={() => setAttackMode("dictionary")}
                      disabled={isRunning}
                      className="font-mono bg-purple-600 hover:bg-purple-700 data-[variant=outline]:border-purple-500/30 data-[variant=outline]:text-purple-400 data-[variant=outline]:hover:bg-purple-500/10 data-[variant=outline]:bg-transparent"
                    >
                      {"DICTIONARY"}
                    </Button>
                    <Button
                      variant={attackMode === "bruteforce" ? "default" : "outline"}
                      onClick={() => setAttackMode("bruteforce")}
                      disabled={isRunning}
                      className="font-mono bg-red-600 hover:bg-red-700 data-[variant=outline]:border-red-500/30 data-[variant=outline]:text-red-400 data-[variant=outline]:hover:bg-red-500/10 data-[variant=outline]:bg-transparent"
                    >
                      {"BRUTEFORCE"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {!isRunning ? (
                  <Button
                    onClick={startAttack}
                    className="bg-red-600 hover:bg-red-700 text-white font-mono font-bold"
                    disabled={!target || found}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {"> EXECUTE_ATTACK"}
                  </Button>
                ) : (
                  <Button onClick={stopAttack} className="bg-red-700 hover:bg-red-800 text-white font-mono">
                    <Square className="mr-2 h-4 w-4" />
                    {"> TERMINATE"}
                  </Button>
                )}
                <Button
                  onClick={resetSimulation}
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono bg-transparent"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  {"> RESET"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Panel */}
          <Card className="bg-black border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400 font-mono">
                <Zap className="h-5 w-5" />
                {"> ATTACK_METRICS"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70 font-mono">{"attempts:"}</span>
                  <span className="text-sm font-mono text-green-400">{stats.attempts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70 font-mono">{"speed:"}</span>
                  <span className="text-sm font-mono text-green-400">{stats.speed.toFixed(1)}/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70 font-mono">{"elapsed:"}</span>
                  <span className="text-sm font-mono text-green-400">{formatTime(stats.timeElapsed)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70 font-mono">{"eta:"}</span>
                  <span className="text-sm font-mono text-green-400">
                    {isRunning && !found ? formatTime(stats.estimatedTime) : "--"}
                  </span>
                </div>
              </div>

              {found && (
                <Badge className="w-full justify-center bg-green-600 text-white font-mono">
                  {"> PASSWORD_CRACKED"}
                </Badge>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Attack Progress */}
        <Card className="bg-black border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
              <Hash className="h-5 w-5" />
              {"> ATTACK_PROGRESS"}
            </CardTitle>
          </CardHeader>
         <CardContent className="space-y-4">
  {/* <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-green-300/70 font-mono">{"current_attempt:"}</span>
      <span className="text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded border border-green-500/20 transition-all duration-300">
        {attempt || "--"}
      </span>
    </div>
  </div> */}
  {/* Cracked Letters */}
<Card className="bg-black border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all">
  <CardHeader>
    <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
      {"> CRACKED_LETTERS"}
    </CardTitle>
  </CardHeader>
  <CardContent className="flex justify-center items-center py-6">
    <div className="text-green-400 font-mono text-4xl tracking-widest">
      {attempt || "_ _ _ _"}
    </div>
  </CardContent>
</Card>


  <div className="text-center">
    {isRunning ? (
      <div className="inline-flex items-center gap-2 text-sm text-green-400 font-mono animate-pulse">
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        {"attack_in_progress..."}
      </div>
    ) : (
      <div className="text-green-700/50 font-mono text-sm italic">idle — awaiting command</div>
    )}
  </div>
</CardContent>

        </Card>
      </div>
    </div>
  )
}
