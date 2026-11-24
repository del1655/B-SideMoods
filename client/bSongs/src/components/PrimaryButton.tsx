import type { ButtonHTMLAttributes } from "react";
import { primaryButtonStyles } from "./buttonStyles";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({ className = "", children, ...props }: Props) {
  return (
    <button className={`${primaryButtonStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}