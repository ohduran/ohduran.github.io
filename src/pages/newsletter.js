import React from "react"
import DefaultLayout from "../layouts/Default"

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
    //   const { data } = this.state
    //   console.log(data)
    //   data.length ? console.log("data", data) : console.log("no data", data)
    // return <DefaultLayout>
    //   {data.results? data.results.map((item) => (<li>item.id</li>)}
    //   </DefaultLayout>
    const { data } = this.state
    console.log(data)
    return (
      <DefaultLayout>
        <h1 className="text-lg text-center font-semibold">Newsletter</h1>
        <ul className="mt-3 w-11/12 mx-auto">
          {data.results
            ? data.results
                // Descending order
                .sort(
                  (a, b) =>
                    parseFloat(b.secondary_id) - parseFloat(a.secondary_id)
                )
                .map((item) => (
                  <li className="mt-2" key={item.id}>
                    <p
                      className="text-gray-500 font-semibold"
                      style={{ fontSize: "0.5rem" }}
                    >
                      {`${item.publish_date.split("T")[0]}`}
                    </p>
                    <a
                      href={`https://buttondown.email/alvaroduran/archive/${item.slug}/`}
                    >
                      <p className="hover:underline">
                        {item.secondary_id}. {item.subject}
                      </p>
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
