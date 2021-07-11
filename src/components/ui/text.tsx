import React, { JSXElementConstructor, CSSProperties } from "react";
import cn from "classnames";

interface Props {
    variant?: Variant;
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode | undefined;
    html?: string;
}
// 2 cach viet a set of types
// export const tuple = <T extends string[]>(...args: T) => args;
// const buttonVariants = tuple("primary", "secondary", "elevation");
// export type ButtonVariants = typeof buttonVariants[number];

type Variant =
    | "mediumHeading"
    | "heading"
    | "body"
    | "pageHeading"
    | "subHeading";

export const Text: React.FC<Props> = ({
    variant,
    className,
    style,
    children,
    html,
}) => {
    // 1 cách map các type khác ngoài tuple
    const componentsMap: {
        [P in Variant]: React.ComponentType<P> | string;
    } = {
        body: "p",
        mediumHeading: "h3",
        heading: "h4",
        pageHeading: "h1",
        subHeading: "h2",
    };

    const Component:
        | JSXElementConstructor<any>
        | React.ReactElement<any>
        | React.ComponentType<any>
        | string = componentsMap![variant!];

    const htmlContentProps = html
        ? { dangerouselySetInnerHTML: { __html: html } }
        : {};
    return (
        <Component
            className={cn(
                {
                    "text-body text-sm sm:leading-6 leading-7":
                        variant === "body",
                    "text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold":
                        variant === "mediumHeading",
                    "text-heading text-sm md:text-base xl:text-lg font-semibold":
                        variant === "heading",
                    "text-2xl font-bold text-heading":
                        variant === "pageHeading",
                    "text-heading text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold":
                        variant === "subHeading",
                },
                className,
            )}
            style={style}
            {...htmlContentProps}
        >
            {children}
        </Component>
    );
};
