import React, { ReactNode } from "react"
import Translate from "@docusaurus/Translate"
import SectionTitle from "../../../common/SectionTitle"
import Svg1 from "@site/static/img/page/solutions/collaboration/2.2.svg"
import Svg2 from "@site/static/img/page/solutions/collaboration/2.3.svg"
import Svg3 from "@site/static/img/page/solutions/collaboration/2.4.svg"
import clsx from "clsx"
import { WoodGrainItem } from "../../../common/WoodGrainItem"

export const MultiRoleCollaborationSection = () => {
  return (
    <>
      <SectionTitle
        description={
          <Translate>
            {
              "Safely manage large sums of money by segregating and allocating them for different custodians through multi-safe use cases."
            }
          </Translate>
        }
      >
        <Translate>Multi-Safe Collaboration</Translate>
      </SectionTitle>
      <div className="mx-a container">
        <img
          loading="lazy"
          src={
            require("@site/static/img/page/solutions/collaboration/2.1.webp")
              .default
          }
          width={250}
          height={131}
          className="bg-#F2F2F2 px-5-25 py-2.5-15 w-full"
        />
      </div>

      <div
        className={clsx(
          "mx-a mt-5-12 pb-15 gap-5-12 container grid",
          "md:grid-cols-3",
        )}
      >
        <WoodGrainItem
          icon={<Svg1 />}
          title={<Translate>{"Multi-Safe"}</Translate>}
          description={
            <Translate>
              {
                "Create multiple vaults with different purposes, each configured with distinct custodial modes, for instance: requiring the agreement of 2 out of 3 vault custodians for any asset expenditure."
              }
            </Translate>
          }
          background={1}
        />
        <WoodGrainItem
          icon={<Svg2 />}
          title={<Translate>{"Safe Collaboration"}</Translate>}
          description={
            <Translate>
              {
                "Safe collaborators can securely participate in Safe management without the need for specialized skills. Multiple Safe collaborators are assigned to each vault, and an emergency contact is set up to prevent single points of failure."
              }
            </Translate>
          }
          background={2}
        />
        <WoodGrainItem
          icon={<Svg3 />}
          title={<Translate>{"No Collusion Risk"}</Translate>}
          description={
            <Translate>
              {
                "All transactions require joint signatures from the Safe owner and collaborators to become effective, preventing collaborators from conspiring to steal assets."
              }
            </Translate>
          }
          background={3}
        />
      </div>
    </>
  )
}
