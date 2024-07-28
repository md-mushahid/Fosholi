import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fosholi",
  description: "A farming website",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Pricing />
    </>
  );
}
