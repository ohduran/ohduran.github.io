import React from "react"
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
      <DefaultLayout>
        <PageTitle title="Newsletter" />
        <NewsLetterForm />
        <ul className="mt-10 w-11/12 md:w-5/12 mx-auto">
          {data.results
            ? data.results
                // Descending order
                .sort(
                  (a, b) =>
                    parseFloat(b.secondary_id) - parseFloat(a.secondary_id)
                )
                .map((item) => (
                  <li className="mt-2" key={item.id}>
                    <h5
                      className="text-gray-500 font-semibold"
                      style={{ fontSize: "0.5rem" }}
                    >
                      {`${item.publish_date.split("T")[0]}`}
                    </h5>
                    <a
                      className="no-underline"
                      href={`https://buttondown.email/alvaroduran/archive/${item.slug}/`}
                    >
                      <h4 className="hover:underline text-sm md:text-base">
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
