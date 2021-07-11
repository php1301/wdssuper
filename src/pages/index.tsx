import React from "react";
import { useAmp } from "next/amp";
export const config = {
    amp: false,
    hybrid: false,
};
import { Layout } from "@components/layout/layout";
import { Container, Main, Cards, Subscription } from "@components";
import { I18NExample } from "@components/examples/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Các pages sẽ không cần gắn types như :React.FC
const Home = () => {
    const isAmp = useAmp();
    return (
        <Container>
            <Subscription />
            <Main />
            <I18NExample />
            <Cards />
        </Container>
    );
};

{
    /* <amp-img
alt="Mountains"
width="550"
height="368"
layout="responsive"
src="https://amp.dev/static/inline-examples/images/mountains.webp"
>
<amp-img
    alt="Mountains"
    fallback=""
    width="550"
    height="368"
    layout="responsive"
    src="https://amp.dev/static/inline-examples/images/mountains.jpg"
></amp-img>
</amp-img> */
}
Home.Layout = Layout;
export default Home;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ["common", "home"])),
            // Will be passed to the page component as props
        },
    };
}
