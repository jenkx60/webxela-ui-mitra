import Head from 'next/head'
import React from 'react'

const SEO = ({ title, description, keywords, image, url, author }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name='author' content={author} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title}/>
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:url' content={url}/>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default SEO;