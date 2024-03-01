import {
  Footer,
  Logo,
  Jumbotron,
  ContactCard,
  WikiCard,
  CommunityCard,
} from "@/components";
import { contact, notFound, wiki, community } from "@/content";

export default function NotFound() {
  return (
    <>
      <section className="mb-16">
        <Logo width={180} height={98} />
      </section>
      <section className="mb-24 sm:mb-28">
        <Jumbotron
          data={notFound}
          buttonStyle="blue"
          classBigImage="transform scale-75 lg:scale-90 -translate-y-5 lg:-translate-y-8"
          classSmallImage="transform scale-100 sm:scale-115 sm:-translate-y-12"
        />
      </section>
      <section className="mb-20 sm:mb-28">
        <CommunityCard className="w-full" data={community} />
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
