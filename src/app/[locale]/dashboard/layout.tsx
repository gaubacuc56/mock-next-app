"use client"
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuthStore } from "@/store/hooks/useAuthStore";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore()
  return (
    <div>
      <ThemeToggle />
      {user !== null ? <Sidebar email={user.email} /> : null}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}