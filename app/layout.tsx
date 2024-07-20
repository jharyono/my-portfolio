import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";

const noto_serif = Noto_Serif({ subsets: ["latin"] });

const rocky_billy = localFont({
  src: [
    {
      path: "../public/fonts/rockybilly.regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-rockybilly",
});

const SFMono = localFont({
  src: [
    {
      path: "../public/fonts/SFMonoRegular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sfmono",
});

export const metadata: Metadata = {
  title: "Joni Haryono - Portfolio",
  description: "Joni Haryoono's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_serif.className} ${SFMono.variable} ${rocky_billy.variable}`}
      >
        <ThemeProvider>
          <div className="container">
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
