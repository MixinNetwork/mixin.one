import Svg1 from "./1.svg"

const Item = ({ index, title, description }: { index: number; title: string; description: string }) => (
  <div className="grid grid-cols-[auto_1fr] gap-4">
    <div className="w-5 h-5 leading-none bg-zinc-800 rounded-full text-sm text-white flex-center">{index}</div>
    <div className="text-zinc-800 text-xl font-medium leading-tight">{title}</div>
    <div className="col-span-2 text-zinc-800 text-opacity-80 text-sm font-normal font-['Inter'] leading-snug">{description}</div>
  </div>
)
export const Section1 = () => (
  <>
    <div className="pt-10 pb-15 mx-auto w-fit">
      <Svg1 />
    </div>
    <div className="container mx-auto px-10 space-y-14 pb-10">
      <Item
        index={1}
        title={"Multisig"}
        description={"The bitcoin multi-signature feature is designed to require M signatures from a total of N keys, known as an M-of-N multisig, where M is equal to or less than N."}
      />
      <Item
        index={2}
        title={"Timelock"}
        description={"Timelocks are one of the most practical functionalities of Bitcoin, allowing you the ability to program actions according to a series of parameters."}
      />
      <Item
        index={3}
        title={"P2SH"}
        description={"Pay-to-Script-Hash (P2SH) is a type of transaction which allows for the spending of bitcoin based on the satisfaction of any script provided by the sender."}
      />
      <Item
        index={4}
        title={"MPC - TSS"}
        description={"Safe Wallet use of Threshold Signature Scheme (TSS) technology based on Multi-Party Computation (MPC) offers users the complete control over their digital assets."}
      />
      <Item
        index={5}
        title={"PoS Network"}
        description={"The bitcoin multi-signature feature is designed to require M signatures from a total of N keys, known as an M-of-N multisig, where M is equal to or less than N."}
      />
      <Item index={6} title={"Hardware Wallet"} description={"A hardware wallet is a high-security bitcoin wallet that enables you to store your funds offline."} />
    </div>
  </>
)
