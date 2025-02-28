/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	experimental: {
		optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
	},
};

export default nextConfig;
