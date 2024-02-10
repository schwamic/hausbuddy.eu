import Image from "next/image";
import Link from "next/link";

export default function Jumbotron({
  data,
  className = "",
  classBigImage = "",
  classSmallImage = "",
  buttonStyle = "yellow",
  showButton = true,
}) {
  return (
    <div
      className={`flex items-center flex-col-reverse sm:flex-row ${className}`}
    >
      <div className="flex items-center sm:items-start flex-col w-full max-w-96 sm:max-w-full">
        <h1 className="text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl tracking-wide leading-tight font-extrabold">
          {data.title}
        </h1>
        {showButton && (
          <div className="mt-12">
            <Link
              href={data.action.href}
              className={`shadow-lg shadow-gray-400 rounded-2xl py-4 px-6 cursor-pointer text-lg ${
                buttonStyle === "yellow"
                  ? "bg-yellow-400 text-blue-900"
                  : "bg-blue-900 text-white font-medium"
              }`}
            >
              {data.action.text}
            </Link>
          </div>
        )}
      </div>
      <div className="relative w-44 min-w-44 h-44 md:w-96 md:min-w-96 md:h-80 sm:ml-4 mb-6 sm:mb-0">
        <Image
          className={`hidden md:block object-contain ${classBigImage}`}
          src={`/images/${data.image.big.src}`}
          alt={data.image.big.alt}
          fill={true}
          priority
        />
        <Image
          className={`block md:hidden object-contain ${classSmallImage}`}
          src={`/images/${data.image.small.src}`}
          alt={data.image.small.alt}
          fill={true}
          priority
        />
      </div>
    </div>
  );
}
