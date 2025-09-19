import Footer from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import HeroCarousel from "@/components/common/HeroCarousel";
import Image from "next/image";

export default function Home() {
  return (
   <><div><Header /></div>
   <div><Hero /></div>
   <div><HeroCarousel /></div>
   <div><Footer/></div>
   </>
    
  );
}
