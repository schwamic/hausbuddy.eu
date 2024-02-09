import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Footer from "@/app/components/Footer";
import ContactCard from "@/app/components/ContactCard";
import WikiCard from "@/app/components/WikiCard";
import DiscordCard from "@/app/components/DiscordCard";
import content from "@/content/landingpage";
import contact from "@/content/contact";
import discord from "@/content/discord";

export default function Index() {
  return (
    <>
      <section className="mb-12">
        <Image
          src="/images/hausbuddy-blue-yellow.svg"
          alt="hausbuddy"
          width={180}
          height={98}
          priority
        />
      </section>

      {/* INTRO */}
      <section className="flex justify-between">
        <div className="w-7/12 mt-24">
          <h1 className="text-5xl tracking-wide font-extrabold w-160 leading-tight">
            {content.intro.title}
          </h1>
          <div className="mt-10">
            <a
              href="#action"
              className="text-lg bg-yellow-400 shadow-lg shadow-gray-400  py-4 px-6 rounded-2xl cursor-pointer"
            >
              {content.intro.actions.create.text}
            </a>
          </div>
        </div>
        <div className="w-5/12">
          <Image
            className="float-right"
            src={`/images/${content.intro.image.src}`}
            alt={content.intro.image.alt}
            width={365}
            height={335}
            priority
          />
        </div>
      </section>

      {/* INFOS */}
      <section className="mt-28">
        <div className="flex justify-center w-full">
          <h2 className="font-extrabold text-3xl">{content.infos.title}</h2>
        </div>
        <div className="flex flex-wrap mt-16 leading-relaxed">
          <div className="order-1 w-6/12 pr-6">
            <p>{content.infos.intro}</p>
          </div>
          <div className="order-3 w-6/12 mt-8 pr-6">
            <h3 className="font-extrabold mb-1.5">{content.infos.why.title}</h3>
            <p className="inline">{content.infos.why.text + " "}</p>
            <Link href="/wiki" className="underline inline">
              {content.infos.why.link}
            </Link>
            <p className="inline">.</p>
          </div>
          <div className="order-2 w-6/12 pl-6">
            <h3 className="font-extrabold mb-1.5">
              {content.infos.what.title}
            </h3>
            <p>{content.infos.what.text}</p>
          </div>
          <div className="order-4 w-6/12 mt-8 pl-6">
            <h3 className="font-extrabold mb-1.5">
              {content.infos.tasks.title}
            </h3>
            <p>{content.infos.tasks.text}</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.ihk.de/schwaben/produktmarken/beratung-und-service/recht-und-steuern/gewerbe-und-handwerksrecht/hausmeisterdienste-554052"
              className="inline text-nowrap underline cursor-pointer"
            >
              {content.infos.tasks.link}
            </a>
            <p className="inline">.</p>
            <ExternalLink
              className="inline-block ml-1 mb-1"
              color="currentColor"
              strokeWidth={3}
              size={16}
            />
          </div>
        </div>
      </section>

      <section id="action" className="mt-28">
        <ContactCard className="w-full" data={contact} />
        <div className="flex items-stretch mt-8">
          <DiscordCard className="w-1/2 mr-4" data={discord} />
          <WikiCard className="w-1/2 ml-4" data={content.wiki} />
        </div>
      </section>

      <section className="mt-28">
        <Footer />
      </section>
    </>
  );
}
