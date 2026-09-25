import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — SITEFLOW" },
    { name: "description", content: "Active construction projects, programme and delivery status." },
    { property: "og:title", content: "Projects — SITEFLOW" },
    { property: "og:description", content: "Active construction projects, programme and delivery status." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectsPage,
});