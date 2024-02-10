import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";
import Jumbotron from "@/app/components/Jumbotron";
import ContactCard from "@/app/components/ContactCard";
import WikiCard from "@/app/components/WikiCard";
import DiscordCard from "@/app/components/DiscordCard";
import contact from "@/content/contact";
import content from "@/content/wiki";
import discord from "@/content/discord";

export default function Wiki() {
  return (
    <>
      <section className="mb-16">
        <Logo width={180} height={98} />
      </section>
      <section className="mb-24 sm:mb-28">
        <Jumbotron
          data={content}
          buttonStyle="blue"
          classBigImage="transform scale-90 lg:scale-100 -translate-y-4 lg:-translate-y-6"
          classSmallImage="transform scale-115 translate-x-3 sm:translate-x-0 sm:-translate-y-12"
        />
      </section>
      {/* WIKI */}
      <section className="mb-20 md:mb-28">
        <p className="text-xl text-center">
          Diese Seite ist aktuell im Aufbau.
        </p>
      </section>
      <section className="mb-20 sm:mb-28">
        <ContactCard className="w-full" data={contact} />
        <div id="community" className="md:flex md:items-stretch">
          <DiscordCard
            className="w-full md:w-1/2 md:mr-4 mt-6 sm:mt-8"
            data={discord}
          />
          <WikiCard
            className="w-full md:w-1/2 md:ml-4 mt-6 sm:mt-8"
            data={content.card}
          />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
