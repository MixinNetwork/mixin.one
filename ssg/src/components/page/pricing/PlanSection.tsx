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
      description={
        <Translate>
          Use multiple keys on multiple devices to avoid single point of
          failure, and get decentralized recovery service in case of key loss.
        </Translate>
      }
      price={100}
      features={[
        <Translate>Everything in Free</Translate>,
        <Translate>3 members per Safe</Translate>,
        <Translate>Mixin Anonymous Number</Translate>,
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

const Tab = ({
  name,
  id,
  selected,
  onClick,
}: {
  name: string
  id: string
  selected: string
  onClick: () => void
}) => {
  const checked = id === selected
  return (
    <button
      className={clsx(
        "text-#333 text-3.5-4.5 pb-3-5 w-full cursor-pointer border-b px-2 text-center",
        checked ? "text-op-100 border-#333 font-medium" : "text-op-66 border-#D9D9D9",
      )}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

const Section = ({
  id,
  selected,
  children,
}: {
  id: string
  selected: string
  children: React.ReactNode
}) => (
  <div
    className={clsx(
      "col-span-full gap-5 pt-8",
      id === selected ? "grid!" : "hidden!",
    )}
  >
    {children}
  </div>
)

const Item = ({
  name,
  description,
  price,
  features,
  cover,
}: {
  name: React.ReactNode
  description: React.ReactNode
  price: number
  features: React.ReactNode[]
  cover: string
}) => {
  return (
    <div className="border-px rounded-sm border-zinc-300 bg-zinc-100 bg-opacity-50 px-5 pb-20 pt-10 sm:px-10">
      <div className="grid gap-y-4 sm:grid-cols-2">
        <div className="text-#333 text-7-8 font-medium">{name}</div>
        <div className="text-#333 text-3.5-4 leading-[1.5] text-opacity-80 sm:order-last">
          {description}
        </div>
        <div className="sm:row-span-2 sm:ml-auto sm:w-fit">
          <div className="mt-15 mx-auto w-fit sm:mt-0 ">
            <sup className="text-#333 text-7.5 align-super font-semibold leading-loose">
              $
            </sup>
            <span className="text-#333 text-6xl font-semibold leading-10">
              {price.toLocaleString()}
            </span>
            <span className="text-#333 text-5 font-normal leading-[1.5]">
              /year
            </span>
          </div>
          {price <= 0 && (
            <div className="text-#333 text-3.5 mx-auto w-fit font-normal text-opacity-70">
              <Translate>FREE FOREVER</Translate>
            </div>
          )}
        </div>
      </div>

      <LocalLink
        href={
          price <= 0
            ? "https://messenger.mixin.one/download"
            : "https://safe.mixin.one/start"
        }
        className="px-13 text-3.5 mt-20 block w-full rounded-sm bg-zinc-800 py-4 text-center font-medium text-white sm:mt-6.5 sm:w-fit"
      >
        {price <= 0 ? (
          <Translate>Get Mixin</Translate>
        ) : (
          <Translate>Get Started</Translate>
        )}
      </LocalLink>
      <div className="mt-15 border-b-px h-px w-full border-zinc-300"></div>
      <div className="mt-20 grid items-center sm:mt-10 sm:grid-cols-2">
        <div className="space-y-5">
          <div className="text-#333 text-5 font-medium leading-[1.5]">
            <Translate>Features</Translate>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div className="flex-center w-fit space-x-2.5">
                <Checked className="shrink-0" />
                <div className="text-#333 text-3.5-4 leading-5">{feature}</div>
              </div>
            ))}
          </div>
        </div>
        <img
          loading="lazy"
          src={require("@site/static/img/page/pricing/" + cover).default}
          className="sm:h-50 mt-20 sm:ms-auto sm:mt-0"
        />
      </div>
    </div>
  )
}

export const PlanSection = () => {
  const [selected, select] = useState<"personal" | "family" | "institution">(
    "personal",
  )
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            Mixin ONE membership brings decentralized solutions to serve
            different needs.
          </Translate>
        }
        large
      >
        <Translate>Your Bitcoin is Priceless</Translate>
      </SectionTitle>

      <div className="container mx-auto ">
        <div className="grid w-full grid-cols-3">
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
              description={
                <Translate>
                  Mixin Messenger provides a secure and easy-to-use wallet, that
                  meets the daily needs of small amounts of bitcoin storage.
                </Translate>
              }
              price={0}
              features={[
                <Translate>Self-custodial MPC wallet</Translate>,
                <Translate>Buy, sell and swap cryptos</Translate>,
                <Translate>Supports thousands of cryptos</Translate>,
                <Translate>Free transactions</Translate>,
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
              description={
                <Translate>
                  Manage large fortune in Mixin Safe with family, friends or
                  colleagues, so you can avoid thefts, accidents and custody
                  risks.
                </Translate>
              }
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
              description={
                <Translate>
                  Professional crypto solutions with 24/7 support, best for
                  family offices, large corporations and financial institutions.
                </Translate>
              }
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
