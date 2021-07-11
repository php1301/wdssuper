import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";

// Thay vì Props & thì ta extends luôn
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    labelKey?: string;
    placeholderKey?: string;
    name: string;
    errorKey?: string;
    type?: string;
    shadow?: boolean;
    variant?: InputVariants;
}

const tuple = <T extends string[]>(...args: T) => args;
const inputTuple = tuple("normal", "solid", "outline");
export type InputVariants = typeof inputTuple[number];

const classes = {
    root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out",
    normal: "bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
    solid: "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
    outline: "border-gray-300 focus:border-primary",
    shadow: "focus:shadow",
};

export const Input = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            className = "block",
            labelKey,
            name,
            errorKey,
            placeholderKey,
            variant = "normal",
            shadow = false,
            type = "text",
            inputClassName,
            ...rest
        },
        ref,
    ) => {
        const rootClassName = cn(
            classes.root,
            {
                [classes.normal]: variant === "normal",
                [classes.solid]: variant === "solid",
                [classes.outline]: variant === "outline",
            },
            {
                [classes.shadow]: shadow,
            },
            inputClassName,
        );
        const { t } = useTranslation();
        return (
            <div className={className}>
                {labelKey && (
                    <label
                        htmlFor={name}
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                        {t(labelKey)}
                    </label>
                )}
                <input
                    id={name}
                    name={name}
                    type={type}
                    ref={ref}
                    // @ts-ignore
                    placeholder={t(placeholderKey)}
                    className={rootClassName}
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid={errorKey ? "true" : "false"}
                    {...rest}
                />
                {errorKey && (
                    <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>
                )}
            </div>
        );
    },
);
