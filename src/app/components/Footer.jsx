import Link from "next/link";
import Image from "next/image";

export default function Footer({ className }) {
  return (
    <div className={`flex justify-between items-baseline ${className}`}>
      <div>
        <Image
          src="/images/hausbuddy-blue-yellow.svg"
          alt="hausbuddy"
          width={80}
          height={44}
          priority
        />
      </div>
      <div className="flex justify-end space-x-10">
        <Link href="/">Startseite</Link>
        <Link href="/wiki">Wiki</Link>
        <Link href="/legal-notice">Impressum</Link>
        <Link href="/privacy">Datenschutz</Link>
      </div>
    </div>
  );
}
