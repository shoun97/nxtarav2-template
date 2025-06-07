import withMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

export default withMDXConfig(nextConfig);
