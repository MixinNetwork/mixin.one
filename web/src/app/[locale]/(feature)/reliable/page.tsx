import clsx from "clsx"
import { NavBar } from "../../../../component/NavBar"
import PageHeader from "../../../../component/route/PageHeader"
import { Locales } from "../../../../i18n/i18n-types"
import { i18nObject } from "../../../../i18n/i18n-util"
import { loadLocale } from "../../../../i18n/i18n-util.sync"
import { HearFromOurCustomers } from "../../../../component/HearFromOurCustomers"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { ReliableServiceSection } from "./ReliableServiceSection"
import { ReliableSingerSection } from "./ReliableSingerSection"
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
      <PageHeader title="Reliable Technical Service" description="We never invent our own cryptographic techniques" />
      <Section1 />
      <Section2 />
      <ReliableServiceSection />
      <ReliableSingerSection />
      <HearFromOurCustomers />
      <MoreFeatures omit={"Reliable"} />
    </>
  )
}
