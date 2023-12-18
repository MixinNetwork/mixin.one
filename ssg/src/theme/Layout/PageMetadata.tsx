import React, { ReactNode } from "react"
import Head from "@docusaurus/Head"
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl"
import { useTitleFormatter } from "./useTitleFormatter"

type PageMetadataProps = {
  readonly title?: string
  readonly description?: string
  readonly keywords?: readonly string[] | string
  readonly image?: string
  readonly children?: ReactNode
}

export function PageMetadata({
  title,
  description,
  keywords,
  image,
  children,
}: PageMetadataProps): JSX.Element {
  const pageTitle = useTitleFormatter(title)
  const { withBaseUrl } = useBaseUrlUtils()
  const pageImage = image ? withBaseUrl(image, { absolute: true }) : undefined

  return (
    <Head>
      {title && <title>{pageTitle}</title>}
      {title && <meta property="og:title" content={pageTitle} />}

      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}

      {keywords && (
        <meta
          name="keywords"
          content={
            // https://github.com/microsoft/TypeScript/issues/17002
            (Array.isArray(keywords) ? keywords.join(",") : keywords) as string
          }
        />
      )}

      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image" content={pageImage} />}

      {children}
    </Head>
  )
}
