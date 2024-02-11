import { ExternalLinkIcon } from "lucide-react";
import ActionCard from "@/app/components/ActionCard";
import ExternalLink from "@/app/components/ExternalLink";

export default function DiscordCard({ className = "", data }) {
  return (
    <ActionCard image={data.image} className={className}>
      <p className="inline">{data.text + " "}</p>
      <ExternalLink
        href={data.link.href}
        className="inline text-nowrap font-bold"
      >
        {data.link.text}
      </ExternalLink>
      <p className="inline">.</p>
      <ExternalLinkIcon
        className="inline-block ml-1 mb-1"
        color="white"
        strokeWidth={2.5}
        size={16}
      />
    </ActionCard>
  );
}
