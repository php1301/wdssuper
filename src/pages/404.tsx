import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Layout } from "@components/layout/layout";

export default function ErrorPage() {
    return <h2>Error</h2>;
}

ErrorPage.Layout = Layout;


// Chưa gắn translation nên sẽ không pass test của cypress và next build
// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale!, [
//                 "common",
//                 "forms",
//                 "menu",
//                 "footer",
//             ])),
//         },
//     };
// };
