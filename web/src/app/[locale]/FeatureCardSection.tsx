import Image from "next/image"
import { LLProps } from "../../i18n/custom"
import Link from "../../component/route/Link"
import { Locales } from "../../i18n/i18n-types"

const FeatureCard = ({
  title,
  description,
  subDescription,
  background,
  locale,
  href,
}: {
  title: string
  description: string
  subDescription: string
  background: string
  locale: Locales
  href: string
}) => (
  <Link locale={locale} href={href} className="aspect-335/255 relative py-4 px-5 first:sm:col-span-2 first:sm:aspect-664/261">
    <Image className="absolute -z-20 object-cover" fill src={"/feature/" + background} alt={title} />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black from-opacity-90 via-black via-opacity-17 to-transparent" />
    <div className="text-white text-lg font-medium leading-tight">{title}</div>
    <div className="mt-3 text-white text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    <div className="mt-5 shadow justify-start items-center gap-2 inline-flex">
      <div className="text-white text-base font-medium leading-none">{subDescription} →</div>
    </div>
  </Link>
)

export const FeatureCardSection = (props: LLProps) => {
  return (
    <div className="grid gap-y-5 px-5 py-20 sm:grid-cols-2 sm:gap-3 sm:pt-22.5 sm:pb-45 container mx-auto">
      <FeatureCard
        key="Decentralized"
        title="Decentralized"
        description="Not your keys, not your coins. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings."
        subDescription="Learn Decentralization"
        background="decentralized.webp"
        locale={props.locale}
        href="/decentralized"
      />

      <FeatureCard
        key="Confident"
        title="Confident"
        description="Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold."
        subDescription="See the Solutions"
        background="confident.webp"
        locale={props.locale}
        href="/confident"
      />

      <FeatureCard
        key="Reliable"
        title="Reliable"
        description="Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography."
        subDescription="Bitcoin Technology"
        background="reliable.webp"
        locale={props.locale}
        href="/reliable"
      />
      <FeatureCard
        key="Privacy"
        title="Privacy"
        description="We ensure you have maximum privacy by integrating various advanced technologies."
        subDescription="Privacy Technology"
        background="privacy.webp"
        locale={props.locale}
        href="/privacy"
      />

      <FeatureCard
        key="Compliant"
        title="Compliant"
        description="Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold."
        subDescription="See the Solutions"
        background="compliant.webp"
        locale={props.locale}
        href="/license"
      />
    </div>
  )
}
