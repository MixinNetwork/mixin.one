import { Locales } from "@/i18n/i18n-types"

const Link = ({ locale, href, children, className }: { locale: Locales; href: string; children: React.ReactNode; className?: string }) => (
  <a href={`/${locale}${href}`} className={className}>
    {children}
  </a>
)

export default Link
