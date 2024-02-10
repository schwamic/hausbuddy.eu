import Image from "next/image";
import Card from "@/app/components/Card";

export default function ContactCard({ className, data }) {
  return (
    <Card className={`bg-yellow-400 ${className}`}>
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
        <a
          className="font-bold text-xl md:text-2xl underline"
          href={`mailto:${data.email.href}`}
        >
          {data.email.text}
        </a>
      </div>
    </Card>
  );
}
