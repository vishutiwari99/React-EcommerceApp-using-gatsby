import React from "react"
import Heading from "../Reuseable/Heading"

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/xbjzgaby" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Your Phone Number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Your Message"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
