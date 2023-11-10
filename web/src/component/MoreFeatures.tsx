import Image from "next/image"

const Item = ({ title, description, cover }: { title: string; description: string; cover: string }) => (
  <div className="bg-white rounded-sm shadow space-y-5 pb-12">
    <div className=" relative aspect-335/225">
      <Image className="object-cover" fill src={"/feature/" + cover} alt={title} />
    </div>
    <div className="text-zinc-800 text-xl font-medium leading-snug px-5">{title}</div>
    <div className="text-zinc-800 text-opacity-80 text-sm font-normal leading-snug px-5">{description}</div>
  </div>
)

export const MoreFeatures = ({ omit }: { omit: "Decentralized" | "Confident" | "Reliable" | "Privacy" | "Compliant" }) => (
  <div className="py-40 px-6">
    <div className="text-center text-zinc-800 text-3xl font-medium leading-10">More Features</div>
    <div className="mt-15 space-y-5">
      {omit !== "Decentralized" && (
        <Item
          key="Decentralized"
          title="Decentralized"
          description="Not your keys, not your coins. Though managing private keys may present a challenge, we should remain steadfast in avoiding centralized firms as custodians for Bitcoin holdings."
          cover="decentralized.webp"
        />
      )}

      {omit !== "Confident" && (
        <Item key="Confident" title="Confident" description="Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold." cover="confident.webp" />
      )}

      {omit !== "Reliable" && (
        <Item key="Reliable" title="Reliable" description="Employing the latest innovations in the industry while still leveraging Bitcoin’s proven cryptography." cover="reliable.webp" />
      )}

      {omit !== "Privacy" && <Item key="Privacy" title="Privacy" description="We ensure you have maximum privacy by integrating various advanced technologies." cover="privacy.webp" />}

      {omit !== "Compliant" && (
        <Item key="Compliant" title="Compliant" description="Mixin Safe offers a comprehensive suite of solutions to help Bitcoin investors confidently hold." cover="compliant.webp" />
      )}
    </div>
  </div>
)
