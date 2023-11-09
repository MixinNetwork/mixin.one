import Image from "next/image"
const Item = ({ cover, title, description, points }: { cover: string; title: string; description?: string; points: string[] }) => (
  <div className="pt-15 pb-15">
    <div className="relative aspect-335/225">
      <Image src={"/decentralized/1.png"} alt={""} fill />
    </div>
    <div className="mt-15 text-zinc-800 text-xl font-medium leading-relaxed">{title}</div>
    {description && <div className="mt-5 text-zinc-800 text-sm font-normal leading-snug">{description}</div>}
    <ol className="mt-5 list-disc list-inside space-y-3">
      {points.map((point) => (
        <li key={point} className="text-zinc-800 text-opacity-80 text-sm font-normal leading-snug flex space-x-2">
          <div className="w-2 h-4.5 flex-center shrink-0">
            <div className="w-2 h-2 bg-zinc-800 rounded-full" />
          </div>

          <div> {point}</div>
        </li>
      ))}
    </ol>
  </div>
)

export const DecentralizationSection = () => (
  <div className="container mx-auto px-5 pt-20 pb-25">
    <div className="text-center text-zinc-800 text-3xl font-medium leading-10">Mixin is Decentralization</div>
    <div className="mt-5 text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">我们领导开发了多个开源的去中心化网络</div>
    <Item
      cover={"1.png"}
      title={"去中心化网络"}
      description={"我们领导开发、组建了多个去中心化网络并结合 Bitcoin、Ethereum 等 Layer 1 提供了多链、高速免费转账、密钥分片的去中心化底层网络。"}
      points={[
        "整合 Bitcoin、Ethereum 等 Layer 1 的资产和智能合约、时间锁、PSBT 等技术。",
        "去中心化 Safe Network 让您的家人、朋友或同事能一起共同参与金库的资金管理。",
        "去中心化账本 Mixin Network 提供了一个免费、快速的跨链账本，实现商业应用。",
        "去中心化 MPC 密钥网络 TIP Network 帮助用户用易于记忆的方式更好的使用私钥。",
      ]}
    />

    <Item
      cover={"2.png"}
      title={"去中心技术"}
      points={[
        "多重签名技术方便您与您的家人、朋友和同事共同管理大额资产避免单点故障。",
        "多方计算（MPC）的阈值签名方案（TSS）帮助您更安全、便捷的掌控您的资产。",
        "MTG 技术使您能以更加流畅和易用的方式与去中心应用进行交互。",
        "智能合约、PSBT 技术和时间锁技术确保 Mixin 团队也无法作恶拿走您的资产。",
      ]}
    />
  </div>
)
