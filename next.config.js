const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    pwa: {
        disable: process.env.NODE_ENV !== "production",
        dest: "public",
        runtimeCaching,
    },
    i18n,
});

// const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
    tr: "tr",
    en: "en",
};

const config = {
    devServer: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
};

module.exports = withPlugins([[withBundleAnalyzer, withPWA]], config);
