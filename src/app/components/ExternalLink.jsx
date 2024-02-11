export default function ExternalLink({ children, href, className = "" }) {
  return (
    <a
      className={`underline cursor-pointer ${className}`}
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}
