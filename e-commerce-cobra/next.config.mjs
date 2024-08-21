/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'],
    },
    experimental: {
        serverActions: {
          allowedOrigins: ['localhost:4000', 'laughing-space-broccoli-vr4pxv4r5qgcxp44.github.dev'],
        },
    }
};

export default nextConfig;
