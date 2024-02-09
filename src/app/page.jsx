import Image from "next/image";
import content from "@/content/landingpage";

export default function Index() {
  return (
    <>
      <section className="mb-12">
        <div className="text-5xl leading-10 tracking-wide font-extrabold">
          haus
        </div>
        <div className="text-5xl leading-10 tracking-wide font-extrabold">
          buddy
        </div>
      </section>
      <section className="flex justify-between">
        <div className="w-7/12 mt-24">
          <h1 className="text-5xl tracking-wide font-extrabold w-160 leading-tight">
            {content.header.title}
          </h1>
          <div className="mt-10">
            <button className="text-lg bg-yellow-400 shadow-xl py-3.5 px-6 rounded-2xl font-semibold cursor-pointer">
              {content.header.actions.create.text}
            </button>
          </div>
        </div>
        <div className="w-5/12">
          <Image
            className="float-right"
            src="/images/3d-boy-thumb-up.png"
            alt="buddy with thumb up"
            width={365}
            height={335}
            priority
          />
        </div>
      </section>

      <section className="mt-28">
        <div className="flex justify-center w-full">
          <h2 className="font-extrabold leading-tight text-3xl">
            {content.infos.title}
          </h2>
        </div>
        <div className="flex flex-wrap mt-16 order-1">
          <div className="w-6/12 pr-6">
            <p className="font-medium">{content.infos.intro}</p>
          </div>
          <div className="w-6/12 order-3 mt-8 pr-6">
            <h3 className="font-extrabold">{content.infos.why.title}</h3>
            <p className="font-medium">{content.infos.why.body}</p>
          </div>
          <div className="w-6/12 order-2 pl-6">
            <h3 className="font-extrabold">{content.infos.what.title}</h3>
            <p className="font-medium">{content.infos.what.body}</p>
          </div>
          <div className="w-6/12 order-4 mt-8 pl-6">
            <h3 className="font-extrabold">{content.infos.tasks.title}</h3>
            <p className="font-medium">{content.infos.tasks.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}
