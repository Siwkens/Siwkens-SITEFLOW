import { createFileRoute } from "@tanstack/react-router";
import { PeoplePage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [
    { title: "People & Roles — SITEFLOW" },
    { name: "description", content: "Project team members, roles and access." },
    { property: "og:title", content: "People & Roles — SITEFLOW" },
    { property: "og:description", content: "Project team members, roles and access." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PeoplePage,
});