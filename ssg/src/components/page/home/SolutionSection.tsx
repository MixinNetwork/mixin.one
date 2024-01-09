import Translate from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

export const SolutionSection = () => (
  <>
    <div className="mt-25 md:mt-30 sm:px-21.7 md:px-33.3 lg:px-45 container mx-auto space-y-5 text-center font-medium md:space-y-6 lg:space-y-8">
      <div className="text-4.5 sm:text-5 md:text-7 lg:text-9.5">
        <Translate>
          {
            "Provide the general public with state-of-the-art open financial services."
          }
        </Translate>
      </div>
      <div className="text-#000 text-3.5 sm:text-4 text-op-70 leading-[1.5]">
        <Translate>
          {
            "Bitcoin custody should never sacrifice decentralization, always be confident and reliable. Mixin Safe also makes decentralized recovery and inheritance possible."
          }
        </Translate>
      </div>
    </div>
    <div className="sm:mb-25 md:mb-30 lg:mt-14.5 container mb-20 mt-20 grid w-full gap-x-8 gap-y-5 sm:mx-auto sm:mt-12 sm:w-fit sm:grid-cols-2">
      <LocalLink
        to="/how-it-secures"
        className="flex-center text-white! text-3.5-4 h-12 rounded-sm bg-[#000] font-medium sm:px-10"
      >
        <Translate>How it Secures</Translate>
      </LocalLink>
      <LocalLink
        to="/pricing"
        className="flex-center text-black! text-3.5-4 h-12 rounded-sm border border-[#000] font-medium sm:px-10 "
      >
        <Translate>Pricing & Plans</Translate>
      </LocalLink>
    </div>
  </>
)
