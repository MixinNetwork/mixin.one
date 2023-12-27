import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"

const Item = ({
  cover,
  title,
  description,
}: {
  cover: string
  title: React.ReactNode
  description: React.ReactNode
}) => (
  <div className="pb-30 md:px-30 group grid items-center overflow-hidden rounded-sm bg-zinc-100 px-5 md:grid-cols-2 md:gap-20 md:pb-0">
    <div className="p-15 lg:p-15 md:p-5 md:group-odd:order-last">
      <img
        loading="lazy"
        src={require("@site/static/img/page/technology/" + cover).default}
        className="aspect-335/320 w-full object-cover "
      />
    </div>

    <div className="md:py-15">
      <div className="text-xl font-medium leading-snug text-[#333]">
        {title}
      </div>
      <div className="mt-6.5 text-base font-normal leading-relaxed text-[#333] text-opacity-80">
        {description}
      </div>
    </div>
  </div>
)

export const HowItSecuresSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            We never invent our own cryptographic techniques.
          </Translate>
        }
      >
        <Translate>How it Secures</Translate>
      </SectionTitle>

      <div className="container mx-auto ">
        <img
          loading="lazy"
          src={require("@site/static/img/page/technology/1.1.webp").default}
          width={3582}
          height={1956}
        />
        <div className="pb-45 mt-20 grid auto-rows-fr gap-y-5 md:mt-5">
          <Item
            cover="1.2.webp"
            title={<Translate>Decentralized Network</Translate>}
            description={
              <Translate>
                We are the core developers of Mixin Kernel, a developer friendly
                network with lightning speed and zero transaction fee, all
                powered by decentralized nodes. We build all our products on
                Mixin Kernel, Bitcoin, Ethereum and other popular blockchains
                directly.
              </Translate>
            }
          />

          <Item
            cover="1.3.webp"
            title={<Translate>Decentralized Wallet</Translate>}
            description={
              <Translate>
                Mixin Safe and Mixin Messenger are self-custodial crypto
                wallets, with built-in multisig, MPC, time lock and other mature
                decentralized technologies. Your assets are always under your
                control.
              </Translate>
            }
          />

          <Item
            cover="1.4.webp"
            title={<Translate>Decentralized Apps</Translate>}
            description={
              <Translate>
                Based on our decentralized network and wallets, developers have
                built many popular products and services. These decentralized
                apps can serve trading, lending, payment and many other demands.
              </Translate>
            }
          />
        </div>
      </div>
    </>
  )
}
