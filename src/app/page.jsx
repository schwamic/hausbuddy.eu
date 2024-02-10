import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Footer from "@/app/components/Footer";
import ContactCard from "@/app/components/ContactCard";
import WikiCard from "@/app/components/WikiCard";
import Jumbotron from "@/app/components/Jumbotron";
import Logo from "@/app/components/Logo";
import DiscordCard from "@/app/components/DiscordCard";
import content from "@/content/landingpage";
import contact from "@/content/contact";
import discord from "@/content/discord";

export default function Index() {
  return (
    <>
      <section className="mb-20 lg:mb-28">
        <Logo width={180} height={98} />
      </section>

      <section className="mb-28">
        <Jumbotron data={content.headline} />
      </section>

      {/* INFOS */}
      <section className="mb-28">
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
              href={content.infos.tasks.link.href}
              className="inline text-nowrap underline cursor-pointer"
            >
              {content.infos.tasks.link.text}
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

      <section id="action" className="mb-28">
        <ContactCard className="w-full" data={contact} />
        <div className="flex items-stretch mt-8">
          <DiscordCard className="w-1/2 mr-4" data={discord} />
          <WikiCard className="w-1/2 ml-4" data={content.wiki} />
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
