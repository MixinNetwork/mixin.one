import Image from "next/image"

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="bg-slate-100 rounded-sm pt-15 px-5 pb-32">
    <div className="relative aspect-335/220">
      <Image src={"/tecnology/" + cover} alt={title} fill />
    </div>
    <div className="mt-15 text-zinc-800 text-xl font-medium leading-snug">{title}</div>
    <div className="mt-6.5 text-zinc-800 text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
  </div>
)
export const Section2 = () => (
  <div className="container mx-auto px-5 grid gap-y-5 auto-rows-fr pb-45">
    <Item
      cover={"2.png"}
      title={"Decentralized Network"}
      description={"我们领导开发、组建了多个去中心化网络并结合 Bitcoin、Ethereum 等 Layer 1 提供了多链、高速免费转账、密钥分片的去中心化底层网络。"}
    />
    <Item cover={"3.png"} title={"Decentralized Wallet"} description={"基于多个去中心化网络我们构建了 Mixin Safe 多签冷钱包和具备社交恢复的 MPC 热钱包，你的资产始终受你控制。"} />
    <Item cover={"4.png"} title={"Decentralized Services"} description={"基于安全的去中心化钱包服务，我和我们的合作伙伴们为用户提供买入、交易、理财、继承、恢复等一系列去中心化产品和服务。"} />
  </div>
)
