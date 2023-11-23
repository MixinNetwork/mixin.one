import clsx from "clsx"
import Arrow from "@site/static/img/arrow.svg"
import Translate from "@docusaurus/Translate"
import SectionTitle from "./SectionTitle"

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="px-2.5 border-b border-neutral-200 container mx-auto">
    <input id={question} type="checkbox" className="hidden peer" />
    <label htmlFor={question} className="pt-9 pb-5.5 cursor-pointer flex flex-row justify-between items-start space-x-1 peer-checked:svg:-rotate-180">
      <div className="text-[#333] text-base font-medium leading-normal">{question}</div>
      <Arrow className="mt-1 shrink-0 transition-all duration-500" />
    </label>
    <div className="grid grid-rows-[0fr] transition-all duration-500 peer-checked:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="mb-3.5 text-[#333] text-opacity-75 text-sm font-normal leading-tight cursor-default">{answer}</div>
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
  <div className={clsx("pt-20 sm:pt-30 pb-40 sm:pb-45 px-5", props.className)}>
    <SectionTitle description={<Translate>Don't hesitate to contact us if you can't find your answers here</Translate>}>
      <Translate>Frequently Asked Questions</Translate>
    </SectionTitle>
    {props.faqs?.map((faq) => (
      <FAQItem key={faq.question} {...faq} />
    ))}
  </div>
)
