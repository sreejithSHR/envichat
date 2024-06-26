import Head from 'next/head'
import React from 'react'

export const SocialMetaTags = ({
  title = 'Envichat - A no-code conversational Chatbot  builder',
  description = 'Powerful blocks to create unique chat experiences. Embed them anywhere on your apps and start collecting results like magic.',
  currentUrl,
  imagePreviewUrl = 'https://cdn.glitch.global/7128924b-fdd1-4fe5-9767-8faae7bf1426/Gradient%20Minimalist%20Black%20Friday%20Poster%20Landscape%20(1).png?v=1710843973918',
}: {
  title?: string
  description?: string
  currentUrl: string
  imagePreviewUrl?: string
}) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />

    <meta property="twitter:url" content={currentUrl} />
    <meta property="og:url" content={currentUrl} />

    <meta name="description" content={description} />
    <meta property="twitter:description" content={description} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={imagePreviewUrl} />
    <meta property="twitter:image" content={imagePreviewUrl} />

    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />

    <meta property="fb:app_id" content="2919783058077552" />
  </Head>
)
