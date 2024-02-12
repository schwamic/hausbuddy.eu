"use client"; // BUGFIX: https://github.com/nextui-org/nextui/issues/1403#issuecomment-1678863519

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
  Footer,
  Logo,
  Jumbotron,
  ContactCard,
  WikiCard,
  CommunityCard,
} from "@/app/components";
import { contact, wiki, community } from "@/content";

export default function Wiki() {
  return (
    <>
      <section className="mb-16">
        <Logo width={180} height={98} />
      </section>
      <section className="mb-24 md:mb-20 lg:mb-16">
        <Jumbotron
          data={wiki}
          buttonStyle="blue"
          classBigImage="transform scale-90 lg:scale-100 -translate-y-4 lg:-translate-y-6"
          classSmallImage="transform scale-115 translate-x-3 sm:translate-x-0 sm:-translate-y-12"
        />
      </section>
      {/* WIKI */}
      <section className="mb-20 md:mb-24">
        <Accordion
          disableAnimation={true}
          itemClasses={{
            base: "p-0",
            title: "text-inherit font-extrabold text-base",
            content: "text-inherit font-semibold text-base pt-0 -mt-2.5 pb-4",
          }}
        >
          {wiki.content.map((item, key, index) => (
            <AccordionItem
              key={key}
              aria-label={item.title}
              title={`${key + 1}. ${item.title}`}
            >
              <div className="max-w-xl">{item.content.text}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="mb-20 sm:mb-28">
        <ContactCard className="w-full" data={contact} />
        <div id="community" className="md:flex md:items-stretch">
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
