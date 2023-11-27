import Translate from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

export const SolutionSection = () => (
  <>
    <div className="mt-30 sm:mt-25 mx-10 sm:mx-13 text-center text-neutral-800 text-3xl sm:text-3xl font-medium">
      <Translate>Provide the general public with state-of-the-art open financial services.</Translate>
    </div>
    <div className="pt-15 pb-20 sm:pb-22.5 px-10 grid gap-y-5 gap-x-8 sm:grid-cols-2 w-full sm:w-fit sm:mx-auto">
      <LocalLink to="/how-it-secures" className="sm:px-10 h-12 flex-center bg-neutral-800 rounded-sm text-white! text-base font-medium">
        <Translate>How it Secures</Translate>
      </LocalLink>
      <LocalLink to="/pricing" className="sm:px-10 h-12 rounded-sm border flex-center border-neutral-800 text-black! text-base font-medium ">
        <Translate>Pricing & Plans</Translate>
      </LocalLink>
    </div>
  </>
)
