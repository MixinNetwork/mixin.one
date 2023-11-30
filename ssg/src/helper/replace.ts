const replace = <T>(
  str: string,
  params: {
    match: string | RegExp
    replace: (part: string) => T
  }[],
  regExpArgs = "g"
): (string | T)[] => {
  const regExp = new RegExp(`(${params.map(({ match }) => (typeof match === "string" ? match : match.source), regExpArgs).join("|")})`)
  return str.split(regExp).map((part) => {
    const param = params.find(({ match }) => (typeof match === "string" ? match === part : match.test(part)))
    return param ? param.replace(part) : part
  })
}

export default replace
