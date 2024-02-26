import Link from "next/link";
import ActionCard from "@/components/ActionCard";

export default function WikiCard({ className = "", data, ...props }) {
  return (
    <ActionCard {...props} image={data.image} className={className}>
      <p className="inline">{data.text.first + " "}</p>
      <Link
        href={data.href}
        className="inline underline underline-offset-2 decoration-2 font-bold cursor-pointer"
      >
        {data.text.second}
      </Link>
      <p className="inline">{data.text.third}</p>
    </ActionCard>
  );
}
