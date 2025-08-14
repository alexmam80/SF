import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, image, type = 'website', noindex = false, jsonLd }) {
  const { pathname } = useLocation()
  const siteUrl = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
  const url = siteUrl ? siteUrl + pathname : pathname
  const pageTitle = title ? `${title} | MyLogo` : 'MyLogo'
  const ogImg = image || (siteUrl ? `${siteUrl}/og-default.jpg` : '/og-default.jpg')

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {siteUrl && <link rel="canonical" href={url} />}

      <meta property="og:type" content={type} />
      {siteUrl && <meta property="og:url" content={url} />} 
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      {ogImg && <meta property="og:image" content={ogImg} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImg && <meta name="twitter:image" content={ogImg} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}