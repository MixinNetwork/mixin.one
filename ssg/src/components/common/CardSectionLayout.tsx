import SectionTitle from "./SectionTitle"
import { ComponentType, HTMLAttributes } from "react"

const Item = (props: {
  icon: ComponentType<Pick<HTMLAttributes<unknown>, "className">>
  title: React.ReactNode
  description: string
}) => {
  return (
    <div className="pt-4-8 gap-x-3-7 px-4-8 pb-6-11 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-3 rounded-sm bg-white shadow">
      <props.icon className="w-12-24 h-12-24 row-span-2 aspect-square" />
      <div className="h-8-10 svg:h-8-10 text-4.5-6 flex items-center overflow-hidden font-medium">
        {props.title}
      </div>
      <div className="text-#000 text-3.5-4 text-op-70 leading-[1.5]">
        {props.description}
      </div>
    </div>
  )
}

export const CardSectionLayout = ({
  title,
  description,
  items,
}: {
  title: string
  description?: string
  items: {
    icon: ComponentType<Pick<HTMLAttributes<unknown>, "className">>
    title: React.ReactNode
    description: string
  }[]
}) => {
  return (
    <div className="bg-#F1F6FC66">
      <SectionTitle description={description} className="!mb-20">
        {title}
      </SectionTitle>
      <div className="pb-45 container mx-auto grid auto-rows-fr gap-5  sm:grid-cols-2">
        {items.map((item) => (
          <Item {...item} />
        ))}
      </div>
    </div>
  )
}
