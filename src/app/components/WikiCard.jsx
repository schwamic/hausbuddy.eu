import Link from "next/link";
import ActionCard from "@/app/components/ActionCard";

export default function WikiCard({ className = "", data }) {
  return (
    <ActionCard image={data.image} className={className}>
      <p className="inline">{data.text.first + " "}</p>
      <Link
        href={data.href}
        className="inline underline font-bold cursor-pointer"
      >
        {data.text.second}
      </Link>
      <p className="inline">{data.text.third}</p>
    </ActionCard>
  );
}
