import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"

const Item = ({
  cover,
  title,
  description,
}: {
  cover: string
  title: React.ReactNode
  description: React.ReactNode
}) => (
  <div className="sm:gap-x-7.3 md:gap-x-14.7 lg:gap-x-22 group container mx-auto grid items-center gap-x-0 gap-y-5 px-5 sm:grid-cols-2">
    <img
      src={require("@site/static/img/page/technology/" + cover).default}
      className="sm:group-odd:order-last"
      width={1584}
      height={1056}
    />
    <div className="text-start">
      <div className="text-5 sm:text-6 md:text-7 lg:text-8 font-medium">
        {title}
      </div>
      <div className="mt-5 text-sm sm:text-base">{description}</div>
      <a className="mt-10 block bg-[#333] py-4 text-center text-white  sm:w-fit sm:px-7">
        <Translate>Technology Detail</Translate>
      </a>
    </div>
  </div>
)

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

    <div className="space-y-30 pb-30">
      <Item
        cover="4.1.webp"
        title={<Translate>Cold Wallet Security</Translate>}
        description={
          <Translate>
            Mixin Safe is a multi-signature cold wallet based on Bitcoin,
            Ethereum, and other networks. It provides you with a secure
            multi-signature cold wallet service by combining multiple
            signatures, time locks, MPC, threshold signatures, segregated
            witness P2WSH, and hardware wallet technologies.
          </Translate>
        }
      />
      <Item
        cover="4.2.webp"
        title={<Translate>MPC Hot Wallet Security</Translate>}
        description={
          <Translate>
            Mixin Messenger's MPC wallet combines Mixin Network wallet and TIP
            distributed key protocol to provide users with a secure and
            easy-to-use MPC wallet.
          </Translate>
        }
      />
    </div>
  </>
)
