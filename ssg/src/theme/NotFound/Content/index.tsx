import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import useBaseUrl from "@docusaurus/useBaseUrl"

export default function NotFoundContent({ className }) {
  const homeUrl = useBaseUrl("/")
  return (
    <main
      className={clsx(
        "py-20-65 gap-x-0-49 mx-a container flex flex-col items-center justify-center gap-y-20 px-8",
        "sm:flex-row",
        className,
      )}
    >
      <img
        loading="lazy"
        src={require("@site/static/img/common/404.webp").default}
        height={1020}
        width={1080}
        className="w-64-85"
      />

      <div>
        <div className="text-6-16 font-medium">
          <Translate>Page not found...</Translate>
        </div>
        <div className="text-3.5-4 mt-3-5">
          <Translate>
            We’re unable to find the page you’re looking for.
          </Translate>
        </div>
        <a
          className={clsx(
            "mt-15-20 bg-#000 rounded-2px block w-full py-3 text-center font-medium text-white",
            "sm:w-fit sm:px-6",
          )}
          href={homeUrl}
        >
          <Translate>Back to home</Translate>
        </a>
      </div>
    </main>
  )
}
