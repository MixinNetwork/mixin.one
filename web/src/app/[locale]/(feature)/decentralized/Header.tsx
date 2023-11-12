import Image from "next/image"
import PageHeader from "../../../../component/route/PageHeader"

const Item = ({ cover, description }: { cover: string; description: string }) => (
  <div className="bg-white rounded-sm shadow">
    <div className="aspect-335/250 relative">
      <Image src={"/decentralized/" + cover} fill alt={description} />
    </div>
    <div className="p-5 text-zinc-800 text-base font-normal  leading-relaxed">{description}</div>
  </div>
)

export const Header = () => (
  <>
    <PageHeader description={"Never worry about losing your keys or centralized evil custody"}>Never Sacrifice Decentralization</PageHeader>
    <div className="space-y-5 container mx-auto px-5 pb-15">
      <Item
        cover={"header1.png"}
        description={
          "Born after the 2008 economy crisis originated from the centralized financial system, Bitcoin is believed to be the ultimate solution to the future of human finance. Decentralization is in the blood of nature of Bitcoin, it's not something can be a trade-off."
        }
      />
      <Item
        cover={"header2.png"}
        description={
          'The saying "Not your keys, not your coins" is a cornerstone principle for Bitcoin enthusiasts who embrace its decentralized nature. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings.'
        }
      />
    </div>
  </>
)
