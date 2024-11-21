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
import Head from "next/head";
// Global metadata
export const metadata = {
  title: "Ultrafly Solutions: Software Development & Digital Marketing Company",
  description:
    "Ultrafly Solutions is a trusted enterprise partner in software development and digital marketing services. It offers innovative, data-driven solutions for business growth.",
  keywords:
    "IT solutions, mobile app development, digital marketing, website development, Ultrafly Solutions",
  icons: {
    apple: "./favicon.ico",
  },
};
export default function Home() {
  return (
    <>
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="SwDsm2it5yHa7AES5dS3Gk8qwJMCmlM8m_pMlASrmlY"
        />
        <link rel="canonical" href="https://www.ultraflysolutions.com/" />
      </Head>
      <Hero />
      <About />
      <Badges />
      <Featured />
      <OurTechnologies />
      <ChooseUs />
      <OurIndustryExpertise />
      <ClientReview />
      <PartneredWith />
    </>
  );
}
