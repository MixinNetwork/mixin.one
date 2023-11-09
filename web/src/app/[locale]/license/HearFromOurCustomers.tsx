import Image from "next/image"
import Slider from "./Slider"
import QuotationMark from "./quotationMark.svg"

export const HearFromOurCustomers = () => (
  <>
    <div className="container mx-auto mt-10 px-10 text-center text-zinc-800 text-3xl font-medium">Hear from our customers</div>
    <div>
      <div className="aspect-375/250 mt-15 relative">
        <Image src="/license/hearBg.png" alt={"Hear from our customers"} fill className="object-cover" />
      </div>
      <div className="bg-zinc-800 pt-15 pb-13">
        <QuotationMark className="ml-9.5" />

        <Slider />
      </div>
    </div>
  </>
)
