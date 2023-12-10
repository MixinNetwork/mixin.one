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
import { SpecialLayout, SpecialLayoutItem } from "../../common/SpecialLayout"

export const DontWorrySection = () => (
  <SpecialLayout>
    <SpecialLayoutItem
      title={<Translate>Don't worry about save</Translate>}
      description={
        <Translate>
          With our decentralized product, you can easily hold assets such as Bitcoin and other cryptocurrencies, say goodbye to the terrifying issues of asset loss and theft, and focus on holding and
          wealth growth.
        </Translate>
      }
      cover={require("@site/static/img/page/technology/3.1.1.webp").default}
      coverClassName="aspect-335/470"
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

    <SpecialLayoutItem
      title={<Translate>Use with Confidence</Translate>}
      description={<Translate>We integrate advanced and reliable technologies to provide you with secure self-hosted wallets and decentralized asset recovery and inheritance services.</Translate>}
      cover={require("@site/static/img/page/technology/3.2.1.webp").default}
      coverClassName="aspect-335/470"
      points={[
        {
          title: translate({
            message: "Easy to Use",
          }),

          description: (
            <Translate>The mobile phone number login is easy to use and will not lose the account. The 6-digit password manages the MPC wallet, which is safe, simple and easy to remember.</Translate>
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
              End-to-end encryption technology and CryptoNote technology protect the privacy of your chat and transfer information. The information is encrypted and ensures that only the two parties
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
  </SpecialLayout>
)
