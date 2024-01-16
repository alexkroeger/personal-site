/** @type {import('next').NextConfig} */

module.exports = {
    async redirects() {
      return [
        {
          source: '/publications',
          destination: '/#publications',
          permanent: true,
        },
      ];
    },
};
