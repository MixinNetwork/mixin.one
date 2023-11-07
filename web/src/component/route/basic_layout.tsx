import { LLProps, loadI18nObject } from "@/i18n/custom"
import { Locales } from "@/i18n/i18n-types"
import Footer from "./footer"
import { Toaster } from "sonner"

export default function BasicLayout({ children, LL, locale }: LLProps & { children: React.ReactNode; locale: Locales }) {
  return (
    <html lang={locale}>
      <body>
        <Toaster />
        <div>{children}</div>
        <Footer LL={LL} />
      </body>
    </html>
  )
}
