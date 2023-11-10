import Image from "next/image"
import PageHeader from "../../../../component/route/PageHeader"

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="bg-white rounded-sm shadow pb-20">
    <div className="aspect-335/250 relative">
      <Image src={"/confident/" + cover} fill alt={description} />
    </div>
    <div className="mt-5 px-5 text-zinc-800 text-xl font-medium leading-snug">{title}</div>
    <div className="mt-5 px-5 text-zinc-800 text-base font-normal  leading-relaxed">{description}</div>
  </div>
)

export const Header = () => (
  <>
    <PageHeader title={"Confident Bitcoin Custody"} description={"Never worry about losing your keys or centralized evil custody"} />
    <div className="space-y-5 container mx-auto px-5 pb-15">
      <Item cover={"1.png"} title="私钥自持" description={"如果您不真正拥有自己的私钥，就永远无法对自己持有的比特币充满信心。使用 Mixin Safe，您对自己的钱包私钥拥有完整的掌控。"} />
      <Item cover={"2.png"} title="技术成熟" description={"我们的解决方案基于智能合约、多重签名、安全时间锁、MPC - TSS 和硬件钱包等成熟的技术和产品构建，确保您的资产安全。"} />
      <Item cover={"3.png"} title="金库共管" description={"与家人、朋友或团队成员协作管理大额资产，Mixin Safe 的双重多重签名技术和密钥分片技术能避免金库共管人合谋转移您托管的资产。"} />
      <Item cover={"4.png"} title="遗产规划" description={"遗产规划能帮助您家比特币等加密货币财富安全的传承给子孙后代，您的继承人无需任何专业知识即可轻松继承您的财富。"} />
    </div>
  </>
)
