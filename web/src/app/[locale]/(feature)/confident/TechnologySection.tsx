import Image from "next/image"

export const TechnologySection = () => (
  <div className="pt-15 pb-30 px-5 container mx-auto">
    <div className="relative aspect-335/385 bg-zinc-800 rounded-sm">
      <Image src={"/confident/5.png"} fill alt="technology" />
      <div className="absolute inset-0 flex flex-col justify-between pt-15 px-5 pb-10">
        <div className="w-72 text-white text-opacity-90 text-base font-normal leading-relaxed">
          去中心化的比特币托管具有挑战性，这就是我们制作 Mixin Safe 以满足公众需求的原因。永远不必担心丢失钥匙或中心化邪恶保管。
        </div>
        <a className="px-20 py-4 bg-white rounded-sm flex-center text-base font-medium leading-none">Technology Detail</a>
      </div>
    </div>
  </div>
)
