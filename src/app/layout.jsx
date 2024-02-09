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
        <div className="max-w-5xl mx-auto my-16 font-semibold tracking-normal">
          {children}
        </div>
      </body>
    </html>
  );
}
