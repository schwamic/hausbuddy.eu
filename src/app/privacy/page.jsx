import {
  Footer,
  Logo,
  ContactCard,
  WikiCard,
  CommunityCard,
  ExternalLink,
} from "@/components";
import { privacy, contact, wiki, community } from "@/content";

export default function Privacy() {
  return (
    <>
      <div className="max-w-xl">
        <section className="mb-16">
          <Logo width={180} height={98} />
        </section>
        <section className="mb-12">
          <h1 className="mb-10 font-extrabold text-3xl">{privacy.title}</h1>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[0].title}
          </h2>
          <p className="mb-2">{privacy.list[0].description[0]}</p>
          <p className="mb-2">{privacy.list[0].description[1]}</p>
          <p>{privacy.list[0].description[2]}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[1].title}
          </h2>
          <p>{privacy.list[1].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[2].title}
          </h2>
          <p className="inline">{privacy.list[2].description}</p>
          <ExternalLink className="inline" href={privacy.list[2].link.href}>
            {privacy.list[2].link.text}
          </ExternalLink>
          <p className="inline">.</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[3].title}
          </h2>
          <p>{privacy.list[3].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[4].title}
          </h2>
          <p>{privacy.list[4].description}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[5].title}
          </h2>
          <p className="mb-2">{privacy.list[5].description[0]}</p>
          <ul className="mb-2 list-inside list-disc">
            {privacy.list[5].description[1].map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          <p>{privacy.list[5].description[2]}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[6].title}
          </h2>
          <p>{privacy.list[6].description}</p>
        </section>

        <section className="mb-24 sm:mb-28">
          <h2 className="mb-4 font-extrabold text-2xl">
            {privacy.list[7].title}
          </h2>
          <ExternalLink href={privacy.list[7].link.href}>
            {privacy.list[7].link.text}
          </ExternalLink>
        </section>
      </div>

      <section id="action" className="mb-20 sm:mb-28">
        <ContactCard className="w-full" data={contact} />
        <div className="md:flex md:items-stretch">
          <CommunityCard
            className="w-full md:w-1/2 md:mr-4 mt-6 sm:mt-8"
            data={community}
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
