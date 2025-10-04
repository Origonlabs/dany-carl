import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-4 h-4", className)}>
      <Image 
        src="https://cdn.bucket.opendex.dev/dany-carl/logo-danny-carl.webp" 
        alt="Dany Carl Logo"
        fill
        sizes="1rem"
        className="object-contain"
        priority
      />
    </div>
  );
}
