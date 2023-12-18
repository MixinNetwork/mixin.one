import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { translate } from "@docusaurus/Translate"

export function useTitleFormatter(title?: string | undefined): string {
  const {
    siteConfig: { title: siteTitle, titleDelimiter },
  } = useDocusaurusContext()
  const i18nSiteTitle = translate({ message: siteTitle })

  if (i18nSiteTitle === title) return title
  if (title?.trim().length)
    return `${title.trim()} ${titleDelimiter} ${i18nSiteTitle}`
  return i18nSiteTitle
}
