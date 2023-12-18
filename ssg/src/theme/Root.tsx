import Crisp from "../components/Crisp"

export default function Root({ children }) {
  return (
    <>
      <Crisp />
      {children}
    </>
  )
}
