import { ExternalLink as ExternalLinkIcon } from "lucide-react";

export default function ExternalLink({
  children,
  key,
  href,
  className = "",
  showIcon = true,
  ...props
}) {
  return (
    <>
      <a
        {...props}
        className={`underline underline-offset-2 decoration-2 cursor-pointer ${className}`}
        rel="noopener noreferrer"
        target="_blank"
        href={href}
        key={key}
      >
        {children}
      </a>
      {showIcon && (
        <ExternalLinkIcon
          className="inline-block ml-1 mb-1"
          color="currentColor"
          strokeWidth={3}
          size={16}
        />
      )}
    </>
  );
}
