import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";
import ContactCard from "@/app/components/ContactCard";
import WikiCard from "@/app/components/WikiCard";
import DiscordCard from "@/app/components/DiscordCard";
import ExternalLink from "@/app/components/ExternalLink";
import content from "@/content/privacy";
import contact from "@/content/contact";
import wiki from "@/content/wiki";
import discord from "@/content/discord";

export default function Privacy() {
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
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[0].title}
          </h2>
          <p className="mb-2">{content.list[0].description[0]}</p>
          <p className="mb-2">{content.list[0].description[1]}</p>
          <p>{content.list[0].description[2]}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[1].title}
          </h2>
          <p>{content.list[1].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[2].title}
          </h2>
          <p className="inline">{content.list[2].description}</p>
          <ExternalLink className="inline" href={content.list[2].link.href}>
            {content.list[2].link.text}
          </ExternalLink>
          <p className="inline">.</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[3].title}
          </h2>
          <p>{content.list[3].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[4].title}
          </h2>
          <p>{content.list[4].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[5].title}
          </h2>
          <p className="mb-2">{content.list[5].description[0]}</p>
          <ul className="mb-2 list-inside list-disc">
            {content.list[5].description[1].map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          <p>{content.list[5].description[2]}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[6].title}
          </h2>
          <p>{content.list[6].description}</p>
        </section>

        <section className="mb-24 sm:mb-28">
          <h2 className="mb-4 font-extrabold text-2xl">
            {content.list[7].title}
          </h2>
          <ExternalLink href={content.list[7].link.href}>
            {content.list[7].link.text}
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
