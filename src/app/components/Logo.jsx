import Image from "next/image";

export default function Logo({ width, height, className = "", ...props }) {
  return (
    <Image
      {...props}
      className={className}
      src="/images/hausbuddy-blue-yellow.svg"
      alt="hausbuddy logo"
      width={width}
      height={height}
      priority
    />
  );
}
