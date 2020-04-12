import React from "react"
import '../global.css'


export default class extends React.Component {

    render () {
      return (
        <div className={this.props.className}>
          <blockquote className="blockquote pl-5 mx-8" style={{
              borderLeft: "4px solid #3b4252"
            }}>
            <p className="text-sm sm:text-base">{this.props.value}</p>
            <footer className="mt-1 lg:mt-2">
              <small className="text-nord-3 text-xs sm:text-sm">
                {this.props.author}
              </small>
            </footer>
          </blockquote>
        </div>
      )
    }

}
