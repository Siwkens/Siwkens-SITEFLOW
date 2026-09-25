import { createFileRoute } from "@tanstack/react-router";
import { IssuesPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/issues")({
  head: () => ({ meta: [
    { title: "Issues & Snagging — SITEFLOW" },
    { name: "description", content: "Construction defect, snagging and close-out workflow." },
    { property: "og:title", content: "Issues & Snagging — SITEFLOW" },
    { property: "og:description", content: "Construction defect, snagging and close-out workflow." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: IssuesPage,
});