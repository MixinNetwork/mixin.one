import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"

const Item = ({ cover, title, description }: { cover: string; title: React.ReactNode; description: React.ReactNode }) => (
  <div className="bg-slate-100 rounded-sm pt-15 px-5 pb-30 flex flex-col items-center md:flex-row md:odd:flex-row-reverse gap-15">
    <img src={require("@site/static/img/page/technology/" + cover).default} className="aspect-335/320 h-full object-cover " />
    <div>
      <div className="text-zinc-800 text-xl font-medium leading-snug">{title}</div>
      <div className="mt-6.5 text-zinc-800 text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
    </div>
  </div>
)

export const HowItSecuresSection = () => {
  return (
    <>
      <SectionTitle description={<Translate>We never invent our own cryptographic techniques</Translate>}>
        <Translate>How it Secures</Translate>
      </SectionTitle>

      <div className="container mx-auto px-5">
        <img src={require("@site/static/img/page/technology/1.1.png").default} className="aspect-335/320 w-full" />
        <div className="mt-20 md:mt-5 grid gap-y-5 auto-rows-fr pb-45">
          <Item
            cover="1.2.png"
            title={<Translate>Decentralized Network</Translate>}
            description={
              <Translate>
                We lead the development and construction of multiple decentralized networks and combine Bitcoin, Ethereum and other Layer 1 to provide multi-chain, high-speed free transfer, key
                sharding decentralized underlying network.
              </Translate>
            }
          />

          <Item
            cover="1.3.png"
            title={<Translate>Decentralized Wallet</Translate>}
            description={
              <Translate>
                Based on multiple decentralized networks, we build Mixin Safe multi-signature cold wallet and MPC hot wallet with social recovery, and your assets are always under your control.
              </Translate>
            }
          />

          <Item
            cover="1.4.png"
            title={<Translate>Decentralized Services</Translate>}
            description={
              <Translate>
                Based on a secure decentralized wallet service, I and our partners provide users with a series of decentralized products and services such as buying, trading, wealth management,
                inheritance, and recovery.
              </Translate>
            }
          />
        </div>
      </div>
    </>
  )
}
