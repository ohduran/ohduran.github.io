import React from "react"
import Moment from "react-moment"
import "moment/locale/es"

import DefaultLayout from "../layouts/Default"
import NewsLetterForm from "../components/NewsletterForm"
import PageTitle from "../components/PageTitle"

const axios = require("axios").default

class NewsLetter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Token d918a64b-2d3d-4fd5-8ad7-dccafffb852f`
    axios.get("https://api.buttondown.email/v1/emails").then((response) => {
      this.setState({ data: response.data })
    })
  }

  render() {
    const { data } = this.state

    return (
      <DefaultLayout title="Newsletter">
        <PageTitle title="Newsletter" />
        <NewsLetterForm />
        <ul className="mt-10 w-8/12 md:w-6/12 lg:w-5/12 mx-auto">
          {data.results
            ? data.results
                // Descending order
                .sort(
                  (a, b) =>
                    parseFloat(b.secondary_id) - parseFloat(a.secondary_id)
                )
                .map((item) => (
                  <li className="mt-2" key={item.id}>
                    <h5 className="text-gray-500 font-semibold text-xs md:text-sm lg:text-base">
                      <Moment locale="es" format="dddd, D [de] MMMM [de] YYYY">
                        {item.publish_date}
                      </Moment>
                    </h5>
                    <a
                      className="no-underline hover:text-nord-13"
                      href={`https://buttondown.email/alvaroduran/archive/${item.slug}/`}
                    >
                      <h4 className="text-base md:text-lg lg:text-xl">
                        {item.secondary_id}. {item.subject}
                      </h4>
                    </a>
                  </li>
                ))
            : "Cargando la lista..."}
        </ul>
      </DefaultLayout>
    )
  }
}

export default NewsLetter
