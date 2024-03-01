import Link from "next/link";
import {
  Footer,
  ContactCard,
  ExternalLink,
  WikiCard,
  Jumbotron,
  Logo,
  CommunityCard,
} from "@/components";
import { home, contact, community, wiki } from "@/content";

export default function Index() {
  return (
    <>
      <section className="mb-16">
        <Logo width={180} height={98} />
      </section>

      <section className="mb-24 mb:mb-20">
        <Jumbotron
          data={home.headline}
          classBigImage="transform scale-95 lg:scale-105 -translate-y-5 lg:-translate-y-8"
          classSmallImage="transform scale-100 translate-x-6 sm:translate-x-0 sm:-translate-y-12"
        />
      </section>

      {/* INFOS */}
      <section className="mb-20 md:mb-28">
        <div className="flex sm:justify-center w-full mb-8 md:mb-16">
          <h2 className="font-extrabold text-2xl md:text-3xl">
            {home.infos.title}
          </h2>
        </div>
        <div className="flex flex-wrap leading-relaxed">
          <div className="order-1 w-100 md:w-6/12 md:pr-6">
            <p>{home.infos.intro}</p>
          </div>
          <div className="order-2 md:order-3 w-100 md:w-6/12 mt-8 md:pr-6">
            <h3 className="font-extrabold mb-1.5">{home.infos.what.title}</h3>
            <p>{home.infos.what.text}</p>
          </div>
          <div className="order-3 md:order-2 w-100 md:w-6/12 mt-8 md:mt-0 md:pl-6">
            <h3 className="font-extrabold mb-1.5">{home.infos.why.title}</h3>
            <p className="inline">{home.infos.why.text} </p>
            <Link
              href={home.infos.why.link.href}
              className="inline underline underline-offset-2 decoration-2"
            >
              {home.infos.why.link.text}
            </Link>
            <p className="inline">.</p>
          </div>
          <div className="order-4 w-100 md:w-6/12 mt-8 md:pl-6">
            <h3 className="font-extrabold mb-1.5">{home.infos.tasks.title}</h3>
            <p className="inline">{home.infos.tasks.text} </p>
            <ExternalLink
              href={home.infos.tasks.link.href}
              className="inline text-nowrap"
            >
              {home.infos.tasks.link.text}
            </ExternalLink>
            <p className="inline">.</p>
          </div>
        </div>
      </section>

      <section className="mb-20 sm:mb-28">
        <CommunityCard id="community" className="w-full" data={community} />
        <div className="md:flex md:items-stretch">
          <ContactCard
            className="w-full md:w-1/2 md:mr-4 mt-6 sm:mt-8"
            data={contact}
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
