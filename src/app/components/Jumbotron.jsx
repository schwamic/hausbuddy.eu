import Image from "next/image";
import Link from "next/link";

export default function Jumbotron({
  className,
  data,
  imageSize = { width: 400, height: 400 },
  buttonStyle = "yellow",
  showButton = true,
}) {
  return (
    <div
      className={`flex items-center flex-col-reverse sm:flex-row sm:justify-between ${className}`}
    >
      <div className="flex items-center flex-col sm:items-start max-w-96 sm:max-w-full">
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
      <div className="md:w-6/12 sm:ml-4 sm:float-right">
        <Image
          className="hidden md:block w-96 min-w-96 transform md:scale-90 lg:scale-100 -mt-16 lg:-mt-26"
          src={`/images/${data.image.big.src}`}
          alt={data.image.big.alt}
          width={imageSize.width}
          height={imageSize.height}
          priority
        />
        <Image
          className="md:hidden w-44 min-w-44 mb-6 sm:mb-0 sm:-mt-24"
          src={`/images/${data.image.small.src}`}
          alt={data.image.small.alt}
          width={imageSize.width}
          height={imageSize.height}
          priority
        />
      </div>
    </div>
  );
}
