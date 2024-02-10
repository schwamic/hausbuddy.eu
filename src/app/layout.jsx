import { Sora } from "next/font/google";
import "@/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "hausbuddy",
  description: "Community für aktive Hausbewohner:innen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body id="hausbuddy" className={`${sora.variable} font-sans`}>
        <div className="w-full lg:max-w-6xl lg:mx-auto px-4 sm:px-16 my-5 sm:my-16 font-semibold tracking-normal hyphens-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
