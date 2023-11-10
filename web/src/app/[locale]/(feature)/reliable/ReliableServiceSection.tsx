import clsx from "clsx"
import PageHeader from "../../../../component/route/PageHeader"
import IconSvg1 from "./service1.svg"
import IconSvg2 from "./service2.svg"
import IconSvg3 from "./service3.svg"
import IconSvg4 from "./service4.svg"

const Item = ({ icon, title, description, theme }: { title: string; description: string; icon: React.ReactNode; theme: "dark" | "light" }) => (
  <div className={clsx("pt-7 px-5 pb-26", theme === "dark" ? "bg-zinc-800 text-white" : "bg-slate-100 text-zinc-800 ")}>
    {icon}
    <div className="mt-10.5 text-xl font-medium leading-snug">{title}</div>
    <div className={clsx("mt-5 text-base font-normal leading-7", theme === "light" && "text-zinc-800 text-op-80")}>{description}</div>
  </div>
)

export const ReliableServiceSection = () => (
  <div className="container mx-auto pt-15 px-5 pb-40">
    <PageHeader title={"Reliable Service"} description="The Harrowing Tales of Losses in the Era of Centralized Exchanges, Wallets, and Custodial Services" />
    <div className="grid gap-5 auto-rows-fr">
      <Item
        title={"Recovery Service"}
        description={
          "Combining reliable multi-signature technology and professional collaborative management services, we can provide reliable recovery services after users lose their private keys, helping users regain control of assets."
        }
        icon={<IconSvg1 />}
        theme={"dark"}
      />

      <Item
        title={"Inheritance"}
        description={
          "Combining reliable multi-signature technology and professional collaborative management services, we can provide reliable recovery services after users lose their private keys, helping users regain control of assets."
        }
        icon={<IconSvg2 />}
        theme={"light"}
      />
      <Item
        title={"Notification Service"}
        description={
          "We use Mixin Messenger messages, SMS, Slack, Telegram and other channels to regularly notify asset co-managers to approve transactions as soon as possible to improve efficiency."
        }
        icon={<IconSvg3 />}
        theme={"light"}
      />
      <Item
        title={"Customer Service"}
        description={"We provide Mixin Messenger, WhatsApp, email, video conference and 7x24 telephone advanced customer service support to help users solve problems in a timely manner."}
        icon={<IconSvg4 />}
        theme={"light"}
      />
    </div>
  </div>
)
