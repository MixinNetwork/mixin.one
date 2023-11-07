import Image from "next/image"

const Item = ({ cover, title, description }: { cover: string; title: string; description: string }) => (
  <div className="bg-white rounded-sm shadow pt-5 px-5 pb-10">
    <div className="aspect-ratio-335/218 relative">
      <Image src={"/license/" + cover} alt={title} fill className="object-contain" />
    </div>
    <div className="mt-10 text-zinc-800 text-xl font-medium leading-snug">{title}</div>
    <div className="text-zinc-800 text-opacity-80 text-base font-normal leading-relaxed">{description}</div>
  </div>
)
export const Header = () => (
  <>
    <div className="container mx-auto px-5 py-15 space-y-5">
      <div className="text-center text-zinc-800 text-3xl font-medium">Licenses and registrations</div>
      <div className="text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">We go out of our way to ensure that you have the utmost privacy.</div>
    </div>
    <div>
      <div className="container mx-auto px-5 py-15 space-y-5">
        <Item cover="ministerstwoZdrowia.png" title="Ministry of Finance" description="Registration of Activities in the Field of Virtual Currencies" />
        <Item
          cover="pcidss.png"
          title="PCI/DSS"
          description="The Payment Card Industry Data Security Standard (PCI DSS) is an information security standard for organizations that handle branded credit cards from major card schemes. This certification confirms that Mixin Route is fully compliant with high standards for secure storage and processing of bank card data."
        />
        <Item
          cover="gdpr.png"
          title="EU GDPR compliance"
          description="Mixin Route’s policies, procedures, and workflows regarding personal data processing of EU residents are fully compliant with the requirements of the EU GDPR. External and internal evaluations of Mixin Route's compliance with the EU GDPR are conducted annually."
        />
      </div>
    </div>
  </>
)
