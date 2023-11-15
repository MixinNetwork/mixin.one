import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import SvgIcon1 from "@site/static/img/page/reliable/2.1.svg"
import SvgIcon2 from "@site/static/img/page/reliable/2.2.svg"
import SvgIcon3 from "@site/static/img/page/reliable/2.3.svg"
import SvgIcon4 from "@site/static/img/page/reliable/2.4.svg"
import clsx from "clsx"

const Item = ({ icon, title, description, theme }: { title: string; description: string; icon: React.ReactNode; theme?: "dark" | "light" }) => (
  <div className={clsx("pt-7 px-5 pb-26", theme === "dark" ? "bg-zinc-800 text-white" : "bg-slate-100 text-zinc-800 ")}>
    {icon}
    <div className="mt-10.5 text-xl font-medium leading-snug">{title}</div>
    <div className={clsx("mt-5 text-base font-normal leading-7", theme !== "dark" && "text-zinc-800 text-op-80")}>{description}</div>
  </div>
)

export const ServiceSection = () => {
  return (
    <>
      <SectionTitle
        description={translate({
          message: "The Harrowing Tales of Losses in the Era of Centralized Exchanges, Wallets, and Custodial Services",
        })}
      >
        <Translate>Reliable Service</Translate>
      </SectionTitle>
      <div className="container mx-auto px-5 grid gap-5 auto-rows-fr pb-45 sm:grid-cols-2 md:grid-cols-4">
        <Item
          icon={<SvgIcon1 />}
          theme="dark"
          title={translate({
            message: "Recovery Service",
          })}
          description={translate({
            message:
              "Combining reliable multi-signature technology and professional collaborative management services, we can provide reliable recovery services after users lose their private keys, helping users regain control of assets.",
          })}
        />

        <Item
          icon={<SvgIcon2 />}
          theme="light"
          title={translate({ message: "Inheritance" })}
          description={translate({
            message:
              "Combining reliable multi-signature technology and professional collaborative management services, we can provide reliable recovery services after users lose their private keys, helping users regain control of assets.",
          })}
        />

        <Item
          icon={<SvgIcon3 />}
          theme="light"
          title={translate({ message: "Notification Service" })}
          description={translate({
            message:
              "We use Mixin Messenger messages, SMS, Slack, Telegram and other channels to regularly notify asset co-managers to approve transactions as soon as possible to improve efficiency.",
          })}
        />

        <Item
          icon={<SvgIcon4 />}
          theme="light"
          title={translate({ message: "Customer Service" })}
          description={translate({
            message: "We provide Mixin Messenger, WhatsApp, email, video conference and 7x24 telephone advanced customer service support to help users solve problems in a timely manner.",
          })}
        />
      </div>
    </>
  )
}
