import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// "standalone" es solo para Docker. Vercel gestiona su propia salida y
	// falla si se activa (no encuentra .next/next-server.js.nft.json).
	output: process.env.VERCEL ? undefined : 'standalone',
};

export default nextConfig;
