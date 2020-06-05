import React from "react"

const NewsLetterForm = ({ className, children }) => {
  return (
    <div className={className}>
      <h2 className="text-xs sm:text-sm md:text-base lg:text-xl">{children}</h2>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/alvaroduran"
        method="post"
        className="mt-1 sm:mt-2 lg:mt-5 embeddable-buttondown-form flex justify-center"
      >
        <input
          type="email"
          className="rounded-full shadow-lg text-xs md:text-sm lg:text-lg px-5"
          name="email"
          id="bd-email"
          placeholder="Escribe tu email"
        />
        <input
          type="submit"
          className="-ml-10 md:-ml-12 rounded-full shadow-lg bg-nord-13 text-nord-0 p-2 md:p-3 text-center text-xs md:text-sm lg:text-lg"
          value="Registrarse"
        />
        <input type="hidden" value="1" name="embed"></input>
      </form>
    </div>
  )
}

export default NewsLetterForm
