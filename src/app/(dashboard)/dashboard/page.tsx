import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to AgentVati</h1>
      <p className="text-gray-500">Your agents will live here.</p>
      <UserButton />
    </div>
  );
}