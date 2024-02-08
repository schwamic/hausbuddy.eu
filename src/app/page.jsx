import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center">
      <h1 className="text-5xl font-extrabold w-160">Community für aktive Hausbewohner:innen</h1>
      <div className="">
        <Image
          src="/images/3d-boy-thumb-up.png"
          alt="buddy with thumb up"
          width={380}
          height={280}
          priority
        />
      </div>
    </div>
  );
}
