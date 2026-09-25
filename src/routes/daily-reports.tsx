import { createFileRoute } from "@tanstack/react-router";
import { DailyReportsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/daily-reports")({
  head: () => ({ meta: [
    { title: "Daily Reports — SITEFLOW" },
    { name: "description", content: "Construction daily site reports and workforce records." },
    { property: "og:title", content: "Daily Reports — SITEFLOW" },
    { property: "og:description", content: "Construction daily site reports and workforce records." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DailyReportsPage,
});