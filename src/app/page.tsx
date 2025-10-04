import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { VideoText } from "@/components/video-text";
import { GlowButton } from "@/components/glow-button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center p-4 w-full">
        <div className="animate-fade-in w-full h-64 md:h-96">
          <VideoText
            src="https://ls29t3z55w.ufs.sh/f/JEKFIJDsOBct0vrmLYJRG8BKHmvZQkWJ9ElIVcNfzPg63Mbo"
            fontFamily="'Space Grotesk', sans-serif"
            fontSize={18}
            letterSpacing="-0.05em"
            textTransform="uppercase"
          >
            DANY CARL
          </VideoText>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-6 mb-10 animate-fade-in animation-delay-200">
          Como DJ, mi objetivo es crear una experiencia musical inolvidable que conecte a las personas y las haga vibrar.
        </p>
        <div className="animate-fade-in animation-delay-400">
          <GlowButton href="/discography" variant="blue">
            Explorar Música
            <ArrowDown className="ml-2 h-5 w-5" />
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
