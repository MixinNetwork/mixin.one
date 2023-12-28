import clsx from "clsx"
import Arrow from "@site/static/img/arrow.svg"
import Translate from "@docusaurus/Translate"
import SectionTitle from "./SectionTitle"

const FAQItem = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => (
  <div className="lg:max-w-240 container mx-auto border-b border-neutral-200 px-2.5">
    <details name="faq" className="not-default group peer">
      <summary className="pb-5.5 flex cursor-pointer flex-row items-start justify-between space-x-1 pt-9">
        <div className="text-#333 text-base font-medium leading-normal">
          {question}
        </div>
        <Arrow className="mt-1 shrink-0 transition-all duration-300 group-open:-rotate-180" />
      </summary>
    </details>
    <div className="grid grid-rows-[0fr] transition-all duration-300 peer-open:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="text-#333 mb-3.5 cursor-default pe-6 text-sm font-normal leading-[1.5] leading-snug text-opacity-75">
          {answer}
        </div>
      </div>
    </div>
  </div>
)

export const FAQSection = (props: {
  className?: string
  faqs?: {
    answer: string
    question: string
  }[]
}) => (
  <div className={clsx("sm:pt-30 sm:pb-45 px-5 pb-40 pt-20", props.className)}>
    <SectionTitle
      description={
        <Translate>
          Don't hesitate to contact us if you can't find your answers here.
        </Translate>
      }
    >
      <Translate>Frequently Asked Questions</Translate>
    </SectionTitle>
    {props.faqs?.map((faq) => <FAQItem key={faq.question} {...faq} />)}
  </div>
)
