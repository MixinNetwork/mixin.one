import clsx from "clsx"
import Arrow from "./arrow.svg"

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="px-2.5 border-b border-neutral-200 container mx-auto">
    <input id={question} type="checkbox" className="hidden peer" />
    <label htmlFor={question} className="pt-9 pb-5.5 cursor-pointer flex flex-row justify-between items-start space-x-1">
      <div className="text-zinc-800 text-base font-medium leading-normal">{question}</div>
      <Arrow className="mt-1 shrink-0 [input:checked~label>&]:-rotate-180 transition-all duration-500" />
    </label>
    <div className="grid grid-rows-[0fr] transition-all duration-500 peer-checked:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="mb-3.5 text-zinc-800 text-opacity-75 text-sm font-normal leading-tight cursor-default">{answer}</div>
      </div>
    </div>
  </div>
)

export const FAQ = (props: { className?: string }) => (
  <div className={clsx("pt-20 sm:pt-30 pb-40 sm:pb-45 px-5", props.className)}>
    <div className="text-center text-zinc-800 text-3xl font-medium leading-10">Frequently Asked Questions</div>
    <div className="mt-5 mb-11 sm:mb-20 text-center text-zinc-800 text-opacity-60 text-base sm:text-sm font-normal leading-normal">
      {"Don't hesitate to contact us if you can't find your answers here"}
    </div>
    <FAQItem
      question={"ls Mixin Safe really decentralized?"}
      answer={
        "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
      }
    />

    <FAQItem
      question={"ls Mixin Safe really decentralized? ls Mixin Safe really decentralized?"}
      answer={
        "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
      }
    />
    <FAQItem
      question={"ls Mixin Safe really decentralized? 1"}
      answer={
        "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
      }
    />
    <FAQItem
      question={"ls Mixin Safe really decentralized? 2"}
      answer={
        "Yes,Mixin Safe uses both MPC and native Bitcoin multisig script to provide trulydecentralized Bitcoin wallet service. Together with the timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has the ability to spend the coins.timelockfeaturein Bitcoin script, only the user owns the private key to control the wallet and no one else has"
      }
    />
  </div>
)
