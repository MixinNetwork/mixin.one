export default function SectionTitle({ children, description }: { children: React.ReactNode; description?: React.ReactNode }) {
  return (
    <div className="container mx-auto px-5 py-15 space-y-5">
      <div className="text-center text-zinc-800 text-7 sm:text-8 lg:text-9 text-3xl font-medium">{children}</div>
      {description && <div className="text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">{description}</div>}
    </div>
  )
}
