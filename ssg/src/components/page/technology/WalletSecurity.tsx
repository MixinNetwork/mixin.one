import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import FullItem from "../../common/FullItem"
export const WalletSecurity = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          A self-hosted crypto wallet with built-in mature decentralized
          technologies such as multi-signature, MPC, and time locks.
        </Translate>
      }
    >
      <Translate>Wallet Security</Translate>
    </SectionTitle>

    <div className="pb-30">
      <FullItem
        cover={require("@site/static/img/page/technology/4.1.webp").default}
        title={translate({
          message: "Cold Wallet Security",
        })}
        description={translate({
          message:
            "Mixin Safe is a multi-signature cold wallet based on Bitcoin, Ethereum, and other networks. It provides you with a secure multi-signature cold wallet service by combining multiple signatures, time locks, MPC, threshold signatures, segregated witness P2WSH, and hardware wallet technologies.",
        })}
        link={{
          href: "https://safe.mixin.one/how-it-secures",
          text: translate({
            message: "Technology Detail",
          }),
        }}
      />
      <FullItem
        cover={require("@site/static/img/page/technology/4.2.webp").default}
        title={translate({
          message: "Decentralized Recovery",
        })}
        description={translate({
          message:
            "Mixin Safe provides a decentralized recovery solution based on the Bitcoin network. You can set up a decentralized recovery plan for your wallet, and you can also help your friends recover their wallets.",
        })}
        link={{
          text: translate({
            message: "Technology Detail",
          }),
          href: "https://safe.mixin.one/how-it-secures",
        }}
      />
    </div>
  </>
)
