import { ExternalLink } from "lucide-react";
import ActionCard from "@/app/components/ActionCard";

export default function DiscordCard({ className, data }) {
  return (
    <ActionCard image={data.image} className={className}>
      <p className="inline">{data.text + " "}</p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={data.link.href}
        className="inline text-nowrap underline cursor-pointer font-semibold"
      >
        {data.link.text}
      </a>
      <p className="inline">.</p>
      <ExternalLink
        className="inline-block ml-1 mb-1"
        color="white"
        strokeWidth={2.5}
        size={16}
      />
    </ActionCard>
  );
}
