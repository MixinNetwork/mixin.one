import { translate } from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"
import clsx from "clsx"

const FeatureCard = ({
  title,
  description,
  subDescription,
  background,
  to,
  className,
}: {
  title: string
  description: string
  subDescription: string
  background: string
  to: string
  className?: string
}) => {
  return (
    <>
      <LocalLink to={to} className="!sm:hidden">
        <img
          loading="lazy"
          src={require("@site/static/img/common/feature/" + background).default}
          alt={title}
          width={288}
          height={255}
          className="aspect-288/255 w-full object-cover"
        />
        <div className="bg bg-#333 px-4 pb-8 pt-5 text-white ">
          <div className="text-4.5 font-medium ">{title}</div>
          <div className="text-3.5 text-op-80 mt-2 text-white">
            {description}
          </div>
          <div className="mt-6 inline-flex items-center justify-start gap-2 shadow">
            <div className="text-3.5 font-medium">{subDescription} →</div>
          </div>
        </div>
      </LocalLink>
      <LocalLink
        to={to}
        className={clsx(
          "aspect-590/446 !sm:block relative !hidden",
          "p-0-10",
          className,
        )}
      >
        <img
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={require("@site/static/img/common/feature/" + background).default}
          alt={title}
        />
        <div className="from-opacity-90 via-opacity-17 absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-transparent" />
        <div className={clsx("font-medium text-white", "text-4-6")}>
          {title}
        </div>
        <div className="text-op-90 text-3.5-4 mt-4 text-white">
          {description}
        </div>
        <div className="mt-7 inline-flex items-center justify-start gap-2 shadow">
          <div className="text-3.5-4 font-medium leading-none text-white">
            {subDescription} →
          </div>
        </div>
      </LocalLink>
    </>
  )
}

export const FeatureCardSection = () => {
  return (
    <div className="sm:pt-22.5 sm:pb-45 container mx-auto grid gap-y-5  py-20 sm:grid-cols-2 sm:gap-3">
      <FeatureCard
        key="Decentralization"
        title={translate({ message: "Decentralization" })}
        description={translate({
          message:
            "Not your keys, not your coins. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings.",
        })}
        subDescription={translate({
          message: "Learn Decentralization",
        })}
        background="decentralization.webp"
        to="/features/decentralization"
        className="sm:aspect-1200/470 sm:col-span-full"
      />

      <FeatureCard
        key="Confidence"
        title={translate({ message: "Confidence" })}
        description={translate({
          message:
            "Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold.",
        })}
        subDescription={translate({ message: "Mature Technologies" })}
        background="confidence.webp"
        to="/features/confidence"
      />

      <FeatureCard
        key="Reliability"
        title={translate({ message: "Reliability" })}
        description={translate({
          message:
            "Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography.",
        })}
        subDescription={translate({ message: "Bitcoin Technology" })}
        background="reliability.webp"
        to="/features/reliability"
      />
      <FeatureCard
        key="Privacy"
        title={translate({ message: "Privacy" })}
        description={translate({
          message:
            "We ensure you have maximum privacy by integrating various advanced technologies.",
        })}
        subDescription={translate({ message: "Privacy Technology" })}
        background="privacy.webp"
        to="/features/privacy"
      />

      <FeatureCard
        key="Compliance"
        title={translate({ message: "Compliance" })}
        description={translate({
          message:
            "Mixin is committed to working closely and collaboratively with regulators from around the world.",
        })}
        subDescription={translate({ message: "Regulatory Compliance" })}
        background="compliance.webp"
        to="features/compliance"
      />
    </div>
  )
}
