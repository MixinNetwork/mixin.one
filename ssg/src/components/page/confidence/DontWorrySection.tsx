import React from "react"
import { translate } from "@docusaurus/Translate"
import { CardSectionLayout } from "../../common/CardSectionLayout"

import Icon1 from "@site/static/img/page/confidence/3.1.svg"
import Icon2 from "@site/static/img/page/confidence/3.2.svg"
import Icon3 from "@site/static/img/page/confidence/3.3.svg"
import Icon4 from "@site/static/img/page/confidence/3.4.svg"
import Icon5 from "@site/static/img/page/confidence/3.5.svg"
import Icon6 from "@site/static/img/page/confidence/3.6.svg"

export const DontWorrySection = () => {
  return (
    <CardSectionLayout
      title={translate({
        message: "Don't worry",
      })}
      description={translate({
        message:
          "We have an ongoing security audit process that keeps all Mixin infrastructures secured.",
      })}
      items={[
        {
          icon: Icon1,
          title: translate({
            message: "Enjoy Interaction",
          }),
          description: translate({
            message:
              "Thanks to asset read-only authorization, Dapp whitelist and approval process, you can safely consume or invest in cryptocurrencies without worrying about potential risks when using Dapp, such as authorization vulnerabilities.",
          }),
        },
        {
          icon: Icon2,
          title: translate({ message: "Co-management" }),
          description: translate({
            message:
              "The perfect approval process ensures the security and transparency of funds. Unlike other multi-signature wallets, Mixin Safe's dual multi-signature technology and key sharding technology can avoid potential multi-signature collusion issues.",
          }),
        },
        {
          icon: Icon3,
          title: translate({ message: "Asset Recovery" }),
          description: translate({
            message:
              "When your vault private key is lost or the MPC wallet cannot be logged in, you can regain control of your assets through the vault recovery service and emergency contact.",
          }),
        },
        {
          icon: Icon4,
          title: translate({ message: "Enhanced Privacy" }),
          description: translate({
            message:
              "End-to-end encryption technology and CryptoNote technology protect the privacy of your chat and transfer information. The information is encrypted and ensures that only the two parties of the interaction can decrypt it. No third party can peep into your privacy data.",
          }),
        },
        {
          icon: Icon5,
          title: translate({ message: "Fixed Fee" }),
          description: translate({
            message:
              "Whether the price of Bitcoin rises or you increase your Bitcoin holdings, Mixin Safe only charges a fixed service fee, which will not change with the number and price of assets you host or transfer.",
          }),
        },
        {
          icon: Icon6,
          title: translate({ message: "Customer Support" }),
          description: translate({
            message:
              "Perfect documentation and intimate customer service are always ready to help you solve various problems. You can focus on wealth growth without being trapped in asset security issues.",
          }),
        },
      ]}
    />
  )
}
