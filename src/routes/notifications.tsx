import { createFileRoute } from "@tanstack/react-router";
import { NotificationsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [
    { title: "Notifications — SITEFLOW" },
    { name: "description", content: "Operational alerts and approvals." },
    { property: "og:title", content: "Notifications — SITEFLOW" },
    { property: "og:description", content: "Operational alerts and approvals." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: NotificationsPage,
});