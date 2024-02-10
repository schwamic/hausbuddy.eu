import Link from "next/link";
import Logo from "@/app/components/Logo";

export default function Footer({ className }) {
  return (
    <div className={`flex justify-between items-baseline ${className}`}>
      <div>
        <Logo className="-mb-1.5" width={80} height={44} />
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
