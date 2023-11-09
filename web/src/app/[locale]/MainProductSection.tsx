import Image from "next/image"

const ProductCard = ({ title, description, cover }: { title: string; description: string; cover: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-335/225 relative">
      <Image fill src={cover} alt={title} />
    </div>

    <div className="aspect-335/210 pt-6 px-5 space-y-3">
      <div className="text-zinc-800 text-xl font-medium leading-tight">{title}</div>
      <div className="text-zinc-800 text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    </div>
  </div>
)

export const MainProductSection = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 bg-opacity-40 pt-25 pb-45 px-5 sm:pb-35">
      <div className="text-zinc-800 text-[28px] font-medium">Our Main Products</div>
      <div className="mt-5 text-zinc-800 text-opacity-60 text-base font-normal leading-normal">Our product is decentralized, safer, stronger and cheaper</div>
      <div className="mt-15 grid gap-y-5 gap-x-3 sm:grid-cols-3 container">
        <ProductCard
          key="Mixin Messenger"
          title={"Mixin Messenger"}
          description={
            "The open source decentralized MPC multi-currency wallet supports end-to-end encrypted chat, free transfers to contacts, legal currency deposits, social recovery and other functions."
          }
          cover={"/home/product/messenger.webp"}
        />

        <ProductCard
          key="Mixin Safe"
          title={"Mixin Safe"}
          description={"Mixin Safe provides the general public with cutting-edge Bitcoin custody solutions. Bitcoin custody should never sacrifice decentralization, always be confident and reliable."}
          cover={"/home/product/safe.webp"}
        />
        <ProductCard
          key="Mixin Wealth"
          title={"Mixin Wealth"}
          description={"We strive to build the safest products to grow your crypto wealth, with the highest standard of decentralized custodian powered by Mixin Safe."}
          cover={"/home/product/wealth.webp"}
        />
      </div>

      <a className="mt-24.5 px-7 py-4 mx-auto bg-zinc-800 rounded-sm text-white text-base font-bold leading-none">View our plans</a>
    </div>
  )
}
