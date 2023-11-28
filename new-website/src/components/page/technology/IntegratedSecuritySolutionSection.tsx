import Translate from "@docusaurus/Translate"

export const IntegratedSecuritySolutionSection = () => {
  return (
    <div className="container relative">
      <img loading="lazy" src={require("@site/static/img/common/woodGrain.webp").default} className="object-cover absolute inset-0 h-full w-full -z-10" />

      <div className="m-auto pt-10 pb-15 px-5 sm:px-14 sm:pt-16 sm:pb-20 md:pt-22 md:pb-25 md:px-23 lg:py-30 lg:px-33">
        <div className="text-center text-white text-2xl font-normal leading-9">
          <Translate>Integrated security solution to protect your assets</Translate>
        </div>
        <div className="mt-5 text-center text-white text-opacity-90 text-base font-normal leading-normal">
          <Translate>
            Based on decentralized networks such as Bitcoin, Ethereum, and key sharding, combined with technologies such as multi-signature, smart contracts, time locks, MPC and end-to-end encryption,
            we provide you with a one-stop cryptocurrency service with security as the foundation.
          </Translate>
        </div>
      </div>
    </div>
  )
}
