const PageHeader = ({ title, description }: { title: string; description?: string }) => (
  <div className="container mx-auto px-5 py-15 space-y-5">
    <div className="text-center text-zinc-800 text-3xl font-medium">{title}</div>
    {description && <div className="text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">Never worry about losing your keys or centralized evil custody</div>}
  </div>
)

export default PageHeader
