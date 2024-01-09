import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import CheckMark from "@site/static/img/common/checkmark.svg"
import XMark from "@site/static/img/common/xmark.svg"
import clsx from "clsx"

export const CompareSection = () => {
  const table = [
    [
      translate({ message: "MPC vs other Crypto wallets" }),
      translate({ message: "MPC wallet" }),
      translate({ message: "Multisig wallet" }),
      translate({ message: "Hot wallet" }),
      translate({ message: "Cold wallet" }),
    ],
    [translate({ message: "Security" }), true, true, false, true],
    [translate({ message: "Removes Risk of sPOF" }), true, true, false, false],
    [translate({ message: "Data Privacy" }), true, false, false, false],
    [translate({ message: "Decentralized" }), true, true, false, false],
    [translate({ message: "Trustless" }), true, true, false, true],
    [
      translate({ message: "Reduce Risk of Hacking" }),
      true,
      true,
      false,
      false,
    ],
    [translate({ message: "Efficiency" }), true, false, true, false],
    [translate({ message: "Accuracy" }), true, false, false, false],
    [translate({ message: "Complexity" }), true, true, false, false],
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
