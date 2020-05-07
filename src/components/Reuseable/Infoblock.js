import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="caintainer">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              maxime, reiciendis sit, voluptates minus corporis repellat rem
              culpa, dolorem fugit a consequatur? Veniam, ipsa voluptatem? Sequi
              vero eos iure tenetur neque magni enim atque quos tempora possimus
              earum, quasi unde commodi at impedit, odio dolorem exercitationem
              optio excepturi consequuntur, repudiandae natus quibusdam
              reprehenderit pariatur. Perferendis perspiciatis cupiditate
              officiis veniam molestias!
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
