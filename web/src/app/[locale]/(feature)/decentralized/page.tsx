import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { Locales } from "../../../../i18n/i18n-types"
import { NavBar } from "../../../../component/NavBar"
import { Header } from "./Header"
import { CentralizationSection } from "./CentralizationSection"
import { HearFromOurCustomers } from "../../../../component/HearFromOurCustomers"
import { DecentralizationSection } from "./DecentralizationSection"
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
      <CentralizationSection />
      <DecentralizationSection />
      <HearFromOurCustomers />
      <MoreFeatures omit={"Decentralized"} />
    </>
  )
}
