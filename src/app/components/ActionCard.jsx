import Image from "next/image";
import Card from "@/app/components/Card";

export default function ActionCard({ className, children, image }) {
  return (
    <Card className={`bg-blue-900 sm:px-14 sm:p-7 ${className}`}>
      <div className="hidden sm:block sm:mr-5">
        <Image
          className="w-12 min-w-12 float-right"
          src={`/images/${image.src}`}
          alt={image.alt}
          width={64}
          height={48}
          priority
        />
      </div>
      <div className="text-white font-medium ">{children}</div>
    </Card>
  );
}
