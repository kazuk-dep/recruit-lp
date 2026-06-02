import type { ComponentPropsWithoutRef } from "react";

export type LinePrimaryButtonProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "className" | "children"
> & {
  children: React.ReactNode;
  className?: string;
};

/**
 * LINE応募用の主CTA。見た目とサイズは固定し、href・文言は呼び出し側で差し替え可能。
 */
export function LinePrimaryButton({
  children,
  className = "",
  ...props
}: LinePrimaryButtonProps) {
  return (
    <a
      {...props}
      className={`inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-semibold text-white shadow-md transition-[transform,box-shadow] hover:brightness-105 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
      style={{ backgroundColor: "#06C755" }}
    >
      {children}
    </a>
  );
}
