import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative h-8 w-24 sm:h-10 sm:w-28", className)}>
      <Image
        src="https://cdn.bucket.opendex.dev/danny-carl/logo-danny-carl.webp"
        alt="Dany Carl logo"
        fill
        sizes="(max-width: 768px) 96px, 112px"
        className="object-contain"
        priority
      />
    </div>
  );
}
