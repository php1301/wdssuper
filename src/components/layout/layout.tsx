import { NextSeo } from "next-seo";
import { Header } from "@components/layout/header/index";
import { Footer } from "@components/layout/footer/index";
import { useTranslation } from "next-i18next";
import { useAcceptCookies } from "@utils/use-accept-cookies";
import { Button } from "@components/ui/button";

// File Layout này sẽ được các Pages . đến để appply Layout dynamically
const Layout: React.FC = ({ children }) => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
    const { t } = useTranslation("common");
    return (
        <div className="flex flex-col min-h-screen">
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title="ChawkBazar React - React Next E-commerce Template"
                description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                canonical="https://chawkbazar.vercel.app/"
                openGraph={{
                    url: "https://chawkbazar.vercel.app",
                    title: "ChawkBazar React - React Next E-commerce Template",
                    description:
                        "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
                    images: [
                        {
                            url: "/assets/images/og-image-01.png",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "/assets/images/og-image-02.png",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />
            <Header />
            <Button onClick={() => onAcceptCookies()} type="button">
                <a
                    data-test="docs-btn-anchor"
                    href="https://pankod.github.io/superplate/"
                    target="_blank"
                >
                    Docs
                </a>
            </Button>
            <Footer />
            {children}
        </div>
    );
};
export { Layout };
