const Item = ({ title, description }: { title: string; description: string }) => (
  <div className="">
    <div className="text-center text-neutral-800 text-3xl font-medium">{title}</div>
    <div className="mt-4 text-center text-zinc-800 text-opacity-80 text-sm font-normal leading-snug">{description}</div>
    <div className="mt-10 mx-auto w-28 h-px bg-zinc-800 bg-opacity-30"></div>
  </div>
)

export const Intro = () => (
  <div className="mt-5 px-10 space-y-10">
    <Item
      title={"2017"}
      description={"Founded in Christmas 2017 as a small team of less than 20 people, our mission is to provide convenience, security and privacy in digital assets and messages."}
    />
    <Item title="1M+" description="More than 1 million users use Mixin Safe-driven social, wallet, DeFi, games and other products, which are deeply loved by users for their safety and ease of use." />
    <Item
      title={"$1B+"}
      description={"The Mixin team assists users in managing more than US$1 billion in assets. The service is stable and there have been no security incidents, which is deeply trusted by users."}
    />
  </div>
)
