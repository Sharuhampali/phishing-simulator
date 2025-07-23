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
'use client'

import React, { useState, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { Cpu, Play, Square, RotateCcw, Zap, Shield, Timer, Hash } from 'lucide-react'

const CHARSET = 'abcdefghijklmnopqrstuvwxyz0123456789'
const COMMON_PASSWORDS = ['123456', 'password', 'admin', 'qwerty', 'abc123', 'letmein', '123123']

interface BruteForceStats {
  attempts: number
  speed: number
  timeElapsed: number
  estimatedTime: number
}

function getNextAttempt(current: string, charset: string): string {
  const arr = current.split('')
  let i = arr.length - 1

  while (i >= 0) {
    const idx = charset.indexOf(arr[i])
    if (idx < charset.length - 1) {
      arr[i] = charset[idx + 1]
      return arr.join('')
    } else {
      arr[i] = charset[0]
      i--
    }
  }
  return charset[0] + arr.join('')
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
  const [target, setTarget] = useState('abc')
  const [attempt, setAttempt] = useState('')
  const [found, setFound] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [stats, setStats] = useState<BruteForceStats>({
    attempts: 0,
    speed: 0,
    timeElapsed: 0,
    estimatedTime: 0
  })
  const [attackMode, setAttackMode] = useState<'dictionary' | 'bruteforce'>('dictionary')
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const attemptsRef = useRef<number>(0)

  const startDictionaryAttack = useCallback(async () => {
    setFound(false)
    setIsRunning(true)
    setAttempt('')
    setStats({ attempts: 0, speed: 0, timeElapsed: 0, estimatedTime: 0 })
    startTimeRef.current = Date.now()
    attemptsRef.current = 0

    toast.info('Starting dictionary attack...', {
      description: 'Testing common passwords first'
    })

    for (let i = 0; i < COMMON_PASSWORDS.length; i++) {
      if (!isRunning) break
      
      const password = COMMON_PASSWORDS[i]
      setAttempt(password)
      attemptsRef.current++
      
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const speed = attemptsRef.current / elapsed
      
      setStats({
        attempts: attemptsRef.current,
        speed: speed,
        timeElapsed: elapsed,
        estimatedTime: (COMMON_PASSWORDS.length - i) / speed
      })

      if (password === target) {
        setFound(true)
        setIsRunning(false)
        toast.success('Password cracked!', {
          description: `Found in dictionary attack after ${attemptsRef.current} attempts`
        })
        return
      }
      
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    if (isRunning) {
      toast.warning('Dictionary attack failed', {
        description: 'Switching to brute force attack...'
      })
      startBruteForceAttack()
    }
  }, [target, isRunning])

  const startBruteForceAttack = useCallback(async () => {
    if (!isRunning) {
      setFound(false)
      setIsRunning(true)
      setAttempt('')
      setStats({ attempts: 0, speed: 0, timeElapsed: 0, estimatedTime: 0 })
      startTimeRef.current = Date.now()
      attemptsRef.current = 0
      
      toast.info('Starting brute force attack...', {
        description: 'Testing all possible combinations'
      })
    }

    let current = ''.padStart(target.length, CHARSET[0])
    const totalCombinations = calculateTotalCombinations(target.length, CHARSET.length)

    const runAttack = () => {
      if (!isRunning) return

      setAttempt(current)
      attemptsRef.current++

      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const speed = attemptsRef.current / elapsed
      const remaining = totalCombinations - attemptsRef.current
      
      setStats({
        attempts: attemptsRef.current,
        speed: speed,
        timeElapsed: elapsed,
        estimatedTime: remaining / speed
      })

      if (current === target) {
        setFound(true)
        setIsRunning(false)
        toast.success('Password cracked!', {
          description: `Found after ${attemptsRef.current} attempts in ${formatTime(elapsed)}`
        })
        return
      }

      current = getNextAttempt(current, CHARSET)
      
      intervalRef.current = setTimeout(runAttack, 50)
    }

    runAttack()
  }, [target, isRunning])

  const startAttack = () => {
    if (attackMode === 'dictionary') {
      startDictionaryAttack()
    } else {
      startBruteForceAttack()
    }
  }

  const stopAttack = () => {
    setIsRunning(false)
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }
    toast.info('Attack stopped')
  }

  const resetSimulation = () => {
    setIsRunning(false)
    setFound(false)
    setAttempt('')
    setStats({ attempts: 0, speed: 0, timeElapsed: 0, estimatedTime: 0 })
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }
  }

  const progress = found ? 100 : (stats.attempts / calculateTotalCombinations(target.length, CHARSET.length)) * 100

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
              <Cpu className="h-8 w-8 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-green-400">
              {'> BRUTEFORCE_ENGINE_v2.1'}
            </h1>
          </div>
          <p className="text-green-300/70">{'advanced_password_cracking_simulation'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <Card className="bg-black border-green-500/30 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
                <Shield className="h-5 w-5" />
                {'> ATTACK_CONFIGURATION'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2">
                    {'target_password:'}
                  </label>
                  <Input
                    value={target}
                    onChange={(e) => setTarget(e.target.value.toLowerCase())}
                    maxLength={8}
                    placeholder="Enter target password"
                    className="bg-black border-green-500/30 text-green-400 font-mono"
                    disabled={isRunning}
                  />
                  <p className="text-xs text-green-300/70 mt-1">
                    {'max_length: 8_chars | charset: a-z0-9'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2">
                    {'attack_mode:'}
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant={attackMode === 'dictionary' ? 'default' : 'outline'}
                      onClick={() => setAttackMode('dictionary')}
                      disabled={isRunning}
                      className="font-mono"
                    >
                      {'DICTIONARY'}
                    </Button>
                    <Button
                      variant={attackMode === 'bruteforce' ? 'default' : 'outline'}
                      onClick={() => setAttackMode('bruteforce')}
                      disabled={isRunning}
                      className="font-mono"
                    >
                      {'BRUTEFORCE'}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {!isRunning ? (
                  <Button
                    onClick={startAttack}
                    className="bg-red-600 hover:bg-red-700 text-white font-mono"
                    disabled={!target || found}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {'> EXECUTE_ATTACK'}
                  </Button>
                ) : (
                  <Button
                    onClick={stopAttack}
                    variant="destructive"
                    className="font-mono"
                  >
                    <Square className="mr-2 h-4 w-4" />
                    {'> TERMINATE'}
                  </Button>
                )}
                <Button
                  onClick={resetSimulation}
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  {'> RESET'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Panel */}
          <Card className="bg-black border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400 font-mono">
                <Zap className="h-5 w-5" />
                {'> ATTACK_METRICS'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70">{'attempts:'}</span>
                  <span className="text-sm font-mono text-green-400">{stats.attempts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70">{'speed:'}</span>
                  <span className="text-sm font-mono text-green-400">{stats.speed.toFixed(1)}/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70">{'elapsed:'}</span>
                  <span className="text-sm font-mono text-green-400">{formatTime(stats.timeElapsed)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-300/70">{'eta:'}</span>
                  <span className="text-sm font-mono text-green-400">
                    {isRunning && !found ? formatTime(stats.estimatedTime) : '--'}
                  </span>
                </div>
              </div>

              {found && (
                <Badge className="w-full justify-center bg-green-600 text-white font-mono">
                  {'> PASSWORD_CRACKED'}
                </Badge>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Attack Progress */}
        <Card className="bg-black border-green-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
              <Hash className="h-5 w-5" />
              {'> ATTACK_PROGRESS'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-300/70 font-mono">{'current_attempt:'}</span>
                <span className="text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded">
                  {attempt || '--'}
                </span>
              </div>
              <Progress 
                value={progress} 
                className="h-3 bg-green-500/20"
              />
              <div className="flex justify-between text-xs text-green-300/70 font-mono">
                <span>{progress.toFixed(4)}%</span>
                <span>
                  {calculateTotalCombinations(target.length, CHARSET.length).toLocaleString()} total
                </span>
              </div>
            </div>

            {isRunning && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm text-green-400 font-mono">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  {'attack_in_progress...'}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
