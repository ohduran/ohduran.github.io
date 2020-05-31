import React from "react"

const NewsLetterForm = () => {
  return (
    <>
      <h2 className="mx-auto text-center text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl font-family-baloo">
        Descubre el potencial digital de tu negocio
      </h2>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/alvaroduran"
        method="post"
        className="mt-1 md:mt-2 lg:mt-3 w-11/12 mx-auto embeddable-buttondown-form flex justify-center"
      >
        <input
          type="email"
          className="rounded-lg shadow-lg text-center text-xs sm:text-sm md:text-base lg:text-lg"
          name="email"
          id="bd-email"
          placeholder="¡Únete a la newsletter!"
        />
        <input
          type="submit"
          className="ml-1 rounded-lg shadow-lg bg-nord-7 text-nord-6 font-family-montserrat p-2 text-center text-xs sm:text-sm md:text-base"
          value="Registrarse"
        />
        <input type="hidden" value="1" name="embed"></input>
      </form>
    </>
  )
}

export default NewsLetterForm
