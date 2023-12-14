import Translate from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

export const SolutionSection = () => (
  <>
    <div className="mt-30 sm:mt-25 sm:mx-13 mx-10 text-center text-3xl font-medium text-neutral-800 sm:text-3xl">
      <Translate>
        Provide the general public with state-of-the-art open financial
        services.
      </Translate>
    </div>
    <div className="pt-15 sm:pb-22.5 grid w-full gap-x-8 gap-y-5 px-10 pb-20 sm:mx-auto sm:w-fit sm:grid-cols-2">
      <LocalLink
        to="/how-it-secures"
        className="flex-center text-white! h-12 rounded-sm bg-neutral-800 text-base font-medium sm:px-10"
      >
        <Translate>How it Secures</Translate>
      </LocalLink>
      <LocalLink
        to="/pricing"
        className="flex-center text-black! h-12 rounded-sm border border-neutral-800 text-base font-medium sm:px-10 "
      >
        <Translate>Pricing & Plans</Translate>
      </LocalLink>
    </div>
  </>
)
