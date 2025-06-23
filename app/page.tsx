// File: app/dashboard/page.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">CyberSim Admin Dashboard</h1>

      <Tabs defaultValue="phishing" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="phishing">Phishing Simulation</TabsTrigger>
          <TabsTrigger value="xss" disabled>XSS Simulation (Coming Soon)</TabsTrigger>
          <TabsTrigger value="bruteforce" disabled>Brute Force (Coming Soon)</TabsTrigger>
        </TabsList>

        <TabsContent value="phishing">
          <Card>
            <CardHeader>
              <CardTitle>Launch Phishing Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send a simulated phishing email and monitor victim behavior.
              </p>
              <Link
                href="/dashboard/phishing"
                className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
              >
                Manage Campaign
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
