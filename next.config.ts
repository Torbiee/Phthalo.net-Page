import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: [
		"192.168.1.188"
	],
  /* config options here */
  transpilePackages: ['three'],
};

export default nextConfig;
