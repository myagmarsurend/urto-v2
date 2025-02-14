import { CallToAction } from "@/components/landing/CallToAction";
import { Features } from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LogoTicker } from "@/components/landing/LogoTicker";
import { Testimonials } from "@/components/landing/Testimonials";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}
