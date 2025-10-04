import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end gap-1 h-10 w-auto", className)}>
      <span className="w-2 h-4 bg-primary animate-pulse" style={{animationDelay: '0ms'}}/>
      <span className="w-2 h-10 bg-primary animate-pulse" style={{animationDelay: '100ms'}}/>
      <span className="w-2 h-6 bg-primary animate-pulse" style={{animationDelay: '200ms'}}/>
      <span className="w-2 h-8 bg-primary animate-pulse" style={{animationDelay: '300ms'}}/>
       <span className="w-2 h-5 bg-primary animate-pulse" style={{animationDelay: '400ms'}}/>
    </div>
  );
}
