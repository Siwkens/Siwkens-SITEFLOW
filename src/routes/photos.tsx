import { createFileRoute } from "@tanstack/react-router";
import { PhotosPage } from "@/components/siteflow-pages";

export const Route = createFileRoute("/photos")({
  head: () => ({ meta: [
    { title: "Site Photos — SITEFLOW" },
    { name: "description", content: "Categorised construction progress and inspection photos." },
    { property: "og:title", content: "Site Photos — SITEFLOW" },
    { property: "og:description", content: "Categorised construction progress and inspection photos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PhotosPage,
});