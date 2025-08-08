"use client";

import { Home, Settings, Sidebar as SidebarIcon, Users } from "lucide-react";
import { useState } from "react";

import Input from "@/components/Input";
import SidebarMenu from "@/components/SidebarMenu";
import Toast from "@/components/Toast";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      id: "1",
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
      onClick: () => alert("Dashboard clicked"),
    },
    {
      id: "2",
      label: "Users",
      icon: <Users className="h-4 w-4" />,
      badge: 3,
      children: [
        {
          id: "2-1",
          label: "Active Users",
          onClick: () => alert("Active Users clicked"),
        },
        {
          id: "2-2",
          label: "Pending Users",
          onClick: () => alert("Pending Users clicked"),
        },
      ],
    },
    {
      id: "3",
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      onClick: () => alert("Settings clicked"),
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex">
      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={menuItems}
        title="Main Menu"
        width="md"
        side="left"
        showBackdrop
      />

      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <header>
            <h1 className="text-4xl font-extrabold text-primary tracking-tight">
              Front-end JS Engineer
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Test assessment
            </p>
          </header>

          <section className="p-6 bg-card text-card-foreground border border-border rounded-xl shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">React Component Library</h2>

            <Toast message="This is a toast message." position="bottom-right" />

            <div className="grid grid-col gap-4">
              <Input placeholder="Input" />
              <Input type="password" placeholder="Password" />
            </div>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg shadow-sm hover:opacity-90 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
              aria-label="Open Sidebar Menu"
            >
              <SidebarIcon className="h-5 w-5" />
              Open Menu
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
