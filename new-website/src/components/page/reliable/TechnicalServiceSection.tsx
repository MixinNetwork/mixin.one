import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import clsx from "clsx"

const Item = ({ index, title, description, left }: { index: number; title: string; description: string; left?: boolean }) => (
  <div className="flex flex-col gap-4">
    <div className={clsx("flex flex-row gap-4 items-center", left && "md:flex-row-reverse")}>
      <div className="w-5 h-5 leading-none bg-zinc-800 rounded-full text-sm text-white flex-center">{index}</div>
      <div className="text-zinc-800 text-xl font-medium leading-tight">{title}</div>
    </div>

    <div className={clsx("col-span-2 text-zinc-800 text-opacity-80 text-sm font-normal leading-snug", left ? "md:text-end mr-9" : "md:ml-9")}>{description}</div>
  </div>
)

const SecureAssetCustodySection = () => (
  <div className="container mx-auto">
    <div className="relative bg-zinc-800 rounded-sm px-5 pt-10 pb-15 text-white text-opacity-90 text-center text-base font-normal leading-relaxed">
      <Translate>
        Mixin Safe is committed to providing users with safe and stable asset management services. We always use proven Bitcoin encryption technologies, such as multi-signature, time lock, MPC,
        threshold signature, P2SH and hardware wallet technology. These mature and reliable technologies complement each other to ensure the safety of assets and ensure that customers can use our
        products with confidence.
      </Translate>
    </div>
  </div>
)

export const TechnicalServiceSection = () => {
  return (
    <>
      <SectionTitle
        description={translate({
          message: "We never invent our own cryptographic techniques",
        })}
      >
        <Translate>Reliable Technical Service</Translate>
      </SectionTitle>
      <div className="pb-15">
        <div className="mt-10 container mx-auto px-10 grid gap-y-15 md:grid-cols-[1fr_auto_1fr] md:gap-x-22 pb-20 md:pb-45">
          <img src={useBaseUrl("/img/page/reliable/1.1.svg")} className="m-auto md:order-1 aspect-268/517" />
          <div className="space-y-15 md:order-0">
            <Item
              index={1}
              title={translate({
                message: "Multisig",
              })}
              description={translate({
                message: "The bitcoin multi-signature feature is designed to require M signatures from a total of N keys, known as an M-of-N multisig, where M is equal to or less than N.",
              })}
              left
            />

            <Item
              index={2}
              title={translate({ message: "Timelock" })}
              description={translate({
                message: "Timelocks are one of the most practical functionalities of Bitcoin, allowing you the ability to program actions according to a series of parameters.",
              })}
              left
            />

            <Item
              index={3}
              title={translate({ message: "P2SH" })}
              description={translate({
                message: "Pay-to-Script-Hash (P2SH) is a type of transaction which allows for the spending of bitcoin based on the satisfaction of any script provided by the sender.",
              })}
              left
            />
          </div>
          <div className="space-y-15 md:order-2">
            <Item
              index={4}
              title={"MPC - TSS"}
              description={"Safe Wallet use of Threshold Signature Scheme (TSS) technology based on Multi-Party Computation (MPC) offers users the complete control over their digital assets."}
            />

            <Item
              index={5}
              title={"PoS Network"}
              description={"The bitcoin multi-signature feature is designed to require M signatures from a total of N keys, known as an M-of-N multisig, where M is equal to or less than N."}
            />

            <Item index={6} title={"Hardware Wallet"} description={"A hardware wallet is a high-security bitcoin wallet that enables you to store your funds offline."} />
          </div>
        </div>
        <SecureAssetCustodySection />
      </div>
    </>
  )
}
