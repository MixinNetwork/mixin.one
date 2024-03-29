import React from "react"
import SectionTitle from "./SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "./LocaleLink"

const Item = ({
  title,
  description,
  cover,
  to,
}: {
  title: string
  description: string
  cover: string
  to: string
}) => (
  <LocalLink to={to} className="rounded-sm bg-white pb-12 shadow">
    <img
      loading="lazy"
      className="aspect-335/225 w-full object-cover"
      src={require("@site/static/img/common/feature/" + cover).default}
      alt={title}
    />
    <div className="text-#000 text-5 mt-6-8 px-5 font-medium leading-[1.5]">
      {title}
    </div>
    <div className="text-#000 text-3.5-4 text-op-70 mt-2-2.5 px-5 font-normal leading-[1.5]">
      {description}
    </div>
  </LocalLink>
)

export const MoreFeaturesSection = ({
  omit,
}: {
  omit:
    | "Decentralization"
    | "Confidence"
    | "Reliability"
    | "Privacy"
    | "Compliance"
}) => (
  <>
    <SectionTitle>
      <Translate>More Features</Translate>
    </SectionTitle>
    <div className="pb-35 container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
      {omit !== "Decentralization" && (
        <Item
          key="Decentralization"
          title={translate({ message: "Decentralization" })}
          description={translate({
            message:
              "Not your keys, not your coins. We steadfastly avoid centralized companies acting as custodians of your Bitcoin.",
          })}
          cover="decentralization.webp"
          to="/features/decentralization"
        />
      )}

      {omit !== "Confidence" && (
        <Item
          key="Confidence"
          title={translate({ message: "Confidence" })}
          description={translate({
            message:
              "Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold.",
          })}
          cover="confidence.webp"
          to="/features/confidence"
        />
      )}

      {omit !== "Reliability" && (
        <Item
          key="Reliability"
          title={translate({ message: "Reliability" })}
          description={translate({
            message:
              "Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography.",
          })}
          cover="reliability.webp"
          to="/features/reliability"
        />
      )}

      {omit !== "Privacy" && (
        <Item
          key="Privacy"
          title={translate({ message: "Privacy" })}
          description={translate({
            message:
              "We ensure you have maximum privacy by integrating various advanced technologies.",
          })}
          cover="privacy.webp"
          to="/features/privacy"
        />
      )}

      {omit !== "Compliance" && (
        <Item
          key="Compliance"
          title={translate({ message: "Compliance" })}
          description={translate({
            message:
              "Mixin is committed to working closely and collaboratively with regulators from around the world.",
          })}
          cover="compliance.webp"
          to="features/compliance"
        />
      )}
    </div>
  </>
)
