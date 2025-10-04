import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-32 h-12", className)}>
      <Image 
        src="https://cdn.bucket.opendex.dev/danny-carl/logo-danny-carl.webp" 
        alt="Dany Carl Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
