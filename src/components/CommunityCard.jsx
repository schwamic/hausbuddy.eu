import Image from "next/image";
import Card from "@/components/Card";
import ExternalLink from "@/components/ExternalLink";

export default function CommunityCard({ className = "", data, ...props }) {
  return (
    <Card {...props} className={`bg-yellow-400 ${className}`}>
      <div className="hidden w-32 min-w-32 md:w-44 md:min-w-44 sm:mr-4 md:mr-10 sm:block">
        <Image
          className="transform -scale-x-100 float-right"
          src={`/images/${data.image.src}`}
          alt={data.image.alt}
          width={266}
          height={251}
          priority
        />
      </div>
      <div className="w-full md:w-7/12 lg:w-1/2 sm:mb-4">
        <p className="pb-4">{data.text}</p>
        <ExternalLink
          className="font-bold text-xl md:text-2xl"
          iconClass="scale-80 md:scale-95 md:ml-0.5 md:mb-2"
          href={data.link.href}
        >
          {data.link.text}
        </ExternalLink>
      </div>
    </Card>
  );
}
