import Translate from "@docusaurus/Translate"

export const IntegratedSecuritySolutionSection = () => {
  return (
    <div className="bg-zinc-100 pt-25 pb-45">
      <div className="container mx-auto px-10 space-y-5">
        <div className="text-center text-[#333] text-2xl font-normal leading-9">
          <Translate>Integrated security solution to protect your assets</Translate>
        </div>
        <div className="text-center text-[#333] text-opacity-70 text-base font-normal leading-normal">
          <Translate>
            Based on decentralized networks such as Bitcoin, Ethereum, and key sharding, combined with technologies such as multi-signature, smart contracts, time locks, MPC and end-to-end encryption,
            we provide you with a one-stop cryptocurrency service with security as the foundation.
          </Translate>
        </div>
      </div>
    </div>
  )
}
