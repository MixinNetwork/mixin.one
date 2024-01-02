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

      <div className="mx-a container">
        <table className="!md:table !hidden w-full">
          {table.map((row, i) => (
            <tr
              key={i}
              className="border-t-0.5px border-#D9D9D9 last:border-b-0.5px !bg-white"
            >
              {row.map((cell, j) => {
                const align = j === 0 ? "left" : "center"
                const className = "px-0-10 !odd:bg-[#F2F2F2]"
                return i === 0 ? (
                  <th
                    key={j}
                    align={align}
                    className={clsx(
                      "py-8 font-medium",
                      j === 0 ? "text-5" : "text-4.5",
                      className,
                    )}
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={j}
                    align={align}
                    className={clsx("py-3.5", className)}
                  >
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
      </div>
    </>
  )
}
