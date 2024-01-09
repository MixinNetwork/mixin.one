import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import SvgIcon1 from "@site/static/img/page/reliability/2.1.svg"
import SvgIcon2 from "@site/static/img/page/reliability/2.2.svg"
import SvgIcon3 from "@site/static/img/page/reliability/2.3.svg"
import SvgIcon4 from "@site/static/img/page/reliability/2.4.svg"

const Item = ({
  icon,
  title,
  description,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) => (
  <div className="pb-26 text-#000 rounded-sm bg-zinc-100 px-5 pt-7">
    {icon}
    <div className="mt-10.5 text-5 font-medium">{title}</div>
    <div className="text-3.5-4 text-#000 text-op-70 mt-5 font-normal leading-[1.5]">
      {description}
    </div>
  </div>
)

export const ServiceSection = () => {
  return (
    <>
      <SectionTitle
        description={translate({
          message:
            "Mixin powers leading organizations from Payment to DAOs, and beyond.",
        })}
      >
        <Translate>Reliable Service</Translate>
      </SectionTitle>
      <div className="pb-45 container mx-auto grid auto-rows-fr gap-5  sm:grid-cols-2 md:grid-cols-4">
        <Item
          icon={<SvgIcon1 />}
          title={translate({
            message: "Recovery Service",
          })}
          description={translate({
            message:
              "Combining reliable multi-signature technology and professional collaborative management services, we can provide decentralized recovery services to our customers in the case of private key loss.",
          })}
        />

        <Item
          icon={<SvgIcon2 />}
          title={translate({ message: "Inheritance" })}
          description={translate({
            message:
              "With the Bitcoin native multi-signature and timelock script, Mixin Safe can help our customers to better pass on Bitcoin assets to their descendants, in a decentralized and convenient way.",
          })}
        />

        <Item
          icon={<SvgIcon3 />}
          title={translate({ message: "Notification Service" })}
          description={translate({
            message:
              "We use Mixin Messenger, SMS, Slack, Telegram and other channels to regularly notify safe members to approve transactions as soon as possible to improve efficiency.",
          })}
        />

        <Item
          icon={<SvgIcon4 />}
          title={translate({ message: "Customer Service" })}
          description={translate({
            message:
              "We provide Mixin Messenger, WhatsApp, email, video conference and 7x24 telephone customer service to help our customers solve problems in a timely manner.",
          })}
        />
      </div>
    </>
  )
}
