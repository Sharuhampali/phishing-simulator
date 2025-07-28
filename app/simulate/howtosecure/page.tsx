"use client"

import { ShieldCheck, Lock, UserCheck, MailCheck, Globe, Wifi, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowToSecurePage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(0,255,0,0.03)_100%)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-3xl space-y-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
            <ShieldCheck className="h-8 w-8 text-yellow-400" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 tracking-wider">{"> HOW_TO_SECURE_YOURSELF"}</h1>
            <p className="text-green-300/70 mt-1">{"essential_tips_to_secure_your_digital_presence()"}</p>
          </div>
        </div>

        {/* Guidelines List */}
        <div className="space-y-6 text-sm text-green-300/90">

          {/* Tip 1 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              <Lock size={18} /> {"use_strong_and_unique_passwords()"}
            </h2>
            <p className="ml-6 mt-1">
              Passwords are your first line of defense. Avoid using names, birthdays, or common phrases.
              Instead, create passphrases like <span className="text-yellow-300">"CorrectHorseBatteryStaple!"</span>—long, random, and hard to guess.
              A password manager like <span className="text-yellow-300">Bitwarden</span> or <span className="text-yellow-300">1Password</span> can generate and store these securely.
              Never reuse passwords across services. If one account is compromised, attackers will try the same credentials on others.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              <UserCheck size={18} /> {"enable_two_factor_authentication()"}
            </h2>
            <p className="ml-6 mt-1">
              2FA adds a second layer of protection—even if someone steals your password, they can't log in without your phone.
              Use <span className="text-yellow-300">TOTP</span> apps like <span className="text-yellow-300">Authy</span> or <span className="text-yellow-300">Google Authenticator</span> for better security than SMS.
              Avoid using the same 2FA method for multiple services and keep backup codes stored offline in case you lose access to your device.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              <MailCheck size={18} /> {"avoid_clicking_suspicious_links()"}
            </h2>
            <p className="ml-6 mt-1">
              Phishing attacks often come in the form of urgent messages or fake login pages.
              Before clicking any link, hover to check its destination. Never trust unexpected attachments.
              Use email filters, spam detectors, and domain reputation checkers like <span className="text-yellow-300">VirusTotal</span> or <span className="text-yellow-300">phish.report</span>.
              Always double-check URLs for subtle typos (like `g00gle.com`).
            </p>
          </div>

          {/* Tip 4 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              <Globe size={18} /> {"update_software_regularly()"}
            </h2>
            <p className="ml-6 mt-1">
              Outdated software is one of the most common entry points for attackers.
              Exploits for known vulnerabilities are widely available online. By updating software regularly, you patch these vulnerabilities.
              This applies to everything—your operating system, browser, antivirus, apps, and plugins.
              Set your systems to auto-update where possible, and uninstall software you don’t use.
            </p>
          </div>

          {/* Tip 5 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              🔒 {"backup_important_data_securely()"}
            </h2>
            <p className="ml-6 mt-1">
              Data loss can happen due to ransomware, hardware failure, or accidental deletion.
              Back up critical files to encrypted cloud storage like <span className="text-yellow-300">Google Drive</span>, <span className="text-yellow-300">OneDrive</span>, or offline external drives.
              Follow the 3-2-1 rule: 3 copies, 2 different media, 1 offsite.
              Test your backups regularly and consider using file versioning to recover older versions.
            </p>
          </div>

          {/* Tip 6 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              <Wifi size={18} /> {"be_cautious_on_public_wifi()"}
            </h2>
            <p className="ml-6 mt-1">
              Public Wi-Fi networks are often unencrypted and can be spoofed by attackers (Evil Twin attacks).
              Never log into banking or private services over public Wi-Fi unless you're using a VPN.
              A VPN encrypts your traffic, protecting your data from being intercepted.
              Disable auto-connect and turn off sharing features like AirDrop or file sharing when on unknown networks.
            </p>
          </div>

          {/* Tip 7 */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-lg">
            <h2 className="text-lg text-yellow-400 flex items-center gap-2">
              <Eye size={18} /> {"review_app_permissions()"}
            </h2>
            <p className="ml-6 mt-1">
              Many apps request permissions they don’t need—like camera, location, or microphone access.
              Regularly audit app permissions and revoke anything unnecessary. This limits how much data apps can access and reduces risk.
              On Android/iOS, go to Settings → Privacy to manage this. On browsers, check extension permissions as well.
              Always install apps from official sources and check reviews before granting permissions.
            </p>
          </div>
        </div>

        {/* Return Button */}
        <div className="pt-6">
          <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-white font-mono font-bold">
            <Link href="/">
              {"< RETURN_TO_SIMULATION"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
