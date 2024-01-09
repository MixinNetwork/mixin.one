import Translate from "@docusaurus/Translate"
import SectionTitle from "../../common/SectionTitle"
import Icon1 from "@site/static/img/page/technology/3.2.svg"
import Icon2 from "@site/static/img/page/technology/3.3.svg"
import Icon3 from "@site/static/img/page/technology/3.4.svg"

const Item = ({
  icon,
  title,
  description,
  background,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  background: string
}) => {
  return (
    <div className="relative">
      <img
        loading="lazy"
        src={require("@site/static/img/page/technology/" + background).default}
        className="fill object-cover"
      />

      <div className="border-px px-4-6 pt-6-10 h-full border-[#D9D9D9] bg-[#F2F2F280] pb-10">
        {icon}
        <div className="text-5-6 mt-11.5 font-medium">{title}</div>
        <div className="text-#000 text-op-70 text-4 mt-5 leading-[1.5]">
          {description}
        </div>
      </div>
    </div>
  )
}

export const NetworkSecurity = () => (
  <>
    <SectionTitle
      description={
        <Translate>
          It is a developer friendly network with lightning speed and zero
          transaction fee, all powered by decentralized nodes.
        </Translate>
      }
    >
      <Translate>Network Security</Translate>
    </SectionTitle>
    <div className="pb-30 container mx-auto grid gap-5  sm:grid-cols-3">
      <img
        loading="lazy"
        src={require("@site/static/img/page/technology/3.1.webp").default}
        width={2682}
        height={1215}
        className="sm:py-7.5 lg:py-12.5 md:px-27 lg:px-38 col-span-full bg-[#F2F2F2] px-5 py-5 sm:px-16 md:py-10"
      />
      <Item
        background="3.2.1.webp"
        icon={<Icon1 />}
        title={<Translate>Punitive PoS</Translate>}
        description={
          <Translate>
            Each Mixin Kernel node takes 12,000 XIN, which is approximate 2% of
            the network stake. The Kernel BFT consensus is secured by a strict
            punitive PoS, if a Kernel Node is determined to be an attacker, all
            its collateral will be recycled to the mining pool.
          </Translate>
        }
      />

      <Item
        background="3.3.1.webp"
        icon={<Icon2 />}
        title={<Translate>TEE</Translate>}
        description={
          <Translate>
            Mixin uses Intel SGX as the implementation of TEE to further enhance
            security. All full nodes must run in a trusted execution environment
            to ensure that the "running code" of the full node is indeed the
            "code it claims to be running", and no one can change the code
            running in the trusted execution environment without being noticed.
          </Translate>
        }
      />
      <Item
        background="3.4.1.webp"
        icon={<Icon3 />}
        title={<Translate>Light Witness</Translate>}
        description={
          <Translate>
            Mixin Light node is a simplified payment verification (SPV) node to
            Mixin Kernel. It typically stores all its unspent outputs for easy
            account balance query. The Light Witness will actively monitor the
            Mixin Kernel, and will be scheduled to vote automatically on the
            attacker appeals.
          </Translate>
        }
      />
    </div>
  </>
)
