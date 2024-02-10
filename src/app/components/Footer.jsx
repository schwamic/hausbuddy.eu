import Link from "next/link";
import Logo from "@/app/components/Logo";

export default function Footer({ className }) {
  return (
    <div className={`flex justify-between items-baseline ${className}`}>
      <div className="hidden sm:block">
        <Logo className="-mb-1.5" width={80} height={44} />
      </div>
      <div className="flex flex-wrap sm:justify-end sm:space-x-7 md:space-x-10">
        <Link className="mb-2 sm:mb-0" href="/">
          Startseite
        </Link>
        <Link className="mx-5 sm:mx-0" href="/wiki">
          Wiki
        </Link>
        <Link className="mr-5 sm:mr-0" href="/legal-notice">
          Impressum
        </Link>
        <Link href="/privacy">Datenschutz</Link>
      </div>
    </div>
  );
}
