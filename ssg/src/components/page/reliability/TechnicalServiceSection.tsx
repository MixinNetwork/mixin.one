import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import clsx from "clsx"
import GrayBackgroundWrapper from "../../common/GrayBackground"
import { WoodGrainBackgroundTextSection } from "../../common/WoodGrainBackgroundTextSection"

const Item = ({
  index,
  title,
  description,
  left,
}: {
  index: number
  title: string
  description: string
  left?: boolean
}) => (
  <div className="flex flex-col gap-4">
    <div
      className={clsx(
        "lg:gap-6.5 flex flex-row items-center gap-4 md:gap-5",
        left && "md:flex-row-reverse",
      )}
    >
      <div className="flex-center text-3.5 h-5 w-5 rounded-full bg-zinc-800 text-white">
        {index}
      </div>
      <div className="text-5.5 text-#000 font-medium leading-tight">
        {title}
      </div>
    </div>

    <div
      className={clsx(
        "text-3.5 text-#000 text-op-70 col-span-2 font-normal leading-[1.5]",
        left ? "lg:mr-11.5 md:mr-10 md:text-end" : "lg:ml-11.5 md:ml-10",
      )}
    >
      {description}
    </div>
  </div>
)

const SecureAssetCustodySection = () => (
  <WoodGrainBackgroundTextSection>
    <Translate>
      Mixin Safe is committed to providing our customers with safe and reliable
      asset custody solutions. We always use proven Bitcoin cryptographic
      technologies, such as multi-signature, timelock, MPC, threshold signature,
      P2WSH and hardware wallet technology. These mature and reliable
      technologies complement each other to ensure the safety of assets and
      ensure that customers can use our products with confidence.
    </Translate>
  </WoodGrainBackgroundTextSection>
)

export const TechnicalServiceSection = () => {
  return (
    <>
      <SectionTitle
        description={translate({
          message: "We never invent our own cryptographic techniques.",
        })}
        large
      >
        <Translate>Reliable Technical Service</Translate>
      </SectionTitle>
      <GrayBackgroundWrapper bgClassName="block!">
        <div className="pb-15 mx-a container">
          <div className="gap-y-15 lg:gap-x-22 md:pb-45 px-4-0 mt-10 grid pb-20 sm:px-0 md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
            <img
              loading="lazy"
              src={useBaseUrl("/img/page/reliability/1.1.svg")}
              className="aspect-268/517 m-auto md:order-1 md:h-4/5 lg:h-full"
            />
            <div className="space-y-15 md:order-0">
              <Item
                index={1}
                title={translate({
                  message: "Multisig",
                })}
                description={translate({
                  message:
                    "The Bitcoin multisig script is designed to require M signatures from a total of N keys, known as an M-of-N multisig, where M is equal to or less than N.",
                })}
                left
              />

              <Item
                index={2}
                title={translate({ message: "Timelock" })}
                description={translate({
                  message:
                    "Timelock is one of the most practical functionalities of Bitcoin, giving you the ability to program actions according to a series of parameters.",
                })}
                left
              />

              <Item
                index={3}
                title={translate({ message: "P2WSH" })}
                description={translate({
                  message:
                    "Pay-to-Witness-Script-Hash (P2WSH) is a type of transaction which allows for the spending of Bitcoin based on the satisfaction of any script provided by the sender.",
                })}
                left
              />
            </div>
            <div className="space-y-15 md:order-2">
              <Item
                index={4}
                title={translate({
                  message: "MPC - TSS",
                })}
                description={translate({
                  message:
                    "Mixin Safe uses Threshold Signature Scheme (TSS) technology based on Multi-Party Computation (MPC), offers customers complete control over their digital assets.",
                })}
              />

              <Item
                index={5}
                title={translate({
                  message: "PoS Network",
                })}
                description={translate({
                  message:
                    "Mixin Safe provides a decentralized MPC network by utilizing the same validator nodes from Mixin Network, a decentralized ledger launched in 2018.",
                })}
              />

              <Item
                index={6}
                title={translate({
                  message: "Hardware Wallet",
                })}
                description={translate({
                  message:
                    "Mixin Safe is compatible with all popular hardware wallets to let you hold your private key conveniently.",
                })}
              />
            </div>
          </div>
          <SecureAssetCustodySection />
        </div>
      </GrayBackgroundWrapper>
    </>
  )
}
