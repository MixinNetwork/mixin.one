import Svg1 from "./1.svg"
import Svg2 from "./2.svg"
import Svg3 from "./3.svg"
import Svg4 from "./4.svg"
import Svg5 from "./5.svg"
import Svg6 from "./6.svg"
import Svg7 from "./7.svg"
import Svg8 from "./8.svg"
import Svg9 from "./9.svg"

import Image from "next/image"
const Item = ({
  title,
  description,
  cover,
  points,
}: {
  title: string
  description: string
  cover: string
  points: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
}) => (
  <div className="pb-25">
    <div className="text-center text-zinc-800 text-3xl font-medium leading-10">{title}</div>
    <div className="mt-5 text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">{description}</div>
    <div className="mt-10 relative aspect-335/470">
      <Image src={"/tecnology/" + cover} alt={title} fill />
    </div>

    <div className="space-y-16 mt-11">
      {points.map(({ title, description, icon }) => (
        <div key={title} className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6">
          {icon}
          <div className="text-zinc-800 text-xl font-medium leading-snug">{title}</div>
          <div className="col-span-2 text-zinc-800 text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
        </div>
      ))}
    </div>
  </div>
)

export const Section4 = () => {
  return (
    <div className="pt-25 pb-45 container mx-auto px-5">
      <Item
        title={"放心存"}
        description={"通过我们去中心化的产品您可以轻松的持有比特币等加密货币资产，告别令人胆战心惊的资产丢失被盗的问题，专注持有和财富增长。"}
        cover={"5.png"}
        points={[
          {
            title: "托管安全",
            description: "大多数加密货币丢失是由于用户的私钥管理不善，想要长期存储比特币等加密货币资产，多重签名钱包必不可少，我们设计的双重多次签名显著改善这一现状。",
            icon: <Svg1 />,
          },
          {
            title: "资产恢复",
            description: "当您的金库私钥丢失或 MPC 钱包无法登录时，可通过 Mixin Safe 金库的恢复服务和 Mixin Messenger 紧急联系人来让您重新获得资产的掌握权。",
            icon: <Svg2 />,
          },
          {
            title: "遗产继承",
            description: "通过组合比特币网络的多重签名与时间锁脚本，并采用去中心化的成熟的多方计算 MPC 技术，Mixin Safe 成功实现了一套完整的去中心化遗产继承方案。",
            icon: <Svg3 />,
          },
          {
            title: "资产隔离",
            description: "我们的多金库设计能帮助您进行资产隔离，按用途建立多个金库并为不同的金库设置不同的共管人，可有效的增强资产的私密性和安全性。",
            icon: <Svg4 />,
          },
        ]}
      />
      <Item
        title={"放心用"}
        description={"我们整合先进并且可靠的技术为您提供安全的自托管钱包和去中心化的资产恢复和遗产继承服务"}
        cover={"6.png"}
        points={[
          {
            title: "简单易用",
            description: "手机号登录易用且不会丢失账号，6 位数字密码管理 MPC 钱包安全简单且易于记忆。",
            icon: <Svg5 />,
          },
          {
            title: "不易出错",
            description: "地址白名单和多人共同管理金库审核每笔转账可有效减少转错地址、转错链等情况。",
            icon: <Svg6 />,
          },
          {
            title: "隐私保护",
            description: "端对端加密保证聊天隐私，CryptoNote 技术增强交易隐私确保交易只有交易双方知道。",
            icon: <Svg7 />,
          },
          {
            title: "尽享交互",
            description: "MPC 钱包资产只读授权、DeFi 白名单和审批流程可有效的避免使用 Dapp 遭遇潜在的风险。",
            icon: <Svg8 />,
          },
          {
            title: "客服支持",
            description: "完善的文档和贴心的客服随时帮助您解决面临的各种问题，您可以专注财富增长。",
            icon: <Svg9 />,
          },
        ]}
      />
    </div>
  )
}
