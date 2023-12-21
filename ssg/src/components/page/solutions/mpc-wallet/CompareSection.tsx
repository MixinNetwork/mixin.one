import React from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import CheckMark from "@site/static/img/common/checkmark.svg"
import XMark from "@site/static/img/common/xmark.svg"
import clsx from "clsx"

export const CompareSection = () => {
  const table = [
    [
      "MPC vs otherCrypto wallets",
      "MPC wallet",
      "Multi-sig",
      "Hot wallet",
      "Cold wallet",
    ],
    ["Security", true, true, false, true],
    ["Removes Risk of sPOF", true, true, false, false],
    ["Data Privacy", true, false, false, false],
    ["Decentralized", true, true, false, false],
    ["Trustless", true, true, false, true],
    ["Reduce Risk of Hacking", true, true, false, false],
    ["Efficiency", true, false, true, false],
    ["Accuracy", true, false, false, false],
    ["Complexity", true, true, false, false],
  ]

  // a function to generate a table
  const generateTable = (tableData) => {
    return (
      <table className="container mx-auto table">
        {tableData.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </table>
    )
  }

  return (
    <>
      <SectionTitle
        description={
          <Translate>
            Our solution is decentralized, safer, stronger and cheaper.
          </Translate>
        }
        className="!md:block !hidden"
      >
        <Translate>Compare Wallets</Translate>
      </SectionTitle>

      <table className="!md:table container mx-auto mb-40 !hidden font-medium">
        {table.map((row, i) => (
          <tr key={i} className="!bg-white">
            {row.map((cell, j) => {
              const align = j === 0 ? "left" : "center"
              const className = "px-5 !odd:bg-[#F2F2F2]"
              return i === 0 ? (
                <th key={j} align={align} className={clsx("py-8", className)}>
                  {cell}
                </th>
              ) : (
                <td key={j} align={align} className={clsx("py-3.5", className)}>
                  {typeof cell === "boolean" ? (
                    cell ? (
                      <CheckMark className="mx-auto" />
                    ) : (
                      <XMark className="mx-auto" />
                    )
                  ) : (
                    cell
                  )}
                </td>
              )
            })}
          </tr>
        ))}
      </table>
    </>
  )
}
