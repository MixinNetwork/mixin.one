import SectionTitle from "../../common/SectionTitle"
import Translate, { translate } from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"
import TitleIcon1 from "@site/static/img/page/reliable/3.1.2.svg"
import TitleIcon2 from "@site/static/img/page/reliable/3.2.2.svg"
import TitleIcon3 from "@site/static/img/page/reliable/3.3.2.svg"
import TitleIcon4 from "@site/static/img/page/reliable/3.4.2.svg"
import TitleIcon5 from "@site/static/img/page/reliable/3.5.2.svg"

const Item = ({ icon, titleIcon, description }: { icon: string; titleIcon: React.ReactNode; description: string }) => {
  return (
    <div className="bg-white rounded-sm shadow pt-3 pl-2 pr-5 pb-12 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5">
      <img src={useBaseUrl("/img/page/reliable/" + icon)} className="row-span-2 aspect-square w-12 md:w-18 lg:24" />
      {titleIcon}
      <div className="text-zinc-800 text-opacity-80 text-sm font-normal leading-normal">{description}</div>
    </div>
  )
}

export const SingerSection = () => {
  return (
    <div className="bg-slate-100">
      <SectionTitle
        description={translate({
          message: "We are working on getting support of Mixin Safe in more wallet signers",
        })}
      >
        <Translate>Reliable Singer</Translate>
      </SectionTitle>

      <div className="container mx-auto px-5 grid gap-5 auto-rows-fr sm:grid-cols-2 pb-45">
        <Item
          icon="3.1.1.svg"
          titleIcon={<TitleIcon1 />}
          description={translate({
            message: "Bitcoin Core connects to the Bitcoin peer-to-peer network to download and fully validate blocks and transactions.",
          })}
        />

        <Item
          icon="3.2.1.svg"
          titleIcon={<TitleIcon2 />}
          description={translate({
            message: "Mornin Key is an open source decentralized key manager that helps users truly control and protect their data.",
          })}
        />

        <Item
          icon="3.3.1.svg"
          titleIcon={<TitleIcon3 />}
          description={translate({
            message: "Mixin Messenger is an open-source cryptocurrency wallet and signal protocol messenger.",
          })}
        />

        <Item
          icon="3.4.1.svg"
          titleIcon={<TitleIcon4 />}
          description={translate({ message: "Coldcard is an easy to use, ultra-secure, open-source and affordable hardware wallet that is easy to back up via an encrypted microSD card." })}
        />

        <Item
          icon="3.5.1.svg"
          titleIcon={<TitleIcon5 />}
          description={translate({
            message: "Blockstream Jade is an easy-to-use, purely open-source hardware wallet that offers advanced security for your Bitcoin and Liquid assets.",
          })}
        />

        <Item
          icon="3.6.svg"
          titleIcon={<Translate>More Coming Soon</Translate>}
          description={translate({
            message: "Soon we will support more software and hardware wallets to manage Holder Key signatures.",
          })}
        />
      </div>
    </div>
  )
}
