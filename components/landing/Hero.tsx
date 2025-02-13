import { Button } from "../ui/button";
import starsBg from "@/assets/landing/stars.png";

export const Hero = () => {
  return (
    <section
      className="min-h-[492px] md:min-h-[800px] flex items-center"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(23,28,102,.3)_37.37%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(23,28,150)]" />
      <div className="container relative">
        <h1 className="text-6xl sm:text-7xl md:text-8xl md:leading-none font-semibold tracking-tighter bg-background bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(23,28,102,.8))] text-transparent bg-clip-text text-center">
          URTO.MN
        </h1>

        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Start for free</Button>
        </div>
      </div>
    </section>
  );
};
