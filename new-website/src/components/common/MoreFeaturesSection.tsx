import React from "react"
import SectionTitle from "./SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import LocalLink from "./LocaleLink"

const Item = ({ title, description, cover, to }: { title: string; description: string; cover: string; to: string }) => (
  <LocalLink to={to} className="bg-white rounded-sm shadow-lg space-y-5 pb-12">
    <img className="object-cover aspect-335/225 w-full" src={require("@site/static/img/common/feature/" + cover).default} alt={title} />
    <div className="text-[#333] text-xl font-medium leading-snug px-5">{title}</div>
    <div className="text-[#333] text-opacity-80 text-sm font-normal leading-snug px-5">{description}</div>
  </LocalLink>
)

export const MoreFeaturesSection = ({ omit }: { omit: "Decentralized" | "Confident" | "Reliable" | "Privacy" | "Compliant" }) => (
  <>
    <SectionTitle>
      <Translate>More Features</Translate>
    </SectionTitle>
    <div className="container mx-auto px-5 grid gap-5 grid-cols-2 lg:grid-cols-4 pb-35">
      {omit !== "Decentralized" && (
        <Item
          key="Decentralized"
          title={translate({ message: "Decentralized" })}
          description={translate({
            message:
              "Not your keys, not your coins. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings.",
          })}
          cover="decentralized.webp"
          to="/decentralized"
        />
      )}

      {omit !== "Confident" && (
        <Item
          key="Confident"
          title={translate({ message: "Confident" })}
          description={translate({ message: "Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold." })}
          cover="confident.webp"
          to="/confident"
        />
      )}

      {omit !== "Reliable" && (
        <Item
          key="Reliable"
          title={translate({ message: "Reliable" })}
          description={translate({ message: "Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography." })}
          cover="reliable.webp"
          to="/reliable"
        />
      )}

      {omit !== "Privacy" && (
        <Item
          key="Privacy"
          title={translate({ message: "Privacy" })}
          description={translate({ message: "We ensure you have maximum privacy by integrating various advanced technologies." })}
          cover="privacy.webp"
          to="/privacy"
        />
      )}

      {omit !== "Compliant" && (
        <Item
          key="Compliant"
          title={translate({ message: "Compliant" })}
          description={translate({ message: "Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold." })}
          cover="compliant.webp"
          to="/licenses"
        />
      )}
    </div>
  </>
)
