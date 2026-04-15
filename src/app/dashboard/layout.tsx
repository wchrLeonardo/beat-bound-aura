import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#060d1a] relative overflow-hidden">
      {/* Global background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0d4a5a] opacity-20 blur-[150px]" />
        <div className="absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full bg-[#3a1060] opacity-25 blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#0a1f3a] opacity-15 blur-[120px]" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area — offset for sidebar */}
      <div className="relative z-10 ml-[240px] transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
