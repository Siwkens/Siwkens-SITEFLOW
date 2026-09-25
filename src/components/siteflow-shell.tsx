import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, ChevronDown, Command, Menu, Search, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { navItems, projects } from "@/data/siteflow";
import { Button } from "@/components/ui/button";

export function SiteflowShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileMenu, setMobileMenu] = useState(false);
  const current = navItems.find((item) => item.to === pathname)?.label ?? "Dashboard";
  const mobileItems = navItems.slice(0, 5);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
        <div className="border-b border-sidebar-border px-5 py-5">
          <div className="flex items-center gap-3"><div className="grid size-9 place-items-center bg-primary text-sm font-black text-primary-foreground">A</div><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sidebar-muted">ARK Construction</p><p className="text-lg font-black tracking-[0.08em]">SITEFLOW</p></div></div>
        </div>
        <div className="border-b border-sidebar-border p-3">
          <label className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sidebar-muted">Active project</label>
          <button className="mt-2 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent px-3 py-2 text-left"><span className="min-w-0"><span className="block truncate text-xs font-semibold">{projects[0].name}</span><span className="text-[10px] text-sidebar-muted">{projects[0].code}</span></span><ChevronDown className="size-4 shrink-0" /></button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Main navigation">
          {navItems.map((item) => { const Icon = item.icon; return <Link key={item.to} to={item.to} className="mb-0.5 flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-sidebar-muted transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground" activeProps={{ className: "mb-0.5 flex items-center gap-3 rounded-md bg-primary px-3 py-2 text-[13px] font-semibold text-primary-foreground" }} activeOptions={{ exact: item.to === "/" }}><Icon className="size-4" />{item.label}</Link>; })}
        </nav>
        <div className="border-t border-sidebar-border p-4"><div className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-full bg-sidebar-accent text-xs font-bold">JW</div><div className="min-w-0"><p className="truncate text-xs font-semibold">James Whitmore</p><p className="text-[10px] text-sidebar-muted">Project Manager</p></div></div></div>
      </aside>

      {mobileMenu && <div className="fixed inset-0 z-50 bg-sidebar text-sidebar-foreground lg:hidden"><div className="flex items-center justify-between border-b border-sidebar-border p-4"><p className="font-black tracking-[0.1em]">SITEFLOW</p><Button variant="ghost" size="icon" onClick={() => setMobileMenu(false)} aria-label="Close menu"><X className="size-5" /></Button></div><nav className="grid grid-cols-2 gap-2 p-4">{navItems.map((item) => { const Icon=item.icon; return <Link key={item.to} to={item.to} onClick={() => setMobileMenu(false)} className="flex min-h-14 items-center gap-3 rounded-md border border-sidebar-border p-3 text-sm"><Icon className="size-5 text-primary" />{item.label}</Link>})}</nav></div>}

      <div className="lg:pl-60">
        <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
          <div className="grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 md:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenu(true)} aria-label="Open menu"><Menu className="size-5" /></Button>
            <div className="hidden min-w-0 lg:block"><p className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">ARK Construction & Design Ltd.</p><p className="text-sm font-bold">{current}</p></div>
            <button className="mx-auto flex h-10 w-full max-w-xl items-center gap-2 rounded-md border border-border bg-card px-3 text-left text-sm text-muted-foreground"><Search className="size-4" /><span className="truncate">Search orders, drawings, people…</span><span className="ml-auto hidden items-center gap-1 rounded border border-border px-1.5 py-0.5 text-[10px] sm:flex"><Command className="size-3" />K</span></button>
            <Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="size-5" /><span className="absolute mt-[-18px] ml-[18px] size-2 rounded-full bg-primary" /></Button>
          </div>
        </header>
        <main className="px-4 py-5 pb-24 md:px-6 md:py-7 lg:pb-8">{children}</main>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background lg:hidden" aria-label="Mobile navigation">{mobileItems.map((item) => { const Icon=item.icon; return <Link key={item.to} to={item.to} className="flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-semibold text-muted-foreground" activeProps={{className:"flex min-h-16 flex-col items-center justify-center gap-1 text-[10px] font-bold text-primary"}} activeOptions={{exact:item.to==="/"}}><Icon className="size-5" />{item.label.replace("Visitor Log","Visitors")}</Link>})}</nav>
    </div>
  );
}