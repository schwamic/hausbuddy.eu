import ActionCard from "@/components/ActionCard";
import ExternalLink from "@/components/ExternalLink";

export default function ContactCard({ className = "", data, ...props }) {
  return (
    <ActionCard {...props} image={data.image} className={className}>
      <p className="inline">{data.text + " "}</p>
      <ExternalLink
        href={data.mail.href}
        className="inline text-nowrap font-bold"
      >
        {data.mail.text}
      </ExternalLink>
    </ActionCard>
  );
}
