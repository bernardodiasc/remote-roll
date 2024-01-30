/** @type {import('next').NextConfig} */

const isGHPages = process.env.APP_ENV === 'ghpages'
const githubUrl = 'https://bernardodiasc.github.io'
const siteBasePath = 'remote-roll'
const assetPrefix = isGHPages ? `${githubUrl}/${siteBasePath}` : undefined
const basePath = isGHPages ? `/${siteBasePath}` : undefined

const nextConfig = {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
