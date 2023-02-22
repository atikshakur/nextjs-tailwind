import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Tests from "@/components/Tests";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
    </>
  );
}
