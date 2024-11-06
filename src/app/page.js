import Image from "next/image";
import Hero from "./hero/Hero";
import About from "./About/About";
import Badges from "./About/badges";
import Featured from "./Featured/Featured";
import OurTechnologies from "./homeComponents/OurTechnologies";
import ChooseUs from "./ChooseUs/ChooseUs";
import OurIndustryExpertise from "./homeComponents/OurIndustryExpertise";
import ClientReview from "./homeComponents/ClientReview";
import PartneredWith from "./homeComponents/PartneredWith";
// Global metadata
export const metadata = {
  title: "Ultrafly Solutions | Software Development Company",
  description:
    "Discover cutting-edge IT solutions with Ultrafly Solutions. From mobile app development to digital marketing, we help your business soar to new heights.",
  keywords:
    "IT solutions, mobile app development, digital marketing, website development, Ultrafly Solutions",
  icons: {
    apple: "./favicon.ico",
  },
};
export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Badges/>
    <Featured/>
    <OurTechnologies/>
    <ChooseUs/>
    <OurIndustryExpertise/>
    <ClientReview/>
    <PartneredWith/>
    </>
  );
}
