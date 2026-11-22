"use client";

import { useEffect } from "react";
import { content } from "@/content/site";
import { useLang } from "@/lib/lang";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Site() {
  const lang = useLang();
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Navbar t={t} lang={lang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
    </>
  );
}
