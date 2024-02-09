import Image from "next/image";
import Card from "@/app/components/Card";

export default function ActionCard({ className, children, image }) {
  return (
    <Card className={`bg-blue-900 px-14 ${className}`}>
      <div className="mr-5">
        <Image
          className="transform -scale-x-100 float-right"
          src={`/images/${image.src}`}
          alt={image.alt}
          width={64}
          height={48}
          priority
        />
      </div>
      <div className="text-white font-light ">{children}</div>
    </Card>
  );
}
