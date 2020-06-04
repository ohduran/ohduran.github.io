import React from "react"

const NewsLetterForm = ({ className, children }) => {
  return (
    <div className={className}>
      <h2 className="text-xs">
        {children ? children : "Descubre el potencial digital de tu negocio"}
      </h2>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/alvaroduran"
        method="post"
        className="mt-1 md:mt-2 lg:mt-3 w-11/12 mx-auto embeddable-buttondown-form flex justify-center"
      >
        <input
          type="email"
          className="rounded-full shadow-lg  text-xs px-5"
          name="email"
          id="bd-email"
          placeholder="Escribe tu email"
        />
        <input
          type="submit"
          className="-ml-10 rounded-full shadow-lg bg-nord-13 text-nord-0 font-family-montserrat p-2 text-center text-xs sm:text-sm md:text-base"
          value="Registrarse"
        />
        <input type="hidden" value="1" name="embed"></input>
      </form>
    </div>
  )
}

export default NewsLetterForm
