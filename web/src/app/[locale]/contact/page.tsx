import { NavBar } from "@/component/NavBar"
import { Locales } from "@/i18n/i18n-types"
import { i18nObject } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import Image from "next/image"
import { Form } from "./Form"

const Header = () => (
  <div className="pt-15 space-y-10">
    <div className="text-center text-zinc-800 text-3xl font-medium">Contact Us</div>
    <div className=" relative aspect-ratio-375/426">
      <Image src={"/contact/bg.png"} alt={"contact"} fill />
    </div>
  </div>
)

export default function Licenses({
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
