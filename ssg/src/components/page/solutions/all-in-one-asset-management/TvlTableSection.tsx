import React from "react"
import BOX from "@site/static/img/page/solutions/all-in-one-asset-management/2.1.svg"
import BTC from "@site/static/img/page/solutions/all-in-one-asset-management/2.2.svg"
import ETH from "@site/static/img/page/solutions/all-in-one-asset-management/2.3.svg"
import XIN from "@site/static/img/page/solutions/all-in-one-asset-management/2.4.svg"
import USDT from "@site/static/img/page/solutions/all-in-one-asset-management/2.5.svg"
import MOB from "@site/static/img/page/solutions/all-in-one-asset-management/2.6.svg"
import clsx from "clsx"

export const TvlTableSection = () => {
  const table = [
    ["icon", "name", "TVL", <div className="w-15" />],
    [<BOX />, "BOX", "$423,073,655", ""],
    [<BTC />, "BTC", "$399,060,380", ""],
    [<ETH />, "ETH", "$192,940,011", ""],
    [<XIN />, "XIN", "$93,492,558", ""],
    [<USDT />, "USDT", "$25,274,883", ""],
    [<MOB />, "MOB", "$27,411,420", ""],
  ]
  return (
    <div className="mx-a mb-45 !sm:block container mt-10 !hidden">
      <table>
        {table.map((row, i) => (
          <tr
            key={i}
            className={clsx(
              "!odd:bg-#F8F8F8 !even:bg-white border-#333 border-op-33",
              {
                "border-y": i === 0,
                "border-b border-t-0": i === table.length - 1,
                "border-none": i !== 0 && i !== table.length - 1,
              },
            )}
          >
            {row.map((cell, j) => {
              const className = "uppercase border-none"
              return i === 0 ? (
                <th
                  key={j}
                  align={"center"}
                  className={clsx(
                    "h-20 py-0 font-medium",
                    j === 0 ? "px-15 w-fit" : "w-1/2 p-0",
                    className,
                  )}
                >
                  {cell}
                </th>
              ) : (
                <td
                  key={j}
                  align={"center"}
                  className={clsx("px-0 py-2.5", className)}
                >
                  {cell}
                </td>
              )
            })}
          </tr>
        ))}
      </table>
    </div>
  )
}
