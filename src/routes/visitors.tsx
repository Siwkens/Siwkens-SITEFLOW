import { createFileRoute } from "@tanstack/react-router";
import { VisitorsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/visitors")({
  head: () => ({ meta: [
    { title: "Visitor Log — SITEFLOW" },
    { name: "description", content: "Digital site visitor register and emergency attendance view." },
    { property: "og:title", content: "Visitor Log — SITEFLOW" },
    { property: "og:description", content: "Digital site visitor register and emergency attendance view." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: VisitorsPage,
});