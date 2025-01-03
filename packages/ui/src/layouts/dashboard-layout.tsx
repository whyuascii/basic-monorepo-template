import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800">Sidebar</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
