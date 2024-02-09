import Image from "next/image";
import Card from "@/app/components/Card";

export default function ContactCard({ className, data }) {
  return (
    <Card className={`bg-yellow-400 ${className}`}>
      <div className="w-44 mr-10">
        <Image
          className="transform -scale-x-100 float-right"
          src={`/images/${data.image.src}`}
          alt={data.image.alt}
          width={266}
          height={251}
          priority
        />
      </div>
      <div className="w-1/2 mb-4">
        <p className="pb-4">{data.text}</p>
        <a
          className="font-extrabold text-2xl underline"
          href={`mailto:${data.email.href}`}
        >
          {data.email.text}
        </a>
      </div>
    </Card>
  );
}
