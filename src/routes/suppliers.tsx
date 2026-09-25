import { createFileRoute } from "@tanstack/react-router";
import { SuppliersPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/suppliers")({
  head: () => ({ meta: [
    { title: "Suppliers — SITEFLOW" },
    { name: "description", content: "Approved construction suppliers and trade partners." },
    { property: "og:title", content: "Suppliers — SITEFLOW" },
    { property: "og:description", content: "Approved construction suppliers and trade partners." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SuppliersPage,
});