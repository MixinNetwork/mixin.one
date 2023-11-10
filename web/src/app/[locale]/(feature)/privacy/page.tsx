import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { HearFromOurCustomers } from "../../../../component/HearFromOurCustomers"
import { MoreFeatures } from "../../../../component/MoreFeatures"
import PageHeader from "../../../../component/route/PageHeader"
import { Section1 } from "./Section1"
import { GDPR } from "./GDPR"

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
      <PageHeader title={"Privacy by Design"} description="We go out of our way to ensure that you have the utmost privacy." />
      <Section1 />
      <GDPR />
      <HearFromOurCustomers />
      <MoreFeatures omit={"Privacy"} />
    </>
  )
}
