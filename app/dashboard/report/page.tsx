import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const dynamic = "force-dynamic"; // enable server-side rendering

export default async function ReportPage() {
  const interactions = await prisma.userInteraction.findMany({
    orderBy: { submittedAt: "desc" },
  });

  return (
    <main className="max-w-6xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Phishing Campaign Report</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead>Token</TableHead>
                <TableHead>Clicked</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interactions.map((i) => (
                <TableRow key={i.id}>
                  <TableCell>{i.email}</TableCell>
                  {/* <TableCell>{i.password || "-"}</TableCell> */}
                  <TableCell className="text-xs text-muted-foreground">{i.token}</TableCell>
                  <TableCell>{i.clickedLink ? "Yes" : "No"}</TableCell>
                  <TableCell>{new Date(i.submittedAt).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
