import Translate from "@docusaurus/Translate"

// Audit Report
export const AuditReportSection = () => (
  <div className="bg-zinc-100 bg-opacity-50">
    <div className="pt-20 sm:pt-50 pb-40 sm:pb-20 px-5 md:py-27 text-center md:text-start container mx-auto grid gap-y-20 gap-x-27.5 md:grid-cols-2">
      <div className="flex flex-col justify-between md:py-12.5">
        <div>
          <div className="text-zinc-800 text-3xl font-medium leading-10">
            <Translate>Audit Report</Translate>
          </div>
          <div className="mt-5 text-zinc-800 text-opacity-60 text-base font-normal leading-normal">
            <Translate>Mixin Safe powers leading organizations from Payment to DAOs, and beyond</Translate>
          </div>
        </div>

        <a className="md:block hidden w-fit px-7 py-4 flex-center bg-zinc-700 rounded-sm text-white text-sm font-medium leading-snug">
          <Translate>View security audits</Translate>
        </a>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-4">
        {Array(4)
          .fill(undefined)
          .map((_, i) => (
            <img key={i} src={require(`@site/static/img/page/home/audit/${i}.webp`).default} alt="audit" className="aspect-square relative bg-white rounded-lg shadow" />
          ))}
      </div>

      <a className="md:hidden mt-10 sm:mt-12.5 rw-10 sm:w-fit sm:px-7 mx-auto py-4 flex-center bg-zinc-700 rounded-sm text-white text-sm font-medium leading-snug">View security audits</a>
    </div>
  </div>
)
