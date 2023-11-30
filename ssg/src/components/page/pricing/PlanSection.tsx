import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import { useState } from "react"
import clsx from "clsx"
import Checked from "@site/static/img/common/checked.svg"
import LocalLink from "../../common/LocaleLink"

const Advance = () => {
  return (
    <Item
      name={<Translate>Advance</Translate>}
      description={<Translate>Use multiple keys on multiple devices to avoid single point of failure, and get decentralized recovery service in case of key loss.</Translate>}
      price={100}
      features={[
        <Translate>Everything in Free</Translate>,
        <Translate>3 members per Safe</Translate>,
        <Translate>Free Mixin Anonymous Number</Translate>,
        <Translate>3 Safe members in total</Translate>,
        <Translate>Create 2 Safes</Translate>,
        <Translate>Paid recovery service</Translate>,
        <Translate>Get 2 Safe Credits</Translate>,
        <Translate>Paid inheritance service</Translate>,
      ]}
      cover="macAndPhone.webp"
    />
  )
}

const Tab = ({ name, id, selected, onClick }: { name: string; id: string; selected: string; onClick: () => void }) => {
  const checked = id === selected
  return (
    <button className={clsx("text-center cursor-pointer w-full px-2 pb-5 border-b border-zinc-300", checked && "border-black!")} onClick={onClick}>
      {name}
    </button>
  )
}

const Section = ({ id, selected, children }: { id: string; selected: string; children: React.ReactNode }) => (
  <div className={clsx(" col-span-full pt-8 gap-5", id === selected ? "grid!" : "hidden!")}>{children}</div>
)

const Item = ({ name, description, price, features, cover }: { name: React.ReactNode; description: React.ReactNode; price: number; features: React.ReactNode[]; cover: string }) => {
  return (
    <div className="bg-zinc-100 bg-opacity-50 rounded-sm border-px border-zinc-300 pt-10 pb-20 px-5 sm:px-10">
      <div className="grid gap-y-5 sm:grid-cols-2">
        <div className="text-[#333] text-3xl font-medium">{name}</div>
        <div className="sm:order-last text-[#333] text-opacity-70 text-base font-normal leading-normal">{description}</div>
        <div className="sm:row-span-2 sm:w-fit sm:ml-auto">
          <div className="mx-auto w-fit mt-15 sm:mt-0 ">
            <sup className="text-[#333] text-3xl font-semibold leading-loose align-super">$</sup>
            <span className="text-[#333] text-6xl font-semibold leading-10">{price.toLocaleString()}</span>
            <span className="text-[#333] text-xl font-normal leading-normal">/year</span>
          </div>
          {price <= 0 && (
            <div className="mx-auto w-fit text-[#333] text-opacity-70 text-sm font-normal leading-none">
              <Translate>FREE FOREVER</Translate>
            </div>
          )}
        </div>
      </div>

      <LocalLink
        href={price <= 0 ? "https://messenger.mixin.one/download" : "https://safe.mixin.one/start"}
        className="mt-17.5 sm:mt-5 py-4 px-13 w-full sm:w-fit bg-zinc-800 rounded-sm text-center text-white text-sm font-medium block"
      >
        {price <= 0 ? <Translate>Get Mixin</Translate> : <Translate>Get Started</Translate>}
      </LocalLink>
      <div className="mt-15 w-full h-px border-b-px border-zinc-300"></div>
      <div className="grid items-center sm:grid-cols-2 mt-20 sm:mt-10">
        <div className="space-y-5">
          <div className="text-[#333] text-xl font-medium leading-normal">
            <Translate>Features</Translate>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div className="flex-center space-x-2.5 w-fit">
                <Checked className="shrink-0" />
                <div className="text-[#333] text-base font-normal leading-5">{feature}</div>
              </div>
            ))}
          </div>
        </div>
        <img loading="lazy" src={require("@site/static/img/page/pricing/" + cover).default} className="mt-20 sm:mt-0 sm:h-50 sm:ms-auto" />
      </div>
    </div>
  )
}

export const PlanSection = () => {
  const [selected, select] = useState<"personal" | "family" | "institution">("personal")
  return (
    <>
      <SectionTitle description={<Translate>Mixin One membership brings decentralized solutions to serve different needs.</Translate>}>
        <Translate>Your Bitcoin is Priceless</Translate>
      </SectionTitle>

      <div className="container mx-auto px-5">
        <div className="w-full grid grid-cols-3">
          <Tab
            name={translate({
              message: "Personal",
            })}
            id="personal"
            selected={selected}
            onClick={() => select("personal")}
          />
          <Tab
            name={translate({
              message: "Team",
            })}
            id="family"
            selected={selected}
            onClick={() => select("family")}
          />
          <Tab
            name={translate({
              message: "Enterprise",
            })}
            id="institution"
            selected={selected}
            onClick={() => select("institution")}
          />

          <Section id="personal" selected={selected}>
            <Item
              name={<Translate>Free</Translate>}
              description={<Translate>Secure and easy-to-use MPC hot wallet that meets the daily needs of small amounts of bitcoin storage.</Translate>}
              price={0}
              features={[
                <Translate>MPC Wallet</Translate>,
                <Translate>Buy, sell and swap crypto</Translate>,
                <Translate>Supports 47 blockchains</Translate>,
                <Translate>Free transfer</Translate>,
                <Translate>Social recovery</Translate>,
                <Translate>Free email and chat support</Translate>,
              ]}
              cover="phone.webp"
            />

            <Advance />
          </Section>

          <Section id="family" selected={selected}>
            <Advance />
            <Item
              name={<Translate>Elite</Translate>}
              description={<Translate>Manage large fortune in Mixin Safe with family, friends or colleagues, so you can avoid thefts, accidents and custody risks.</Translate>}
              price={1000}
              features={[
                <Translate>Everything in Advance</Translate>,
                <Translate>5 members per Safe</Translate>,
                <Translate>Create 5 Safes</Translate>,
                <Translate>10 Safe members in total</Translate>,
                <Translate>Get 5 Safe Credits</Translate>,
                <Translate>Free recovery service</Translate>,
                <Translate>1 free Ledger Nano X</Translate>,
                <Translate>Free inheritance service</Translate>,
              ]}
              cover="macAndPhone.webp"
            />
          </Section>
          <Section id="institution" selected={selected}>
            <Item
              name={<Translate>Prosperity</Translate>}
              description={<Translate>Professional crypto solutions with 24/7 support, best for family offices, large corporations and financial institutions.</Translate>}
              price={10000}
              features={[
                <Translate>Everything in Elite</Translate>,
                <Translate>10 members per Safe</Translate>,
                <Translate>Create 100 Safes</Translate>,
                <Translate>100 Safe members in total</Translate>,
                <Translate>Get 20 Safe Credits</Translate>,
                <Translate>Free 24/7 phone support</Translate>,
                <Translate>1 free Ledger Stax</Translate>,
                <Translate>Dedicated wealth manager</Translate>,
                <Translate>2 free Ledger Nano X</Translate>,
                <Translate>Customized DeFi service</Translate>,
              ]}
              cover="macAndPhone.webp"
            />
          </Section>
        </div>
      </div>
    </>
  )
}
