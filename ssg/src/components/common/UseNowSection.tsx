import Translate from "@docusaurus/Translate"
import LocalLink from "./LocaleLink"

export function UseNowSection() {
  return (
    <div className="mx-a container grid gap-y-20 sm:grid-cols-[481fr_713fr]">
      <div className="flex flex-col items-stretch sm:justify-around">
        <div className="mx-auto text-center sm:mx-0 sm:text-start">
          <div className="text-7 sm:text-8.7 md:text-10.3 lg:text-12 font-medium">
            <Translate>Use Mixin Messenger Now</Translate>
          </div>
          <div className="text-4 sm:text-4.3 md:text-4.7 lg:text-5 mt-4">
            <Translate>
              Secure, private and easy-to-use crypto wallet.
            </Translate>
          </div>
        </div>

        <LocalLink
          href={"https://messenger.mixin.one/download"}
          className="rw-20 mx-auto mt-8 rounded-sm bg-[#333] py-4 text-center font-medium text-white sm:mx-0 sm:mt-0 sm:w-fit sm:px-8"
        >
          <Translate>Download</Translate>
        </LocalLink>
      </div>

      <img
        loading="lazy"
        src={require("@site/static/img/common/useNow.webp").default}
        width={2139}
        height={1578}
        className="w-full self-end"
      />
    </div>
  )
}
