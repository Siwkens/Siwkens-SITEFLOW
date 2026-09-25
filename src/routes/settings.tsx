import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "Settings — SITEFLOW" },
    { name: "description", content: "SITEFLOW organisation and project settings." },
    { property: "og:title", content: "Settings — SITEFLOW" },
    { property: "og:description", content: "SITEFLOW organisation and project settings." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SettingsPage,
});