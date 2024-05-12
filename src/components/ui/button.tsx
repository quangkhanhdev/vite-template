import {cn} from "@/utils/merge";
import {ButtonHTMLAttributes, forwardRef} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, ...props}, ref) => {
  return (
    <button
      className={cn(
        "rounded-md bg-green-600 px-[0.5em] py-[0.25em] text-center text-white outline-none ring-green-400 ring-offset-2 transition-colors duration-150",
        "hover:saturate-[0.75] focus-visible:ring-2 active:ring-2",
        className /* classname must be defiend before cn executed */,
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "UI_Button";

export {Button};
