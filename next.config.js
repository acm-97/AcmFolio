const { i18n } = require('./next-i18next.config');

/** @type {{
 * reactStrictMode: boolean,
 * i18n: {
 *  defaultLocale: [string],
 *  defaultNS: [string],
 *  locales: string[],
 *  localePath: string
 * }
 * }} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
