import Translate from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

// Security Audits
export const AuditReportSection = () => (
  <div className="bg-zinc-100 bg-opacity-50">
    <div className="pt-20 sm:pt-50 pb-40 sm:pb-20 px-5 md:py-27 text-center md:text-start container mx-auto grid gap-y-20 gap-x-27.5 md:grid-cols-[474fr_356fr]">
      <div className="flex flex-col justify-center md:py-12.5">
        <div className="text-[#333] text-3xl font-medium leading-10">
          <Translate>Security Audits</Translate>
        </div>
        <div className="mt-5 text-[#333] text-opacity-60 text-base font-normal leading-normal">
          <Translate>We have an ongoing security audit process that keeps all Mixin infrastructures secured.</Translate>
        </div>

        <LocalLink href="https://github.com/MixinNetwork/audits" className="hidden! mt-24 w-fit px-7 py-4 md:block! bg-zinc-700 rounded-sm text-white font-medium leading-snug">
          <Translate>View Audit Reports</Translate>
        </LocalLink>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-4">
        {Array(4)
          .fill(undefined)
          .map((_, i) => (
            <img loading="lazy" key={i} src={require(`@site/static/img/page/home/audit/${i}.webp`).default} alt="audit" className="aspect-square relative bg-white rounded-lg shadow" />
          ))}
      </div>

      <LocalLink
        href="https://github.com/MixinNetwork/audits"
        className="md:hidden mt-10 sm:mt-12.5 rw-10 sm:w-fit sm:px-7 mx-auto py-4 flex-center bg-zinc-700 rounded-sm text-white font-medium leading-snug"
      >
        View Audit Reports
      </LocalLink>
    </div>
  </div>
)
