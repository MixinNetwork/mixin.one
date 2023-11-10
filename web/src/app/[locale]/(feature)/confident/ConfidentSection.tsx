import ConfidentIcon1 from "./1.svg"
import ConfidentIcon2 from "./2.svg"
import ConfidentIcon3 from "./3.svg"
import ConfidentIcon4 from "./4.svg"
import ConfidentIcon5 from "./5.svg"
import ConfidentIcon6 from "./6.svg"

const Item = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="bg-white rounded-sm shadow pt-2.5 pl-2.5 pr-5 pb-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
    <div className="row-span-2">{icon}</div>

    <div className=" text-zinc-800 text-base font-medium leading-tight">{title}</div>
    <div className=" text-zinc-800 text-opacity-80 text-sm font-normal leading-snug">{description}</div>
  </div>
)

export const ConfidentSection = () => (
  <div className="bg-[#F1F6FC66] pt-20 pb-40">
    <div className="container mx-auto px-5">
      <div className="text-center text-zinc-800 text-3xl font-medium leading-10">放心用</div>
      <div className="mt-5 text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">Mixin Safe powers leading organizations from Payment to DAOs, and beyond</div>
      <div className="space-y-5 mt-10">
        <Item
          icon={<ConfidentIcon1 />}
          title={"尽享交互"}
          description={"得益于资产只读授权、Dapp 白名单和审批流程，您可以放心的消费或投资加密货币，不必担心使用 Dapp 遭遇潜在的风险，例如授权漏洞。"}
        ></Item>
        <Item
          icon={<ConfidentIcon2 />}
          title={"协作共管"}
          description={"完善的审批流程确保资金安全、透明，区别于其他多重签名钱包，Mixin Safe 的双重多重签名技术和密钥分片技术能避免潜在的多签合谋问题。"}
        ></Item>
        <Item icon={<ConfidentIcon3 />} title={"资产恢复"} description={"当您的金库私钥丢失或 MPC 钱包无法登录时，通过金库的恢复服务和紧急联系人来让您重新获得资产的掌握权。"}></Item>
        <Item
          icon={<ConfidentIcon4 />}
          title={"隐私加强"}
          description={"端对端加密技术和 CryptoNode 技术保护您的聊天和转账信息隐私，信息经过加密并确保只有交互双方才能解密，任何第三方都无法窥探您的隐私数据。"}
        ></Item>
        <Item icon={<ConfidentIcon5 />} title={"费用固定"} description={"无论比特币价格上涨，还是您增加比特币持有量，Mixin Safe 只收取固定的服务费，不会随着您托管或转账的数量和价格而变化。"}></Item>
        <Item icon={<ConfidentIcon6 />} title={"客服支持"} description={"完善的文档和贴心的客服随时帮助您解决面临的各种问题，您可以专注财富增长而不必受困于资产安全问题。"}></Item>
      </div>
    </div>
  </div>
)
