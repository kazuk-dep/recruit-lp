import type { ComponentPropsWithoutRef } from "react";

export type CTAButtonProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "className" | "children"
> & {
  children: React.ReactNode;
  className?: string;
};

export function CTAButton({ children, className = "", ...props }: CTAButtonProps) {
  return (
    <a
      {...props}
      aria-label={typeof children === "string" ? children : undefined}
      className={`inline-flex min-h-14 w-full items-center justify-center rounded-2xl px-5 text-base font-semibold text-white shadow-sm transition-[transform,box-shadow,filter] hover:brightness-105 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 ${className}`}
      style={{ backgroundColor: "#06C755" }}
    >
      {children}
    </a>
  );
}

