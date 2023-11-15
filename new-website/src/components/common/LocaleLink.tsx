import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"

export default function LocalLink(props: Parameters<typeof Link>[0]) {
  const to = useBaseUrl(props.to)
  return <Link {...props} to={to} />
}
