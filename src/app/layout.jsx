import { Sora } from "next/font/google";
import { Providers } from "@/utils/providers";
import "@/styles/globals.css";
import { meta } from "@/content";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://hausbuddy.eu",
    siteName: "hausbuddy",
    images: [
      {
        url: "https://www.hausbuddy.eu/og-image.jpg",
        width: 1200,
        height: 628,
      },
    ],
    locale: "de",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="light">
      <body id="hausbuddy" className={`${sora.variable} font-sans`}>
        <Providers>
          <div className="w-full lg:max-w-6xl lg:mx-auto px-4 sm:px-16 my-5 sm:my-16 font-semibold tracking-normal hyphens-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
