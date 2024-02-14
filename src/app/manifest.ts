import { MetadataRoute } from "next";
import { meta } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.title,
    short_name: meta.title,
    description: meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
