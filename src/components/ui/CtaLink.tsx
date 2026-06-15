import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * Premium call-to-action link.
 * - primary: thin gold outline that fills with gold on hover (void text)
 * - ghost: ivory label with an animated gold underline
 */
export function CtaLink({ href, children, variant = "primary", className }: Props) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-center text-sm uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:text-ivory",
          className,
        )}
      >
        <span>{children}</span>
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden border border-gold/60 px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:text-void focus-visible:text-void",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100" />
    </Link>
  );
}
