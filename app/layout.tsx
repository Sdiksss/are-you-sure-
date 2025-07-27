import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'rayken',
  description: 'Created by rayken',
  generator: 'dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="en">
    <head>
      <title>rayken</title>
      <meta name="title" content="rayken" />
      <meta name="description" content="Created by rayken" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://are-you-sure.onrender.com/" />
      <meta property="og:title" content="rayken" />
      <meta property="og:description" content="Created by rayken" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://are-you-sure.onrender.com/" />
      <meta property="twitter:title" content="rayken" />
      <meta property="twitter:description" content="Created by rayken" />
      <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

      <style>{`
        html {
          font-family: ${GeistSans.style.fontFamily};
          --font-sans: ${GeistSans.variable};
          --font-mono: ${GeistMono.variable};
        }
      `}</style>
    </head>
    <body>{children}</body>
  </html>
)
}
