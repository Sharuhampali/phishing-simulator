export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-400 rounded-full animate-spin mx-auto" />
        <div className="text-green-400 font-mono">{"> initializing_cybersim_platform..."}</div>
      </div>
    </div>
  )
}
