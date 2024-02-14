import ActionCard from "@/components/ActionCard";
import ExternalLink from "@/components/ExternalLink";

export default function CommunityCard({ className = "", data, ...props }) {
  return (
    <ActionCard {...props} image={data.image} className={className}>
      <p className="inline">{data.text + " "}</p>
      <ExternalLink
        href={data.link.href}
        className="inline text-nowrap font-bold"
      >
        {data.link.text}
      </ExternalLink>
      <p className="inline">.</p>
    </ActionCard>
  );
}
