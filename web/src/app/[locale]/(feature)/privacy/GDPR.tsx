import Image from "next/image"

export const GDPR = () => {
  return (
    <div className="bg-slate-100 pt-20 pb-40">
      <div className="px-10">
        <div className="text-center text-zinc-800 text-3xl font-medium leading-10">隐私合规</div>
        <div className="mt-7.5 text-center text-zinc-800 text-opacity-70 text-sm font-normal leading-snug">
          我们的内部隐私程序是根据欧盟 GDPR 制定的，以确保我们客户的隐私。 我们将继续改进隐私框架并持续满足其他合规要求。 欲了解更多信息，请参阅我们的隐私声明。
        </div>
      </div>
      <div className="px-5 mt-21">
        <div className="aspect-335/158 relative">
          <Image src={"/privacy/GDPR.png"} alt={"GDPR"} fill />
        </div>
      </div>
    </div>
  )
}
