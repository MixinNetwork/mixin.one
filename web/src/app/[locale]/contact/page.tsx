import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import Image from "next/image"
import { Form } from "./Form"
import PageHeader from "../../../component/route/PageHeader"

const Header = () => (
  <>
    <PageHeader title="Contact Us" />
    <div className="relative aspect-375/426">
      <Image src={"/contact/bg.png"} alt={"contact"} fill />
    </div>
  </>
)

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
      <Form />
    </>
  )
}
