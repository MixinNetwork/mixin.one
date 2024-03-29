import Translate from "@docusaurus/Translate"
import LocalLink from "../../common/LocaleLink"

// Security Audits
export const AuditReportSection = () => (
  <div className="bg-#F2F2F2 bg-opacity-50">
    <div className="sm:pt-50 md:py-27 gap-x-27.5 lg:max-w-240 container mx-auto grid gap-y-20  pb-40 pt-20 text-center sm:pb-20 md:grid-cols-[474fr_356fr] md:text-start">
      <div className="md:py-12.5 flex flex-col justify-center">
        <div className="text-#000 text-7.5 font-medium leading-10">
          <Translate>Security Audits</Translate>
        </div>
        <div className="text-#000 text-4 text-op-60 mt-5 font-normal leading-[1.5]">
          <Translate>
            We have an ongoing security audit process that keeps all Mixin
            infrastructures secured.
          </Translate>
        </div>

        <LocalLink
          href="https://github.com/MixinNetwork/audits"
          className="hidden! md:block! bg-#000 mt-24 w-fit rounded-sm px-7 py-4 font-medium leading-[1.5] text-white"
        >
          <Translate>View Audit Reports</Translate>
        </LocalLink>
      </div>

      <div className="mx-auto grid grid-cols-2 gap-4">
        {Array(4)
          .fill(undefined)
          .map((_, i) => (
            <img
              loading="lazy"
              key={i}
              src={
                require(`@site/static/img/page/home/audit/${i}.webp`).default
              }
              alt="audit"
              className="relative aspect-square rounded-lg bg-white shadow"
            />
          ))}
      </div>

      <LocalLink
        href="https://github.com/MixinNetwork/audits"
        className="sm:mt-12.5 rw-10 flex-center text-3.5-4 bg-#000 mx-auto mt-10 rounded-sm py-4 font-medium leading-[1.5] text-white sm:w-fit sm:px-7 md:hidden"
      >
        View Audit Reports
      </LocalLink>
    </div>
  </div>
)
