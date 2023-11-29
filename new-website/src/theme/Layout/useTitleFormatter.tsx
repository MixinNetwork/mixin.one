import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { translate } from "@docusaurus/Translate"

export function useTitleFormatter(title?: string | undefined): string {
  const { siteConfig } = useDocusaurusContext()
  let { title: siteTitle, titleDelimiter } = siteConfig
  siteTitle = translate({ message: siteTitle })
  return title?.trim().length ? `${title.trim()} ${titleDelimiter} ${siteTitle}` : siteTitle
}
