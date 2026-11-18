import { logoImage } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="FY Reklam logosu"
      width={640}
      height={640}
      className={cn("h-12 w-12 rounded-full ring-1 ring-border", className)}
    />
  );
}
