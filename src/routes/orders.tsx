import { createFileRoute } from "@tanstack/react-router";
import { OrdersPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/orders")({
  head: () => ({ meta: [
    { title: "Orders — SITEFLOW" },
    { name: "description", content: "Construction material and equipment order workflow." },
    { property: "og:title", content: "Orders — SITEFLOW" },
    { property: "og:description", content: "Construction material and equipment order workflow." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: OrdersPage,
});