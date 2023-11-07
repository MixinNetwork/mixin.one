import { genStaticParams } from "@/helper/route"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject, locales } from "@/i18n/i18n-util"
import BasicLayout from "@/component/route/basic_layout"
import { loadLocale } from "@/i18n/i18n-util.sync"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
export default function Root({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: Locales
  }
}) {
  loadLocale(locale)
  const LL = i18nObject(locale)
  return (
    <BasicLayout LL={LL} locale={locale}>
      {children}
    </BasicLayout>
  )
}
