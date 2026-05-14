/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.divineshop.vn',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.qrserver.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'image.goat.com',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "10mb",
        },
    },
    serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
};

export default nextConfig;
