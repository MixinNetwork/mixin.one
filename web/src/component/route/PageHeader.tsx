import { useMemo } from "react"
import { replace } from "../../helper/replace"

const PageHeader = ({ children, description }: { children: React.ReactNode; description?: string }) => (
  <div className="container mx-auto px-5 py-15 space-y-5">
    <div className="text-center text-zinc-800 text-3xl font-medium">{children}</div>
    {description && <div className="text-center text-zinc-800 text-opacity-70 text-base font-normal leading-normal">Never worry about losing your keys or centralized evil custody</div>}
  </div>
)

export default PageHeader
