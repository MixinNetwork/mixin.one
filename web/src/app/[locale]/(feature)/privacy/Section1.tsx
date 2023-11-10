import Image from "next/image"
import Checked from "./checked.svg"

const Item = ({ cover, title, points, description }: { cover: string; title: string; description?: string; points: string[] }) => {
  return (
    <div className="">
      <div className="relative aspect-335/225">
        <Image src={"/privacy/" + cover} fill alt={title} />
      </div>
      <div className="mt-15 text-zinc-800 text-xl font-medium leading-snug">{title}</div>
      {description && <div className="mt-5 text-zinc-800 text-base font-normal leading-relaxed">{description}</div>}
      <div className="mt-7 grid grid-cols-[auto_1fr] gap-x-4 gap-y-7">
        {points.map((point) => (
          <>
            <Checked className="mt-1" />
            <div className="text-zinc-800 text-base font-normal leading-relaxed">{point}</div>
          </>
        ))}
      </div>
    </div>
  )
}

export const Section1 = () => (
  <div className="container mx-auto px-5 pt-15 pb-40 space-y-30">
    <Item
      cover={"1.png"}
      title={"信息隐私"}
      points={["所有消息都经过端到端加密，包括文字、照片、文件和通话", "通过打开聊天的限时消息功能，您可以获得更多隐私保护", "群聊让您可以轻松、自在地与家人、朋友和同事保持联系"]}
    />
    <Item
      cover={"2.png"}
      title={"资产隐私"}
      points={[
        "如果您 Mixin Safe 金库所有者私钥不慎丢失，您的资产种类和数量不会因此而泄漏。",
        "无法通过链上的充值地址或提现地址推导出您 Mixin Messenger 钱包的资产种类和数量。",
        "财产的继承人和执行人无法事先知道要继承的资产种类和数量，也无法通过区块链上的转移记录推断出所有资产。",
      ]}
    />
    <Item
      cover={"3.png"}
      title={"转账隐私"}
      description="通过 CryptoNote 技术加强 UTXO 转账隐私"
      points={[
        "通过 CryptoNote 技术加强 UTXO 转账隐私，交易只有双方知道，Mixin Network 全节点也无法知道交易双方，无法根据交易本身推导出交易具体双方。",
        "双密钥结构确保资产匿名的同时满足合规需求，用户可以主动提供自己的 view key 供会计查询，可用于报税和会计审计等，而资产不会被转移。",
      ]}
    />
  </div>
)
