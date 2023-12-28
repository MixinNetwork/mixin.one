import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import TitleIcon1 from "@site/static/img/page/reliability/3.1.2.svg"
import TitleIcon2 from "@site/static/img/page/reliability/3.2.2.svg"
import TitleIcon3 from "@site/static/img/page/reliability/3.3.2.svg"
import TitleIcon4 from "@site/static/img/page/reliability/3.4.2.svg"
import TitleIcon5 from "@site/static/img/page/reliability/3.5.2.svg"
import TitleIcon6 from "@site/static/img/page/reliability/3.6.2.svg"
import TitleIcon7 from "@site/static/img/page/reliability/3.7.2.svg"
import TitleIcon8 from "@site/static/img/page/reliability/3.8.2.svg"
import TitleIcon9 from "@site/static/img/page/reliability/3.9.2.svg"

const Item = ({
  icon,
  titleIcon,
  description,
}: {
  icon: string
  titleIcon: React.ReactNode
  description: string
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 gap-y-2.5 rounded-sm bg-white p-4 shadow md:p-6 lg:p-8">
      <img
        loading="lazy"
        src={useBaseUrl("/img/page/reliability/" + icon)}
        className="md:w-18 lg:24 row-span-2 aspect-square w-12"
      />
      {titleIcon}
      <div className="text-#333 text-sm font-normal leading-normal text-opacity-80">
        {description}
      </div>
    </div>
  )
}

export const SingerSection = () => {
  return (
    <div className="bg-slate-100">
      <SectionTitle
        description={translate({
          message:
            "We are working on getting support of Mixin Safe in more software and hardware wallets.",
        })}
      >
        <Translate>Reliable Singer</Translate>
      </SectionTitle>

      <div className="pb-45 container mx-auto grid auto-rows-fr gap-5  sm:grid-cols-2">
        <Item
          icon="3.1.1.svg"
          titleIcon={<TitleIcon1 />}
          description={translate({
            message:
              "Bitcoin Core connects to the Bitcoin peer-to-peer network to download and fully validate blocks and transactions.",
          })}
        />

        <Item
          icon="3.2.1.svg"
          titleIcon={<TitleIcon2 />}
          description={translate({
            message:
              "Mornin Key is an open source decentralized key manager that helps users truly control and protect their data.",
          })}
        />

        <Item
          icon="3.3.1.svg"
          titleIcon={<TitleIcon3 />}
          description={translate({
            message:
              "Mixin Messenger is an open-source cryptocurrency wallet and signal protocol messenger.",
          })}
        />

        <Item
          icon="3.4.1.svg"
          titleIcon={<TitleIcon4 />}
          description={translate({
            message:
              "Coldcard is an easy to use, ultra-secure, open-source and affordable hardware wallet that is easy to back up via an encrypted microSD card.",
          })}
        />

        <Item
          icon="3.5.1.svg"
          titleIcon={<TitleIcon5 />}
          description={translate({
            message:
              "Blockstream Jade is an easy-to-use, purely open-source hardware wallet that offers advanced security for your Bitcoin and Liquid assets.",
          })}
        />

        <Item
          icon="3.6.1.svg"
          titleIcon={<TitleIcon6 />}
          description={translate({
            message:
              "Ledger's hardware wallets are multicurrency wallets that are used to store private keys for cryptocurrencies offline.",
          })}
        />
        <Item
          icon="3.7.1.svg"
          titleIcon={
            <img
              loading="lazy"
              src={
                require("@site/static/img/page/reliability/3.7.2.webp").default
              }
              width={190}
              height={18}
            />
          }
          description={translate({
            message:
              "DIY airgapped hardware wallet that uses QR codes for communication with the host.",
          })}
        />
        <Item
          icon="3.8.1.svg"
          titleIcon={<TitleIcon8 />}
          description={translate({
            message:
              "The goal of SeedSigner is to lower the cost and complexity of Bitcoin multi-signature wallet use.",
          })}
        />
        <Item
          icon="3.9.1.svg"
          titleIcon={<TitleIcon9 />}
          description={translate({
            message:
              "One of the simplest hardware wallet for beginners, BitBox02 boasts a fast setup, microSD backup, in-app guide, and intuitive touch sliders.",
          })}
        />

        <Item
          icon="3.10.svg"
          titleIcon={<Translate>More Coming Soon</Translate>}
          description={translate({
            message:
              "Soon we will support more software and hardware wallets to manage Holder Key signatures.",
          })}
        />
      </div>
    </div>
  )
}
