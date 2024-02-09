import Link from "next/link";

export default function Footer({ className }) {
  return (
    <div className={className}>
      <div className="leading-4">Logo</div>
      <div className="flex justify-end space-x-10">
        <Link href="/">Startseite</Link>
        <Link href="/wiki">Wiki</Link>
        <Link href="/legal-notice">Impressum</Link>
        <Link href="/privacy">Datenschutz</Link>
      </div>
    </div>
  );
}
