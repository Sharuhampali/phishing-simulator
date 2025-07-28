import { NextResponse } from "next/server"

export async function GET() {
  const securityTips = [
    {
      id: 1,
      title: "use_strong_and_unique_passwords",
      description: "Avoid reusing passwords across services. Use a password manager and go for long, complex passwords."
    },
    {
      id: 2,
      title: "enable_two_factor_authentication",
      description: "Use TOTP apps like Authy or Google Authenticator instead of SMS-based 2FA."
    },
    {
      id: 3,
      title: "avoid_clicking_suspicious_links",
      description: "Be cautious with links in emails or DMs. Always verify the sender and avoid unknown attachments."
    },
    {
      id: 4,
      title: "update_software_regularly",
      description: "Keep your system, browsers, and apps updated to avoid known vulnerabilities."
    },
    {
      id: 5,
      title: "backup_important_data_securely",
      description: "Use encrypted backups via cloud or external drives and test recovery regularly."
    }
  ]

  return NextResponse.json({ success: true, data: securityTips })
}
