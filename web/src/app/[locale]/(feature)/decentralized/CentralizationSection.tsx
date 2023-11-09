import Image from "next/image"
const SpecialItem = () => (
  <div className="relative">
    <div className="relative aspect-375/300 -z-1">
      <Image src={"/decentralized/centralization/1.png"} alt={"centralization"} fill />
    </div>

    <div className="p-5 pb-10 space-y-4 bg-slate-900">
      <div className="text-white text-xl font-medium">The Mt. Gox Debacle</div>
      <div className="w-80 text-white text-opacity-60 text-sm font-normal leading-snug">
        Mt. Gox was a bitcoin exchange based in Shibuya, Tokyo, Japan. Launched in 2010, it was handling over 70% of all bitcoin (BTC) transactions worldwide by early 2014, when it abruptly ceased
        operations amid revelations of its involvement in the loss/theft of hundreds of thousands of bitcoins, then worth hundreds of millions in US dollars.
      </div>
    </div>
  </div>
)

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="relative aspect-375/300">
    <Image src={"/decentralized/centralization/" + cover} alt={title} fill />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
    <div className="p-5 absolute inset-0 top-auto space-y-4">
      <div className="text-white text-xl font-medium">{title}</div>
      <div className="text-white text-opacity-60 text-sm font-normal leading-snug">{description}</div>
    </div>
  </div>
)

export const CentralizationSection = () => (
  <div className="container mx-auto px-5 pb-25 pt-15">
    <div className="text-center text-zinc-800 text-3xl font-medium">The Price of Centralization</div>
    <div className="mt-15 space-y-5">
      <SpecialItem />
      <Item
        cover={"2.png"}
        title={"QuadrigaCX Founder’s Death"}
        description={
          "The founder of Canada's largest cryptocurrency exchange, QuadrigaCX, died unexpectedly in 2019. He was the only person with access to the exchange's cold wallets, resulting in approximately $190 million in customer funds being inaccessible."
        }
      />
      <Item
        cover={"3.png"}
        title={"BitPay Phishing Attack"}
        description={
          "BitPay, a company that provides Bitcoin payment solutions for merchants, fell victim to a phishing attack in 2015. The attacker, posing as a partner company, tricked BitPay into sending 5000 Bitcoins, worth approximately $1.8 million at the time."
        }
      />
    </div>
  </div>
)
