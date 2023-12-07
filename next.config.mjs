import withPlaiceholder from "@plaiceholder/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.namu.wiki", "localhost"],
  },
}

export default withPlaiceholder(nextConfig)
