import { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

const FeatureCard = ({ title, description, subDescription, background, to }: { title: string; description: string; subDescription: string; background: string; to: string }) => {
  return (
    <LocalLink to={to} className="aspect-335/255 relative py-4 px-5 first:sm:col-span-2 first:sm:aspect-664/261">
      <img loading="lazy" className="absolute -z-20 object-cover inset-0 w-full h-full" src={require("@site/static/img/common/feature/" + background).default} alt={title} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black from-opacity-90 via-black via-opacity-17 to-transparent" />
      <div className="text-white text-lg font-medium leading-tight">{title}</div>
      <div className="mt-3 text-white text-opacity-80 text-sm font-normal leading-snug">{description}</div>
      <div className="mt-5 shadow justify-start items-center gap-2 inline-flex">
        <div className="text-white text-base font-medium leading-none">{subDescription} →</div>
      </div>
    </LocalLink>
  )
}

export const FeatureCardSection = () => {
  return (
    <div className="grid gap-y-5 px-5 py-20 sm:grid-cols-2 sm:gap-3 sm:pt-22.5 sm:pb-45 container mx-auto">
      <FeatureCard
        key="Decentralization"
        title={translate({ message: "Decentralization" })}
        description={translate({
          message: "Not your keys, not your coins. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings.",
        })}
        subDescription={translate({
          message: "Learn Decentralization",
        })}
        background="decentralization.webp"
        to="/features/decentralization"
      />

      <FeatureCard
        key="Confidence"
        title={translate({ message: "Confidence" })}
        description={translate({ message: "Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold." })}
        subDescription={translate({ message: "Mature Technologies" })}
        background="confidence.webp"
        to="/features/confidence"
      />

      <FeatureCard
        key="Reliability"
        title={translate({ message: "Reliability" })}
        description={translate({ message: "Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography." })}
        subDescription={translate({ message: "Bitcoin Technology" })}
        background="reliability.webp"
        to="/features/reliability"
      />
      <FeatureCard
        key="Privacy"
        title={translate({ message: "Privacy" })}
        description={translate({ message: "We ensure you have maximum privacy by integrating various advanced technologies." })}
        subDescription={translate({ message: "Privacy Technology" })}
        background="privacy.webp"
        to="/features/privacy"
      />

      <FeatureCard
        key="Compliance"
        title={translate({ message: "Compliance" })}
        description={translate({ message: "Mixin is committed to working closely and collaboratively with regulators from around the world." })}
        subDescription={translate({ message: "Regulatory Compliance" })}
        background="compliance.webp"
        to="features/compliance"
      />
    </div>
  )
}
