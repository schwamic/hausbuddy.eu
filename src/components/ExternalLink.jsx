import { ExternalLink as ExternalLinkIcon } from "lucide-react";

export default function ExternalLink({
  children,
  key,
  href,
  className = "",
  iconClass = "scale-75",
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
          className={`inline-block mb-1 ${iconClass}`}
          color="currentColor"
          strokeWidth={3}
          size={22}
        />
      )}
    </>
  );
}
