import { createFileRoute } from "@tanstack/react-router";
import { DrawingsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/drawings")({
  head: () => ({ meta: [
    { title: "Drawings — SITEFLOW" },
    { name: "description", content: "Controlled construction drawings and revision history." },
    { property: "og:title", content: "Drawings — SITEFLOW" },
    { property: "og:description", content: "Controlled construction drawings and revision history." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DrawingsPage,
});