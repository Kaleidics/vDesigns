import React, { Component } from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Nform extends Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <>
        <form
          className="n-form"
          name="V Designs Contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"}>
              Your Name
            </label>
            <div id="name-control" className="control">
              <input
                className="input"
                type={"text"}
                name={"name"}
                onChange={this.handleChange}
                id={"name"}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"}>
              Email
            </label>
            <div id="email-control" className="control">
              <input
                className="input"
                type={"email"}
                name={"email"}
                onChange={this.handleChange}
                id={"email"}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"message"}>
              Message
            </label>
            <div className="control">
              <textarea
                className="textarea"
                name={"message"}
                onChange={this.handleChange}
                id={"message"}
                required={true}
                placeholder="Say hi"
              />
            </div>
          </div>
          <div className="field text-right mb-0">
            <button className="btn btn--blue fs-12" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default Nform
