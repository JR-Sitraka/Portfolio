import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-bg-lab text-text-primary`}>
      <Component {...pageProps} />
    </div>
  );
}
