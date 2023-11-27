import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import clsx from "clsx"

import Icon11 from "@site/static/img/page/decentralization/3.1.2.svg"
import Icon12 from "@site/static/img/page/decentralization/3.1.3.svg"
import Icon13 from "@site/static/img/page/decentralization/3.1.4.svg"
import Icon14 from "@site/static/img/page/decentralization/3.1.5.svg"

import Icon21 from "@site/static/img/page/decentralization/3.2.2.svg"
import Icon22 from "@site/static/img/page/decentralization/3.2.3.svg"
import Icon23 from "@site/static/img/page/decentralization/3.2.4.svg"
import Icon24 from "@site/static/img/page/decentralization/3.2.5.svg"
import { SpecialLayout, SpecialLayoutItem } from "../../common/SpecialLayout"

export const MixinIsDecentralizationSection = () => {
  return (
    <SpecialLayout>
      <SpecialLayoutItem
        cover={require("@site/static/img/page/decentralization/3.1.1.webp").default}
        coverClassName="aspect-562/662"
        title={<Translate>Mixin is Decentralization</Translate>}
        description={<Translate>We lead the development of multiple open-source decentralized networks</Translate>}
        points={[
          {
            icon: <Icon11 />,
            title: translate({
              message: "Based on decentralized networks",
            }),
            description: <Translate>Integrate assets and smart contracts of Layer 1 networks such as Bitcoin and Ethereum, as well as technologies such as time lock and PSBT.</Translate>,
          },
          {
            icon: <Icon12 />,
            title: translate({
              message: "Decentralized MPC network",
            }),
            description: <Translate>Decentralized MPC network allows your family, friends or colleagues to participate in the management of the vault together.</Translate>,
          },
          {
            icon: <Icon13 />,
            title: translate({
              message: "Decentralized multi-chain ledger",
            }),
            description: <Translate>Decentralized multi-chain ledger Mixin Network provides a free and fast cross-chain ledger to realize commercial applications.</Translate>,
          },
          {
            icon: <Icon14 />,
            title: translate({
              message: "Decentralized key network",
            }),
            description: <Translate>Decentralized key network TIP Network helps users use private keys in an easy-to-remember way.</Translate>,
          },
        ]}
      />
      <SpecialLayoutItem
        title={<Translate>Mixin adopts decentralized technology</Translate>}
        description={<Translate>We never invent our own cryptographic techniques</Translate>}
        cover={require("@site/static/img/page/decentralization/3.2.1.webp").default}
        coverClassName="aspect-562/662"
        points={[
          {
            icon: <Icon21 />,
            title: translate({
              message: "Multisig",
            }),
            description: (
              <Translate>Multi-signature technology makes it easy for you and your family, friends and colleagues to jointly manage large assets to avoid single point of failure.</Translate>
            ),
          },
          {
            icon: <Icon22 />,
            title: translate({
              message: "MPC - TSS",
            }),
            description: <Translate>Multi-party computing (MPC) threshold signature scheme (TSS) helps you to control your assets more securely and conveniently.</Translate>,
          },
          {
            icon: <Icon23 />,
            title: translate({
              message: "MTG",
            }),
            description: <Translate>Mixin Trust Group (MTG) technology allows you to interact with decentralized applications in a smoother and easier way.</Translate>,
          },
          {
            icon: <Icon24 />,
            title: translate({
              message: "More",
            }),
            description: <Translate>Smart contracts, PSBT technology and time lock technology ensure that the Mixin team cannot do evil and take away your assets.</Translate>,
          },
        ]}
      />
    </SpecialLayout>
  )
}
