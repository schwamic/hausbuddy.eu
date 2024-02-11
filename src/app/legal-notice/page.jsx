import {
  Footer,
  Logo,
  ContactCard,
  WikiCard,
  DiscordCard,
  ExternalLink,
} from "@/app/components";
import { legalNotice, contact, wiki, discord } from "@/content";

export default function LegalNotice() {
  return (
    <>
      <div className="max-w-xl">
        <section className="mb-16">
          <Logo width={180} height={98} />
        </section>
        <section className="mb-12">
          <h1 className="mb-10 font-extrabold text-3xl">{legalNotice.title}</h1>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {legalNotice.tmg.title}
          </h2>
          <p className="inline-block mb-2">{legalNotice.tmg.description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {legalNotice.tmg.list[0].title}
          </h3>
          <p>{legalNotice.tmg.list[0].description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {legalNotice.tmg.list[1].title}
          </h3>
          <p>{legalNotice.tmg.list[1].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {legalNotice.eu.title}
          </h2>
          <p className="inline">{legalNotice.eu.description[0]}</p>
          <ExternalLink className="inline" href={legalNotice.eu.link.href}>
            {legalNotice.eu.link.text}
          </ExternalLink>
          <p className="inline">. {legalNotice.eu.description[1]}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {legalNotice.consumer.title}
          </h2>
          <p className="inline-block mb-2">
            {legalNotice.consumer.description}
          </p>
          <h3 className="mt-4 font-extrabold text-xl">
            {legalNotice.consumer.list[0].title}
          </h3>
          <p>{legalNotice.consumer.list[0].description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {legalNotice.consumer.list[1].title}
          </h3>
          <p>{legalNotice.consumer.list[1].description}</p>
          <h3 className="mt-4 font-extrabold text-xl">
            {legalNotice.consumer.list[2].title}
          </h3>
          <p>{legalNotice.consumer.list[2].description}</p>
        </section>

        <section className="mb-24 sm:mb-28">
          <h2 className="mb-4 font-extrabold text-2xl">
            {legalNotice.source.title}
          </h2>
          <ExternalLink href={legalNotice.source.link.href}>
            {legalNotice.source.link.text}
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
