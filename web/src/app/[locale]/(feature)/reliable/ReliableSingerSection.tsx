import PageHeader from "../../../../component/route/PageHeader"
import Icon1 from "./singer1.svg"
import TitleIcon1 from "./singerSub1.svg"
import Icon2 from "./singer2.svg"
import TitleIcon2 from "./singerSub2.svg"
import Icon3 from "./singer3.svg"
import TitleIcon3 from "./singerSub3.svg"
import Icon4 from "./singer4.svg"
import TitleIcon4 from "./singerSub4.svg"
import Icon5 from "./singer5.svg"
import TitleIcon5 from "./singerSub5.svg"

const Item = ({ icon, titleIcon, description }: { icon: React.ReactNode; titleIcon: React.ReactNode; description: string }) => {
  return (
    <div className="bg-white rounded-sm shadow pt-3 pl-2 pr-5 pb-12 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5">
      <div className="row-span-2">{icon}</div>
      {titleIcon}
      <div className="text-zinc-800 text-opacity-80 text-sm font-normal leading-normal">{description}</div>
    </div>
  )
}

export const ReliableSingerSection = () => (
  <div className="bg-slate-100 bg-opacity-40 pt-2.5 pb-37.5">
    <PageHeader description="We are working on getting support of Mixin Safe in more wallet signers">Reliable Singer</PageHeader>
    <div className="grid gap-5 auto-rows-fr container mx-auto px-5">
      <Item icon={<Icon1 />} titleIcon={<TitleIcon1 />} description={"Bitcoin Core connects to the Bitcoin peer-to-peer network to download and fully validate blocks and transactions."} />
      <Item icon={<Icon2 />} titleIcon={<TitleIcon2 />} description={"Mornin Key is an open source decentralized key manager that helps users truly control and protect their data."} />
      <Item icon={<Icon3 />} titleIcon={<TitleIcon3 />} description={"Mixin Messenger is an open-source cryptocurrency wallet and signal protocol messenger."} />
      <Item
        icon={<Icon4 />}
        titleIcon={<TitleIcon4 />}
        description={"Coldcard is an easy to use, ultra-secure, open-source and affordable hardware wallet that is easy to back up via an encrypted microSD card."}
      />
      <Item
        icon={<Icon5 />}
        titleIcon={<TitleIcon5 />}
        description={"Blockstream Jade is an easy-to-use, purely open-source hardware wallet that offers advanced security for your Bitcoin and Liquid assets."}
      />
    </div>
  </div>
)
