import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import clsx from "clsx"

import Icon11 from "@site/static/img/page/decentralized/3.1.2.svg"
import Icon12 from "@site/static/img/page/decentralized/3.1.3.svg"
import Icon13 from "@site/static/img/page/decentralized/3.1.4.svg"
import Icon14 from "@site/static/img/page/decentralized/3.1.5.svg"

import Icon21 from "@site/static/img/page/decentralized/3.2.2.svg"
import Icon22 from "@site/static/img/page/decentralized/3.2.3.svg"
import Icon23 from "@site/static/img/page/decentralized/3.2.4.svg"
import Icon24 from "@site/static/img/page/decentralized/3.2.5.svg"

const Item = ({
  cover,
  points,
  title,
  description,
  className,
}: {
  cover: string
  title: React.ReactNode
  description: React.ReactNode
  points: {
    icon: React.ReactNode
    title: string
    description: React.ReactNode
  }[]
  className?: string
}) => (
  <div>
    <SectionTitle description={description}>{title}</SectionTitle>

    <div className={clsx("pb-15 grid gap-y-15 sm:gap-x-24 md:gap-x-28 lg:gap-x-32 items-center sm:grid-cols-2 group", className)}>
      <img src={require("@site/static/img/page/decentralized/" + cover).default} className="aspect-562/662 w-full object-cover self-start sm:group-odd:order-last" />
      <div className="grid gap-y-4 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 px-5 sm:px-0">
        {points.map(({ icon, title, description }) => (
          <div key={title} className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5">
            {icon}
            <div className="text-[#333] text-4 sm:text-5 md:text-6 lg:text-7 font-medium">{title}</div>
            <div className="text-[#333] text-opacity-80 text-3.5 sm:text-4 font-normal col-span-2">{description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const MixinIsDecentralizationSection = () => {
  return (
    <div className="container mx-auto pb-25">
      <Item
        cover={"3.1.1.webp"}
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
        className="sm:flex-row-reverse!"
      />
      <Item
        title={<Translate>Mixin adopts decentralized technology</Translate>}
        description={<Translate>We never invent our own cryptographic techniques</Translate>}
        cover={"3.2.1.webp"}
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
    </div>
  )
}
