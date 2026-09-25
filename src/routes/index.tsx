import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dashboard — SITEFLOW" },
    { name: "description", content: "Live site operations overview for ARK Construction & Design Ltd." },
    { property: "og:title", content: "Dashboard — SITEFLOW" },
    { property: "og:description", content: "Live site operations overview for ARK Construction & Design Ltd." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DashboardPage,
});