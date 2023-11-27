import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import About from "@/components/About";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { useEffect, useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <About />
      <Description />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
