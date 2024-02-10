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
    <div className={`flex justify-between ${className}`}>
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide leading-tight font-extrabold">
          {data.title}
        </h1>
        {showButton && (
          <div className="mt-12">
            <Link
              href="#action"
              className={`shadow-lg shadow-gray-400 rounded-2xl py-4 px-6 cursor-pointer text-lg ${
                buttonStyle === "yellow"
                  ? "bg-yellow-400 text-blue-900"
                  : "bg-blue-900 text-white font-medium"
              }`}
            >
              {data.actions.create.text}
            </Link>
          </div>
        )}
      </div>
      <div className="md:w-6/12 -mt-8 md:-mt-28 ml-4 float-right">
        <Image
          className="hidden md:block w-96 min-w-96 md:transform md:scale-90 lg:scale-100"
          src={`/images/${data.image.big.src}`}
          alt={data.image.big.alt}
          width={imageSize.width}
          height={imageSize.height}
          priority
        />
        <Image
          className="hidden sm:block md:hidden transform w-40 min-w-40 sm:w-44 sm:min-w-44"
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
