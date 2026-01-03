export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="w-full max-w-6xl mx-auto p-8">{children}</main>
    </div>
  );
}
