import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { Logo } from "@components";
import { SearchIcon } from "@components/icons";
import { useUI } from "@contexts/ui.context";
import { siteSettings } from "@settings/site-settings";
import { addActiveScroll } from "@utils/add-active-scroll";
import { ROUTES } from "@utils/routes";

const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
    ssr: false,
});
type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

export const Header: React.FC = () => {
    const {
        openSidebar,
        setDrawerView,
        openSearch,
        openModal,
        setModalView,
        isAuthorized,
    } = useUI();

    const { t } = useTranslation();
    const siteHeaderRef = useRef() as DivElementRef;
    addActiveScroll(siteHeaderRef);
    function handleLogin() {
        setModalView("LOGIN_VIEW");
        return openModal();
    }
    function handleMobileMenu() {
        setDrawerView("MOBILE_MENU");
        return openSidebar();
    }
    return (
        <div className="bg-black">
            <header
                id="siteHeader"
                ref={siteHeaderRef}
                className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
            >
                <div className="innerSticky text-gray-700 body-font w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out">
                    <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
                        <button
                            aria-label="Menu"
                            className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
                            onClick={handleMobileMenu}
                        >
                            <span className="menuIcon">
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                            </span>
                        </button>
                        <Logo />
                        <div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
                            <button
                                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                                onClick={openSearch}
                                aria-label="search-button"
                            >
                                <SearchIcon />
                            </button>
                            <div className="-mt-0.5 flex-shrink-0">
                                <AuthMenu
                                    href={ROUTES.ACCOUNT}
                                    isAuthorized={isAuthorized}
                                    className="text-sm xl:text-base  text-white font-semibold"
                                    btnProps={{
                                        className:
                                            "text-sm xl:text-base text-white font-semibold focus:outeline-none",
                                        children: t("text-sign-in"),
                                    }}
                                >
                                    {t("text-account")}
                                </AuthMenu>
                            </div>
                            <CartButton />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
