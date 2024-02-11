import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";
import ContactCard from "@/app/components/ContactCard";
import WikiCard from "@/app/components/WikiCard";
import DiscordCard from "@/app/components/DiscordCard";
import ExternalLink from "@/app/components/ExternalLink";
import content from "@/content/legal-notice";
import contact from "@/content/contact";
import wiki from "@/content/wiki";
import discord from "@/content/discord";

export default function LegalNotice() {
  return (
    <>
      <div className="max-w-xl">
        <section className="mb-16">
          <Logo width={180} height={98} />
        </section>
        <section className="mb-12">
          <h1 className="mb-10 font-extrabold text-3xl">{content.title}</h1>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">{content.tmg.title}</h2>
          <p className="inline-block mb-2">{content.tmg.description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {content.tmg.list[0].title}
          </h3>
          <p>{content.tmg.list[0].description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {content.tmg.list[1].title}
          </h3>
          <p>{content.tmg.list[1].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">{content.eu.title}</h2>
          <p className="inline">{content.eu.description[0]}</p>
          <ExternalLink className="inline" href={content.eu.link.href}>
            {content.eu.link.text}
          </ExternalLink>
          <p className="inline">. {content.eu.description[1]}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.consumer.title}
          </h2>
          <p className="inline-block mb-2">{content.consumer.description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {content.consumer.list[0].title}
          </h3>
          <p>{content.consumer.list[0].description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {content.consumer.list[1].title}
          </h3>
          <p>{content.consumer.list[1].description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {content.consumer.list[2].title}
          </h3>
          <p>{content.consumer.list[2].description}</p>
        </section>

        <section className="mb-24 sm:mb-28">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.source.title}
          </h2>
          <ExternalLink href={content.source.link.href}>
            {content.source.link.text}
          </ExternalLink>
        </section>
      </div>

      <section id="action" className="mb-20 sm:mb-28">
        <ContactCard className="w-full" data={contact} />
        <div className="md:flex md:items-stretch">
          <DiscordCard
            className="w-full md:w-1/2 md:mr-4 mt-6 sm:mt-8"
            data={discord}
          />
          <WikiCard
            className="w-full md:w-1/2 md:ml-4 mt-6 sm:mt-8"
            data={wiki.card}
          />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
