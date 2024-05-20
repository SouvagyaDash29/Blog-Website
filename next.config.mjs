/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                // hostname: "images.pexels.com",
                hostname: "**",
            }
        ]
    }
};

export default nextConfig;
