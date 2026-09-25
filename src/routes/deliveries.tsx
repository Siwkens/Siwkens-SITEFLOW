import { createFileRoute } from "@tanstack/react-router";
import { DeliveriesPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/deliveries")({
  head: () => ({ meta: [
    { title: "Deliveries — SITEFLOW" },
    { name: "description", content: "Site delivery schedule, arrivals and goods receipt." },
    { property: "og:title", content: "Deliveries — SITEFLOW" },
    { property: "og:description", content: "Site delivery schedule, arrivals and goods receipt." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DeliveriesPage,
});