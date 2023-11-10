import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { Header } from "./Header"
import { HearFromOurCustomers } from "../../../../component/HearFromOurCustomers"
import { MoreFeatures } from "../../../../component/MoreFeatures"

export default function Root({
  params: { locale },
}: {
  params: {
    locale: Locales
  }
}) {
  loadLocale(locale)
  const LL = i18nObject(locale)

  return (
    <>
      <NavBar LL={LL} locale={locale} />
      <Header />
      <HearFromOurCustomers />
      <MoreFeatures omit={"Compliant"} />
    </>
  )
}
