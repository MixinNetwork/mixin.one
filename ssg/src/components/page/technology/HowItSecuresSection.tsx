import clsx from "clsx"
import SectionTitle from "../../common/SectionTitle"
import Translate from "@docusaurus/Translate"
import Card from "../../common/Card"

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

      <div className="container mx-auto">
        <img
          loading="lazy"
          src={require("@site/static/img/page/technology/1.1.webp").default}
          width={3582}
          height={1956}
        />
        <div className="mt-15-20 pb-40-20 grid auto-rows-fr gap-y-5">
          <Card
            cover={require("@site/static/img/page/technology/1.2.webp").default}
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

          <Card
            cover={require("@site/static/img/page/technology/1.3.webp").default}
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

          <Card
            cover={require("@site/static/img/page/technology/1.4.webp").default}
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
