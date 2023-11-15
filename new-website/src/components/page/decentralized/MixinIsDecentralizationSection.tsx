import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import clsx from "clsx"

const Item = ({ cover, title, description, points, className }: { cover: string; title: string; description?: string; points: string[]; className?: string }) => (
  <div className={clsx("pt-15 pb-15 flex flex-col gap-15 items-center sm:flex-row", className)}>
    <img src={require("@site/static/img/page/decentralized/" + cover).default} alt={title} className="aspect-335/225 w-full h-full grow" />

    <div className="shrink">
      <div className="text-zinc-800 text-xl font-medium leading-relaxed">{title}</div>
      {description && <div className="mt-5 text-zinc-800 text-sm font-normal leading-snug">{description}</div>}
      <ol className="mt-5 list-disc list-inside space-y-3">
        {points.map((point) => (
          <li key={point} className="text-zinc-800 text-opacity-80 text-sm font-normal leading-snug flex space-x-2">
            <div className="w-2 h-4.5 flex-center shrink-0">
              <div className="w-2 h-2 bg-zinc-800 rounded-full" />
            </div>

            <div>{point}</div>
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export const MixinIsDecentralizationSection = () => {
  return (
    <div className="bg-slate-100">
      <SectionTitle
        description={translate({
          message: "We lead the development of multiple open-source decentralized networks",
        })}
      >
        <Translate>Mixin is Decentralization</Translate>
      </SectionTitle>
      <div className="container mx-auto px-5 pb-25">
        <Item
          cover={"3.1.png"}
          title={translate({ message: "Decentralized Network" })}
          description={translate({
            message:
              "We lead the development of multiple open-source decentralized networks and combine Bitcoin, Ethereum and other Layer 1 to provide multi-chain, high-speed free transfer, key sharding decentralized underlying network.",
          })}
          points={[
            translate({ message: "Integrate assets and smart contracts of Bitcoin, Ethereum and other Layer 1, as well as technologies such as time lock and PSBT." }),
            translate({ message: "Decentralized Safe Network allows your family, friends or colleagues to participate in the management of the vault together." }),
            translate({ message: "Decentralized ledger Mixin Network provides a free and fast cross-chain ledger to realize commercial applications." }),
            translate({ message: "Decentralized MPC key network TIP Network helps users better use private keys in a way that is easy to remember." }),
          ]}
          className="sm:flex-row-reverse!"
        />
        <Item
          cover={"3.2.png"}
          title={translate({ message: "Decentralized Technology" })}
          points={[
            translate({ message: "Multi-signature technology makes it easy for you to manage large assets with your family, friends and colleagues to avoid single point of failure." }),
            translate({ message: "The threshold signature scheme (TSS) of multi-party computing (MPC) helps you to control your assets more safely and conveniently." }),
            translate({ message: "MTG technology enables you to interact with decentralized applications in a smoother and easier way." }),
            translate({ message: "Smart contracts, PSBT technology and time lock technology ensure that the Mixin team cannot do evil to take away your assets." }),
          ]}
        />
      </div>
    </div>
  )
}
