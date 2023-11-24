import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import clsx from "clsx"

export default function LocalLink(props: Parameters<typeof Link>[0]) {
  const to = useBaseUrl(props.to)
  return <Link {...props} to={to} className={clsx(props.className, "line-block")} />
}
