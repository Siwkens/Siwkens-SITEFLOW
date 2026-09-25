import { createFileRoute } from "@tanstack/react-router";
import { ReportsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [
    { title: "Reports — SITEFLOW" },
    { name: "description", content: "Portfolio construction performance reporting." },
    { property: "og:title", content: "Reports — SITEFLOW" },
    { property: "og:description", content: "Portfolio construction performance reporting." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ReportsPage,
});