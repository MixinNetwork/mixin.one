import Section1Icon1 from "@site/static/img/page/technology/3.1.2.svg"
import Section1Icon2 from "@site/static/img/page/technology/3.1.3.svg"
import Section1Icon3 from "@site/static/img/page/technology/3.1.4.svg"
import Section1Icon4 from "@site/static/img/page/technology/3.1.5.svg"
import Section2Icon1 from "@site/static/img/page/technology/3.2.2.svg"
import Section2Icon2 from "@site/static/img/page/technology/3.2.3.svg"
import Section2Icon3 from "@site/static/img/page/technology/3.2.4.svg"
import Section2Icon4 from "@site/static/img/page/technology/3.2.5.svg"
import Section2Icon5 from "@site/static/img/page/technology/3.2.6.svg"
import Translate, { translate } from "@docusaurus/Translate"

const Item = ({
  title,
  description,
  cover,
  points,
}: {
  title: React.ReactNode
  description: React.ReactNode
  cover: string
  points: {
    title: string
    description: React.ReactNode
    icon: React.ReactNode
  }[]
}) => (
  <div className="group">
    <div className="text-center text-zinc-800 text-3xl font-medium leading-10">{title}</div>
    <div className="mt-5 text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">{description}</div>
    <div className="mt-10 grid items-center gap-10 sm:gap-32 sm:grid-cols-2">
      <img src={require("@site/static/img/page/technology/" + cover).default} className="aspect-335/470 w-full object-cover sm:group-odd:order-last" />

      <div className="space-y-16">
        {points.map(({ title, description, icon }) => (
          <div key={title} className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5">
            {icon}
            <div className="text-zinc-800 text-xl font-medium leading-snug">{title}</div>
            <div className="col-span-2 text-zinc-800 text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const DontWorrySection = () => {
  return (
    <div className="pt-25 pb-45 container mx-auto px-5 space-y-45">
      <Item
        title={<Translate>Don't worry about save</Translate>}
        description={
          <Translate>
            With our decentralized product, you can easily hold assets such as Bitcoin and other cryptocurrencies, say goodbye to the terrifying issues of asset loss and theft, and focus on holding
            and wealth growth.
          </Translate>
        }
        cover="3.1.1.webp"
        points={[
          {
            title: translate({
              message: "Custody Security",
            }),
            description: (
              <Translate>
                Most cryptocurrency losses are due to poor private key management by users. If you want to store cryptocurrency assets such as Bitcoin for a long time, a multi-signature wallet is
                essential. The dual multi-signature we designed significantly improves this situation.
              </Translate>
            ),
            icon: <Section1Icon1 />,
          },
          {
            title: translate({
              message: "Asset Recovery",
            }),
            description: (
              <Translate>
                When your vault private key is lost or the MPC wallet cannot be logged in, you can regain control of your assets through the vault recovery service and emergency contact.
              </Translate>
            ),
            icon: <Section1Icon2 />,
          },
          {
            title: translate({
              message: "Legacy Inheritance",
            }),
            description: (
              <Translate>
                By combining the multi-signature and time lock scripts of the Bitcoin network and adopting a decentralized and mature multi-party computing MPC technology, Mixin Safe has successfully
                implemented a complete decentralized inheritance solution.
              </Translate>
            ),
            icon: <Section1Icon3 />,
          },
          {
            title: translate({
              message: "Asset Isolation",
            }),
            description: (
              <Translate>
                Our multi-vault design can help you isolate assets, establish multiple vaults according to usage, and set different co-managers for different vaults, which can effectively enhance the
                privacy and security of assets.
              </Translate>
            ),
            icon: <Section1Icon4 />,
          },
        ]}
      />

      <Item
        title={<Translate>Use with Confidence</Translate>}
        description={<Translate>We integrate advanced and reliable technologies to provide you with secure self-hosted wallets and decentralized asset recovery and inheritance services.</Translate>}
        cover="3.2.1.webp"
        points={[
          {
            title: translate({
              message: "Enjoy to Use",
            }),
            description: (
              <Translate>
                Thanks to asset read-only authorization, Dapp whitelist and approval process, you can safely consume or invest in cryptocurrencies without worrying about potential risks when using
                Dapp, such as authorization vulnerabilities.
              </Translate>
            ),
            icon: <Section2Icon1 />,
          },
          {
            title: translate({
              message: "Less Prone to Errors",
            }),
            description: <Translate>The address whitelist and multi-person co-management vault review can effectively reduce the occurrence of wrong address and wrong chain transfers.</Translate>,
            icon: <Section2Icon2 />,
          },
          {
            title: translate({
              message: "Privacy Protection",
            }),
            description: (
              <Translate>
                End-to-end encryption technology and CryptoNode technology protect the privacy of your chat and transfer information. The information is encrypted and ensures that only the two parties
                of the interaction can decrypt it. No third party can peep into your privacy data.
              </Translate>
            ),
            icon: <Section2Icon3 />,
          },
          {
            title: translate({
              message: "Enjoy the Interaction",
            }),
            description: (
              <Translate>
                The perfect approval process ensures the security and transparency of funds. Unlike other multi-signature wallets, Mixin Safe's dual multi-signature technology and key sharding
                technology can avoid potential multi-signature collusion issues.
              </Translate>
            ),
            icon: <Section2Icon4 />,
          },
          {
            title: translate({
              message: "Customer support",
            }),
            description: (
              <Translate>Complete documents and considerate customer service are always ready to help you solve various problems you are facing, so you can focus on wealth growth.</Translate>
            ),
            icon: <Section2Icon5 />,
          },
        ]}
      />
    </div>
  )
}
